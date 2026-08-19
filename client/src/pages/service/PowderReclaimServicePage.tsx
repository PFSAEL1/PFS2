/**
 * PowderReclaimServicePage.tsx
 * Powder Reclaim System Service & Maintenance
 *
 * Design: Matches PFS site design language — Chakra Petch headings,
 * Archivo Narrow body, #1B3A6B blue, dark industrial aesthetic.
 *
 * SEO targets:
 *   - powder reclaim system service
 *   - powder recovery booth maintenance
 *   - cyclone powder reclaim service
 *   - powder coating reclaim system repair
 *   - powder reclaim booth preventive maintenance
 *   - NFPA 33 powder reclaim compliance
 *   - powder recovery system filter service
 *   - automated powder coating line maintenance
 *   - powder reclaim conveyor system service
 *   - industrial powder coating equipment service
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Phone, ChevronDown, ChevronUp,
  Filter, Settings, Wrench, Shield, Zap, Search, Wind, RotateCcw
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const BLUE = "#1B3A6B";
const BLUE_LIGHT = "#2A5298";
const RED = "#C0392B";

const HERO_IMG = "/assets/pfs-nova-powder-reclaim_2a87798e.png";

const GALLERY = [
  { src: "/assets/pfs-powder-reclaim-unit_48f7c437.png",     alt: "PFS Nova Series powder reclaim booth — full unit exterior view" },
  { src: "/assets/pfs-nova-powder-reclaim_2a87798e.png",     alt: "PFS Nova powder reclaim system — cyclone recovery unit" },
  { src: "/assets/pfs-powder-recovery-lines_a80d3e22.png",   alt: "PFS powder recovery production line with conveyor integration" },
  { src: "/assets/pfs-powder-coating-action_2ede4cbe.png",   alt: "Operator applying powder coating in PFS reclaim booth" },
  { src: "/assets/pfs-robotic-arm-red-spray_90b1e89b.png",   alt: "PFS robotic powder application — automated finishing system" },
  { src: "/assets/pfs-auto-powder-line1_3bb98899.png",       alt: "PFS automated powder coating line with conveyor and reclaim" },
];

const SERVICES = [
  {
    id: "cyclone-reclaim-service",
    icon: <RotateCcw size={22} />,
    label: "Cyclone & Recovery System Service",
    tagline: "The Heart of Your Powder Recovery Operation.",
    desc: `The cyclone separator is the primary recovery component in a powder reclaim system — it captures overspray powder and returns it to the feed hopper for reuse. Cyclone efficiency degrades with wear, powder buildup, and seal deterioration. Our technicians inspect cyclone internals for wear patterns, clean accumulated powder from the cone and outlet, verify seal integrity at all connection points, and measure recovery efficiency. Maintaining cyclone performance directly impacts material utilization and operating cost.`,
    bullets: [
      "Cyclone interior inspection for wear and buildup",
      "Cone and outlet cleaning",
      "Seal and gasket integrity verification at all connections",
      "Recovery efficiency measurement",
      "Powder feed hopper and transfer line inspection",
      "Documentation of recovery rate and condition findings",
    ],
    standards: ["NFPA 33", "NFPA 654", "OSHA 1910.94"],
  },
  {
    id: "filter-afterfilter",
    icon: <Filter size={22} />,
    label: "After-Filter & Cartridge System Maintenance",
    tagline: "Secondary Filtration Protects Your Facility and Compliance.",
    desc: `Powder reclaim systems use an after-filter stage — typically cartridge filters with a pulse-jet cleaning system — to capture fine powder particles that pass through the cyclone. These filters protect the exhaust fan, maintain booth negative pressure, and prevent fugitive powder emissions. Our technicians inspect cartridge condition, measure static pressure drop, test pulse-jet cleaning cycle operation, and replace filter media on schedule. We stock compatible cartridge filters for PFS-manufactured systems and can source replacements for third-party units.`,
    bullets: [
      "Cartridge filter condition inspection and replacement",
      "Static pressure drop measurement across filter bank",
      "Pulse-jet cleaning cycle timer and solenoid testing",
      "Filter housing seal and gasket inspection",
      "Airflow verification after filter service",
      "NFPA 33 filter maintenance documentation",
    ],
    standards: ["NFPA 33", "NFPA 654", "EPA 40 CFR Part 63"],
  },
  {
    id: "airflow-ventilation",
    icon: <Wind size={22} />,
    label: "Airflow & Ventilation System Service",
    tagline: "Consistent Airflow Drives Recovery Efficiency.",
    desc: `Airflow management in a powder reclaim booth is more complex than in a spray-to-waste system — the reclaim circuit creates additional pressure dynamics that must be balanced to maintain both booth negative pressure and cyclone recovery efficiency. We measure CFM at the exhaust and reclaim inlet, verify negative pressure differentials, inspect fan blades and bearings, test motor amperage, and confirm that the ventilation interlock shuts down the spray system when airflow drops below the required threshold.`,
    bullets: [
      "CFM measurement at exhaust and reclaim inlet",
      "Negative pressure differential verification",
      "Fan blade condition and balance check",
      "Motor amperage and bearing inspection",
      "Belt tension and drive condition assessment",
      "Ventilation interlock and safety shutdown testing",
    ],
    standards: ["NFPA 33", "OSHA 1910.94", "NFPA 70"],
  },
  {
    id: "controls-automation",
    icon: <Zap size={22} />,
    label: "Controls, PLC & Automation Diagnostics",
    tagline: "Automated Lines Require Automated Maintenance Intelligence.",
    desc: `Powder reclaim systems integrated with conveyor lines and robotic application equipment involve more complex control logic than standalone booths — conveyor speed, gun triggering, reclaim cycle timing, and interlock communication must all function correctly together. Our technicians diagnose at the component level: tracing faults through UL508A-certified control panels, verifying PLC logic and interlock sequences, testing conveyor-to-gun communication, and confirming that all safety functions operate as designed.`,
    bullets: [
      "UL508A control panel inspection and diagnostics",
      "PLC fault tracing and logic verification",
      "Conveyor-to-gun interlock communication testing",
      "Reclaim cycle timer and sequence verification",
      "Emergency shutdown sequence confirmation",
      "Component-level repair — not wholesale replacement",
    ],
    standards: ["UL 508A", "NFPA 70", "NFPA 33"],
  },
  {
    id: "grounding-bonding",
    icon: <Shield size={22} />,
    label: "Grounding, Bonding & Static Control",
    tagline: "Electrostatic Safety Across the Entire Reclaim Circuit.",
    desc: `Powder reclaim systems involve more grounding and bonding points than spray-to-waste booths — the cyclone, transfer lines, feed hopper, and conveyor system all require verified ground connections. A broken ground or missing bond strap anywhere in the reclaim circuit creates a static discharge risk. We inspect and verify all grounding and bonding connections throughout the system, measure resistance to ground at each point, and document the results for compliance records.`,
    bullets: [
      "Full-circuit grounding continuity verification",
      "Cyclone and transfer line bonding inspection",
      "Feed hopper and conveyor ground check",
      "Resistance-to-ground measurement at all points",
      "Bond strap replacement where required",
      "Static control documentation for compliance records",
    ],
    standards: ["NFPA 33", "NFPA 77", "OSHA 1910.304"],
  },
  {
    id: "conveyor-integration",
    icon: <Settings size={22} />,
    label: "Conveyor & Line Integration Service",
    tagline: "The Conveyor Is Part of the Finishing System.",
    desc: `In automated powder coating lines, the conveyor is not a separate system — it is an integral part of the finishing process. Conveyor speed affects film build, cure uniformity, and reclaim efficiency. We inspect conveyor drive components, verify speed consistency, check hook and carrier condition, inspect load bars and ground contacts, and confirm that conveyor-to-oven and conveyor-to-booth interlocks function correctly. We also assess powder loading on conveyor components and recommend cleaning intervals based on production volume.`,
    bullets: [
      "Conveyor drive and chain condition inspection",
      "Speed consistency verification",
      "Hook, carrier, and load bar condition check",
      "Ground contact inspection on conveyor system",
      "Conveyor-to-oven and conveyor-to-booth interlock testing",
      "Powder loading assessment and cleaning recommendation",
    ],
    standards: ["NFPA 33", "OSHA 1910.94", "NFPA 70"],
  },
  {
    id: "compliance-documentation",
    icon: <Search size={22} />,
    label: "Compliance Inspections & Documentation",
    tagline: "Pass Inspections. Protect Your Operation.",
    desc: `Fire marshals, insurance auditors, and OSHA compliance officers require documented evidence of equipment maintenance. After every service visit, we provide a complete compliance documentation package: airflow measurements, filter condition records, recovery efficiency data, equipment photographs, maintenance logs, and a written summary of findings and corrective actions. This documentation is formatted to meet OSHA 1910.94, NFPA 33, NFPA 654, and state air quality authority requirements.`,
    bullets: [
      "Airflow and static pressure measurement data",
      "Cyclone recovery efficiency documentation",
      "Filter condition records with replacement dates",
      "Equipment condition photographs with timestamps",
      "Written findings and corrective action summary",
      "OSHA and NFPA compliance review",
    ],
    standards: ["NFPA 33", "NFPA 654", "OSHA 1910.94", "EPA 40 CFR Part 63"],
  },
];

const FAQ = [
  {
    q: "What types of powder reclaim systems do you service?",
    a: "We service all powder reclaim system configurations — including cyclone-based recovery systems, after-filter cartridge systems, and fully automated conveyor-integrated powder coating lines. We service PFS-manufactured systems and third-party units. Our technicians work at the component level and are familiar with the NFPA 33 and NFPA 654 standards that govern all powder coating operations.",
  },
  {
    q: "How often should powder reclaim system filters be serviced?",
    a: "After-filter cartridge service intervals depend on production volume, powder type, and the pulse-jet cleaning cycle effectiveness. We recommend inspecting filter condition and measuring static pressure drop at every PM visit and replacing cartridges when pressure drop exceeds the manufacturer's specification or when visual inspection reveals media damage. In high-volume operations, quarterly inspection is standard.",
  },
  {
    q: "Can you service a powder reclaim system you did not manufacture?",
    a: "Yes. We service the underlying systems — cyclone separators, after-filters, ventilation, controls, and grounding — regardless of who manufactured the system. Our technicians are familiar with the NFPA 33 and NFPA 654 standards that govern all powder coating and reclaim operations.",
  },
  {
    q: "What is the difference between a spray-to-waste booth and a powder reclaim system?",
    a: "A spray-to-waste booth captures overspray powder in a filter system and disposes of it — the powder is not recovered for reuse. A powder reclaim system uses a cyclone separator to capture overspray and return it to the feed hopper for reuse, significantly reducing material waste and operating cost. Reclaim systems are more complex mechanically and require more comprehensive maintenance to maintain recovery efficiency.",
  },
  {
    q: "Do you provide compliance documentation after each service visit?",
    a: "Yes. Every service visit produces a complete documentation package: airflow measurements, cyclone recovery efficiency data, filter condition records, equipment condition photographs, maintenance logs, and a written summary of findings and corrective actions. This documentation is formatted to meet OSHA, NFPA 33, NFPA 654, and state air quality authority inspection requirements.",
  },
  {
    q: "What geographic area do you cover?",
    a: "We provide powder reclaim system service nationwide, with primary coverage in California and the Western United States. Contact us to discuss scheduling and coverage for your facility.",
  },
];

export default function PowderReclaimServicePage() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Powder Reclaim System Service & Maintenance | Cyclone Recovery | NFPA 33 | PFS",
    description: "Professional service and preventive maintenance for powder reclaim and powder recovery systems. Cyclone separator service, after-filter replacement, airflow testing, controls diagnostics, conveyor integration service, and NFPA 33 compliance documentation. PFS-manufactured and third-party systems. Nationwide coverage.",
    canonical: "/service/powder-reclaim",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Powder Reclaim System Service & Maintenance",
          "provider": {
            "@type": "Organization",
            "name": "Platinum Finishing Systems",
            "url": "https://pfsspraybooths.com",
            "telephone": "+18885457715",
          },
          "serviceType": "Powder Coating Equipment Maintenance",
          "areaServed": { "@type": "Country", "name": "United States" },
          "description": "Cyclone separator service, after-filter replacement, airflow testing, controls diagnostics, and NFPA 33 compliance documentation for powder reclaim and powder recovery systems.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Powder Reclaim System Service Programs",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Cyclone & Recovery System Service" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "After-Filter & Cartridge System Maintenance" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airflow & Ventilation System Service" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Controls, PLC & Automation Diagnostics" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grounding, Bonding & Static Control" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Conveyor & Line Integration Service" } },
            ],
          },
        },
        {
          "@type": "FAQPage",
          "mainEntity": FAQ.map((f) => ({
            "@type": "Question",
            "name": f.q,
            "acceptedAnswer": { "@type": "Answer", "text": f.a },
          })),
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://pfsspraybooths.com" },
            { "@type": "ListItem", "position": 2, "name": "Service", "item": "https://pfsspraybooths.com/service" },
            { "@type": "ListItem", "position": 3, "name": "Powder Reclaim System Service", "item": "https://pfsspraybooths.com/service/powder-reclaim" },
          ],
        },
      ],
    },
  });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>

      {/* ── HERO ── */}
      <section style={{
        position: "relative",
        minHeight: "600px",
        display: "flex",
        alignItems: "flex-end",
        overflow: "hidden",
        background: "#0a0a0a",
      }}>
        {/* Background image */}
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${HERO_IMG})`,
          backgroundSize: "cover",
          backgroundPosition: "center 30%",
          backgroundRepeat: "no-repeat",
        }} />
        {/* Dark gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(10,10,10,0.90) 0%, rgba(10,10,10,0.65) 50%, rgba(10,10,10,0.25) 100%)",
        }} />
        {/* Blue accent line at bottom */}
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "3px", background: BLUE }} />

        {/* Hero content */}
        <div style={{
          position: "relative", zIndex: 2,
          maxWidth: "1200px", margin: "0 auto",
          padding: "5rem 2rem 3.5rem",
          width: "100%",
        }}>
          {/* Eyebrow */}
          <div style={{
            display: "flex", alignItems: "center", gap: "0.5rem",
            fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
            fontSize: "0.65rem", fontWeight: 700,
            color: "rgba(255,255,255,0.55)", letterSpacing: "0.18em",
            textTransform: "uppercase", marginBottom: "0.75rem",
          }}>
            <span style={{ display: "inline-block", width: "28px", height: "2px", background: BLUE_LIGHT }} />
            PFS — POWDER COATING SYSTEM SERVICES
          </div>
          <h1 style={{
            fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900,
            color: "#fff", lineHeight: 1.0, textTransform: "uppercase",
            letterSpacing: "-0.01em", margin: "0 0 1rem",
          }}>
            Powder Reclaim<br />System<br />Service
          </h1>
          <p style={{
            fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
            fontSize: "clamp(0.88rem, 1.4vw, 1.02rem)",
            color: "rgba(255,255,255,0.78)", lineHeight: 1.65,
            maxWidth: "620px", margin: "0 0 0.75rem",
          }}>
            Cyclone separator service, after-filter replacement, airflow testing, controls diagnostics, and NFPA 33 compliance documentation for powder reclaim and powder recovery systems. Automated conveyor line integration service included.
          </p>
          {/* Standards badges */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
            {["NFPA 33", "NFPA 654", "OSHA 1910.94", "NFPA 77", "UL 508A"].map((s) => (
              <span key={s} style={{
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "0.62rem", fontWeight: 700,
                color: "rgba(255,255,255,0.7)", letterSpacing: "0.1em",
                border: "1px solid rgba(255,255,255,0.25)",
                padding: "0.2rem 0.6rem", borderRadius: "2px",
                textTransform: "uppercase",
              }}>{s}</span>
            ))}
          </div>
          <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
            <Link href="/contact">
              <button className="btn-glow" style={{
                background: BLUE, color: "#fff", border: "none",
                padding: "0.85rem 1.8rem",
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "0.85rem", fontWeight: 800,
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
                display: "flex", alignItems: "center", gap: "0.4rem",
              }}>
                REQUEST SERVICE <ArrowRight size={14} />
              </button>
            </Link>
            <a href="tel:+18885457715">
              <button style={{
                background: RED, color: "#fff", border: "none",
                padding: "0.85rem 1.8rem",
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "0.85rem", fontWeight: 800,
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
                display: "flex", alignItems: "center", gap: "0.4rem",
              }}>
                <Phone size={14} /> (888) 545-7715
              </button>
            </a>
          </div>
        </div>
      </section>

      {/* ── INTRO BAND ── */}
      <section style={{
        background: "#111", borderBottom: "3px solid #1B3A6B",
        padding: "2rem",
      }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem" }}>
          {[
            { label: "Cyclone Specialists", sub: "Recovery efficiency measurement and service" },
            { label: "NFPA 33 & 654 Compliance", sub: "Documentation for fire marshal and insurance audits" },
            { label: "Nationwide Coverage", sub: "Primary service area: California and Western US" },
            { label: "Automated Line Service", sub: "Conveyor integration and PLC diagnostics" },
          ].map((item) => (
            <div key={item.label} style={{ borderLeft: `3px solid ${BLUE_LIGHT}`, paddingLeft: "1rem" }}>
              <div style={{
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "0.95rem", fontWeight: 900,
                color: "#fff", textTransform: "uppercase", letterSpacing: "0.03em",
                marginBottom: "0.25rem",
              }}>{item.label}</div>
              <div style={{
                fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                fontSize: "0.78rem", color: "rgba(255,255,255,0.55)", lineHeight: 1.5,
              }}>{item.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── SERVICE CATEGORIES (COLLAPSIBLE) ── */}
      <section style={{ background: "#f8f9fa" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "3.5rem 2rem" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "0.7rem", fontWeight: 700,
              color: BLUE, letterSpacing: "0.18em", textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}>SERVICE CATEGORIES</div>
            <h2 style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.8rem, 3vw, 2.4rem)", fontWeight: 900,
              color: "#111", textTransform: "uppercase",
              letterSpacing: "-0.01em", margin: "0 0 0.5rem", lineHeight: 1.1,
            }}>What We Service</h2>
            <p style={{
              fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
              fontSize: "0.9rem", color: "#666", lineHeight: 1.6, maxWidth: "640px",
            }}>
              Click any category to expand the full scope of work, applicable standards, and what is included in each service.
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {SERVICES.map((svc) => {
              const isOpen = openService === svc.id;
              return (
                <div key={svc.id} style={{
                  background: "#fff",
                  border: `2px solid ${isOpen ? BLUE : "#e2e8f0"}`,
                  borderRadius: "2px",
                  overflow: "hidden",
                  transition: "border-color 0.15s",
                  boxShadow: isOpen ? `0 4px 20px rgba(27,58,107,0.1)` : "0 1px 4px rgba(0,0,0,0.05)",
                }}>
                  <button
                    onClick={() => setOpenService(isOpen ? null : svc.id)}
                    style={{
                      width: "100%", background: "none", border: "none",
                      padding: "1.1rem 1.5rem",
                      display: "flex", alignItems: "center", gap: "1rem",
                      cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <span style={{ color: BLUE, flexShrink: 0 }}>{svc.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{
                        fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                        fontSize: "0.95rem", fontWeight: 800,
                        color: "#111", textTransform: "uppercase",
                        letterSpacing: "0.02em",
                      }}>{svc.label}</div>
                      <div style={{
                        fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                        fontSize: "0.78rem", color: "#666", marginTop: "0.15rem",
                      }}>{svc.tagline}</div>
                    </div>
                    <span style={{ color: BLUE, flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
                    </span>
                  </button>

                  {isOpen && (
                    <div style={{ padding: "0 1.5rem 1.5rem", borderTop: `1px solid #e2e8f0` }}>
                      <p style={{
                        fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                        fontSize: "0.88rem", color: "#444", lineHeight: 1.7,
                        margin: "1rem 0",
                      }}>{svc.desc}</p>
                      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "0.35rem", marginBottom: "1rem" }}>
                        {svc.bullets.map((b) => (
                          <div key={b} style={{
                            display: "flex", alignItems: "flex-start", gap: "0.5rem",
                            fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                            fontSize: "0.82rem", color: "#333",
                          }}>
                            <span style={{ color: BLUE, flexShrink: 0, marginTop: "0.1rem" }}>▸</span>
                            {b}
                          </div>
                        ))}
                      </div>
                      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1rem" }}>
                        {svc.standards.map((s) => (
                          <span key={s} style={{
                            fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                            fontSize: "0.6rem", fontWeight: 700,
                            color: BLUE, letterSpacing: "0.1em",
                            border: `1px solid ${BLUE}`,
                            padding: "0.18rem 0.5rem", borderRadius: "2px",
                            textTransform: "uppercase",
                          }}>{s}</span>
                        ))}
                      </div>
                      <Link href="/contact">
                        <button className="btn-glow" style={{
                          background: BLUE, color: "#fff", border: "none",
                          padding: "0.65rem 1.4rem",
                          fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                          fontSize: "0.75rem", fontWeight: 800,
                          letterSpacing: "0.1em", textTransform: "uppercase",
                          cursor: "pointer", borderRadius: "2px",
                          display: "inline-flex", alignItems: "center", gap: "0.4rem",
                        }}>
                          REQUEST THIS SERVICE <ArrowRight size={12} />
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section style={{ background: "#0a0a0a", padding: "3.5rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "0.7rem", fontWeight: 700,
              color: BLUE_LIGHT, letterSpacing: "0.18em", textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}>EQUIPMENT GALLERY</div>
            <h2 style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 900,
              color: "#fff", textTransform: "uppercase",
              letterSpacing: "-0.01em", margin: "0", lineHeight: 1.1,
            }}>Powder Reclaim Systems We Service</h2>
          </div>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
            gap: "0.75rem",
          }}>
            {GALLERY.map((img, i) => (
              <div key={i} style={{
                aspectRatio: "4/3",
                overflow: "hidden",
                borderRadius: "2px",
                border: "1px solid rgba(27,58,107,0.3)",
              }}>
                <img
                  src={img.src}
                  alt={img.alt}
                  style={{
                    width: "100%", height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    display: "block",
                    transition: "transform 0.3s ease",
                  }}
                  onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PM TIERS ── */}
      <section style={{ background: "#111", borderTop: `3px solid ${BLUE}`, padding: "3.5rem 2rem" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2.5rem" }}>
            <div style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "0.7rem", fontWeight: 700,
              color: BLUE_LIGHT, letterSpacing: "0.18em", textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}>MAINTENANCE PROGRAMS</div>
            <h2 style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 900,
              color: "#fff", textTransform: "uppercase",
              letterSpacing: "-0.01em", margin: "0 0 0.5rem", lineHeight: 1.1,
            }}>Preventive Maintenance Plans</h2>
            <p style={{
              fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
              fontSize: "0.88rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, maxWidth: "580px",
            }}>
              Structured PM programs maximize powder recovery efficiency, extend equipment life, and keep your system in full compliance. All plans include written documentation after every visit.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                tier: "Annual",
                freq: "1× per year",
                items: ["Cyclone inspection and cleaning", "After-filter inspection and replacement", "Airflow and pressure testing", "Controls and interlock verification", "Grounding and bonding inspection", "Compliance documentation package"],
                cta: "GET ANNUAL PM QUOTE",
              },
              {
                tier: "Semi-Annual",
                freq: "2× per year",
                items: ["All Annual items — twice per year", "Mid-year cyclone efficiency check", "Conveyor system inspection", "Priority scheduling", "Discounted parts pricing"],
                cta: "GET SEMI-ANNUAL QUOTE",
                featured: true,
              },
              {
                tier: "Quarterly",
                freq: "4× per year",
                items: ["All Semi-Annual items — quarterly", "Quarterly recovery efficiency trending", "Filter replacement on schedule", "Priority emergency response", "Multi-site contract available"],
                cta: "GET QUARTERLY QUOTE",
              },
            ].map((plan) => (
              <div key={plan.tier} style={{
                background: plan.featured ? BLUE : "rgba(255,255,255,0.04)",
                border: `2px solid ${plan.featured ? BLUE_LIGHT : "rgba(255,255,255,0.1)"}`,
                borderRadius: "2px",
                padding: "2rem 1.5rem",
                display: "flex", flexDirection: "column",
              }}>
                <div style={{
                  fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                  fontSize: "1.3rem", fontWeight: 900,
                  color: "#fff", textTransform: "uppercase",
                  letterSpacing: "0.05em", marginBottom: "0.25rem",
                }}>{plan.tier}</div>
                <div style={{
                  fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                  fontSize: "0.78rem", color: "rgba(255,255,255,0.55)",
                  marginBottom: "1.25rem",
                }}>{plan.freq}</div>
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 1.5rem", flex: 1 }}>
                  {plan.items.map((item) => (
                    <li key={item} style={{
                      display: "flex", alignItems: "flex-start", gap: "0.5rem",
                      fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                      fontSize: "0.82rem", color: "rgba(255,255,255,0.8)",
                      marginBottom: "0.5rem",
                    }}>
                      <span style={{ color: plan.featured ? "#fff" : BLUE_LIGHT, flexShrink: 0 }}>▸</span>
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/contact">
                  <button className="btn-glow" style={{
                    background: plan.featured ? "#fff" : BLUE,
                    color: plan.featured ? BLUE : "#fff",
                    border: "none",
                    padding: "0.75rem 1.2rem",
                    fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                    fontSize: "0.72rem", fontWeight: 800,
                    letterSpacing: "0.1em", textTransform: "uppercase",
                    cursor: "pointer", borderRadius: "2px",
                    width: "100%",
                  }}>
                    {plan.cta}
                  </button>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section style={{ background: "#f8f9fa", padding: "3.5rem 2rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "0.7rem", fontWeight: 700,
              color: BLUE, letterSpacing: "0.18em", textTransform: "uppercase",
              marginBottom: "0.4rem",
            }}>FREQUENTLY ASKED QUESTIONS</div>
            <h2 style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.6rem, 2.5vw, 2.2rem)", fontWeight: 900,
              color: "#111", textTransform: "uppercase",
              letterSpacing: "-0.01em", margin: "0", lineHeight: 1.1,
            }}>Common Questions</h2>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
            {FAQ.map((item, i) => {
              const isOpen = openFaq === i;
              return (
                <div key={i} style={{
                  background: "#fff",
                  border: `2px solid ${isOpen ? BLUE : "#e2e8f0"}`,
                  borderRadius: "2px",
                  overflow: "hidden",
                }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : i)}
                    style={{
                      width: "100%", background: "none", border: "none",
                      padding: "1rem 1.25rem",
                      display: "flex", alignItems: "center", justifyContent: "space-between",
                      gap: "1rem", cursor: "pointer", textAlign: "left",
                    }}
                  >
                    <span style={{
                      fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                      fontSize: "0.88rem", fontWeight: 700,
                      color: "#111", textTransform: "uppercase",
                      letterSpacing: "0.02em",
                    }}>{item.q}</span>
                    <span style={{ color: BLUE, flexShrink: 0 }}>
                      {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                    </span>
                  </button>
                  {isOpen && (
                    <div style={{
                      padding: "0 1.25rem 1.25rem",
                      fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                      fontSize: "0.88rem", color: "#444", lineHeight: 1.7,
                      borderTop: "1px solid #e2e8f0",
                    }}>
                      <p style={{ margin: "0.75rem 0 0" }}>{item.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{
        background: BLUE,
        padding: "3.5rem 2rem",
        textAlign: "center",
      }}>
        <div style={{ maxWidth: "700px", margin: "0 auto" }}>
          <h2 style={{
            fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
            fontSize: "clamp(1.8rem, 3vw, 2.6rem)", fontWeight: 900,
            color: "#fff", textTransform: "uppercase",
            letterSpacing: "-0.01em", margin: "0 0 0.75rem", lineHeight: 1.1,
          }}>
            Schedule Powder Reclaim<br />System Service
          </h2>
          <p style={{
            fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6, margin: "0 0 2rem",
          }}>
            Contact PFS to schedule a service visit, request a PM contract quote, or ask about cyclone and filter service for your powder reclaim system.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact">
              <button className="btn-glow" style={{
                background: "#fff", color: BLUE, border: "none",
                padding: "0.9rem 2rem",
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "0.85rem", fontWeight: 800,
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
              }}>
                REQUEST SERVICE <ArrowRight size={14} />
              </button>
            </Link>
            <Link href="/products/powder-booths/powder-reclaim">
              <button style={{
                background: "transparent", color: "#fff",
                border: "2px solid rgba(255,255,255,0.5)",
                padding: "0.9rem 2rem",
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "0.85rem", fontWeight: 800,
                letterSpacing: "0.1em", textTransform: "uppercase",
                cursor: "pointer", borderRadius: "2px",
                display: "inline-flex", alignItems: "center", gap: "0.4rem",
              }}>
                VIEW PRODUCT PAGE <ArrowRight size={14} />
              </button>
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
