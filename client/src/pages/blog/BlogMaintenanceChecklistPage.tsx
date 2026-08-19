// Blog Post 4 — Service & Maintenance Guide
// URL: /blog/spray-booth-maintenance-filter-checklist
// Article JSON-LD for Google authorship and AI search credibility

import { useSEO } from '@/hooks/useSEO';
import { Link } from "wouter";
import { ArrowRight, Phone, CheckCircle } from "lucide-react";

const HERO_IMG = "/assets/pfs-booth-clean-hero-anon_9dfc3e0e.png";
const BLUE = "#1B3A6B";
const GOLD = "#C8922A";

export default function BlogMaintenanceChecklistPage() {
  useSEO({
    title: "Spray Booth Maintenance Checklist: When to Change Your Filters",
    description: "Keep your spray booth running safely and efficiently. Follow this complete spray booth maintenance and filter replacement checklist from the experts at PFS.",
    canonical: "https://pfsspraybooths.com/blog/spray-booth-maintenance-filter-checklist",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Spray Booth Maintenance Checklist: When to Change Your Filters",
      "description": "A complete spray booth maintenance and filter replacement schedule from PFS — covering exhaust filters, intake filters, AMU pre-filters, daily tasks, and annual professional service.",
      "datePublished": "2026-08-05",
      "dateModified": "2026-08-05",
      "author": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "url": "https://pfsspraybooths.com" },
      "publisher": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "logo": { "@type": "ImageObject", "url": "https://pfsspraybooths.com/pfs-logo.png" } },
      "mainEntityOfPage": "https://pfsspraybooths.com/blog/spray-booth-maintenance-filter-checklist",
      "image": "https://pfsspraybooths.com/assets/pfs-booth-clean-hero-anon_9dfc3e0e.png",
      "keywords": "spray booth maintenance checklist, when to change spray booth filters, paint booth filter replacement, spray booth exhaust filter, paint booth maintenance schedule"
    }
  });

  const checkItems = [
    "Sweep and mop the booth floor daily. Never use an air hose to blow dust around the booth — it will settle on your next paint job.",
    "Wipe down the glass on your light fixtures weekly. Paint overspray will dim your lights over time, making it difficult to see color matches and wet edges.",
    "Inspect the rubber door seals around your personnel and product doors. If the seals are torn, the booth will pull dirty shop air inside.",
    "Check the manometer (draft gauge) reading before each shift. A rising static pressure reading means your exhaust filters are loading up.",
  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "340px", overflow: "hidden", background: BLUE }}>
        <img
          src={HERO_IMG}
          alt="PFS technician performing spray booth cleaning and maintenance"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
        />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", padding: "2.5rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD }}>PFS SERVICE GUIDE · 2026</span>
            <h1 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Spray Booth Maintenance Checklist: When to Change Your Filters
            </h1>
          </div>
        </div>
      </div>

      {/* Body */}
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.78rem", color: "#6b7280", marginBottom: "2rem" }}>
          <Link href="/resources"><span style={{ color: BLUE, cursor: "pointer" }}>Resources</span></Link>
          <span> / </span>
          <Link href="/blog"><span style={{ color: BLUE, cursor: "pointer" }}>Blog</span></Link>
          <span> / Maintenance Checklist</span>
        </div>

        <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "#1f2937", lineHeight: 1.85 }}>

          <p>A spray booth is only as good as its maintenance schedule. If you neglect your filters, your airflow will drop, your finish quality will suffer, and you run the risk of damaging your exhaust motors or creating a fire hazard.</p>

          <p>At PFS, we don't just manufacture spray booths — we service them. Whether you are running a standard automotive crossflow or a massive industrial downdraft system, following a strict preventative maintenance schedule is critical. Here is the ultimate spray booth maintenance checklist.</p>

          {/* Filter Schedule */}
          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            The Filter Replacement Schedule
          </h2>

          {/* Filter table */}
          <div style={{ overflowX: "auto", margin: "1.25rem 0" }}>
            <table style={{ width: "100%", borderCollapse: "collapse", fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.9rem" }}>
              <thead>
                <tr style={{ background: BLUE, color: "#fff" }}>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Filter Type</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>When to Change</th>
                  <th style={{ padding: "0.75rem 1rem", textAlign: "left", fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>Why It Matters</th>
                </tr>
              </thead>
              <tbody>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: BLUE }}>Exhaust Filters (Paint Arrestors)</td>
                  <td style={{ padding: "0.85rem 1rem" }}>Every 2–4 weeks or ~100 operating hours</td>
                  <td style={{ padding: "0.85rem 1rem", color: "#4b5563" }}>Capture sticky overspray before it hits the exhaust fan. Clogged filters pressurize the booth and push paint dust back onto wet parts. Always use a manometer to measure filter load.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb", background: "#f9fafb" }}>
                  <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: BLUE }}>Intake Filters (Ceiling or Door)</td>
                  <td style={{ padding: "0.85rem 1rem" }}>Every 3–6 months or ~400–600 operating hours</td>
                  <td style={{ padding: "0.85rem 1rem", color: "#4b5563" }}>Clean the air coming into the booth. Dirt, dust, or debris in your paint jobs means your intake filters are compromised and need immediate replacement.</td>
                </tr>
                <tr style={{ borderBottom: "1px solid #e5e7eb" }}>
                  <td style={{ padding: "0.85rem 1rem", fontWeight: 600, color: BLUE }}>AMU Pre-Filters</td>
                  <td style={{ padding: "0.85rem 1rem" }}>Every 3–6 months</td>
                  <td style={{ padding: "0.85rem 1rem", color: "#4b5563" }}>If your booth uses a heated AMU (like the Apollo AM1-Series), the pre-filters protect the burner and internal components from outside dirt and debris.</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p><Link href="/parts"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>Shop OEM Replacement Filters →</span></Link></p>

          {/* Daily/Weekly */}
          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Daily and Weekly Maintenance Tasks
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            {checkItems.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <CheckCircle size={18} color={GOLD} style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                <p style={{ margin: 0, color: "#374151" }}>{item}</p>
              </div>
            ))}
          </div>

          {/* Annual */}
          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Annual Preventative Maintenance
          </h2>
          <p>Once a year, your booth requires professional service to ensure it remains NFPA compliant and mechanically sound. A professional technician should:</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.6rem", marginTop: "0.75rem" }}>
            {[
              "Inspect and clean the exhaust fan blades.",
              "Check the tension on all drive belts and replace if frayed.",
              "Test the burner and gas pressure on the heated AMU.",
              "Verify the function of all safety interlocks and airflow switches inside the control panel.",
            ].map((item, i) => (
              <div key={i} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <CheckCircle size={18} color={BLUE} style={{ flexShrink: 0, marginTop: "0.15rem" }} />
                <p style={{ margin: 0, color: "#374151" }}>{item}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: "1.25rem" }}>
            <Link href="/service/preventive-maintenance"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>View PFS Preventive Maintenance Programs →</span></Link>
            {" · "}
            <Link href="/service/booth-cleaning"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>View Paint Booth Cleaning Service →</span></Link>
          </p>

        </div>

        {/* CTA */}
        <div style={{ marginTop: "3rem", background: BLUE, padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>Need replacement filters or professional booth service?</p>
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>PFS services all makes and models. OEM filters ship nationally.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/service/booth-cleaning">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: GOLD, color: "#fff", fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.5rem", cursor: "pointer" }}>
                Contact the PFS Service Team <ArrowRight size={14} />
              </span>
            </Link>
            <a href="tel:8885457715" style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", border: "1px solid rgba(255,255,255,0.4)", color: "#fff", fontFamily: "'Chakra Petch', sans-serif", fontWeight: 600, fontSize: "0.82rem", letterSpacing: "0.1em", textTransform: "uppercase", padding: "0.75rem 1.5rem", textDecoration: "none" }}>
              <Phone size={14} /> (888) 545-7715
            </a>
          </div>
        </div>

        <div style={{ marginTop: "3rem", borderTop: "1px solid #e5e7eb", paddingTop: "2rem" }}>
          <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b7280", marginBottom: "1rem" }}>Related Articles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link href="/blog/how-much-does-industrial-spray-booth-cost"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>How Much Does an Industrial Spray Booth Cost in 2026? →</span></Link>
            <Link href="/blog/crossflow-vs-downdraft-spray-booth"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>Crossflow vs. Downdraft Spray Booths: Which Is Right for Your Shop? →</span></Link>
            <Link href="/blog/ul508a-certified-control-panel-spray-booth"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>What Is a UL508A Certified Control Panel and Why Does Your Spray Booth Need One? →</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
