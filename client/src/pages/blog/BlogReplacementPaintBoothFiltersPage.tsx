// Blog Post - Replacement Paint Booth Filters
// URL: /blog/replacement-paint-booth-filters
// Short resource for booth owners who need intake, exhaust, ceiling, or prefilter media.

import { useSEO } from '@/hooks/useSEO';
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { PFS_FILTERS_URL } from "@/components/ReplacementFiltersCTA";

const HERO_IMG = "/assets/pfs-filters-product-lineup_ef6011fa.png";
const BLUE = "#1B3A6B";
const GOLD = "#C8922A";

export default function BlogReplacementPaintBoothFiltersPage() {
  useSEO({
    title: "Replacement Paint Booth Filters: What to Keep on Hand",
    description: "A short guide to the replacement paint booth filters booth owners should plan for: exhaust filters, intake filters, ceiling media, and prefilters.",
    canonical: "/blog/replacement-paint-booth-filters",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Replacement Paint Booth Filters: What to Keep on Hand",
      "description": "A short guide to planning replacement paint booth filters for routine booth maintenance.",
      "datePublished": "2026-09-10",
      "dateModified": "2026-09-10",
      "author": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "url": "https://pfsspraybooths.com" },
      "publisher": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "logo": { "@type": "ImageObject", "url": "https://pfsspraybooths.com/pfs-logo.png" } },
      "mainEntityOfPage": "https://pfsspraybooths.com/blog/replacement-paint-booth-filters",
      "image": "https://pfsspraybooths.com/assets/pfs-filters-product-lineup_ef6011fa.png",
      "keywords": "replacement paint booth filters, spray booth filters, intake filters, exhaust filters, ceiling filters, booth prefilters"
    }
  });

  const filterTypes = [
    {
      title: "Exhaust filters",
      body: "Exhaust filters capture overspray before it reaches the exhaust plenum, fan, and ductwork.",
    },
    {
      title: "Intake filters",
      body: "Intake filters help clean incoming air before it enters the booth envelope.",
    },
    {
      title: "Ceiling media",
      body: "Ceiling media is commonly used in downdraft or semi-downdraft booth layouts to diffuse supply air.",
    },
    {
      title: "Prefilters",
      body: "Prefilters can help protect intake stages and air make-up equipment from larger airborne debris.",
    },
  ];

  return (
    <div style={{ backgroundColor: "#fff" }}>
      <div style={{ position: "relative", height: "340px", overflow: "hidden", background: BLUE }}>
        <img
          src={HERO_IMG}
          alt="Paint booth replacement filter media from PFS Filters"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
        />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", padding: "2.5rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD }}>PFS FILTER RESOURCE - 2026</span>
            <h1 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Replacement Paint Booth Filters: What to Keep on Hand
            </h1>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "3rem 1.5rem" }}>
        <div style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.78rem", color: "#6b7280", marginBottom: "2rem" }}>
          <Link href="/resources"><span style={{ color: BLUE, cursor: "pointer" }}>Resources</span></Link>
          <span> / </span>
          <Link href="/blog"><span style={{ color: BLUE, cursor: "pointer" }}>Blog</span></Link>
          <span> / Replacement Paint Booth Filters</span>
        </div>

        <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "#1f2937", lineHeight: 1.85 }}>
          <p>
            Once a booth is installed, replacement filters become part of the normal maintenance rhythm.
            Keeping the right intake, exhaust, ceiling, and prefilter media on hand helps booth operators
            respond quickly when airflow readings, visible loading, or the booth manual indicate a change is due.
          </p>

          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Common Replacement Filter Types
          </h2>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1rem", margin: "1.25rem 0" }}>
            {filterTypes.map((item) => (
              <div key={item.title} style={{ background: "#f8fafc", border: "1px solid #e2e8f0", padding: "1rem 1.2rem" }}>
                <h3 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.9rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.45rem" }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>{item.body}</p>
              </div>
            ))}
          </div>

          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Match Filters to Your Booth Documentation
          </h2>
          <p>
            Filter sizes, media types, and change intervals vary by booth layout, coating process, operating
            hours, and local requirements. Keep your booth manual, filter dimensions, and any maintenance
            notes together so reordering does not slow down production.
          </p>

          <p>
            Need replacement filters for this booth? PFS Filters stocks intake, exhaust, ceiling, and
            prefilter media for paint booth maintenance.
          </p>

          <p>
            <a href={PFS_FILTERS_URL} target="_blank" rel="noopener noreferrer">
              <span style={{ color: BLUE, fontWeight: 700, cursor: "pointer" }}>Shop Replacement Filters at PFS Filters</span>
            </a>
          </p>
        </div>

        <div style={{ marginTop: "3rem", background: BLUE, padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>Ready to restock booth filters?</p>
          <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", margin: 0 }}>
            Bookmark PFS Filters for replacement filters for your booth.
          </p>
          <a
            href={PFS_FILTERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", alignSelf: "flex-start", background: GOLD, color: "#fff", fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.5rem", cursor: "pointer", textDecoration: "none" }}
          >
            Shop Replacement Filters <ArrowRight size={14} />
          </a>
        </div>

        <div style={{ marginTop: "3rem", borderTop: "1px solid #e5e7eb", paddingTop: "2rem" }}>
          <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#6b7280", marginBottom: "1rem" }}>Related Articles</p>
          <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
            <Link href="/blog/spray-booth-maintenance-filter-checklist"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>Spray Booth Maintenance Checklist: When to Change Your Filters</span></Link>
            <Link href="/blog/crossflow-vs-downdraft-spray-booth"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>Crossflow vs. Downdraft Spray Booths: Which Is Right for Your Shop?</span></Link>
            <Link href="/blog/how-much-does-industrial-spray-booth-cost"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>How Much Does an Industrial Spray Booth Cost in 2026?</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
