import React from 'react';
/*
 * NESHAP / Aerospace / Chromium Compliance Filters — SEO Landing Page
 * URL: /parts/filters/neshap-aerospace-compliance
 * Design: Matches PFS main site — Chakra Petch headlines, Archivo Narrow body,
 *         btn-glow / btn-outline CTAs, section-white / section-gray / section-dark.
 * Hero: MP4 video (pfs-parts-filters-hero) — same as PartsFiltersHub.
 * Gallery: 9 clean product photos via GalleryGrid.
 * Style reminder: retain the premium PFS dark/royal-blue visual system and use only original, buyer-useful filter guidance.
 */
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryLightbox";
import AccordionFilterMediaPair from "@/components/AccordionFilterMediaPair";
import { Phone, ArrowRight, CheckCircle, ShieldCheck, AlertTriangle, FileText } from "lucide-react";

const HERO_VIDEO  = "/assets/product_aerospace_jet_side_hero_ae4811fe.mp4";  // aerospace airplane video
const HERO_POSTER = "/assets/pfs-filters-card_8b47eabc.png";
const BLUE = "#1B3A6B";

const GALLERY_IMAGES = [
  { src: "/assets/filter-white-pad-3pocket_50577854.png",       alt: "White polyester intake filter pad — 3-pocket NESHAP stage 1",       pos: "center" },
  { src: "/assets/filter-white-pad-4pocket_a1f14561.png",       alt: "White polyester intake filter pad — 4-pocket NESHAP stage 1",       pos: "center" },
  { src: "/assets/filter-yellow-bag-pocket_ead240d7.png",       alt: "Yellow fiberglass pocket bag filter — NESHAP stage 2 exhaust",      pos: "center" },
  { src: "/assets/filter-pocket-bag-white_c73e3143.webp",       alt: "White pocket bag filter — high-efficiency aerospace finishing",         pos: "center" },
  { src: "/assets/filter-merv10-pleated-stack_0c3f473d.webp",   alt: "MERV 10 pleated panel filters — aerospace finishing application",              pos: "center" },
  { src: "/assets/filter-teal-intake-pad_c631f605.webp",        alt: "Teal fiberglass intake ceiling filter — aerospace booth grade",      pos: "center" },
  { src: "/assets/filter-wavy-exhaust-pad_203d2257.webp",       alt: "Wavy polyester exhaust floor filter — aerospace booth",      pos: "center" },
  { src: "/assets/filter-white-fiber-roll_c1e59d02.webp",       alt: "White fiberglass filter roll — cut-to-size for any booth",          pos: "center" },
  { src: "/assets/filter-yellow-fiberglass-roll_7bb68e90.webp", alt: "Yellow fiberglass filter roll — dual-layer NESHAP media",           pos: "center" },
  { src: "/assets/pfs-generic-accordion-filter_6c3e9169.png",   alt: "Generic accordion paint arrestor filter for aerospace booth exhaust review", pos: "center" },
  { src: "/assets/pfs-andreae-accordion-filter_4c1c78c4.png",   alt: "Andreae accordion exhaust filter for aerospace finishing documentation review", pos: "center" },
];

const FILTER_TYPES = [
  {
    img: "/assets/filter-white-pad-3pocket_50577854.png",
    name: "Intake / Ceiling Filters",
    desc: "Polyester and fiberglass intake pads support clean-air entry into the booth. Available in standard rolls or cut-to-size pads for a range of booth configurations.",
    tags: ["Ceiling / Intake", "Polyester & Fiberglass", "Filter Matching"],
  },
  {
    img: "/assets/filter-yellow-bag-pocket_ead240d7.png",
    name: "Exhaust / Floor Filters",
    desc: "Pocket bag and panel exhaust filters are selected by booth configuration, coating process, and available manufacturer media data. PFS can help review these inputs for regulated applications.",
    tags: ["Exhaust / Floor", "Documentation Review", "Aerospace Workflows"],
  },
  {
    img: "/assets/filter-pocket-bag-white_c73e3143.webp",
    name: "Pocket Bag Filters — High Efficiency",
    desc: "Multi-pocket bag filters deliver extended surface area and high dust-holding capacity. Ideal for aerospace rework facilities requiring documented capture efficiency data.",
    tags: ["Extended Surface", "Aerospace Workflows", "Documentation Review"],
  },
  {
    img: "/assets/filter-merv10-pleated-stack_0c3f473d.webp",
    name: "MERV-Rated Pleated Panel Filters",
    desc: "MERV 8–14 pleated panel filters for final-stage air cleaning in pressurized booths and clean-room adjacent finishing environments requiring particulate documentation.",
    tags: ["MERV 8–14", "Final Stage", "EPA Method 319"],
  },
];

