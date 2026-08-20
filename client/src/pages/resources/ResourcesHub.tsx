import { useEffect } from 'react';
import PageHero from "@/components/PageHero";
import { Link } from "wouter";
import { ArrowRight, BookOpen, FileText, Play, Users, HelpCircle, Filter, ExternalLink } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const IMG = "/assets/pfs-paint-booth-sprayer-card_42d3ea13.jpg";

const RESOURCES = [
  {
    label: "Downloads",
    slug: "downloads",
    desc: "Installation guides, maintenance manuals, spec sheets, and brochures for all PFS finishing equipment. Free with contact info.",
    icon: BookOpen,
  },
  {
    label: "Case Studies",
    slug: "case-studies",
    desc: "Real-world PFS installations across collision repair, aerospace, heavy equipment, and other industries.",
    icon: Users,
  },
  {
    label: "FAQs",
    slug: "faqs",
    desc: "Frequently asked questions about PFS spray booths, powder coating systems, industrial ovens, and service programs.",
    icon: HelpCircle,
  },
  {
    label: "Videos",
    slug: "videos",
    desc: "Product overview and installation videos for PFS finishing equipment.",
    icon: Play,
  },
  {
    label: "Spec Sheets",
    slug: "downloads",
    desc: "Technical specification sheets are bundled in the Downloads section along with installation guides and maintenance manuals.",
    icon: FileText,
  },
];

