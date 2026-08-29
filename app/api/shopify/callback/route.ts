import { NextResponse } from "next/server";
import { createHmac, timingSafeEqual } from "node:crypto";

export const runtime = "nodejs";

const STATE_COOKIE = "shopify_oauth_state";
const MAX_TIMESTAMP_SKEW_SECONDS = 300;
const SHOP_DOMAIN_PATTERN = /^[a-zA-Z0-9][a-zA-Z0-9-]*\.myshopify\.com$/;

function getCookie(cookieHeader: string, name: string): string | null {
  for (const part of cookieHeader.split(";")) {
    const eq = part.indexOf("=");
    if (eq === -1) continue;
    const key = part.slice(0, eq).trim();
    if (key === name) {
      return decodeURIComponent(part.slice(eq + 1).trim());
    }
  }
  return null;
}

// Shopify signs every OAuth callback query string (all params except hmac) with the app's
// client secret, HMAC-SHA256, hex-encoded. Reconstructing and comparing it is what proves
// the request actually came from Shopify and wasn't forged.
function verifyHmac(searchParams: URLSearchParams, secret: string): boolean {
  const providedHmac = searchParams.get("hmac");
  if (!providedHmac) return false;

  const pairs: string[] = [];
  for (const [key, value] of searchParams.entries()) {
    if (key === "hmac" || key === "signature") continue;
    pairs.push(`${key}=${value}`);
  }
  pairs.sort();
  const message = pairs.join("&");

  const computed = createHmac("sha256", secret).update(message).digest("hex");
  const computedBuf = Buffer.from(computed, "utf8");
  const providedBuf = Buffer.from(providedHmac, "utf8");

  if (computedBuf.length !== providedBuf.length) return false;
  return timingSafeEqual(computedBuf, providedBuf);
}

export async function GET(request: Request) {
  const url = new URL(request.url);
  const { searchParams } = url;

  const shop = searchParams.get("shop");
  const code = searchParams.get("code");
  const state = searchParams.get("state");
  const timestamp = searchParams.get("timestamp");

  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const clientId = process.env.SHOPIFY_CLIENT_ID;
  const clientSecret = process.env.SHOPIFY_CLIENT_SECRET;

  if (!storeDomain || !clientId || !clientSecret) {
    console.error("shopify/callback: missing Shopify environment configuration");
    return new NextResponse("Shopify app is not configured.", { status: 500 });
  }

  if (!shop || !code || !state || !timestamp) {
    return new NextResponse("Missing required OAuth parameters.", { status: 400 });
  }

  if (!SHOP_DOMAIN_PATTERN.test(shop) || shop !== storeDomain) {
    console.error("shopify/callback: shop parameter did not match the configured store");
    return new NextResponse("Shop mismatch.", { status: 400 });
  }

  const timestampNum = Number(timestamp);
  if (
    !Number.isFinite(timestampNum) ||
    Math.abs(Date.now() / 1000 - timestampNum) > MAX_TIMESTAMP_SKEW_SECONDS
  ) {
    return new NextResponse("Request timestamp is invalid or expired.", { status: 400 });
  }

  const cookieState = getCookie(request.headers.get("cookie") ?? "", STATE_COOKIE);
  if (!cookieState || cookieState !== state) {
    console.error("shopify/callback: OAuth state mismatch");
    return new NextResponse("Invalid OAuth state.", { status: 400 });
  }

  if (!verifyHmac(searchParams, clientSecret)) {
    console.error("shopify/callback: HMAC validation failed");
    return new NextResponse("Request signature could not be verified.", { status: 400 });
  }

  // Exchange the one-time authorization code for an OFFLINE Admin API access token.
  // No `grant_options[]=per-user` is sent, so Shopify issues an offline token by default —
  // not tied to the installing admin's session, valid until the app is uninstalled/token
  // is revoked.
  let accessToken: string;
  try {
    const tokenRes = await fetch(`https://${shop}/admin/oauth/access_token`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        client_id: clientId,
        client_secret: clientSecret,
        code,
      }),
    });

    if (!tokenRes.ok) {
      throw new Error(`token exchange failed (${tokenRes.status})`);
    }

    const tokenData = (await tokenRes.json()) as { access_token?: string };
    if (!tokenData.access_token) {
      throw new Error("token exchange response missing access_token");
    }
    accessToken = tokenData.access_token;
  } catch (err) {
    console.error(
      "shopify/callback: token exchange failed",
      err instanceof Error ? err.message : err
    );
    return new NextResponse("Could not complete Shopify installation.", { status: 502 });
  }

  // No persistent storage exists in this project, so this one-time page is the only way to
  // hand the offline token to the installer. It renders once, is not cached, is not logged,
  // and this route isn't linked from anywhere in the public site.
  const html = `<!doctype html>
<html>
  <head>
    <meta charset="utf-8" />
    <meta name="robots" content="noindex, nofollow" />
    <title>Shopify app installed</title>
  </head>
  <body style="font-family: ui-monospace, monospace; background:#0a0a0a; color:#eaeaea; padding:2rem; max-width:640px; margin:0 auto;">
    <h1 style="font-size:1.1rem;">Shopify app installed</h1>
    <p>Copy the value below into your Vercel project's environment variables as:</p>
    <p><strong>SHOPIFY_ADMIN_ACCESS_TOKEN</strong></p>
    <pre style="background:#000; color:#4ade80; padding:1rem; border-radius:4px; word-break:break-all; white-space:pre-wrap;">${accessToken}</pre>
    <p>This page will not show this value again — reload will not recover it. Once it's saved in Vercel and the site is redeployed, this installation step does not need to be repeated unless the app is uninstalled from the store.</p>
  </body>
</html>`;

  const response = new NextResponse(html, {
    status: 200,
    headers: {
      "Content-Type": "text/html; charset=utf-8",
      "Cache-Control": "no-store",
    },
  });
  response.cookies.delete(STATE_COOKIE);
  return response;
}