const STANDARDS = [
  { code: "NESHAP GG", title: "40 CFR Part 63 Subpart GG", icon: <ShieldCheck size={22} />, desc: "A regulatory topic that may affect documentation and filter-system selection for certain aerospace rework operations." },
  { code: "EPA Method 319", title: "EPA Method 319 Test Protocol", icon: <FileText size={22} />, desc: "A test-method reference used in discussions of paint spray booth filter capture data. PFS can help request available manufacturer documentation." },
  { code: "NFPA 33", title: "NFPA 33 — Spray Application", icon: <AlertTriangle size={22} />, desc: "A spray-finishing standard that can inform booth operation, airflow, and filter-media considerations." },
  { code: "OSHA 1910.94", title: "OSHA 29 CFR 1910.94", icon: <CheckCircle size={22} />, desc: "A ventilation-related topic relevant to industrial finishing environments and facility safety programs." },
];

export default function NeshapFiltersPage() {
  useSEO({
    title: "NESHAP Aerospace Paint Booth Filters | Documentation Support | PFS",
    description: "Filter selection and manufacturer-documentation support for aerospace, chromium coating, and regulated finishing applications. Intake, exhaust, pocket bag, and accordion media guidance.",
    canonical: "/parts/filters/neshap-aerospace-compliance",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [{
        "@type": "Question",
        name: "Can Andreae exhaust media be used in a NESHAP-regulated application?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PFS evaluates the complete filter configuration, documented test data, coating process, and facility requirements before recommending any exhaust media for a regulated application. If a facility currently uses Andreae media, PFS can review the filter model and compliance requirements before confirming the proposed configuration."
        }
      }]
    },
  });

  return (
    <div>
      {/* HERO — video matching main site */}
      <PageHero
        title="NESHAP & Aerospace Filter Support"
        subtitle="Filter selection and manufacturer-documentation support for aerospace rework, chromium coating, and regulated finishing applications. PFS helps match intake, exhaust, pocket bag, and accordion media to your system."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Parts & Filters", href: "/parts" },
          { label: "NESHAP Compliance Filters" },
        ]}
        bgVideo={HERO_VIDEO}
        bgPoster={HERO_POSTER}
        ctaPricing
        ctaPricingHref="/contact"
        ctaPhone="(888) 545-7715"
        minHeight="580px"
      />

      {/* COMPLIANCE ALERT BANNER */}
      <section style={{ background: BLUE, borderBottom: "3px solid #0a0a0a" }}>
        <div className="container" style={{ padding: "1.1rem 0", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <ShieldCheck size={20} color="#fff" />
          <span style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            NESHAP GG · EPA METHOD 319 · MACT · NFPA 33 · OSHA 1910.94 — FILTER SELECTION & DOCUMENTATION SUPPORT
          </span>
          <Link href="/contact" style={{ marginLeft: "auto" }}>
            <span className="btn-glow" style={{ padding: "0.5rem 1.4rem", fontSize: "0.78rem", whiteSpace: "nowrap" }}>
              GET COMPLIANCE QUOTE →
            </span>
          </Link>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="py-16 section-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Regulated Environments</span>
              <h2 data-animation="slideLeft"  className="section-heading-lg">Filter Selection for Documented Workflows</h2>
              <div className="red-divider" />
              <p className="section-body mb-5">
                Aerospace rework facilities, military maintenance depots, and industrial coating lines may need to document their booth filtration and coating process. PFS helps identify media from manufacturers that provide relevant product information for the facility’s system — for PFS and non-PFS equipment.
              </p>
              <p className="section-body mb-8">
                PFS can help request available filter specification sheets and manufacturer data that a facility may evaluate for its maintenance, permit, or compliance file.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link data-animation="slideLeft" href="/contact">
                  <span className="btn-glow" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    Request Compliance Quote <ArrowRight size={14} />
                  </span>
                </Link>
                <a data-animation="slideRight" href="tel:+18885457715">
                  <span className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Phone size={14} /> (888) 545-7715
                  </span>
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { src: "/assets/filter-white-pad-3pocket_50577854.png", alt: "NESHAP stage 1 intake filter", bg: "#f5f5f5" },
                { src: "/assets/filter-yellow-bag-pocket_ead240d7.png", alt: "NESHAP stage 2 exhaust filter", bg: "#fffdf0" },
                { src: "/assets/filter-pocket-bag-white_c73e3143.webp", alt: "Pocket bag filter MACT", bg: "#f5f5f5" },
                { src: "/assets/filter-merv10-pleated-stack_0c3f473d.webp", alt: "MERV 10 pleated filter", bg: "#f5f5f5" },
              ].map((img) => (
                <div key={img.src} style={{ background: img.bg, borderRadius: "2px", aspectRatio: "1/1", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FILTER TYPE GRID */}
      <section className="py-16 section-gray">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label">Filter Types</span>
            <h2 data-animation="slideLeft" className="section-heading">Filter Media for NESHAP & Aerospace Workflows</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          <div data-animation="fadeIn" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FILTER_TYPES.map((ft) => (
              <div key={ft.name} className="card-hover" style={{ background: "#fff", borderRadius: "2px" }}>
                <div className="card-image" style={{ background: "#f4f4f2", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", overflow: "hidden" }}>
                  <img src={ft.img} alt={ft.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 data-animation="slideLeft" style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1C1C1E", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "0.6rem" }}>{ft.name}</h3>
                  <p data-animation="slideRight" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.83rem", color: "#555", lineHeight: 1.65, marginBottom: "0.9rem" }}>{ft.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {ft.tags.map((t) => (
                      <span key={t} style={{ background: "#EEF2FF", color: BLUE, fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.55rem", borderRadius: "2px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div data-animation="slideRight" style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/contact">
              <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                Order Compliance Filters <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <AccordionFilterMediaPair
        label="Accordion Exhaust Media"
        title="Accordion Media for Aerospace & Documented Workflows"
        intro="For regulated or aerospace finishing workflows, accordion exhaust media should be evaluated in the context of the complete booth configuration, coating process, and available manufacturer information."
        genericCopy="Generic accordion paint arrestor media may be part of an exhaust-side replacement discussion. PFS can help review the filter dimensions, booth airflow path, and current media before identifying options."
        andreaeCopy="PFS is an authorized Andreae Filters distributor. If the facility currently uses Andreae accordion media, share the filter model, dimensions, and application details so PFS can help review an appropriate replacement path."
        note="PFS can help request available manufacturer information. The facility and its advisors determine the complete documentation and compliance approach."
      />

      {/* COMPLIANCE STANDARDS */}
      <section className="py-16 section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>Regulatory Standards</span>
            <h2 data-animation="slideLeft" className="section-heading-white">Regulatory Topics That May Affect Filter Selection</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          <div data-animation="fadeIn" className="grid md:grid-cols-2 gap-6">
            {STANDARDS.map((s) => (
              <div key={s.code} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px", padding: "1.75rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.75rem" }}>
                  <span style={{ color: "#4A90D9" }}>{s.icon}</span>
                  <span style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "0.72rem", fontWeight: 800, color: "#4A90D9", letterSpacing: "0.15em", textTransform: "uppercase" }}>{s.code}</span>
                </div>
                <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "1.05rem", fontWeight: 700, color: "#fff", letterSpacing: "0.02em", marginBottom: "0.6rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.88rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-16 section-white">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Filter Media Gallery</span>
            <h2 data-animation="slideLeft" className="section-heading">Our Filtration Product Line</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          <GalleryGrid images={GALLERY_IMAGES} cardHeight="clamp(180px, 20vw, 280px)" />
        </div>
      </section>

      {/* MID-PAGE CTA BAND */}
      <section style={{ background: BLUE, padding: "3.5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 data-animation="slideLeft" style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
            Need Filter Documentation for a Regulated Facility?
          </h2>
          <p data-animation="slideLeft" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            PFS can help identify available manufacturer data, product information, and replacement guidance for your filter-selection review. Facility owners and their advisors determine the complete compliance approach.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link data-animation="slideLeft" href="/contact">
              <span className="btn-glow-white" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                Request Compliance Package <ArrowRight size={14} />
              </span>
            </Link>
            <a data-animation="slideRight"  href="tel:+18885457715">
              <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", borderColor: "rgba(255,255,255,0.5)", color: "#fff" }}>
                <Phone size={14} /> (888) 545-7715
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* WHY PFS */}
      <section className="py-16 section-gray">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Why PFS</span>
              <h2 data-animation="slideLeft" className="section-heading-lg">The Industrial Finishing Specialist</h2>
              <div className="red-divider" />
              <p data-animation="slideLeft" className="section-body mb-5">
                PFS was founded in 2012 in Santa Rosa, CA, bringing over 20 years of combined industrial finishing experience to every project. We supply filtration media for our own equipment and for many major booth brands — because documentation needs do not stop at the brand on the door.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                {["Ships from Santa Rosa, CA", "Filters for many major booth brands, not just PFS equipment", "Manufacturer information and filter specifications available on request", "Bulk pricing for MRO and facility maintenance programs", "Technical support from experienced finishing engineers"].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.65rem" }}>
                    <CheckCircle size={16} color={BLUE} style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.9rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link data-animation="slideLeft"  href="/contact">
                  <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    Get a Quote <ArrowRight size={14} />
                  </span>
                </Link>
                <Link data-animation="slideRight" href="/parts/filters/paint-booth-filters">
                  <span className="btn-outline">All Filter Types →</span>
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "10px" }}>
              {[
                { src: "/assets/filter-teal-intake-pad_c631f605.webp", alt: "Teal intake pad", bg: "#f0f9f8" },
                { src: "/assets/filter-wavy-exhaust-pad_203d2257.webp", alt: "Wavy exhaust pad", bg: "#f5f5f5" },
                { src: "/assets/filter-white-fiber-roll_c1e59d02.webp", alt: "White fiber roll", bg: "#f5f5f5" },
                { src: "/assets/filter-yellow-fiberglass-roll_7bb68e90.webp", alt: "Yellow fiberglass roll", bg: "#fffdf0" },
              ].map((img) => (
                <div key={img.src} style={{ background: img.bg, borderRadius: "2px", aspectRatio: "1/1", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
                  <img src={img.src} alt={img.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 section-white">
        <div className="container" style={{ maxWidth: "820px", margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">FAQ</span>
            <h2 data-animation="slideLeft" className="section-heading">Common Compliance Questions</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          {[
            { q: "How does NESHAP Subpart GG affect paint booth filter selection?", a: "NESHAP Subpart GG can be relevant to aerospace rework operations using certain coating processes. The complete filter configuration, coating process, and available manufacturer documentation should be reviewed by the facility and its advisors. PFS can help identify media options and product information for that review." },
            { q: "What is EPA Method 319?", a: "EPA Method 319 is a referenced test method for evaluating paint spray booth filter capture data. PFS can help request available manufacturer test information for the media being considered; the facility determines whether the documentation meets its needs." },
            { q: "Do you supply filters for booths you didn't manufacture?", a: "Yes. PFS supplies filtration media for all major spray booth brands — including Binks, DeVilbiss, Global Finishing Solutions, Garmat, Col-Met, and others. If your booth uses a standard filter size, we can supply it." },
            { q: "How often should filters be replaced in a regulated finishing operation?", a: "Replacement intervals depend on coating volume, filter loading, booth airflow, the manufacturer’s guidance, and the facility’s own program. PFS can help create a practical replacement discussion using the current media and booth configuration." },
            { q: "Can you provide documentation for our facility file?", a: "PFS can help request available filter specification sheets and manufacturer product information for the media being considered. The facility and its advisors decide how that information is used in its records." },
            { q: "Do you offer bulk pricing for MRO programs?", a: "Yes. PFS offers bulk pricing and scheduled delivery programs for facilities with ongoing filter replacement needs. Contact our parts team for volume pricing and blanket order arrangements." },
            { q: "Can Andreae accordion exhaust media be used in a NESHAP-regulated application?", a: "PFS evaluates the complete filter configuration, documented manufacturer data, coating process, and facility requirements before recommending any exhaust media for a regulated application. If you currently use Andreae accordion media, send the filter model, dimensions, and application details so we can help review the proposed replacement." },
          ].map(({ q, a }, _idx) => {
            const [faqOpen, setFaqOpen] = React.useState(false);
            return (
              <div key={q} style={{ borderBottom: "1px solid #e5e5e5" }}>
                <button
                  onClick={() => setFaqOpen(!faqOpen)}
                  style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.1rem 0", background: "none", border: "none", cursor: "pointer", textAlign: "left", gap: "1rem" }}
                >
                  <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "0.92rem", fontWeight: 700, color: "#1C1C1E", letterSpacing: "0.01em", margin: 0 }}>{q}</h3>
                  <span style={{ fontSize: "1.1rem", color: "#1B2B4B", fontWeight: 700, flexShrink: 0, lineHeight: 1 }}>{faqOpen ? "−" : "+"}</span>
                </button>
                {faqOpen && (
                  <div style={{ paddingBottom: "1rem" }}>
                    <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.88rem", color: "#555", lineHeight: 1.7, margin: 0 }}>{a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="section-dark" style={{ padding: "4rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 data-animation="slideLeft" style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", marginBottom: "1rem" }}>
            Ready to Order NESHAP Compliance Filters?
          </h2>
          <p data-animation="slideLeft" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Call our parts team or submit a quote request. We'll confirm filter specs, provide documentation, and ship from Santa Rosa, CA.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link data-animation="slideLeft" href="/contact">
              <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                GET COMPLIANCE QUOTE <ArrowRight size={15} />
              </span>
            </Link>
            <a data-animation="slideRight" href="tel:+18885457715">
              <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                <Phone size={15} /> (888) 545-7715
              </span>
            </a>
            <Link data-animation="slideRight" href="/parts/filters/california-west-coast-paint-booth-filters">
              <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                California Filters →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
