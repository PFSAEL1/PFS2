// Blog Post 3 — UL508A Authority Builder
// URL: /blog/ul508a-certified-control-panel-spray-booth
// Article JSON-LD for Google authorship and AI search credibility

import { useSEO } from '@/hooks/useSEO';
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";

const HERO_IMG = "/assets/pfs-control-panel-ul508a_b3e2c1a0.jpeg";
const BLUE = "#1B3A6B";
const GOLD = "#C8922A";

export default function BlogUL508AControlPanelPage() {
  useSEO({
    title: "What Is a UL508A Certified Control Panel and Why Does Your Spray Booth Need One?",
    description: "Learn why UL508A certified control panels are critical for spray booth safety, NFPA compliance, and passing local fire inspections.",
    canonical: "https://pfsspraybooths.com/blog/ul508a-certified-control-panel-spray-booth",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "What Is a UL508A Certified Control Panel and Why Does Your Spray Booth Need One?",
      "description": "PFS engineers explain UL508A certification for spray booth control panels — what it means, why it matters for NFPA 33 compliance, and why PFS builds all panels in-house.",
      "datePublished": "2026-08-05",
      "dateModified": "2026-08-05",
      "author": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "url": "https://pfsspraybooths.com" },
      "publisher": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "logo": { "@type": "ImageObject", "url": "https://pfsspraybooths.com/pfs-logo.png" } },
      "mainEntityOfPage": "https://pfsspraybooths.com/blog/ul508a-certified-control-panel-spray-booth",
      "image": "https://pfsspraybooths.com/assets/pfs-control-panel-ul508a_b3e2c1a0.jpeg",
      "keywords": "UL508A control panel spray booth, UL listed control panel, NFPA 33 spray booth compliance, spray booth electrical panel, spray booth fire inspection"
    }
  });

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "340px", overflow: "hidden", background: BLUE }}>
        <img
          src={HERO_IMG}
          alt="PFS UL508A certified control panel for spray booth"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
        />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", padding: "2.5rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD }}>PFS TECHNICAL GUIDE · 2026</span>
            <h1 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "clamp(1.4rem, 3.5vw, 2.1rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>
              What Is a UL508A Certified Control Panel and Why Does Your Spray Booth Need One?
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
          <span> / UL508A Control Panel Guide</span>
        </div>

        <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "#1f2937", lineHeight: 1.85 }}>

          <p>When most shop owners buy a spray booth, they focus on the size, the airflow, and the lighting. But the most critical component of your entire finishing system is the one powering it: the control panel.</p>

          <p>If your control panel is not built to code, your booth will not pass local fire inspections, your facility will not be safe, and your production will shut down. This is why PFS engineers and fabricates our own UL508A certified control panels in-house for every system we build.</p>

          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            What Does UL508A Mean?
          </h2>
          <p>UL508A is the safety standard set by Underwriters Laboratories (UL) specifically for industrial control panels. When a panel carries the UL508A label, it means it has been designed, assembled, and tested to meet rigorous electrical safety standards. It proves that the panel can safely handle the electrical loads required to run your booth's exhaust fans, lighting, and heated air make-up units (AMUs) without risk of fire or electrical failure.</p>

          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Why It Matters for Your Spray Booth
          </h2>

          <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "1.5rem", marginBottom: "0.5rem" }}>1. Passing Fire and Electrical Inspections</h3>
          <p>Local Authorities Having Jurisdiction (AHJs) — such as fire marshals and electrical inspectors — look specifically for the UL listing on your control panel. If you buy a cheap, imported spray booth with an uncertified panel, the inspector can red-tag your equipment and refuse to issue your permit.</p>

          <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "1.5rem", marginBottom: "0.5rem" }}>2. NFPA and OSHA Compliance</h3>
          <p>Spray booths operate in hazardous, combustible environments. A UL508A certified panel ensures that the electrical controls integrating with your fire suppression systems, airflow switches, and emergency shutdowns comply with NFPA 33 (Standard for Spray Application Using Flammable or Combustible Materials).</p>

          <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "1.5rem", marginBottom: "0.5rem" }}>3. Reliability and Uptime</h3>
          <p>A poorly wired control panel will lead to constant electrical gremlins, tripped breakers, and dead motors. In a high-volume collision center or industrial manufacturing plant, downtime costs thousands of dollars a day. Certified panels are built with high-quality, properly rated components that run reliably shift after shift.</p>

          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            The PFS Difference: In-House Fabrication
          </h2>
          <p>Many spray booth companies outsource their control panels to third-party electricians or import them from overseas. At PFS, we build our UL508A panels in-house at our Santa Rosa, California facility. This vertical integration means your booth, your air make-up unit, and your control panel are engineered by the same team to work together flawlessly.</p>
          <p><Link href="/products/integration-automation"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>View PFS Control Panel & Automation Systems →</span></Link></p>

        </div>

        {/* CTA */}
        <div style={{ marginTop: "3rem", background: BLUE, padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>Do not risk your facility on uncertified electrical controls.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact/request-a-quote">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: GOLD, color: "#fff", fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.5rem", cursor: "pointer" }}>
                Get Pricing on a Code-Compliant PFS System <ArrowRight size={14} />
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
            <Link href="/blog/spray-booth-maintenance-filter-checklist"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>Spray Booth Maintenance Checklist: When to Change Your Filters →</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
