import PageHero from "@/components/PageHero";
import { useSEO } from '@/hooks/useSEO';
import { Link } from "wouter";
import { Phone, Mail, MapPin, CheckCircle, X } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { submitLead } from "@/lib/submitLead";
import { HEAR_ABOUT_US_OPTIONS, INDUSTRY_OPTIONS } from "@/lib/formConstants";

const IMG = "/assets/pfs-helios-enclosed-booth-real_2bc88039.jpeg";

export default function ContactHub() {
  useSEO({
    title: "Contact PFS | Request a Quote for Spray Booths & Finishing Equipment",
    description: "Contact PFS Industrial Finishing Equipment (formerly Platinum Finishing Systems) for spray paint booth pricing, industrial oven quotes, blast room specifications, and finishing line consultations. Call (888) 545-7715 or email info@pfsspraybooths.com.",
    canonical: "/contact",
  });

  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    industry: "",
    hearAboutUs: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Prevent background page scrolling while success overlay is open
  useEffect(() => {
    if (!submitted) return;

    const scrollY = window.scrollY;

    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.left = "0";
    document.body.style.right = "0";
    document.body.style.width = "100%";
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [submitted]);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    try {
      await submitLead({
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        industry: form.industry,
        hearAboutUs: form.hearAboutUs,
        message: form.message,
        formSource: "contact-general",
      });

      setForm({
        name: "",
        company: "",
        email: "",
        phone: "",
        industry: "",
        hearAboutUs: "",
        message: "",
      });

      // Show success overlay
      setSubmitted(true);
    } catch (error) {
      console.error("Form submission failed:", error);

      toast.error("Something went wrong. Please try again.");
    }
  }


  return (
    <div>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with the PFS team — we're ready to help with your finishing equipment project."
        breadcrumbs={[{ label: "Contact" }]}
        bgImage={IMG}

      />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <span style={{ color: "var(--primary)" }} className="section-label">Get in Touch</span>
              <h2 data-animation="slideLeft" className="section-heading">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-5 mt-6 raq-form">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Name *</label>
                    <input className="form-input" required value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))} />
                  </div>
                  <div>
                    <label className="form-label">Company</label>
                    <input className="form-input" value={form.company} onChange={e => setForm(f => ({ ...f, company: e.target.value }))} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Email *</label>
                    <input type="email" className="form-input" required value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))} />
                  </div>
                  <div>
                    <label className="form-label">Phone</label>
                    <input type="tel" className="form-input" value={form.phone} onChange={e => setForm(f => ({ ...f, phone: e.target.value }))} />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="form-label">Industry</label>
                    <select
                      className="form-input"
                      value={form.industry}
                      onChange={e => setForm(f => ({ ...f, industry: e.target.value }))}
                    >
                      <option value="">Select an industry...</option>
                      {INDUSTRY_OPTIONS.map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="form-label">How did you hear about us?</label>
                    <select
                      className="form-input"
                      value={form.hearAboutUs}
                      onChange={e => setForm(f => ({ ...f, hearAboutUs: e.target.value }))}
                    >
                      <option value="">Select an option...</option>
                      {HEAR_ABOUT_US_OPTIONS.map(item => (
                        <option key={item} value={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                </div>
                <div>
                  <label className="form-label">Message *</label>
                  <textarea className="form-input" rows={5} required value={form.message} onChange={e => setForm(f => ({ ...f, message: e.target.value }))} />
                </div>
                <button type="submit" className="btn-glow">Send Message</button>
              </form>
            </div>
            <div className="space-y-6">
              <div>
                <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", letterSpacing: "0.04em", marginBottom: "1rem" }}>CONTACT INFORMATION</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <Phone size={16} style={{ color: "#FFFFFF", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.82rem", color: "#888", marginBottom: "0.15rem" }}>Phone</div>
                      <a href="tel:8885457715" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.9rem", color: "#1a1a1a", fontWeight: 600 }}>(888) 545-7715</a>
                    </div>
                  </div>
                  {/* <div className="flex items-start gap-3">
                    <Mail size={16} style={{ color: "#FFFFFF", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.82rem", color: "#888", marginBottom: "0.15rem" }}>Email</div>
                      <a href="mailto:info@pfsspraybooths.com" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.9rem", color: "#1a1a1a", fontWeight: 600 }}>info@pfsspraybooths.com</a>
                    </div>
                  </div> */}
                  <div className="flex items-start gap-3">
                    <MapPin size={16} style={{ color: "#FFFFFF", marginTop: "2px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.82rem", color: "#888", marginBottom: "0.15rem" }}>Address</div>
                      <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.9rem", color: "#1a1a1a", fontWeight: 600, lineHeight: 1.6 }}>PFS — Industrial Finishing Equipment<br />Santa Rosa, CA</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="border-t pt-6">
                <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", letterSpacing: "0.04em", marginBottom: "0.75rem" }}>QUICK LINKS</h3>
                <div className="space-y-2">
                  <Link href="/contact/request-a-quote"><div className="text-sm hover:text-[#1B2B4B] transition-colors cursor-pointer" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", color: "#555" }}>→ Request a Quote</div></Link>
                  <Link href="/contact/talk-to-an-engineer"><div className="text-sm hover:text-[#1B2B4B] transition-colors cursor-pointer" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", color: "#555" }}>→ Talk to an Engineer</div></Link>
                  <Link href="/contact/find-a-dealer"><div className="text-sm hover:text-[#1B2B4B] transition-colors cursor-pointer" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", color: "#555" }}>→ Find a Dealer</div></Link>
                  <Link href="/contact/service-request"><div className="text-sm hover:text-[#1B2B4B] transition-colors cursor-pointer" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", color: "#555" }}>→ Service Request</div></Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* =========================================
    SUCCESS OVERLAY
   ========================================= */}
      {submitted && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="success-title"
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 9999,
            background: "rgba(0, 0, 0, 0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
          }}
        >
          {/* SUCCESS MODAL */}
          <div
            style={{
              position: "relative",
              width: "100%",
              maxWidth: "480px",
              background: "#fff",
              padding: "2.5rem 2rem",
              borderRadius: "4px",
              textAlign: "center",
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.3)",
            }}
          >
            {/* CLOSE / EXIT BUTTON */}
            <button
              type="button"
              aria-label="Close success message"
              onClick={() => setSubmitted(false)}
              style={{
                position: "absolute",
                top: "12px",
                right: "12px",
                width: "36px",
                height: "36px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: 0,
                border: "none",
                background: "transparent",
                color: "#555",
                cursor: "pointer",
                borderRadius: "50%",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#f1f1f1";
                e.currentTarget.style.color = "#111";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "transparent";
                e.currentTarget.style.color = "#555";
              }}
            >
              <X size={20} strokeWidth={2} />
            </button>

            {/* SUCCESS ICON */}
            <div
              style={{
                width: "64px",
                height: "64px",
                margin: "0 auto 1.25rem",
                borderRadius: "50%",
                background: "#EEF4FF",
                color: "#1B3A6B",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <CheckCircle size={34} strokeWidth={2} />
            </div>

            {/* TITLE */}
            <h2
              id="success-title"
              style={{
                fontFamily:
                  "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "clamp(1.35rem, 5vw, 1.75rem)",
                fontWeight: 900,
                color: "#111",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                margin: "0 0 0.75rem",
                lineHeight: 1.15,
              }}
            >
              Submitted Successfully
            </h2>

            {/* MESSAGE */}
            <p
              style={{
                fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "#555",
                lineHeight: 1.65,
                margin: "0 auto 1.5rem",
              }}
            >
              Thank you for contacting PFS.<br></br> A PFS representative will contact
              you shortly.
            </p>

            {/* CONTINUE BUTTON */}
            <button
              type="button"
              onClick={() => setSubmitted(false)}
              className="success-continue-btn"
            >
              Continue
            </button>
          </div>
        </div>
      )}

    </div>
  );
}
