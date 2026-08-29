import { NextResponse } from "next/server";

export const runtime = "nodejs";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const SHOPIFY_API_VERSION = "2026-07";
const FIRST_ACCESS_TAG = "FIRST ACCESS";

const GENERIC_ERROR = "We couldn't complete your signup. Please try again.";

type ShopifyUserError = { field: string[] | null; message: string };

type GraphQLResponse<T> = {
  data?: T;
  errors?: Array<{ message: string }>;
};

async function shopifyGraphQL<T>(
  storeDomain: string,
  accessToken: string,
  query: string,
  variables: Record<string, unknown>
): Promise<T> {
  const res = await fetch(
    `https://${storeDomain}/admin/api/${SHOPIFY_API_VERSION}/graphql.json`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Shopify-Access-Token": accessToken,
      },
      body: JSON.stringify({ query, variables }),
    }
  );

  if (!res.ok) {
    throw new Error(`Admin API request failed (${res.status})`);
  }

  const json = (await res.json()) as GraphQLResponse<T>;

  if (json.errors?.length) {
    throw new Error(`GraphQL error: ${json.errors.map((e) => e.message).join("; ")}`);
  }
  if (!json.data) {
    throw new Error("GraphQL response had no data");
  }

  return json.data;
}

export async function POST(request: Request) {
  let email = "";
  try {
    const body = (await request.json()) as { email?: unknown };
    if (typeof body.email === "string") {
      email = body.email.trim().toLowerCase();
    }
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  if (!email || !EMAIL_PATTERN.test(email)) {
    return NextResponse.json({ ok: false, error: "Enter a valid email." }, { status: 400 });
  }

  const storeDomain = process.env.SHOPIFY_STORE_DOMAIN;
  const accessToken = process.env.SHOPIFY_ADMIN_ACCESS_TOKEN;

  if (!storeDomain || !accessToken) {
    console.error("subscribe: missing SHOPIFY_STORE_DOMAIN or SHOPIFY_ADMIN_ACCESS_TOKEN");
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 500 });
  }

  try {
    // Upsert by email only — no other fields are set, so no unrelated customer data
    // (name, address, notes, existing tags, etc.) is ever touched or overwritten.
    const setResult = await shopifyGraphQL<{
      customerSet: {
        customer: { id: string } | null;
        userErrors: ShopifyUserError[];
      };
    }>(
      storeDomain,
      accessToken,
      `mutation CustomerSet($email: String!) {
        customerSet(identifier: { email: $email }, input: { email: $email }) {
          customer {
            id
          }
          userErrors {
            field
            message
          }
        }
      }`,
      { email }
    );

    const customerId = setResult.customerSet.customer?.id;

    if (setResult.customerSet.userErrors.length) {
      console.error("subscribe: customerSet userErrors", setResult.customerSet.userErrors);
    }

    if (!customerId) {
      return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 502 });
    }

    // From here on the customer record already exists — the signup has effectively
    // succeeded. Tagging and marketing consent are best-effort follow-ups: if either
    // has an issue we log it for manual follow-up rather than failing the user's
    // submission over it.
    try {
      const tagResult = await shopifyGraphQL<{
        tagsAdd: { userErrors: ShopifyUserError[] };
      }>(
        storeDomain,
        accessToken,
        `mutation TagsAdd($id: ID!, $tags: [String!]!) {
          tagsAdd(id: $id, tags: $tags) {
            userErrors {
              field
              message
            }
          }
        }`,
        { id: customerId, tags: [FIRST_ACCESS_TAG] }
      );
      if (tagResult.tagsAdd.userErrors.length) {
        console.error("subscribe: tagsAdd userErrors", tagResult.tagsAdd.userErrors);
      }
    } catch (err) {
      console.error("subscribe: tagsAdd failed", err instanceof Error ? err.message : err);
    }

    try {
      const consentResult = await shopifyGraphQL<{
        customerEmailMarketingConsentUpdate: { userErrors: ShopifyUserError[] };
      }>(
        storeDomain,
        accessToken,
        `mutation CustomerEmailMarketingConsentUpdate($customerId: ID!) {
          customerEmailMarketingConsentUpdate(input: {
            customerId: $customerId
            emailMarketingConsent: {
              marketingState: SUBSCRIBED
              marketingOptInLevel: SINGLE_OPT_IN
            }
          }) {
            userErrors {
              field
              message
            }
          }
        }`,
        { customerId }
      );
      if (consentResult.customerEmailMarketingConsentUpdate.userErrors.length) {
        console.error(
          "subscribe: customerEmailMarketingConsentUpdate userErrors",
          consentResult.customerEmailMarketingConsentUpdate.userErrors
        );
      }
    } catch (err) {
      console.error(
        "subscribe: customerEmailMarketingConsentUpdate failed",
        err instanceof Error ? err.message : err
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("subscribe: unexpected failure", err instanceof Error ? err.message : err);
    return NextResponse.json({ ok: false, error: GENERIC_ERROR }, { status: 502 });
  }
}
