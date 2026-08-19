/**
 * Hydrogen Bus Finishing System Page — PFS Custom Solutions & SEO Landing Page
 * Route: /products/custom-solutions/hydrogen-bus-finishing-system
 * Layout: Prep Station pattern (Hero video, featured product IMG_0590, gallery IMG_0588 + IMG_0592, collapsible features, certs, related products)
 */

import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, ArrowRight, Phone, Shield, CheckCircle, Flame, Wrench } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const HERO_VIDEO = "/assets/pfs-prep-station-hero_2554e281.mp4";

const FEATURED_IMG = "/assets/IMG_0590_3d8a1a7e.jpeg";

const GALLERY_IMGS = [
  { src: "/assets/IMG_0590_3d8a1a7e.jpeg", alt: "PFS Hydrogen Bus & Fleet Finishing Bay — front wide angle showing structural frame and enclosure", pos: "center 50%" },
  { src: "/assets/IMG_0588_ad7f6fa0.jpeg", alt: "PFS Hydrogen Bus & Fleet Finishing Bay — angled view with exhaust wall and lighting", pos: "center 50%" },
  { src: "/assets/IMG_0592_2fbb0712.jpeg", alt: "PFS Hydrogen Bus & Fleet Finishing Bay — side structural assembly view", pos: "center 50%" },
  { src: "/assets/enclosed-booth-card-zenith_7e010642.jpg", alt: "PFS Zenith Enclosed Industrial Finishing Booth", pos: "center 50%" },
  { src: "/assets/IMG_2132_c21b2839.jpg", alt: "PFS Open Face Finishing Booth", pos: "center 50%" },
  { src: "/assets/IMG_0498_a98f5f38.jpg", alt: "PFS Paint Mixing Room", pos: "center 50%" },
];

const ETL_LOGO  = "/assets/pfs-etl-logo_7758f722.png";
const UL_LOGO   = "/assets/pfs-ul508a-clean_e8efdeb8.jpg";
const NFPA_LOGO = "/assets/pfs-nfpa-logo_4b710cc9.png";
const EPA_LOGO  = "/assets/pfs-epa-logo_e4165f68.webp";
const OSHA_LOGO = "/assets/pfs-osha-logo_0c460739.jpg";
const USA_FLAG  = "/assets/pfs-usa-flag_8fca512e.jpg";

const BLUE = "#1B3A6B";

const CERTS = [
  { img: ETL_LOGO,  title: "ETL & ETL-C Listed",    sub: "Intertek — USA & Canada",             imgH: 44 },
  { img: UL_LOGO,   title: "UL 508A Certified",      sub: "Industrial Control Panel Fabricator", imgH: 44 },
  { img: NFPA_LOGO, title: "NFPA 33 / 2 / 855",      sub: "Hazardous Location Standards",        imgH: 44 },
  { img: EPA_LOGO,  title: "EPA Compliant",           sub: "Air Quality Standards",               imgH: 36 },
  { img: OSHA_LOGO, title: "OSHA 1910.307 Compliant", sub: "Classified Location Safety",          imgH: 36 },
  { img: USA_FLAG,  title: "Made in the USA",         sub: "Santa Rosa, CA",                      imgH: 36 },
];
const CERTS_LOOP = [...CERTS, ...CERTS];

