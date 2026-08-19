/**
 * SprayToWasteServicePage.tsx
 * Spray-to-Waste Powder Booth Service & Maintenance
 *
 * Design: Matches PFS site design language — Chakra Petch headings,
 * Archivo Narrow body, #1B3A6B blue, dark industrial aesthetic.
 *
 * SEO targets:
 *   - spray to waste powder booth service
 *   - spray-to-waste booth maintenance
 *   - powder coating booth filter service
 *   - spray-to-waste booth repair
 *   - powder booth preventive maintenance
 *   - NFPA 33 powder booth compliance
 *   - spray-to-waste filter replacement
 *   - powder coating equipment service
 *   - three-stage filtration booth service
 *   - pulse-jet cartridge filter maintenance
 */

import { useState } from "react";
import { Link } from "wouter";
import {
  ArrowRight, Phone, ChevronDown, ChevronUp,
  Filter, Settings, Wrench, Shield, Zap, Search, Wind, Activity
} from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const BLUE = "#1B3A6B";
const BLUE_LIGHT = "#2A5298";
const RED = "#C0392B";

const HERO_IMG = "/assets/spray-to-waste-hero_2fe77f1d.jpg";

const GALLERY = [
  { src: "/assets/pfs-stw-4208_b899a28f.jpg",                        alt: "PFS spray-to-waste powder booth exterior — white enclosed unit" },
  { src: "/assets/pfs-stw-7010_4c202b9d.jpg",                        alt: "PFS Nova Series spray-to-waste booth interior with filter modules" },
  { src: "/assets/pfs-stw-8411_efbc079f.jpg",                        alt: "PFS Nova Series spray-to-waste booth side view" },
  { src: "/assets/spray-to-waste-pfs-booth-blue-unit_1f718c28.webp", alt: "PFS spray-to-waste blue filter module unit" },
  { src: "/assets/pfs-stw-action1_5dd2f4d4.webp",                    alt: "Powder coating in action inside PFS Nova Series spray-to-waste booth" },
  { src: "/assets/pfs-stw-action2_4d74a007.webp",                    alt: "Operator applying powder coating in PFS Nova Series spray-to-waste booth" },
  { src: "/assets/spray-to-waste-aerospace-composite_3907664d.png",  alt: "Aerospace composite part finishing in PFS spray-to-waste system" },
];

