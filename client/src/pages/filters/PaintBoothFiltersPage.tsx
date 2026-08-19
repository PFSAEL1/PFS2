import React from 'react';
/*
 * National Paint Booth Filters — Broad SEO Landing Page
 * URL: /parts/filters/paint-booth-filters
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
import { Phone, ArrowRight, CheckCircle, Package, Truck, Star } from "lucide-react";

const HERO_VIDEO  = "/assets/pfs-parts-filters-hero_9a1b0b80.mp4";
const HERO_POSTER = "/assets/pfs-filters-card_8b47eabc.png";
const BLUE = "#1B3A6B";

const GALLERY_IMAGES = [
  { src: "/assets/filter-white-pad-3pocket_50577854.png",       alt: "White polyester intake filter pad — 3-pocket paint booth",          pos: "center" },
  { src: "/assets/filter-teal-intake-pad_c631f605.webp",        alt: "Teal fiberglass intake ceiling filter — spray booth",               pos: "center" },
  { src: "/assets/filter-yellow-fiberglass-roll_7bb68e90.webp", alt: "Yellow fiberglass filter roll — paint booth exhaust media",         pos: "center" },
  { src: "/assets/filter-white-pad-4pocket_a1f14561.png",       alt: "White polyester intake filter pad — 4-pocket spray booth",          pos: "center" },
  { src: "/assets/filter-yellow-bag-pocket_ead240d7.png",       alt: "Yellow fiberglass pocket bag filter — exhaust paint booth",         pos: "center" },
  { src: "/assets/filter-pocket-bag-white_c73e3143.webp",       alt: "White pocket bag filter — high-efficiency spray booth",             pos: "center" },
  { src: "/assets/filter-merv10-pleated-stack_0c3f473d.webp",   alt: "MERV 10 pleated panel filters — paint booth final stage",           pos: "center" },
  { src: "/assets/filter-wavy-exhaust-pad_203d2257.webp",       alt: "Wavy polyester exhaust floor filter — spray booth",                 pos: "center" },
  { src: "/assets/filter-white-fiber-roll_c1e59d02.webp",       alt: "White fiberglass filter roll — cut-to-size paint booth",            pos: "center" },
  { src: "/assets/pfs-generic-accordion-filter_6c3e9169.png",   alt: "Generic accordion paint arrestor filter for spray booth exhaust replacement", pos: "center" },
  { src: "/assets/pfs-andreae-accordion-filter_4c1c78c4.png",   alt: "Andreae accordion exhaust filter with branded packaging",            pos: "center" },
];

const FILTER_TYPES = [
  {
    img: "/assets/filter-teal-intake-pad_c631f605.webp",
    name: "Intake & Ceiling Filters",
    desc: "Fiberglass and polyester ceiling diffusion blankets and intake pads for downdraft, semi-downdraft, and crossdraft booths. Maintains proper airflow balance and protects downstream media.",
    tags: ["Intake / Ceiling", "All Booth Types", "Fiberglass & Polyester"],
  },
  {
    img: "/assets/filter-yellow-bag-pocket_ead240d7.png",
    name: "Exhaust & Floor Filters",
    desc: "High-efficiency exhaust floor filters for auto body, industrial, and aerospace finishing operations. Fiberglass and synthetic media in standard and high-capacity grades.",
    tags: ["Exhaust / Floor", "High Capacity", "Industrial Grade"],
  },
  {
    img: "/assets/filter-wavy-exhaust-pad_203d2257.webp",
    name: "Accordion Exhaust & Paint Arrestor Filters",
    desc: "Accordion-style exhaust media is used in many liquid spray booths to collect overspray at the exhaust side. Send a photo, dimensions, booth layout, and whether a wire grid is used so PFS can help match the replacement media.",
    tags: ["Accordion Exhaust", "Paint Arrestor", "Fitment Support"],
  },
  {
    img: "/assets/filter-pocket-bag-white_c73e3143.webp",
    name: "Pocket Bag Filters",
    desc: "Multi-pocket bag filters for extended surface area and high dust-holding capacity. Used in high-volume finishing operations and compliance-regulated environments.",
    tags: ["Pocket Bag", "Extended Surface", "High Volume"],
  },
  {
    img: "/assets/filter-merv10-pleated-stack_0c3f473d.webp",
    name: "MERV-Rated Pleated Filters",
    desc: "MERV 8-14 pleated panel filters for final-stage air cleaning. Used in pressurized booths and finishing environments requiring documented particulate capture.",
    tags: ["MERV 8-14", "Final Stage", "Documented Capture"],
  },
  {
    img: "/assets/filter-yellow-fiberglass-roll_7bb68e90.webp",
    name: "Fiberglass Media Rolls",
    desc: "Continuous fiberglass filter rolls for cut-to-size applications. Available in standard and high-efficiency grades for intake and exhaust applications.",
    tags: ["Cut-to-Size", "Continuous Roll", "Fiberglass"],
  },
  {
    img: "/assets/filter-white-fiber-roll_c1e59d02.webp",
    name: "Polyester Media Rolls",
    desc: "White polyester fiber rolls for ceiling diffusion and intake applications. Soft, high-loft media that distributes airflow evenly across the booth ceiling.",
    tags: ["Polyester", "Ceiling Diffusion", "Soft Loft"],
  },
];

const BOOTH_BRANDS = [
  "Accudraft", "Binks", "Blowtherm", "CMC", "Col-Met", "DeVilbiss",
  "Garmat", "Global Finishing Solutions", "GFS", "Nordson", "Spray Systems",
  "USI Italia", "Eurovac", "Spray Tech", "Standard Tools",
];

export default function PaintBoothFiltersPage() {
  useSEO({
    title: "Paint Booth Filters, Accordion Exhaust & Andreae Media | PFS",
    description: "Replacement paint booth filters, accordion exhaust and paint arrestor media, plus authorized Andreae support. Intake, ceiling, exhaust, pocket bag, and roll media for major booth brands.",
    canonical: "/parts/filters/paint-booth-filters",
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebPage",
        name: "Paint Booth Filters, Accordion Exhaust & Andreae Media | PFS",
        url: "https://pfsspraybooths.com/parts/filters/paint-booth-filters",
        about: [
          { "@type": "Thing", name: "Paint booth replacement filters" },
          { "@type": "Thing", name: "Accordion exhaust and paint arrestor filters" },
          { "@type": "Thing", name: "Andreae paint booth exhaust filters" }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: [{
          "@type": "Question",
          name: "Do you supply Andreae paint booth filters?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "PFS is an authorized Andreae filter distributor. Share your current model, dimensions, booth configuration, or a photo of the existing media and PFS will confirm the applicable Andreae replacement product and current availability."
          }
        }]
      }
    ],
  });

  return (
    <div>
      {/* HERO */}
      <PageHero
        title="Paint Booth Filters & Replacement Media"
        subtitle="Intake filters, exhaust filters, ceiling diffusion blankets, pocket bag filters, and fiberglass media rolls for all major spray booth brands. Ships nationwide from Santa Rosa, CA."
        breadcrumbs={[
          { label: "Products", href: "/products" },
          { label: "Parts & Filters", href: "/parts" },
          { label: "Paint Booth Filters" },
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
            Ships nationwide from Santa Rosa, CA — All major booth brands — Same-day quotes
          </span>
          <Link href="/contact" style={{ marginLeft: "auto" }}>
            <span className="btn-glow" style={{ padding: "0.5rem 1.4rem", fontSize: "0.78rem", whiteSpace: "nowrap" }}>
              GET FILTER QUOTE →
            </span>
          </Link>
        </div>
      </section>

      {/* INTRO SPLIT */}
      <section className="py-16 section-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Replacement Filters</span>
              <h2 className="section-heading-lg">The Right Filter for Every Booth</h2>
              <div className="red-divider" />
              <p className="section-body mb-5">
                Using the correct filter media is critical to maintaining your booth's airflow performance, finish quality, and maintenance or permit documentation. The wrong filter — wrong efficiency rating, wrong dimensions, wrong media type — can contribute to pressure-drop issues, overspray blowback, and avoidable inspection questions.
              </p>
              <p className="section-body mb-8">
                PFS helps source intake filters, exhaust filters, ceiling diffusion blankets, pocket bag filters, fiberglass media rolls, and accordion-style paint arrestor media for PFS and non-PFS equipment. Call or submit a quote request and we will help match the filter to your booth.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <span className="btn-glow" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    Get Filter Quote <ArrowRight size={14} />
                  </span>
                </Link>
                <a href="tel:+18885457715">
                  <span className="btn-outline" style={{ display: "flex", alignItems: "center", gap: "0.4rem" }}>
                    <Phone size={14} /> (888) 545-7715
                  </span>
                </a>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { src: "/assets/filter-teal-intake-pad_c631f605.webp", alt: "Teal intake pad" },
                { src: "/assets/filter-yellow-bag-pocket_ead240d7.png", alt: "Yellow bag pocket filter" },
                { src: "/assets/filter-white-pad-3pocket_50577854.png", alt: "White 3-pocket pad" },
                { src: "/assets/filter-merv10-pleated-stack_0c3f473d.webp", alt: "MERV 10 pleated" },
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
            <h2 className="section-heading">Complete Filter Media Catalog</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FILTER_TYPES.map((ft) => (
              <div key={ft.name} className="card-hover" style={{ background: "#fff", borderRadius: "2px", overflow: "hidden" }}>
                <div style={{ background: "#f4f4f2", aspectRatio: "4/3", display: "flex", alignItems: "center", justifyContent: "center", padding: "1.5rem", overflow: "hidden" }}>
                  <img src={ft.img} alt={ft.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                </div>
                <div style={{ padding: "1.25rem" }}>
                  <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#1C1C1E", letterSpacing: "0.02em", textTransform: "uppercase", marginBottom: "0.6rem" }}>{ft.name}</h3>
                  <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.83rem", color: "#555", lineHeight: 1.65, marginBottom: "0.9rem" }}>{ft.desc}</p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.35rem" }}>
                    {ft.tags.map((t) => (
                      <span key={t} style={{ background: "#EEF2FF", color: BLUE, fontSize: "0.68rem", fontWeight: 700, padding: "0.2rem 0.55rem", borderRadius: "2px", letterSpacing: "0.05em", textTransform: "uppercase" }}>{t}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: "2.5rem" }}>
            <Link href="/contact">
              <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                Order Filters Now <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      <AccordionFilterMediaPair
        label="Accordion Exhaust Media"
        title="Two Paths to the Right Accordion Filter"
        intro="Whether you are replacing a generic paint arrestor or matching existing Andreae media, PFS can help identify an appropriate exhaust-side replacement from your booth details."
        genericCopy="Generic accordion paint arrestor media is used in many liquid spray booths for exhaust-side overspray collection. Send the dimensions, exhaust layout, and whether a wire grid is used so PFS can help match the format."
        andreaeCopy="PFS is an authorized Andreae Filters distributor. For Andreae replacement media, share the existing filter model, dimensions, booth configuration, or a photo of the current filter for fitment support."
        note="Andreae is a trademark of its respective owner. Product selection and fitment are confirmed by PFS at quote time."
      />

      {/* ANDREAE DISTRIBUTOR SUPPORT — original PFS copy, no change to page visual system */}
      <section className="py-16 section-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div>
              <span className="section-label">Authorized Filter Support</span>
              <h2 className="section-heading-lg">Accordion Exhaust Filters & Authorized Andreae Support</h2>
              <div className="red-divider" />
              <p className="section-body mb-5">
                PFS is an authorized Andreae filter distributor. We help finishing operations identify appropriate exhaust media for their booth configuration, production volume, and replacement schedule — including accordion-style paint arrestor media, pads, rolls, and related filter formats.
              </p>
              <p className="section-body mb-8">
                Send us your existing filter model, dimensions, booth make, or a photo of the filter rack. Our team will confirm the applicable product and quote the correct replacement media rather than asking you to guess at a generic size.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    Request Andreae Filter Quote <ArrowRight size={14} />
                  </span>
                </Link>
                <a href="tel:+18885457715">
                  <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    <Phone size={14} /> (888) 545-7715
                  </span>
                </a>
              </div>
            </div>
            <div style={{ background: "#f4f4f2", borderLeft: `4px solid ${BLUE}`, padding: "clamp(1.5rem, 4vw, 2.5rem)" }}>
              <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 800, color: "#1C1C1E", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "1rem" }}>What to Send for Fitment Help</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {["Current filter model or a photo of the packaging", "Filter dimensions and quantity required", "Booth make, model, and airflow configuration", "Whether the exhaust panel uses a wire grid", "Whether the media is serving intake, exhaust, or a final stage"].map((item) => (
                  <li key={item} style={{ display: "flex", gap: "0.65rem", alignItems: "flex-start", marginBottom: "0.8rem" }}>
                    <CheckCircle size={16} color={BLUE} style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.92rem", color: "#444", lineHeight: 1.55 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.74rem", color: "#777", lineHeight: 1.55, margin: "1.3rem 0 0" }}>Andreae is a trademark of its respective owner. Product availability and fitment are confirmed by PFS at quote time.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT GALLERY */}
      <section className="py-16 section-white">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label">Filter Media Gallery</span>
            <h2 className="section-heading">Our Filtration Product Line</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          <GalleryGrid images={GALLERY_IMAGES} cardHeight="clamp(180px, 20vw, 280px)" />
        </div>
      </section>

      {/* BOOTH BRAND COMPATIBILITY */}
      <section className="py-16 section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "2.5rem" }}>
            <span className="section-label" style={{ color: "rgba(255,255,255,0.5)" }}>Booth Compatibility</span>
            <h2 className="section-heading-white">Filters for Every Major Booth Brand</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
            <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.95rem", color: "rgba(255,255,255,0.65)", maxWidth: "560px", margin: "1rem auto 0", lineHeight: 1.7 }}>
              PFS supplies replacement filters for all major spray booth brands. If your booth uses a standard filter size, we can supply it.
            </p>
          </div>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem", justifyContent: "center", maxWidth: "800px", margin: "0 auto 2.5rem" }}>
            {BOOTH_BRANDS.map((brand) => (
              <span key={brand} style={{ background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.8)", fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.82rem", fontWeight: 600, padding: "0.4rem 0.9rem", borderRadius: "2px" }}>{brand}</span>
            ))}
          </div>
          <div style={{ textAlign: "center" }}>
            <Link href="/contact">
              <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                Find Filters for My Booth <ArrowRight size={14} />
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* MID-PAGE CTA BAND */}
      <section style={{ background: BLUE, padding: "3.5rem 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <h2 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "clamp(1.6rem, 3vw, 2.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "-0.01em", marginBottom: "0.75rem" }}>
            Not Sure Which Filter You Need?
          </h2>
          <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.8)", maxWidth: "560px", margin: "0 auto 2rem", lineHeight: 1.7 }}>
            Call our parts team with your booth brand, model, and configuration. We will identify the correct filter dimensions, media type, and efficiency rating — and get you a same-day quote.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact">
              <span className="btn-glow-white" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                Get Filter Quote <ArrowRight size={14} />
              </span>
            </Link>
            <a href="tel:+18885457715">
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
              <h2 className="section-heading-lg">The Industrial Finishing Specialist</h2>
              <div className="red-divider" />
              <p className="section-body mb-5">
                PFS was founded in 2012 in Santa Rosa, CA, bringing over 20 years of combined industrial finishing experience to every project. We supply filtration media for our own equipment and for every major booth brand — because the right filter matters regardless of who built your booth.
              </p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 2rem" }}>
                {[
                  "Ships from Santa Rosa, CA — fast delivery to all 50 states",
                  "Filters for all major booth brands, not just PFS equipment",
                  "Filter selection support for facilities managing NESHAP, SCAQMD, CARB, or OSHA requirements",
                  "Bulk pricing for MRO and facility maintenance programs",
                  "Technical support from experienced finishing engineers",
                ].map((item) => (
                  <li key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem", marginBottom: "0.65rem" }}>
                    <CheckCircle size={16} color={BLUE} style={{ marginTop: "0.2rem", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.9rem", color: "#444", lineHeight: 1.6 }}>{item}</span>
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact">
                  <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem" }}>
                    Get a Quote <ArrowRight size={14} />
                  </span>
                </Link>
                <Link href="/parts/filters/neshap-aerospace-compliance">
                  <span className="btn-outline">NESHAP Compliance →</span>
                </Link>
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { src: "/assets/filter-wavy-exhaust-pad_203d2257.webp", alt: "Wavy exhaust pad" },
                { src: "/assets/filter-white-fiber-roll_c1e59d02.webp", alt: "White fiber roll" },
                { src: "/assets/filter-white-pad-4pocket_a1f14561.png", alt: "White 4-pocket pad" },
                { src: "/assets/filter-yellow-fiberglass-roll_7bb68e90.webp", alt: "Yellow fiberglass roll" },
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
            <h2 className="section-heading">Paint Booth Filter Questions</h2>
            <div className="red-divider" style={{ margin: "0.75rem auto 0" }} />
          </div>
          {[
            { q: "How often should I replace my paint booth filters?", a: "Filter replacement intervals depend on coating volume, paint type, and filter loading. Most auto body shops replace exhaust floor filters every 1-4 weeks depending on production volume. Ceiling diffusion blankets typically last 3-6 months. The best indicator is pressure differential — when the pressure drop across the filter bank exceeds the booth manufacturer's specified range, it's time to replace. PFS can help you establish a documented maintenance schedule." },
            { q: "What happens if I use the wrong filter in my spray booth?", a: "Using the wrong filter — wrong dimensions, wrong efficiency rating, or wrong media type — can cause several problems: inadequate overspray capture leading to contamination, excessive pressure drop reducing airflow and finish quality, filter collapse or blowout under high velocity, and failed compliance inspections. Always match filter specifications to your booth manufacturer's requirements." },
            { q: "Do you supply filters for booths you didn't manufacture?", a: "Yes. PFS supplies replacement filters for all major spray booth brands — including Accudraft, Binks, DeVilbiss, Global Finishing Solutions, Garmat, Col-Met, and others. Call or email with your booth brand, model, and configuration and we will identify the correct filter specifications." },
            { q: "What is the difference between fiberglass and polyester filter media?", a: "Fiberglass media offers higher temperature resistance and is typically used for exhaust applications where paint-laden air passes through. Polyester media is softer, more flexible, and commonly used for ceiling diffusion blankets and intake applications. Both are available in standard and high-efficiency grades. The correct choice depends on your booth configuration and application." },
            { q: "Can I order filters in bulk?", a: "Yes. PFS offers bulk pricing and scheduled delivery programs for shops with ongoing filter replacement needs. Bulk orders reduce per-unit cost and ensure you always have filters on hand. Contact our parts team for volume pricing and blanket order arrangements." },
            { q: "What is an accordion paint arrestor filter?", a: "An accordion paint arrestor is a pleated exhaust-side filter format used in many liquid spray booths to collect overspray. The correct replacement depends on the booth’s airflow path, exhaust arrangement, dimensions, and current media. PFS can review a photo or part number and help match the format." },
            { q: "Can PFS help with NESHAP-related filter documentation for aerospace work?", a: "PFS can help identify manufacturer media data and filter specifications that may be relevant to a facility’s documented filter configuration. The facility and its regulatory advisors determine the complete compliance approach. See our dedicated NESHAP and aerospace filter page for details." },
            { q: "Do you supply Andreae paint booth filters?", a: "Yes. PFS is an authorized Andreae filter distributor. Share your current model, dimensions, booth configuration, or a photo of the existing media and we will confirm the applicable Andreae replacement product and current availability." },
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
          <h2 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)", fontWeight: 900, color: "#fff", letterSpacing: "-0.01em", marginBottom: "1rem" }}>
            Order Paint Booth Filters Today
          </h2>
          <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", maxWidth: "520px", margin: "0 auto 2.5rem", lineHeight: 1.7 }}>
            Call our parts team or submit a quote request. We will match the correct filter to your booth and ship from Santa Rosa, CA.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="/contact">
              <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                GET FILTER QUOTE <ArrowRight size={15} />
              </span>
            </Link>
            <a href="tel:+18885457715">
              <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                <Phone size={15} /> (888) 545-7715
              </span>
            </a>
            <Link href="/parts/filters/neshap-aerospace-compliance">
              <span className="btn-outline" style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", padding: "0.9rem 2.2rem", fontSize: "0.9rem" }}>
                NESHAP Compliance →
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
