// Blog Post 2 — Crossflow vs. Downdraft (High Search Volume)
// URL: /blog/crossflow-vs-downdraft-spray-booth
// Article JSON-LD for Google authorship and AI search credibility

import { useSEO } from '@/hooks/useSEO';
import { Link } from "wouter";
import { ArrowRight, Phone } from "lucide-react";

const HERO_IMG = "/assets/pfs-crossflow-booth-hero_a3c5b2d1.jpeg";
const BLUE = "#1B3A6B";
const GOLD = "#C8922A";

export default function BlogCrossflowVsDowndraftPage() {
  useSEO({
    title: "Crossflow vs. Downdraft Spray Booths: Which Is Right for Your Shop?",
    description: "Compare crossflow, semi-downdraft, and full downdraft spray booths. Learn the pros, cons, and costs of each airflow design to choose the right system for your shop.",
    canonical: "https://pfsspraybooths.com/blog/crossflow-vs-downdraft-spray-booth",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": "Crossflow vs. Downdraft Spray Booths: Which Is Right for Your Shop?",
      "description": "A straightforward guide from PFS engineers on the differences between crossflow, semi-downdraft, and full downdraft spray booth airflow designs.",
      "datePublished": "2026-08-05",
      "dateModified": "2026-08-05",
      "author": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "url": "https://pfsspraybooths.com" },
      "publisher": { "@type": "Organization", "name": "PFS Industrial Finishing Equipment", "logo": { "@type": "ImageObject", "url": "https://pfsspraybooths.com/pfs-logo.png" } },
      "mainEntityOfPage": "https://pfsspraybooths.com/blog/crossflow-vs-downdraft-spray-booth",
      "image": "https://pfsspraybooths.com/assets/pfs-crossflow-booth-hero_a3c5b2d1.jpeg",
      "keywords": "crossflow vs downdraft spray booth, paint booth airflow types, semi-downdraft spray booth, full downdraft booth, best spray booth for collision repair"
    }
  });

  return (
    <div style={{ backgroundColor: "#fff" }}>
      {/* Hero */}
      <div style={{ position: "relative", height: "340px", overflow: "hidden", background: BLUE }}>
        <img
          src={HERO_IMG}
          alt="PFS crossflow spray booth interior showing horizontal airflow"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.35 }}
        />
        <div style={{ position: "relative", zIndex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%", padding: "2.5rem" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto", width: "100%" }}>
            <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.65rem", fontWeight: 700, letterSpacing: "0.22em", textTransform: "uppercase", color: GOLD }}>PFS BUYER'S GUIDE · 2026</span>
            <h1 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "clamp(1.6rem, 4vw, 2.4rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, marginTop: "0.5rem", textTransform: "uppercase", letterSpacing: "0.02em" }}>
              Crossflow vs. Downdraft Spray Booths: Which Is Right for Your Shop?
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
          <span> / Crossflow vs. Downdraft</span>
        </div>

        <div style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "1rem", color: "#1f2937", lineHeight: 1.85 }}>

          <p>Choosing the right spray booth comes down to one critical factor: airflow. The way air moves through your booth dictates how clean your paint jobs will be, how fast your painters can work, and how much the installation will cost.</p>

          <p>At PFS, we engineer and install finishing systems across the United States. Here is our straightforward guide to understanding the differences between crossflow and downdraft spray booths.</p>

          {/* Crossflow */}
          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Crossflow Spray Booths
          </h2>
          <p>In a crossflow booth, air enters through filtered doors at the front and is pulled horizontally across the vehicle or part, exiting through an exhaust plenum at the rear.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.25rem 0" }}>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "1rem 1.25rem" }}>
              <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#166534", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Pros</p>
              <p style={{ fontSize: "0.9rem", color: "#1f2937", margin: 0 }}><strong>Cost-Effective:</strong> Most affordable option. No concrete pit or elevated basement required.</p>
            </div>
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "1rem 1.25rem" }}>
              <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#991b1b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Cons</p>
              <p style={{ fontSize: "0.9rem", color: "#1f2937", margin: 0 }}><strong>Contamination Risk:</strong> Air moves horizontally — dust or overspray from the front can drag across wet paint at the rear.</p>
            </div>
          </div>
          <p><strong>Best For:</strong> Lower-volume shops, industrial fabrication, and budgets under $25,000.</p>
          <p><Link href="/products/paint-booths/cross-flow"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>View PFS Crossflow Booths →</span></Link></p>

          {/* Full Downdraft */}
          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            Full Downdraft Spray Booths
          </h2>
          <p>In a full downdraft booth, clean air enters through a filtered ceiling plenum and is pulled straight down over the object, exhausting through grated trenches in the floor.</p>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem", margin: "1.25rem 0" }}>
            <div style={{ background: "#f0fdf4", border: "1px solid #bbf7d0", padding: "1rem 1.25rem" }}>
              <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#166534", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Pros</p>
              <p style={{ fontSize: "0.9rem", color: "#1f2937", margin: 0 }}><strong>Cleanest Finish:</strong> Overspray and dust are immediately pulled down and away from the part. High-volume production standard.</p>
            </div>
            <div style={{ background: "#fef2f2", border: "1px solid #fecaca", padding: "1rem 1.25rem" }}>
              <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.75rem", fontWeight: 700, color: "#991b1b", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Cons</p>
              <p style={{ fontSize: "0.9rem", color: "#1f2937", margin: 0 }}><strong>Installation Cost:</strong> Requires a concrete pit for the exhaust or an elevated steel basement with ramps.</p>
            </div>
          </div>
          <p><strong>Best For:</strong> High-volume collision repair, aerospace finishing, and shops demanding the highest quality finish.</p>
          <p><Link href="/products/paint-booths/full-downdraft"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>View PFS Zenith Full-Downdraft →</span></Link></p>

          {/* Semi / Side */}
          <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.3rem", fontWeight: 700, color: BLUE, textTransform: "uppercase", letterSpacing: "0.04em", marginTop: "2.5rem", marginBottom: "0.75rem" }}>
            The Middle Ground: Semi-Downdraft and Side Downdraft
          </h2>
          <p>If you want the clean ceiling-air of a downdraft booth but cannot dig up your concrete floor, semi-downdraft and side downdraft booths are the solution. Air enters through the ceiling but exhausts either at the back wall (semi) or along the side walls (side downdraft). They offer a cleaner finish than a crossflow without the high installation costs of a full downdraft pit.</p>
          <p>
            <Link href="/products/paint-booths/semi-downdraft"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>View PFS Orion Semi-Downdraft →</span></Link>
            {" · "}
            <Link href="/products/paint-booths/side-downdraft"><span style={{ color: BLUE, fontWeight: 600, cursor: "pointer" }}>View PFS Helios Side-Downdraft →</span></Link>
          </p>

        </div>

        {/* CTA */}
        <div style={{ marginTop: "3rem", background: BLUE, padding: "2rem 2.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
          <p style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", textTransform: "uppercase", letterSpacing: "0.04em", margin: 0 }}>Still not sure which airflow design fits your production goals?</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
            <Link href="/contact/request-a-quote">
              <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", background: GOLD, color: "#fff", fontFamily: "'Chakra Petch', sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.12em", textTransform: "uppercase", padding: "0.75rem 1.5rem", cursor: "pointer" }}>
                Talk to a PFS Engineer <ArrowRight size={14} />
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
            <Link href="/blog/ul508a-certified-control-panel-spray-booth"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>What Is a UL508A Certified Control Panel and Why Does Your Spray Booth Need One? →</span></Link>
            <Link href="/blog/spray-booth-maintenance-filter-checklist"><span style={{ color: BLUE, fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.95rem", cursor: "pointer" }}>Spray Booth Maintenance Checklist: When to Change Your Filters →</span></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
