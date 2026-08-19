// Blog Hub Page — /blog
// Lists all 4 SEO blog posts as clean editorial cards
// Linked from Resources hub and sitemap

import { useSEO } from '@/hooks/useSEO';
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import PageHero from "@/components/PageHero";

const BLUE = "#1B3A6B";
const GOLD = "#C8922A";

const POSTS = [
  {
    slug: "/blog/how-much-does-industrial-spray-booth-cost",
    label: "PRICING GUIDE",
    title: "How Much Does an Industrial Spray Booth Cost in 2026?",
    desc: "A complete pricing breakdown for crossflow, downdraft, and custom industrial spray booth systems — from a vertical manufacturer who builds them.",
    img: "/assets/pfs_zenith_6008_595d7725.webp",
    date: "August 2026",
  },
  {
    slug: "/blog/crossflow-vs-downdraft-spray-booth",
    label: "BUYER'S GUIDE",
    title: "Crossflow vs. Downdraft Spray Booths: Which Is Right for Your Shop?",
    desc: "Understand the airflow differences between crossflow, semi-downdraft, and full downdraft booths — and which one fits your production goals and budget.",
    img: "/assets/pfs-booth-clean-interior-wide_3d9c498b.jpeg",
    date: "August 2026",
  },
  {
    slug: "/blog/ul508a-certified-control-panel-spray-booth",
    label: "TECHNICAL GUIDE",
    title: "What Is a UL508A Certified Control Panel and Why Does Your Spray Booth Need One?",
    desc: "Why UL508A certification is critical for spray booth safety, NFPA 33 compliance, and passing local fire inspections — and why PFS builds all panels in-house.",
    img: "/assets/pfs-booth-inspection-tech_b96d285e.jpeg",
    date: "August 2026",
  },
  {
    slug: "/blog/spray-booth-maintenance-filter-checklist",
    label: "SERVICE GUIDE",
    title: "Spray Booth Maintenance Checklist: When to Change Your Filters",
    desc: "The complete spray booth maintenance and filter replacement schedule — exhaust filters, intake filters, AMU pre-filters, daily tasks, and annual professional service.",
    img: "/assets/pfs-booth-clean-hero-anon_9dfc3e0e.png",
    date: "August 2026",
  },
];

export default function BlogHubPage() {
  useSEO({
    title: "Spray Booth Resources & Guides | PFS Blog",
    description: "Technical guides, buyer's guides, and maintenance resources from PFS — the spray booth manufacturer that actually understands the job.",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "Blog",
      "name": "PFS Spray Booth Resources & Guides",
      "url": "https://pfsspraybooths.com/blog",
      "publisher": {
        "@type": "Organization",
        "name": "PFS Industrial Finishing Equipment",
        "url": "https://pfsspraybooths.com"
      },
      "blogPost": [
        {
          "@type": "BlogPosting",
          "headline": "How Much Does an Industrial Spray Booth Cost in 2026?",
          "url": "https://pfsspraybooths.com/blog/how-much-does-industrial-spray-booth-cost"
        },
        {
          "@type": "BlogPosting",
          "headline": "Crossflow vs. Downdraft Spray Booths: Which Is Right for Your Shop?",
          "url": "https://pfsspraybooths.com/blog/crossflow-vs-downdraft-spray-booth"
        },
        {
          "@type": "BlogPosting",
          "headline": "What Is a UL508A Certified Control Panel and Why Does Your Spray Booth Need One?",
          "url": "https://pfsspraybooths.com/blog/ul508a-certified-control-panel-spray-booth"
        },
        {
          "@type": "BlogPosting",
          "headline": "Spray Booth Maintenance Checklist: When to Change Your Filters",
          "url": "https://pfsspraybooths.com/blog/spray-booth-maintenance-filter-checklist"
        }
      ]
    },
    canonical: "https://pfsspraybooths.com/blog",
  });

  return (
    <div style={{ backgroundColor: "#f8f9fb" }}>
      <PageHero
        title="Spray Booth Guides & Resources"
        subtitle="Technical guides, buyer's guides, and maintenance resources from PFS engineers."
        breadcrumbs={[{ label: "Resources", href: "/resources" }, { label: "Blog" }]}
      />

      <div className="container" style={{ paddingTop: "3rem", paddingBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "1.75rem" }}>
          {POSTS.map((post) => (
            <Link key={post.slug} href={post.slug}>
              <div
                style={{
                  background: "#fff",
                  border: "1px solid #e5e7eb",
                  overflow: "hidden",
                  cursor: "pointer",
                  transition: "box-shadow 0.2s ease, transform 0.2s ease",
                  display: "flex",
                  flexDirection: "column",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(27,58,107,0.14)";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)";
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.boxShadow = "none";
                  (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                }}
              >
                {/* Image */}
                <div style={{ height: "200px", overflow: "hidden", position: "relative" }}>
                  <img
                    src={post.img}
                    alt={post.title}
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                  />
                  <div style={{ position: "absolute", top: "0.75rem", left: "0.75rem", background: BLUE, padding: "0.2rem 0.6rem" }}>
                    <span style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.18em", color: GOLD, textTransform: "uppercase" }}>{post.label}</span>
                  </div>
                </div>
                {/* Content */}
                <div style={{ padding: "1.25rem 1.5rem 1.5rem", display: "flex", flexDirection: "column", gap: "0.6rem", flexGrow: 1 }}>
                  <span style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.75rem", color: "#9ca3af" }}>{post.date}</span>
                  <h2 style={{ fontFamily: "'Chakra Petch', sans-serif", fontSize: "1rem", fontWeight: 700, color: BLUE, lineHeight: 1.35, textTransform: "uppercase", letterSpacing: "0.02em", margin: 0 }}>{post.title}</h2>
                  <p style={{ fontFamily: "'Archivo Narrow', sans-serif", fontSize: "0.88rem", color: "#4b5563", lineHeight: 1.65, margin: 0 }}>{post.desc}</p>
                  <div style={{ marginTop: "auto", paddingTop: "0.75rem" }}>
                    <span style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", fontFamily: "'Chakra Petch', sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", color: BLUE }}>
                      Read Guide <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
