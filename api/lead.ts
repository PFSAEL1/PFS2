import type { VercelRequest, VercelResponse } from "@vercel/node";

/**
 * POST /api/lead
 * Accepts form data from any PFS lead form and creates a Lead in Zoho CRM.
 * Zoho OAuth2 refresh-token flow is used to obtain a fresh access token on each call.
 * Environment variables (set in Vercel Project Settings):
 *   ZOHO_CLIENT_ID, ZOHO_CLIENT_SECRET, ZOHO_REFRESH_TOKEN, ZOHO_API_DOMAIN
 */

interface LeadPayload {
  First_Name?: string;
  Last_Name: string;
  Company?: string;
  Email?: string;
  Phone?: string;
  Mobile?: string;
  State?: string;
  Description?: string;
  Lead_Source?: string;
  Designation?: string;
  // Custom field for product interest
  Product_Market_Interested_In?: string;
}

// Obtain a fresh Zoho access token using the refresh token grant
async function getAccessToken(): Promise<string> {
  const params = new URLSearchParams({
    grant_type: "refresh_token",
    client_id: process.env.ZOHO_CLIENT_ID || "",
    client_secret: process.env.ZOHO_CLIENT_SECRET || "",
    refresh_token: process.env.ZOHO_REFRESH_TOKEN || "",
  });

  const domain = process.env.ZOHO_ACCOUNTS_DOMAIN || "https://accounts.zoho.com";
  const res = await fetch(`${domain}/oauth/v2/token?${params.toString()}`, {
    method: "POST",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Zoho token refresh failed (${res.status}): ${text}`);
  }

  const data = await res.json();
  if (!data.access_token) {
    throw new Error(`Zoho token response missing access_token: ${JSON.stringify(data)}`);
  }
  return data.access_token;
}

// Create a Lead record in Zoho CRM
async function createLead(token: string, lead: LeadPayload): Promise<any> {
  const domain = process.env.ZOHO_API_DOMAIN || "https://www.zohoapis.com";
  const res = await fetch(`${domain}/crm/v5/Leads`, {
    method: "POST",
    headers: {
      Authorization: `Zoho-oauthtoken ${token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      data: [lead],
      trigger: ["workflow"],
    }),
  });

  const json = await res.json();
  if (!res.ok) {
    throw new Error(`Zoho CRM create failed (${res.status}): ${JSON.stringify(json)}`);
  }
  return json;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // CORS headers for the SPA origin
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(204).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const body = req.body || {};

    // Determine Last_Name (required by Zoho)
    let lastName = body.lastName || body.last_name || body.name || "";
    let firstName = body.firstName || body.first_name || "";

    // If only a single "name" field was provided, split it
    if (!firstName && lastName && lastName.includes(" ")) {
      const parts = lastName.split(" ");
      firstName = parts.slice(0, -1).join(" ");
      lastName = parts[parts.length - 1];
    }

    if (!lastName) {
      lastName = "(Website Lead)";
    }

    const lead: LeadPayload = {
      Last_Name: lastName,
      ...(firstName && { First_Name: firstName }),
      ...(body.company && { Company: body.company }),
      ...(body.email && { Email: body.email }),
      ...(body.phone && { Phone: body.phone }),
      ...(body.state && { State: body.state }),
      ...(body.territory && { State: body.territory }),
      ...(body.product && { Product_Market_Interested_In: body.product }),
      ...(body.experience && { Designation: body.experience }),
    };

    // Build description from message + metadata
    const descParts: string[] = [];
    if (body.message || body.issue) {
      descParts.push(body.message || body.issue);
    }
    if (body.equipment) {
      descParts.push(`Equipment Type: ${body.equipment}`);
    }
    if (body.document) {
      descParts.push(`Downloaded Document: ${body.document}`);
    }
    if (body.formSource) {
      descParts.push(`Form: ${body.formSource}`);
    }
    if (body.pageUrl) {
      descParts.push(`Page: ${body.pageUrl}`);
    }
    if (descParts.length > 0) {
      lead.Description = descParts.join("\n\n");
    }

    // Determine Lead_Source based on form type
    const source = body.formSource || "";
    if (source.includes("download") || source.includes("resource")) {
      lead.Lead_Source = "Web Download";
    } else if (source.includes("support")) {
      lead.Lead_Source = "Website Contact Form";
    } else if (source.includes("distributor")) {
      lead.Lead_Source = "Website Contact Form";
    } else {
      lead.Lead_Source = "Website Contact Form";
    }

    const token = await getAccessToken();
    const result = await createLead(token, lead);

    return res.status(200).json({ success: true, result });
  } catch (err: any) {
    console.error("Lead creation error:", err);
    return res.status(500).json({ error: err.message || "Internal server error" });
  }
}