const SERVICES = [
  {
    id: "filter-service",
    icon: <Filter size={22} />,
    label: "Filter System Service & Replacement",
    tagline: "Three-Stage and Pulse-Jet Cartridge Systems.",
    desc: `Spray-to-waste powder booths use either a three-stage panel filter system or a pulse-jet cartridge filter system depending on the model. Both require scheduled inspection and replacement to maintain proper airflow, booth pressure, and NFPA 33 compliance. Our technicians assess filter loading, measure static pressure drop across the filter bank, and replace media before it reaches a condition that compromises booth performance or creates a fire risk. We stock compatible filter media for PFS-manufactured spray-to-waste booths and can source replacements for third-party units.`,
    bullets: [
      "Three-stage panel filter inspection and replacement",
      "Pulse-jet cartridge filter condition assessment",
      "Static pressure drop measurement across filter bank",
      "Filter housing seal and gasket inspection",
      "Airflow verification after filter replacement",
      "NFPA 33 filter maintenance documentation",
    ],
    standards: ["NFPA 33", "OSHA 1910.94", "EPA 40 CFR Part 63"],
  },
  {
    id: "airflow-ventilation",
    icon: <Wind size={22} />,
    label: "Airflow & Ventilation System Service",
    tagline: "Proper Airflow Is a Safety Requirement, Not a Preference.",
    desc: `In a spray-to-waste powder booth, ventilation maintains the negative pressure that keeps overspray contained and prevents combustible powder accumulation. Loss of airflow — from a worn fan, blocked filter, or failed motor — creates conditions that violate NFPA 33 and OSHA 1910.94. We measure CFM at the exhaust, verify negative pressure differentials, inspect fan blades and bearings, test motor amperage, and confirm that the ventilation interlock shuts down the spray gun when airflow drops below the required threshold.`,
    bullets: [
      "CFM measurement at exhaust and makeup air inlet",
      "Negative pressure differential verification",
      "Fan blade condition and balance check",
      "Motor amperage and bearing inspection",
      "Belt tension and drive condition assessment",
      "Ventilation interlock and safety shutdown testing",
    ],
    standards: ["NFPA 33", "OSHA 1910.94", "NFPA 70"],
  },
  {
    id: "controls-electrical",
    icon: <Zap size={22} />,
    label: "Controls & Electrical System Diagnostics",
    tagline: "Component-Level Diagnostics. Not Box Swapping.",
    desc: `Spray-to-waste booth controls manage the ventilation interlock, powder gun enable/disable, and — in pulse-jet models — the automated filter cleaning cycle. Faults in these systems can cause unplanned downtime, failed compliance inspections, or unsafe operating conditions. Our technicians diagnose at the component level: tracing faults through UL508A-certified control panels, verifying interlock logic, testing pulse-jet timer and solenoid valve operation, and confirming that all safety functions operate as designed.`,
    bullets: [
      "UL508A control panel inspection and diagnostics",
      "Ventilation interlock logic verification",
      "Pulse-jet timer and solenoid valve testing",
      "Powder gun enable/disable interlock confirmation",
      "Wiring and terminal condition inspection",
      "Component-level repair — not wholesale replacement",
    ],
    standards: ["UL 508A", "NFPA 70", "NFPA 33"],
  },
  {
    id: "booth-cleaning",
    icon: <Settings size={22} />,
    label: "Booth Interior Cleaning & Powder Removal",
    tagline: "Combustible Powder Accumulation Is a Fire Hazard.",
    desc: `Powder overspray that accumulates on booth walls, floors, and filter housings is a combustible material. NFPA 33 requires that powder accumulation be managed to prevent ignition risk. We perform thorough booth interior cleaning — removing accumulated powder from all surfaces, filter housings, and collection areas — and document the cleaning as part of the compliance record. Cleaning intervals depend on production volume and powder type; we recommend a schedule based on your specific operation.`,
    bullets: [
      "Booth interior surface powder removal",
      "Filter housing and plenum cleaning",
      "Collection tray and floor cleaning",
      "Grounding and bonding strap inspection",
      "Combustible powder accumulation documentation",
      "Recommended cleaning interval assessment",
    ],
    standards: ["NFPA 33", "OSHA 1910.94", "NFPA 654"],
  },
  {
    id: "grounding-bonding",
    icon: <Shield size={22} />,
    label: "Grounding, Bonding & Static Control",
    tagline: "Electrostatic Safety Is Non-Negotiable.",
    desc: `Electrostatic powder application requires proper grounding and bonding throughout the system — booth structure, conveyor, workpieces, and powder gun. A broken ground or missing bond strap creates a static discharge risk that can ignite accumulated powder. We inspect and verify all grounding and bonding connections, measure resistance to ground, and document the results. This inspection is particularly important after any booth modification, equipment replacement, or facility electrical work.`,
    bullets: [
      "Booth structure grounding continuity verification",
      "Workpiece conveyor and hook bonding inspection",
      "Powder gun ground cable condition check",
      "Resistance-to-ground measurement",
      "Bond strap replacement where required",
      "Static control documentation for compliance records",
    ],
    standards: ["NFPA 33", "NFPA 77", "OSHA 1910.304"],
  },
  {
    id: "preventive-maintenance",
    icon: <Wrench size={22} />,
    label: "Scheduled Preventive Maintenance Programs",
    tagline: "Downtime Is Expensive. Prevention Is Cheaper.",
    desc: `A scheduled preventive maintenance program for your spray-to-waste powder booth covers all critical systems on a defined interval — filters, ventilation, controls, grounding, and booth interior — and produces a complete compliance documentation package after every visit. PM contracts are available on quarterly, semi-annual, and annual schedules. Contract customers receive priority scheduling for emergency service calls and discounted parts pricing. We service PFS-manufactured booths and third-party spray-to-waste systems.`,
    bullets: [
      "Quarterly, semi-annual, and annual PM schedules",
      "Filter, ventilation, controls, and grounding coverage",
      "Complete compliance documentation after every visit",
      "Priority emergency response for contract customers",
      "Discounted replacement parts pricing",
      "Service for PFS and third-party spray-to-waste booths",
    ],
    standards: ["NFPA 33", "OSHA 1910.94", "EPA 40 CFR Part 63"],
  },
  {
    id: "compliance-inspection",
    icon: <Search size={22} />,
    label: "Compliance Inspections & Documentation",
    tagline: "Pass Inspections. Protect Your Operation.",
    desc: `Fire marshals, insurance auditors, and OSHA compliance officers require documented evidence of equipment maintenance — not verbal assurances. After every service visit, we provide a complete compliance documentation package: airflow measurements, filter condition records, equipment photographs, maintenance logs, and a written summary of findings and corrective actions. This documentation is formatted to meet OSHA 1910.94, NFPA 33, and state air quality authority requirements.`,
    bullets: [
      "Airflow and static pressure measurement data",
      "Filter condition records with replacement dates",
      "Equipment condition photographs with timestamps",
      "Written findings and corrective action summary",
      "OSHA 1910.94 and NFPA 33 compliance review",
      "Air quality authority inspection-ready records",
    ],
    standards: ["NFPA 33", "OSHA 1910.94", "EPA 40 CFR Part 63"],
  },
];

