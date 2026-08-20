import React from 'react';
/*
 * California & West Coast Paint Booth Filters — SEO Landing Page
 * URL: /parts/filters/california-west-coast-paint-booth-filters
 * Design: Matches PFS main site — Chakra Petch headlines, Archivo Narrow body,
 *         btn-glow / btn-outline CTAs, section-white / section-gray / section-dark.
 * Hero: MP4 video (pfs-parts-filters-hero) — same as PartsFiltersHub.
 * Gallery: 9 clean product photos via GalleryGrid.
 * Target: California paint booth filters, SCAQMD, CARB, Bay Area, Los Angeles, San Diego.
 * Style reminder: retain the premium PFS dark/royal-blue visual system and use only original, buyer-useful filter guidance.
 */
import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import PageHero from "@/components/PageHero";
import { GalleryGrid } from "@/components/GalleryLightbox";
import AccordionFilterMediaPair from "@/components/AccordionFilterMediaPair";
import { Phone, ArrowRight, CheckCircle, MapPin, Truck, Shield } from "lucide-react";

const HERO_VIDEO  = "/assets/pfs-parts-filters-hero_9a1b0b80.mp4";
const HERO_POSTER = "/assets/pfs-filters-card_8b47eabc.png";
const BLUE = "#1B3A6B";

const GALLERY_IMAGES = [
  { src: "/assets/filter-teal-intake-pad_c631f605.webp",        alt: "Teal fiberglass intake ceiling filter — California paint booth",     pos: "center" },
  { src: "/assets/filter-white-pad-3pocket_50577854.png",       alt: "White polyester intake filter pad — 3-pocket California booth",      pos: "center" },
  { src: "/assets/filter-yellow-fiberglass-roll_7bb68e90.webp", alt: "Yellow fiberglass filter roll — California paint booth",        pos: "center" },
  { src: "/assets/filter-white-pad-4pocket_a1f14561.png",       alt: "White polyester intake filter pad — 4-pocket West Coast booth",      pos: "center" },
  { src: "/assets/filter-yellow-bag-pocket_ead240d7.png",       alt: "Yellow fiberglass pocket bag filter — exhaust California booth",     pos: "center" },
  { src: "/assets/filter-wavy-exhaust-pad_203d2257.webp",       alt: "Wavy polyester exhaust floor filter — California finishing shop",    pos: "center" },
  { src: "/assets/filter-pocket-bag-white_c73e3143.webp",       alt: "White pocket bag filter — high-efficiency California finishing",    pos: "center" },
  { src: "/assets/filter-merv10-pleated-stack_0c3f473d.webp",   alt: "MERV 10 pleated panel filters — California finishing application",      pos: "center" },
  { src: "/assets/filter-white-fiber-roll_c1e59d02.webp",       alt: "White fiberglass filter roll — cut-to-size California shop",        pos: "center" },
  { src: "/assets/pfs-generic-accordion-filter_6c3e9169.png",   alt: "Generic accordion paint arrestor filter for California spray booth exhaust", pos: "center" },
  { src: "/assets/pfs-andreae-accordion-filter_4c1c78c4.png",   alt: "Andreae accordion exhaust filter for California spray booth replacement", pos: "center" },
];

const FILTER_TYPES = [
  {
    img: "/assets/filter-teal-intake-pad_c631f605.webp",
    name: "Intake & Ceiling Filters",
    desc: "Fiberglass and polyester ceiling diffusion blankets and intake pads for downdraft and crossdraft booths. PFS can help match filter media to your airflow configuration and available permit documentation.",
    tags: ["Intake / Ceiling", "Permit-Aware Support", "All Booth Types"],
  },
  {
    img: "/assets/filter-yellow-bag-pocket_ead240d7.png",
    name: "Exhaust & Floor Filters",
    desc: "High-efficiency exhaust floor filters for California auto body, aerospace, and industrial finishing shops. Fiberglass and synthetic media can be matched to the booth configuration and applicable documentation.",
    tags: ["Exhaust / Floor", "Fitment Support", "High Efficiency"],
  },
  {
    img: "/assets/filter-pocket-bag-white_c73e3143.webp",
    name: "Pocket Bag Filters",
    desc: "Multi-pocket bag filters for extended service life and high dust-holding capacity. Ideal for high-volume California finishing operations and aerospace rework facilities.",
    tags: ["Pocket Bag", "Extended Life", "High Volume"],
  },
  {
    img: "/assets/filter-merv10-pleated-stack_0c3f473d.webp",
    name: "MERV-Rated Pleated Filters",
    desc: "MERV 8–14 pleated panel filters for final-stage air cleaning. Used in California clean-room adjacent finishing environments and booths subject to AQMD permit documentation.",
    tags: ["MERV 8–14", "Final Stage", "AQMD Documented"],
  },
];

