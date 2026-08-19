/**
 * Submit a lead form payload to the server-side Zoho CRM proxy.
 * This function is intentionally fire-and-forget from the UI perspective:
 * the form shows success immediately (preserving existing UX), and the
 * CRM submission happens asynchronously. Errors are logged but do not
 * block the user experience.
 */

export interface LeadData {
  firstName?: string;
  lastName?: string;
  name?: string;
  company?: string;
  email?: string;
  phone?: string;
  message?: string;
  issue?: string;
  equipment?: string;
  state?: string;
  territory?: string;
  product?: string;
  experience?: string;
  document?: string;
  formSource: string;
  pageUrl?: string;
}

export async function submitLead(data: LeadData): Promise<void> {
  try {
    const payload = {
      ...data,
      pageUrl: data.pageUrl || (typeof window !== "undefined" ? window.location.href : ""),
    };

    await fetch("/api/lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
  } catch (err) {
    // Silently log — do not disrupt user experience
    console.error("[PFS] Lead submission error:", err);
  }
}