const FAQ = [
  {
    q: "What types of spray-to-waste powder booths do you service?",
    a: "We service all spray-to-waste powder booth configurations — including three-stage panel filter systems and pulse-jet cartridge filter systems. We service PFS-manufactured booths and third-party units. Our technicians work at the component level and are familiar with the NFPA 33 and OSHA 1910.94 standards that govern all powder coating booth operations.",
  },
  {
    q: "How often should spray-to-waste booth filters be replaced?",
    a: "Filter replacement intervals depend on production volume, powder type, and the filter system design. Panel filters in three-stage systems typically require inspection every 40–80 production hours and replacement when static pressure drop exceeds the manufacturer's specification. Pulse-jet cartridge filters have longer service intervals but require periodic inspection for media damage and seal integrity. We assess your specific operation and recommend a replacement schedule during the initial service visit.",
  },
  {
    q: "What is the difference between a three-stage filter system and a pulse-jet cartridge system?",
    a: "Three-stage panel filter systems use a series of progressively finer filter media panels to capture overspray. They are simpler and lower in initial cost but require more frequent manual filter replacement. Pulse-jet cartridge systems use pleated cartridge filters that are automatically cleaned by timed bursts of compressed air, extending filter life and reducing manual maintenance. Both systems must be maintained to NFPA 33 requirements to ensure safe booth operation.",
  },
  {
    q: "Do you provide compliance documentation after each service visit?",
    a: "Yes. Every service visit produces a complete documentation package: airflow measurements, filter condition records, equipment condition photographs, maintenance logs, and a written summary of findings and corrective actions. This documentation is formatted to meet OSHA, NFPA 33, and state air quality authority inspection requirements.",
  },
  {
    q: "Can you service a spray-to-waste booth you did not manufacture?",
    a: "Yes. We service the underlying systems — filters, ventilation, controls, and grounding — regardless of who manufactured the booth. Our technicians are familiar with the NFPA 33 and OSHA 1910.94 standards that govern all spray-to-waste powder coating booth operations.",
  },
  {
    q: "What geographic area do you cover?",
    a: "We provide spray-to-waste powder booth service nationwide, with primary coverage in California and the Western United States. Contact us to discuss scheduling and coverage for your facility.",
  },
];