const REGIONS = [
  { name: "Los Angeles County", sub: "SCAQMD Rule 1151 · South Coast AQMD", icon: <MapPin size={18} /> },
  { name: "Bay Area / Northern CA", sub: "BAAQMD · Sacramento Valley AQMD", icon: <MapPin size={18} /> },
  { name: "San Diego County", sub: "SDAPCD · Border Region", icon: <MapPin size={18} /> },
  { name: "Central Valley", sub: "San Joaquin APCD · Fresno", icon: <MapPin size={18} /> },
  { name: "Oregon & Washington", sub: "DEQ Oregon · Ecology WA", icon: <MapPin size={18} /> },
  { name: "Nevada & Arizona", sub: "NDEP · ADEQ", icon: <MapPin size={18} /> },
];

export default function CaliforniaFiltersPage() {
  useSEO({
    title: "California Paint Booth Filters | Accordion Exhaust & Intake Media | PFS",
    description: "Paint booth filters for California, Los Angeles, Bay Area, San Diego, and West Coast shops. Accordion exhaust, intake, ceiling, pocket bag, and replacement media with PFS fitment support.",
    canonical: "/parts/filters/california-west-coast-paint-booth-filters",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: [{
        "@type": "Question",
        name: "Can you source Andreae paint booth filters for California shops?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "PFS is an authorized Andreae filter distributor and can help California and West Coast shops identify applicable Andreae exhaust media by filter model, dimensions, booth configuration, and current product availability."
        }
      }]
    },
  });

  return (
    <div>
      {/* HERO */}
      <PageHero
        title="California & West Coast Paint Booth Filters"
        subtitle="Filtration media for California auto body, aerospace, and industrial finishing shops. PFS helps match intake, exhaust, and accordion paint arrestor media to your booth and available documentation."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Parts & Filters", href: "/parts" },
          { label: "California Filters" },
        ]}
        bgVideo={HERO_VIDEO}
        bgPoster={HERO_POSTER}
        ctaPricing
        ctaPricingHref="/contact"
        ctaPhone="(888) 545-7715"
        minHeight="580px"
      />

      {/* SHIPPING BANNER */}
      <section style={{ background: BLUE, borderBottom: "3px solid #0a0a0a" }}>
        <div className="container" style={{ padding: "1.1rem 0", display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
          <Truck size={20} color="#fff" />
          <span style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "0.78rem", fontWeight: 700, color: "#fff", letterSpacing: "0.12em", textTransform: "uppercase" }}>
            Ships from Santa Rosa, CA — Fast delivery to all California regions, Oregon, Washington, Nevada & Arizona
          </span>
          <Link href="/contact" style={{ marginLeft: "auto" }}>
            <span className="btn-glow" style={{ padding: "0.5rem 1.4rem", fontSize: "0.78rem", whiteSpace: "nowrap" }}>
              GET CALIFORNIA QUOTE →
            </span>
          </Link>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="py-16 section-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">California & West Coast</span>
              <h2 data-animation="slideLeft" className="section-heading-lg">Filters for Every California Finishing Operation</h2>
              <div className="red-divider" />
              <p className="section-body mb-5">
                California finishing operations often work under air district and permit requirements. SCAQMD Rule 1151 in Los Angeles, BAAQMD guidance in the Bay Area, and statewide CARB programs can affect the documentation a facility maintains. PFS helps identify filter media for auto body shops, aerospace facilities, industrial coating lines, and custom fabricators across the state.
              </p>
              <p className="section-body mb-8">
                PFS manufactures spray booths in Santa Rosa, CA and supports California filter inquiries with booth-aware matching. Share a photo, current media, dimensions, and booth configuration for a clear replacement quote and documentation discussion.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link data-animation="slideLeft" href="/contact">
                  <span className="btn-glow" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    Get California Quote <ArrowRight size={14} />
                  </span>
                </Link>
                <a data-animation="slideRight" href="tel:+18885457715">
                  <span className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Phone size={14} /> (888) 545-7715
                  </span>
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { src: "/assets/filter-teal-intake-pad_c631f605.webp", alt: "Teal intake pad California" },
                { src: "/assets/filter-yellow-bag-pocket_ead240d7.png", alt: "Exhaust filter California" },
                { src: "/assets/filter-white-pad-3pocket_50577854.png", alt: "Intake pad California" },
                { src: "/assets/filter-yellow-fiberglass-roll_7bb68e90.webp", alt: "Fiberglass roll California" },
              ].map((img) => (
                <div key={img.src} style={{ background: "#f5f5f5", borderRadius: "2px", aspectRatio: "1/1", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
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
            <h2 data-animation="slideLeft" className="section-heading">Filter Media for California Finishing Operations</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          <div data-animation="fadeIn" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {FILTER_TYPES.map((ft) => (
              <div key={ft.name} className="card-hover" style={{ background: "#fff", borderRadius: "2px"}}>
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
                Order California Filters <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <AccordionFilterMediaPair
        label="California Accordion Media"
        title="Accordion Exhaust Filters for California Booths"
        intro="California finishing operations can send PFS a photo of the existing media, booth configuration, dimensions, and available documentation for replacement-media matching."
        genericCopy="Generic accordion paint arrestor media is a practical exhaust-side replacement format for many liquid spray booths. PFS can help identify a suitable format from the current filter and booth configuration."
        andreaeCopy="PFS is an authorized Andreae Filters distributor and can help California and West Coast shops identify Andreae accordion exhaust media using the current model, dimensions, and booth details."
        note="PFS can discuss available manufacturer information for the media being considered. Facility owners and their advisors determine the complete permit or compliance approach."
      />

      {/* REGIONS SERVED */}
      <section className="py-16 section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "3rem" }}>
            <span className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>Service Area</span>
            <h2 data-animation="slideLeft" className="section-heading-white">West Coast Regions We Serve</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          <div data-animation="fadeIn" className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {REGIONS.map((r) => (
              <div key={r.name} style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "2px", padding: "1.5rem", display: "flex", alignItems: "flex-start", gap: "0.9rem" }}>
                <span style={{ color: "#4A90D9", marginTop: "0.1rem", flexShrink: 0 }}>{r.icon}</span>
                <div>
                  <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 700, color: "#fff", letterSpacing: "0.02em", marginBottom: "0.3rem" }}>{r.name}</h3>
                  <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.55)" }}>{r.sub}</p>
                </div>
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
            California Shop? Start With the Right Filter Match.
          </h2>
          <p data-animation="slideLeft" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            PFS manufactures in Santa Rosa, CA. Send your booth type, dimensions, current media, and application so our team can help identify the right intake, exhaust, or accordion paint arrestor format.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link data-animation="slideLeft" href="/contact">
              <span className="btn-glow-white" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                Get California Quote <ArrowRight size={14} />
              </span>
            </Link>
            <a data-animation="slideRight" href="tel:+18885457715">
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
              <h2 data-animation="slideLeft" className="section-heading-lg">California's Industrial Finishing Specialist</h2>
              <div className="red-divider" />
              <p data-animation="slideLeft" className="section-body mb-5">
                PFS was founded in 2012 in Santa Rosa, CA, bringing over 20 years of combined industrial finishing experience to every project. We design, manufacture, and service spray booths and supply filtration media for our own equipment and for every major booth brand operating in California.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                {[
                  "Manufactured and shipped from Santa Rosa, CA",
                  "Filters for all major booth brands, not just PFS equipment",
                  "Fitment and documentation support for SCAQMD, BAAQMD, and CARB-related facility requirements",
                  "Same-day quotes for California addresses",
                  "Bulk pricing for multi-location and fleet accounts",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.65rem" }}>
                    <CheckCircle size={16} color={BLUE} style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.9rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link data-animation="slideLeft" href="/contact">
                  <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    Get a Quote <ArrowRight size={14} />
                  </span>
                </Link>
                <Link data-animation="slideRight" href="/parts/filters/neshap-aerospace-compliance">
                  <span className="btn-outline">NESHAP Compliance →</span>
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { src: "/assets/filter-wavy-exhaust-pad_203d2257.webp", alt: "Wavy exhaust pad" },
                { src: "/assets/filter-white-fiber-roll_c1e59d02.webp", alt: "White fiber roll" },
                { src: "/assets/filter-pocket-bag-white_c73e3143.webp", alt: "Pocket bag filter" },
                { src: "/assets/filter-merv10-pleated-stack_0c3f473d.webp", alt: "MERV 10 filter" },
              ].map((img) => (
                <div key={img.src} style={{ background: "#f5f5f5", borderRadius: "2px", aspectRatio: "1/1", overflow: "hidden", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem" }}>
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
            <h2 data-animation="slideLeft"  className="section-heading">California Filter Questions</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          {[
            { q: "How do SCAQMD Rule 1151 or permit requirements affect filter selection?", a: "A facility’s permit conditions and coating process can affect what it documents about its booth and filtration. PFS can help match intake and exhaust media to the booth configuration and provide available manufacturer information; the facility and its regulatory advisors determine the complete permit or compliance approach." },
            { q: "Do California auto body shops need special filters?", a: "The appropriate filter depends on the booth configuration, airflow direction, coating process, and the facility’s permit conditions. PFS can help identify intake, ceiling, exhaust, pocket bag, or accordion paint arrestor media for the booth and discuss the available product documentation." },
            { q: "What is CARB and does it affect my paint booth filters?", a: "CARB is the California Air Resources Board. California coating operations may also work with local air districts and permit conditions. PFS can help identify media options and manufacturer information relevant to the booth; facility owners should confirm their specific regulatory requirements with the appropriate authority or advisor." },
            { q: "Do you supply filters for booths not made by PFS?", a: "Yes. PFS supplies replacement filters for all major booth brands operating in California — including Binks, DeVilbiss, Global Finishing Solutions, Garmat, Col-Met, and others. Call or email with your booth model and we will identify the correct filter dimensions and media type." },
            { q: "How fast can you ship to California?", a: "PFS manufactures in Santa Rosa, CA. Most California orders ship the same or next business day. Delivery times vary by destination, but most California addresses receive orders within 1–3 business days. We also offer scheduled delivery programs for shops with regular replacement needs." },
            { q: "Do you offer bulk pricing for California shops?", a: "Yes. PFS offers bulk pricing for California shops, dealership groups, and multi-location operators. We also offer scheduled delivery programs so you never run out of filters during a busy production period. Contact our parts team for volume pricing." },
            { q: "Do you source accordion exhaust or Andreae paint arrestor filters for California booths?", a: "Yes. PFS is an authorized Andreae filter distributor and can help California and West Coast shops identify an accordion-style paint arrestor or other exhaust media using the current filter model, dimensions, booth configuration, and a photo of the existing media." },
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
            Order California Paint Booth Filters Today
          </h2>
          <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Call our parts team or submit a quote request. We ship from Santa Rosa, CA and can help match the replacement media to your booth.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link data-animation="slideLeft" href="/contact">
              <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                GET CALIFORNIA QUOTE <ArrowRight size={15} />
              </span>
            </Link>
            <a data-animation="fadeIn" href="tel:+18885457715">
              <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                <Phone size={15} /> (888) 545-7715
              </span>
            </a>
            <Link data-animation="slideRight" href="/parts/filters/paint-booth-filters">
              <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                All Filter Types →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