const FEATURES = [
  { num: "01", title: "Classified Ventilation & Exhaust Architecture", body: "Engineered specifically for alternative-fuel and hydrogen fuel cell electric vehicle (FCEV) maintenance. Continuous high-volume mechanical ventilation prevents vapor accumulation, meeting NFPA 33 and NFPA 2 safety guidelines for hydrogen containment and gas dispersion." },
  { num: "02", title: "UL Listed Tube Axial Fans", body: "Equipped with UL listed, spark-resistant tube axial exhaust fans. Continuous air movement draws hazardous gases and overspray away from technicians and work surfaces at required face velocity standards." },
  { num: "03", title: "CID2 Inside-Access Lighting", body: "Class I Division 2 inside-access four-tube light fixtures. Sealed against vapor intrusion, fluorescent or LED tube compatible, providing shadow-free illumination across the entire bus chassis and roof maintenance zones." },
  { num: "04", title: "UL 508A Certified Control Panel", body: "PFS Core Control Panel — UL 508A certified with integrated gas detection interlocks, ventilation airflow monitoring, programmable cycle timers, and emergency purge modes." },
  { num: "05", title: "Hydrogen Gas Detection & Sensor Integration", body: "Optional integrated RKI or Honeywell LEL gas sensors mounted at high-level ceiling zones where hydrogen naturally collects. Automatically triggers visual/audible alarms and high-speed purge ventilation upon vapor detection." },
  { num: "06", title: "Drive-Through & Custom Bay Configurations", body: "Designed for heavy transit buses, commuter coaches, hydrogen fuel cell trucks, and municipal fleet vehicles. Available in drive-through configurations or dead-end maintenance bays with service mezzanines." },
  { num: "07", title: "Fiberglass Exhaust & Tacky Intake Filtration", body: "Exhaust uses multi-stage arrestor media. Intake uses tacky-type primary filtration with optional blanket upgrades to maintain positive pressure and keep ambient facility dust out of sensitive finishing zones." },
  { num: "08", title: "Galvanized or Powder Coated Heavy-Duty Steel", body: "Heavy-gauge structural steel framework built for rugged commercial fleet maintenance depots. Designed to withstand rigorous daily transit operations while maintaining strict regulatory compliance." },
  { num: "09", title: "Factory Direct — Ships Nationally", body: "Engineered, fabricated, and tested in Santa Rosa, CA. Ships nationally across the USA and Canada with complete engineering packages, PE stamps available, and turnkey installation support." },
];

const PRODUCTS = [
  { label: "Enclosed Paint Booths", href: "/products/paint-booths/enclosed", img: "/assets/enclosed-booth-card-zenith_7e010642.jpg", desc: "Full-enclosure industrial booths for transit bus and commercial vehicle refinishing." },
  { label: "Air Make-Up Units", href: "/products/air-make-up-units", img: "/assets/pfs-amu-card_41f0dd88.jpg", desc: "Tempered make-up air systems engineered to replace exhausted air and maintain facility pressurization." },
  { label: "Mixing Rooms", href: "/products/mixing-rooms", img: "/assets/IMG_0498_a98f5f38.jpg", desc: "NFPA 33 compliant mixing rooms for safe coating preparation adjacent to bus bays." },
  { label: "Blast Systems", href: "/products/blast-systems", img: "/assets/IMG_2132_c21b2839.jpg", desc: "Heavy-duty containerized and room blast systems for fleet surface preparation." },
];

function CertCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const animRef  = useRef<number>(0);
  const posRef   = useRef(0);
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const totalWidth = track.scrollWidth / 2;
    const step = () => {
      posRef.current += 0.5;
      if (posRef.current >= totalWidth) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animRef.current = requestAnimationFrame(step);
    };
    animRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animRef.current);
  }, []);
  return (
    <div style={{ overflow: "hidden", width: "100%" }}>
      <div ref={trackRef} style={{ display: "flex", gap: "3rem", width: "max-content", alignItems: "center" }}>
        {CERTS_LOOP.map((c, i) => (
          <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.4rem", minWidth: 120 }}>
            <img src={c.img} alt={c.title} style={{ height: c.imgH, objectFit: "contain", filter: "grayscale(30%)" }} />
            <span style={{ fontFamily: "'Barlow Condensed',sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", color: "#111", textAlign: "center", textTransform: "uppercase" }}>{c.title}</span>
            <span style={{ fontSize: "0.65rem", color: "#666", textAlign: "center" }}>{c.sub}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function HydrogenBusPage() {
  useSEO({
    title: "Hydrogen Bus Finishing Systems & FCEV Service Bays | PFS",
    description: "PFS engineers specialized hydrogen bus finishing systems, transit fleet paint booths, and FCEV service bays. NFPA 33, NFPA 2, UL 508A, and CID2 compliant. Manufactured in Santa Rosa, CA. Call (888) 545-7715.",
    canonical: "/products/custom-solutions/hydrogen-bus-finishing-system",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Product",
      "name": "Hydrogen Bus & Fleet Finishing System",
      "description": "Specialized finishing system and service bay engineered for hydrogen fuel cell electric buses, heavy-duty commercial fleets, and alternative fuel vehicles. NFPA 33, NFPA 2, UL 508A compliant.",
      "brand": { "@type": "Brand", "name": "PFS" },
      "manufacturer": {
        "@type": "Organization",
        "name": "PFS Industrial Finishing Equipment",
        "url": "https://pfsspraybooths.com",
        "telephone": "+18885457715",
        "address": { "@type": "PostalAddress", "addressLocality": "Santa Rosa", "addressRegion": "CA", "postalCode": "95401", "addressCountry": "US" }
      },
      "offers": {
        "@type": "Offer",
        "priceCurrency": "USD",
        "availability": "https://schema.org/InStock",
        "seller": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment" },
        "url": "https://pfsspraybooths.com/products/custom-solutions/hydrogen-bus-finishing-system"
      },
      "url": "https://pfsspraybooths.com/products/custom-solutions/hydrogen-bus-finishing-system"
    },
  });

  const [featuresOpen, setFeaturesOpen] = useState(false);
  const [lightboxIdx, setLightboxIdx]   = useState<number | null>(null);

  const openLightbox  = (i: number) => setLightboxIdx(i);
  const closeLightbox = () => setLightboxIdx(null);
  const prevImg = () => setLightboxIdx(i => i !== null ? (i - 1 + GALLERY_IMGS.length) % GALLERY_IMGS.length : null);
  const nextImg = () => setLightboxIdx(i => i !== null ? (i + 1) % GALLERY_IMGS.length : null);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowLeft") prevImg();
      if (e.key === "ArrowRight") nextImg();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="bg-white">
      {/* ── HERO ── */}
      <section style={{ position: "relative", minHeight: "clamp(420px, 70vh, 700px)", display: "flex", flexDirection: "column", justifyContent: "flex-end", overflow: "hidden" }}>
        <video
          preload="auto"
          autoPlay
          muted
          loop
          playsInline
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", objectPosition: "center center" }}
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(105deg, rgba(13,27,46,0.92) 0%, rgba(13,27,46,0.65) 55%, rgba(0,0,0,0.4) 100%)" }} />
        <div className="container" style={{ position: "relative", zIndex: 1, paddingBottom: "clamp(3rem, 6vw, 5rem)", paddingTop: "clamp(8rem, 15vh, 12rem)" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
            <span style={{ color: "#60a5fa", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase" }}>PFS CUSTOM SOLUTIONS — ZERO-EMISSION FLEET FINISHING</span>
          </div>
          <h1 style={{ color: "#fff", fontSize: "clamp(2.2rem, 5.5vw, 4rem)", fontWeight: 900, lineHeight: 1.05, margin: "0 0 16px", fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", textTransform: "uppercase", maxWidth: 850 }}>
            Hydrogen Bus &amp; FCEV<br />Finishing Systems
          </h1>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: "clamp(1rem, 1.8vw, 1.2rem)", maxWidth: 680, margin: "0 0 32px", lineHeight: 1.65 }}>
            Specialized finishing enclosures and maintenance service bays engineered for hydrogen fuel cell electric buses, commercial transit fleets, and alternative-fuel vehicles. NFPA 33, NFPA 2, UL 508A, and CID2 classified location compliant.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link href="/contact/request-a-quote">
              <span className="btn-glow" style={{ background: BLUE, color: "#fff", border: "2px solid rgba(107,163,224,0.6)" }}>
                GET PRICING <ArrowRight size={15} />
              </span>
            </Link>
            <a href="tel:8885457715" className="btn-glow-white" style={{ background: "rgba(255,255,255,0.15)", color: "#fff", border: "2px solid rgba(255,255,255,0.5)" }}>
              <Phone size={15} /> (888) 545-7715
            </a>
          </div>
        </div>
      </section>

      {/* ── CERTS STRIP ── */}
      <section style={{ borderBottom: "1px solid #e5e7eb", padding: "1.75rem 0", background: "#f9fafb" }}>
        <div className="container">
          <CertCarousel />
        </div>
      </section>

      {/* ── FEATURED PRODUCT SECTION ── */}
      <section style={{ padding: "clamp(3.5rem, 7vw, 6rem) 0" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "clamp(2.5rem, 5vw, 5rem)", alignItems: "center" }}>
            <div>
              <div style={{ display: "inline-flex", alignItems: "center", gap: 6, background: "rgba(27,58,107,0.08)", color: BLUE, padding: "4px 12px", borderRadius: 2, fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 16 }}>
                <Flame size={13} /> CLASSIFIED ENVIRONMENT ENGINEERING
              </div>
              <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.8rem)", fontWeight: 900, color: "#0d1b2e", margin: "0 0 16px", fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase", lineHeight: 1.1 }}>
                Engineered for Hydrogen &amp; FCEV Transit Fleets
              </h2>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.75, margin: "0 0 20px" }}>
                Hydrogen fuel cell electric vehicles (FCEVs) and zero-emission transit buses require specialized maintenance and finishing environments. Because hydrogen gas is extremely buoyant and has a wide flammability range, conventional bus bays are inadequate for heavy maintenance, leak repair, or coating touch-ups.
              </p>
              <p style={{ color: "#4b5563", fontSize: "0.95rem", lineHeight: 1.75, margin: "0 0 28px" }}>
                PFS hydrogen bus finishing systems feature high-level exhaust extraction, continuous mechanical ventilation, explosion-proof CID2 electrical specifications, optional LEL sensor integration, and UL 508A certified control panels. Built in Santa Rosa, California and backed by 16+ years of heavy equipment manufacturing expertise.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                {[
                  "NFPA 2 & NFPA 33 Compliant",
                  "High-Level Hydrogen Extraction",
                  "CID2 Explosion-Proof Lighting",
                  "UL 508A Certified Controls",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                    <CheckCircle size={16} color={BLUE} style={{ flexShrink: 0 }} />
                    <span style={{ fontSize: "0.85rem", fontWeight: 700, color: "#1f2937" }}>{item}</span>
                  </div>
                ))}
              </div>
              <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                <Link href="/contact/request-a-quote">
                  <span className="btn-glow" style={{ background: BLUE, color: "#fff" }}>
                    REQUEST SPECIFICATIONS <ArrowRight size={14} />
                  </span>
                </Link>
                <Link href="/industries/truck-bus-fleet">
                  <span className="btn-outline">TRUCK, BUS &amp; FLEET HUB</span>
                </Link>
              </div>
            </div>
            <div>
              <div style={{ background: "#f3f4f6", border: "1px solid #e5e7eb", borderRadius: 4, overflow: "hidden", boxShadow: "0 10px 30px rgba(0,0,0,0.08)" }}>
                <img
                  src={FEATURED_IMG}
                  alt="PFS Hydrogen Bus & Fleet Finishing Bay — front factory view"
                  style={{ width: "100%", height: "auto", display: "block", objectFit: "cover", cursor: "pointer" }}
                  onClick={() => openLightbox(0)}
                />
                <div style={{ padding: "16px 20px", background: "#fff", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <div>
                    <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0d1b2e", margin: 0, fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase" }}>Hydrogen Bus Finishing Bay</h3>
                    <p style={{ fontSize: "0.78rem", color: "#6b7280", margin: "2px 0 0" }}>Factory floor view · Santa Rosa, CA</p>
                  </div>
                  <button onClick={() => openLightbox(0)} style={{ background: BLUE, color: "#fff", border: "none", padding: "6px 14px", fontSize: "0.72rem", fontWeight: 700, textTransform: "uppercase", cursor: "pointer" }}>
                    Zoom
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── GALLERY SECTION ── */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0", background: "#f8f9fa" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px" }}>
            <p style={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>SYSTEM GALLERY</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#0d1b2e", margin: "0 0 12px", fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase" }}>
              Hydrogen Fleet Bays &amp; Finishing Enclosures
            </h2>
            <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
              Real installation photography and heavy commercial finishing systems built by PFS. Click any image to inspect in full resolution.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20 }}>
            {GALLERY_IMGS.map((img, i) => (
              <div key={i} onClick={() => openLightbox(i)} style={{ background: "#fff", border: "1px solid #e5e7eb", borderRadius: 3, overflow: "hidden", cursor: "pointer", transition: "transform 0.2s, box-shadow 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 25px rgba(0,0,0,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                <img src={img.src} alt={img.alt} style={{ width: "100%", height: 220, objectFit: "cover", objectPosition: img.pos }} />
                <div style={{ padding: "12px 16px" }}>
                  <p style={{ fontSize: "0.8rem", fontWeight: 700, color: "#1f2937", margin: 0, fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                    System View {i + 1}
                  </p>
                  <p style={{ fontSize: "0.72rem", color: "#6b7280", margin: "2px 0 0", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{img.alt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COLLAPSIBLE FEATURES SECTION ── */}
      <section style={{ padding: "clamp(3.5rem, 7vw, 6rem) 0", background: "#fff" }}>
        <div className="container" style={{ maxWidth: 1000 }}>
          <div style={{ textAlign: "center", marginBottom: 40 }}>
            <p style={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>ENGINEERING ADVANTAGE</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.8vw, 2.6rem)", fontWeight: 900, color: "#0d1b2e", margin: "0 0 12px", fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase" }}>
              Hydrogen Bus Bay Specifications &amp; Features
            </h2>
            <p style={{ color: "#4b5563", fontSize: "0.95rem", maxWidth: 640, margin: "0 auto" }}>
              Explore the core engineering and compliance specifications built into every PFS hydrogen and alternative-fuel fleet bay.
            </p>
            <button
              onClick={() => setFeaturesOpen(!featuresOpen)}
              style={{ marginTop: 20, background: BLUE, color: "#fff", border: "none", padding: "10px 24px", fontSize: "0.8rem", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", cursor: "pointer", display: "inline-flex", alignItems: "center", gap: 8 }}
            >
              {featuresOpen ? "Collapse All Features" : "Expand All Features"} {featuresOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            </button>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {FEATURES.map((feat) => (
              <details
                key={feat.num}
                open={featuresOpen}
                style={{ background: "#f8f9fa", border: "1px solid #e2e8f0", borderRadius: 2, padding: "20px 24px", transition: "border-color 0.2s" }}
              >
                <summary style={{ fontSize: "1rem", fontWeight: 800, color: "#0d1b2e", cursor: "pointer", fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase", display: "flex", alignItems: "center", justifyContent: "between", gap: 12, listStyle: "none" }}>
                  <span style={{ color: BLUE, fontSize: "0.85rem", fontWeight: 900 }}>{feat.num}.</span>
                  <span style={{ flex: 1 }}>{feat.title}</span>
                  <ChevronDown size={16} className="text-gray-400" />
                </summary>
                <p style={{ color: "#4b5563", fontSize: "0.9rem", lineHeight: 1.75, margin: "14px 0 0", paddingLeft: "24px", borderLeft: `2px solid ${BLUE}` }}>
                  {feat.body}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ── RELATED PRODUCTS ── */}
      <section style={{ padding: "clamp(3rem, 6vw, 5rem) 0", background: "#f3f4f6" }}>
        <div className="container">
          <div style={{ textAlign: "center", maxWidth: 700, margin: "0 auto 40px" }}>
            <p style={{ color: BLUE, fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>COMPLETE ECOSYSTEM</p>
            <h2 style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.5rem)", fontWeight: 900, color: "#0d1b2e", margin: "0 0 12px", fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase" }}>
              Related Finishing Equipment
            </h2>
            <p style={{ color: "#4b5563", fontSize: "0.95rem" }}>
              Pair your hydrogen bus finishing bay with complementary PFS equipment for a complete, regulation-compliant facility.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24 }}>
            {PRODUCTS.map((prod) => (
              <Link key={prod.label} href={prod.href} style={{ textDecoration: "none" }}>
                <div style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: 3, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column", transition: "transform 0.2s, box-shadow 0.2s" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLDivElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLDivElement).style.boxShadow = "0 10px 25px rgba(0,0,0,0.1)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLDivElement).style.transform = "none"; (e.currentTarget as HTMLDivElement).style.boxShadow = "none"; }}>
                  <img src={prod.img} alt={prod.label} style={{ width: "100%", height: 180, objectFit: "cover" }} />
                  <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                    <div>
                      <h3 style={{ fontSize: "0.95rem", fontWeight: 800, color: "#0d1b2e", margin: "0 0 8px", fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase" }}>{prod.label}</h3>
                      <p style={{ color: "#6b7280", fontSize: "0.83rem", lineHeight: 1.6, margin: 0 }}>{prod.desc}</p>
                    </div>
                    <div style={{ marginTop: 16, display: "flex", alignItems: "center", gap: 6, color: BLUE, fontSize: "0.75rem", fontWeight: 700, textTransform: "uppercase" }}>
                      View Product <ArrowRight size={13} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TRUCK, BUS & FLEET RETURN PATH BANNER ── */}
      <section style={{ background: "#0d1b2e", padding: "3.5rem 0", color: "#fff", textAlign: "center", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
        <div className="container" style={{ maxWidth: 700 }}>
          <p style={{ color: "#60a5fa", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>FLEET FINISHING ECOSYSTEM</p>
          <h3 style={{ fontSize: "clamp(1.5rem, 3vw, 2.2rem)", fontWeight: 900, marginBottom: 16, fontFamily: "'Chakra Petch', sans-serif", textTransform: "uppercase" }}>
            Part of the Truck, Bus &amp; Fleet Finishing Lineup
          </h3>
          <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.95rem", lineHeight: 1.7, marginBottom: 28 }}>
            Explore our complete range of commercial vehicle finishing systems, drive-through configurations, and heavy-duty booth solutions.
          </p>
          <Link href="/industries/truck-bus-fleet">
            <span className="btn-glow" style={{ background: BLUE, color: "#fff", display: "inline-flex", alignItems: "center", gap: 8 }}>
              EXPLORE TRUCK, BUS &amp; FLEET <ArrowRight size={15} />
            </span>
          </Link>
        </div>
      </section>

      {/* ── LIGHTBOX MODAL ── */}
      {lightboxIdx !== null && (
        <div style={{ position: "fixed", inset: 0, zIndex: 9999, background: "rgba(0,0,0,0.9)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
          <button onClick={closeLightbox} style={{ position: "absolute", top: 20, right: 25, background: "transparent", border: "none", color: "#fff", fontSize: "2rem", cursor: "pointer", zIndex: 10000 }}>&times;</button>
          <button onClick={prevImg} style={{ position: "absolute", left: 20, background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", padding: "12px 18px", fontSize: "1.2rem", cursor: "pointer", zIndex: 10000 }}>&#10094;</button>
          <button onClick={nextImg} style={{ position: "absolute", right: 20, background: "rgba(255,255,255,0.1)", border: "none", color: "#fff", padding: "12px 18px", fontSize: "1.2rem", cursor: "pointer", zIndex: 10000 }}>&#10095;</button>
          <div style={{ maxWidth: "90vw", maxHeight: "85vh", textAlign: "center" }}>
            <img src={GALLERY_IMGS[lightboxIdx].src} alt={GALLERY_IMGS[lightboxIdx].alt} style={{ maxWidth: "100%", maxHeight: "75vh", objectFit: "contain", borderRadius: 4 }} />
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.88rem", marginTop: 12 }}>{GALLERY_IMGS[lightboxIdx].alt}</p>
          </div>
        </div>
      )}
    </div>
  );
}