export default function SprayToWasteServicePage() {
  const [openService, setOpenService] = useState<string | null>(null);
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useSEO({
    title: "Spray-to-Waste Powder Booth Service & Maintenance | Filter Replacement | NFPA 33 | PFS",
    description: "Professional service and preventive maintenance for spray-to-waste powder coating booths. Filter replacement (three-stage and pulse-jet cartridge), airflow testing, controls diagnostics, grounding inspection, and NFPA 33 compliance documentation. PFS-manufactured and third-party booths. Nationwide coverage.",
    canonical: "/service/spray-to-waste",
    jsonLd: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Service",
          "name": "Spray-to-Waste Powder Booth Service & Maintenance",
          "provider": {
            "@type": "Organization",
            "name": "Platinum Finishing Systems",
            "url": "https://pfsspraybooths.com",
            "telephone": "+18885457715",
          },
          "serviceType": "Powder Coating Booth Maintenance",
          "areaServed": { "@type": "Country", "name": "United States" },
          "description": "Filter replacement, airflow testing, controls diagnostics, grounding inspection, and NFPA 33 compliance documentation for spray-to-waste powder coating booths.",
          "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "Spray-to-Waste Booth Service Programs",
            "itemListElement": [
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Filter System Service & Replacement" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Airflow & Ventilation System Service" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Controls & Electrical System Diagnostics" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Booth Interior Cleaning & Powder Removal" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Grounding, Bonding & Static Control" } },
              { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Scheduled Preventive Maintenance Programs" } },
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
            { "@type": "ListItem", "position": 3, "name": "Spray-to-Waste Booth Service", "item": "https://pfsspraybooths.com/service/spray-to-waste" },
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
          backgroundPosition: "center 40%",
          backgroundRepeat: "no-repeat",
        }} />
        {/* Dark gradient overlay */}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(90deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.60) 50%, rgba(10,10,10,0.20) 100%)",
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
            PFS — POWDER COATING BOOTH SERVICES
          </div>
          <h1 style={{
            fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
            fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 900,
            color: "#fff", lineHeight: 1.0, textTransform: "uppercase",
            letterSpacing: "-0.01em", margin: "0 0 1rem",
          }}>
            Spray-to-Waste<br />Powder Booth<br />Service
          </h1>
          <p style={{
            fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
            fontSize: "clamp(0.88rem, 1.4vw, 1.02rem)",
            color: "rgba(255,255,255,0.78)", lineHeight: 1.65,
            maxWidth: "620px", margin: "0 0 0.75rem",
          }}>
            Filter replacement, airflow testing, controls diagnostics, booth cleaning, and NFPA 33 compliance documentation for spray-to-waste powder coating booths. Three-stage panel filter and pulse-jet cartridge systems. PFS-manufactured and third-party booths.
          </p>
          {/* Standards badges */}
          <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap", marginBottom: "1.75rem" }}>
            {["NFPA 33", "OSHA 1910.94", "NFPA 654", "NFPA 77", "UL 508A"].map((s) => (
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
            { label: "Filter Specialists", sub: "Three-stage panel and pulse-jet cartridge systems" },
            { label: "NFPA 33 Compliance", sub: "Documentation for fire marshal and insurance audits" },
            { label: "Nationwide Coverage", sub: "Primary service area: California and Western US" },
            { label: "PM Contracts Available", sub: "Quarterly, semi-annual, and annual schedules" },
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
            }}>Spray-to-Waste Systems We Service</h2>
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
              Structured PM programs keep your spray-to-waste booth running at peak performance and in full compliance. All plans include written documentation after every visit.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                tier: "Annual",
                freq: "1× per year",
                items: ["Full filter system inspection & replacement", "Airflow and pressure testing", "Controls and interlock verification", "Grounding and bonding inspection", "Booth interior cleaning", "Compliance documentation package"],
                cta: "GET ANNUAL PM QUOTE",
              },
              {
                tier: "Semi-Annual",
                freq: "2× per year",
                items: ["All Annual items — twice per year", "Mid-year filter condition check", "Ventilation interlock re-verification", "Priority scheduling", "Discounted parts pricing"],
                cta: "GET SEMI-ANNUAL QUOTE",
                featured: true,
              },
              {
                tier: "Quarterly",
                freq: "4× per year",
                items: ["All Semi-Annual items — quarterly", "Filter replacement on schedule", "Quarterly airflow trending data", "Priority emergency response", "Multi-site contract available"],
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
            Schedule Spray-to-Waste<br />Booth Service
          </h2>
          <p style={{
            fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
            fontSize: "1rem", color: "rgba(255,255,255,0.8)",
            lineHeight: 1.6, margin: "0 0 2rem",
          }}>
            Contact PFS to schedule a service visit, request a PM contract quote, or ask about filter replacement for your spray-to-waste powder coating booth.
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
            <Link href="/products/powder-booths/spray-to-waste">
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
