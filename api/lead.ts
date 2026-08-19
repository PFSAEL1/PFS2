type VercelRequest = {
  method?: string;
  body?: Record<string, any>;
};

type VercelResponse = {
  setHeader: (name: string, value: string | string[]) => void;
  status: (code: number) => { json: (body: unknown) => unknown; end: () => unknown };
};

/**
 * POST /api/lead
 * Routes all PFS lead forms through the existing approved Zoho CRM Web-to-Lead
 * form. The native Zoho form uses public embed tokens (the same values Zoho
 * supplies for browser embeds), so OAuth credentials never need to be stored
 * in, or exposed by, the website.
 */

const ZOHO_WEB_TO_LEAD_URL = "https://crm.zoho.com/crm/WebToLeadForm";
const ZOHO_FORM_TOKENS = {
  xnQsjsdp: "5a18df1f66aa73da22ffcf206fa8757b1cb333689d187eb7a7c8ae997f754f78",
  xmIwtLD: "a0b8d8a9350384c9863c11ac16a12848a1c908bfbd00930275201d1fa394e9a3091645841aaaa233241e3a2598344969",
  actionType: "TGVhZHM=",
};

function splitName(body: Record<string, any>) {
  let firstName = String(body.firstName || body.first_name || "").trim();
  let lastName = String(body.lastName || body.last_name || body.name || "").trim();

  if (!firstName && lastName.includes(" ")) {
    const parts = lastName.split(/\s+/);
    firstName = parts.slice(0, -1).join(" ");
    lastName = parts.at(-1) || "Website Lead";
  }

  return {
    firstName,
    lastName: lastName || "Website Lead",
  };
}

function buildDescription(body: Record<string, any>) {
  const details: string[] = [];
  const primaryMessage = String(body.message || body.issue || "").trim();
  if (primaryMessage) details.push(primaryMessage);
  if (body.equipment) details.push(`Equipment Type: ${body.equipment}`);
  if (body.document) details.push(`Requested document: ${body.document}`);
  if (body.territory) details.push(`Territory / Region: ${body.territory}`);
  if (body.experience) details.push(`Industry Experience: ${body.experience}`);
  if (body.product) details.push(`Product Interest: ${body.product}`);
  if (body.formSource) details.push(`PFS form: ${body.formSource}`);
  if (body.pageUrl) details.push(`Source page: ${body.pageUrl}`);
  return details.join("\n\n") || `PFS form: ${body.formSource || "website"}`;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "https://www.pfsspraybooths.com");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") return res.status(204).end();
  if (req.method !== "POST") return res.status(405).json({ error: "Method not allowed" });

  try {
    const body = req.body || {};
    const { firstName, lastName } = splitName(body);
    const description = buildDescription(body);
    const form = new URLSearchParams({
      ...ZOHO_FORM_TOKENS,
      "First Name": firstName,
      "Last Name": lastName,
      // The approved Zoho form requires Company and Description. Preserve
      // the visitor's optional Company field, using a neutral CRM value only
      // when the visitor did not provide one.
      Company: String(body.company || "Not provided"),
      Email: String(body.email || ""),
      Phone: String(body.phone || ""),
      State: String(body.state || body.territory || ""),
      Description: description,
      "Lead Source": "Website Contact Form",
      returnURL: "https://www.pfsspraybooths.com/contact",
      zc_gad: "",
      aG9uZXlwb3Q: "",
    });

    const zohoResponse = await fetch(ZOHO_WEB_TO_LEAD_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "User-Agent": "PFS-Website-Lead-Intake/1.0",
      },
      body: form.toString(),
      redirect: "manual",
    });

    // Zoho returns an HTTP redirect after accepted Web-to-Lead submission.
    if (zohoResponse.status >= 200 && zohoResponse.status < 400) {
      return res.status(200).json({ success: true, zohoStatus: zohoResponse.status });
    }

    const responseText = await zohoResponse.text();
    console.error("Zoho Web-to-Lead submission failed", zohoResponse.status, responseText);
    return res.status(502).json({ error: "Zoho lead submission failed" });
  } catch (error) {
    console.error("PFS lead submission error", error);
    return res.status(500).json({ error: "Lead submission could not be completed" });
  }
}