export default function ResourcesHub() {
  useSEO({
    title: "Resources | Downloads, Manuals & FAQs | PFS",
    description: "Access PFS spray booth installation guides, maintenance manuals, spec sheets, case studies, and FAQs. All technical documentation for PFS finishing equipment. Manufactured in Santa Rosa, CA.",
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "PFS Industrial Finishing Resources",
      "url": "https://pfsspraybooths.com/resources",
      "description": "Technical guides, installation manuals, filter resources, and blog posts for spray booth and industrial finishing equipment operators.",
      "publisher": {
        "@type": "Organization",
        "name": "PFS Industrial Finishing Equipment",
        "url": "https://pfsspraybooths.com"
      }
    });
    document.head.appendChild(script);
    return () => { if (script.parentNode) script.parentNode.removeChild(script); };
  }, []);
  return (
    <div>
      <PageHero
        title="Resources"
        subtitle="Technical documentation, installation guides, maintenance manuals, and FAQs for all PFS finishing equipment."
        breadcrumbs={[{ label: "Resources" }]}
        bgImage={IMG}
      />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-10">
            <span className="section-label">Resource Library</span>
            <h2 data-animation="slideLeft" className="section-heading-lg">Everything You Need to Specify, Install, and Operate PFS Equipment</h2>
          </div>
          <div data-animation="fadeIn" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {RESOURCES.map((r) => {
              const Icon = r.icon;
              return (
                <Link key={r.slug + r.label} href={`/resources/${r.slug}`}>
                  <div
                    className="group flex flex-col p-6 border border-gray-200 transition-all h-full"
                    style={{ cursor: "pointer" }}
                    onMouseEnter={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#1B3A6B";
                      el.style.background = "#f0f6ff";
                      el.style.boxShadow = "0 0 30px rgba(107,163,224,0.25), 0 4px 16px rgba(27,58,107,0.12)";
                      el.style.transform = "translateY(-3px)";
                    }}
                    onMouseLeave={e => {
                      const el = e.currentTarget as HTMLDivElement;
                      el.style.borderColor = "#e5e7eb";
                      el.style.background = "#fff";
                      el.style.boxShadow = "none";
                      el.style.transform = "translateY(0)";
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        background: "#1B3A6B",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        marginBottom: "1rem",
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} color="#fff" />
                    </div>
                    <h3
                      style={{
                        fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                        fontSize: "1rem",
                        fontWeight: 700,
                        color: "#1a1a1a",
                        marginBottom: "0.5rem",
                        lineHeight: 1.3,
                      }}
                    >
                      {r.label}
                    </h3>
                    <p
                      style={{
                        fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                        fontSize: "0.82rem",
                        color: "#666",
                        lineHeight: 1.65,
                        flex: 1,
                      }}
                    >
                      {r.desc}
                    </p>
                    <div
                      className="flex items-center gap-1 mt-4 group-hover:gap-2 transition-all"
                      style={{
                        fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                        fontSize: "0.72rem",
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "#1B3A6B",
                        fontWeight: 700,
                      }}
                    >
                      View <ArrowRight size={12} />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── FILTER LANDING PAGES — clean crisp cards ── */}
      <section style={{ background: "#f4f6f9", borderTop: "3px solid #1B3A6B", padding: "3.5rem 0" }}>
        <div className="container">
          <div style={{ marginBottom: "2rem" }}>
            <div style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "0.65rem", fontWeight: 700,
              color: "#1B3A6B", letterSpacing: "0.18em",
              textTransform: "uppercase", marginBottom: "0.4rem",
            }}>FILTER COMPLIANCE GUIDES</div>
            <h2 data-animation="slideLeft" style={{
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "clamp(1.4rem, 2.5vw, 1.9rem)", fontWeight: 900,
              color: "#0d1b2e", textTransform: "uppercase",
              letterSpacing: "-0.01em", margin: "0 0 0.4rem", lineHeight: 1.1,
            }}>Paint Booth Filter Guides</h2>
            <p data-animation="slideLeft" style={{
              fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
              fontSize: "0.85rem", color: "#5a6a7e", lineHeight: 1.6, maxWidth: "560px",
            }}>
              Compliance guides and filter selection resources for NESHAP, aerospace, California, and national paint booth applications.
            </p>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                label: "NESHAP & Aerospace Filters",
                eyebrow: "FILTER COMPLIANCE GUIDE",
                desc: "Compliance-grade filter media for NESHAP 6H, aerospace chromium, and OSHA/EPA-regulated finishing operations.",
                href: "/parts/filters/neshap-aerospace-compliance",
                img: "/assets/aerospace-booth-jet_05f6c56a.jpeg",
                imgSize: "cover",
                imgPos: "center 40%",
              },
              {
                label: "California & West Coast Filters",
                eyebrow: "FILTER COMPLIANCE GUIDE",
                desc: "CARB-compliant and AQMD-approved paint booth filters for California, Oregon, Washington, and Western US operations.",
                href: "/parts/filters/california-west-coast-paint-booth-filters",
                img: "/assets/pfs-filters-card_8b47eabc.png",
                imgSize: "cover",
                imgPos: "center center",
              },
              {
                label: "National Paint Booth Filters",
                eyebrow: "FILTER SELECTION GUIDE",
                desc: "Full-line paint booth filter guide — intake, exhaust, and specialty media for all booth types and applications nationwide.",
                href: "/parts/filters/paint-booth-filters",
                img: "/assets/pfs-filters-product-lineup_ef6011fa.png",
                imgSize: "cover",
                imgPos: "center 20%",
              },
            ].map((item) => (
              <Link key={item.href} href={item.href}>
                <div
                  style={{
                    background: "#fff",
                    borderRadius: "4px",
                    overflow: "hidden",
                    border: "1px solid #dde3ec",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
                    cursor: "pointer",
                    transition: "box-shadow 0.25s ease, transform 0.25s ease, border-color 0.25s ease",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.boxShadow = "0 8px 28px rgba(27,58,107,0.18)";
                    e.currentTarget.style.transform = "translateY(-3px)";
                    e.currentTarget.style.borderColor = "#2A5298";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.boxShadow = "0 2px 8px rgba(0,0,0,0.06)";
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.borderColor = "#dde3ec";
                  }}
                >
                  {/* Image area — no overlay */}
                  <div style={{
                    height: "220px",
                    backgroundImage: `url(${item.img})`,
                    backgroundSize: item.imgSize,
                    backgroundPosition: item.imgPos,
                    backgroundRepeat: "no-repeat",
                    backgroundColor: item.imgSize === "contain" ? "#f8f9fb" : "#e8ecf2",
                    borderBottom: "1px solid #dde3ec",
                  }} />
                  {/* Text content */}
                  <div style={{ padding: "1.25rem 1.4rem 1.5rem" }}>
                    <div style={{
                      fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                      fontSize: "0.58rem", fontWeight: 700,
                      color: "#2A5298", letterSpacing: "0.2em",
                      textTransform: "uppercase", marginBottom: "0.35rem",
                    }}>{item.eyebrow}</div>
                    <h3 data-animation="slideLeft" style={{
                      fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                      fontSize: "1.05rem", fontWeight: 900,
                      color: "#0d1b2e", textTransform: "uppercase",
                      letterSpacing: "0.01em", margin: "0 0 0.5rem", lineHeight: 1.2,
                    }}>{item.label}</h3>
                    <p data-animation="slideRight" style={{
                      fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                      fontSize: "0.82rem", color: "#4a5a6e",
                      lineHeight: 1.6, margin: "0 0 1rem",
                    }}>{item.desc}</p>
                    <div style={{
                      display: "inline-flex", alignItems: "center", gap: "0.35rem",
                      fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                      fontSize: "0.68rem", fontWeight: 800,
                      letterSpacing: "0.12em", textTransform: "uppercase",
                      color: "#1B3A6B",
                    }}>
                      View Guide <ArrowRight size={12} />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

