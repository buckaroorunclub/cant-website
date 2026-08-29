import { NextResponse } from "next/server";
import { randomBytes } from "node:crypto";

export const runtime = "nodejs";

const SCOPES = "write_customers";
const REDIRECT_URI = "https://www.itsjustcant.com/api/shopify/callback";
const STATE_COOKIE = "shopify_oauth_state";

// One-time setup route: starts the authorization code grant for this store. Not linked
// from anywhere in the public site — visiting it only kicks off Shopify's own admin
// login/consent screen for the configured store, nothing sensitive happens here.
export async function GET() {
  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const clientId = process.env.SHOPIFY_CLIENT_ID;

  if (!storeDomain || !clientId) {
    console.error("shopify/install: missing SHOPIFY_STORE_DOMAIN or SHOPIFY_CLIENT_ID");
    return new NextResponse("Shopify app is not configured.", { status: 500 });
  }

  const state = randomBytes(32).toString("hex");

  const authorizeUrl = new URL(`https://${storeDomain}/admin/oauth/authorize`);
  authorizeUrl.searchParams.set("client_id", clientId);
  authorizeUrl.searchParams.set("scope", SCOPES);
  authorizeUrl.searchParams.set("redirect_uri", REDIRECT_URI);
  authorizeUrl.searchParams.set("state", state);

  const response = NextResponse.redirect(authorizeUrl);
  response.cookies.set(STATE_COOKIE, state, {
    httpOnly: true,
    secure: true,
    sameSite: "lax",
    path: "/",
    maxAge: 600,
  });

  return response;
}
