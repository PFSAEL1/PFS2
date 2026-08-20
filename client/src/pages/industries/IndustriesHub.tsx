import { useEffect } from 'react';
import PageHero from "@/components/PageHero";
import { useSEO } from '@/hooks/useSEO';
import { Link } from "wouter";
import { ChevronRight } from "lucide-react";

const HERO = "/assets/pfs-truck-fleet-coach-bus-front_3a5f10aa.jpg";
const HERO_VIDEO = "/assets/industries_hub_coach_bus_hero_b5b46729.mp4";
const PAINT = "/assets/pfs-white-booth-exterior_0cd9d63a.jpg";
const POWDER = "/assets/pfs-powder-coating-card2_32de7c98.png";
const OVEN = "/assets/pfs-industrial-two-booths_1d5f2782.jpg";
const AERO = "/assets/pfs-aerospace-jet-in-booth-real_2eb79dc9.png";

const INDUSTRIES = [
  { label: "Collision Repair & Auto Body", slug: "collision-repair", img: PAINT, desc: "High-throughput spray booths and prep stations designed for collision repair shops of all sizes." },
  { label: "Automotive Manufacturing", slug: "automotive-manufacturing", img: "/assets/automotive-manufacturing-booth_c82d7068.jpeg", imgPosition: "center 40%", desc: "Production-scale paint and powder systems for OEM and Tier 1 automotive manufacturers." },
  { label: "Aerospace & Defense", slug: "aerospace-defense", img: AERO, desc: "Precision-controlled finishing environments meeting aerospace and defense specifications." },
  { label: "Industrial Manufacturing", slug: "industrial-manufacturing", img: OVEN, desc: "Robust finishing systems for general industrial manufacturing and fabrication." },
  { label: "Heavy Equipment", slug: "heavy-equipment", img: "/assets/pfs-heavy-equipment-cat-orion_a2a2b9c6.jpg", imgPosition: "center 40%", desc: "Large-format booths and ovens for agricultural, construction, and mining equipment." },
  { label: "Truck, Bus & Fleet", slug: "truck-bus-fleet", img: "/assets/pfs-school-bus-booth_179842ca_6651f8d4.png", desc: "Drive-through booths and fleet refinishing systems for commercial vehicle operations." },
  { label: "Rail & Transit", slug: "rail-transit", img: "/assets/pfs-amtrak-in-booth_c7d4da1b.jpg", imgPosition: "center 30%", desc: "Specialized finishing facilities for railcar, locomotive, and transit vehicle refinishing." },
  { label: "Marine", slug: "marine", img: "/assets/marine_helios_sailboat_card_6d98788d.jpg", desc: "Corrosion-resistant finishing systems for marine vessels, components, and structures." },
  { label: "Energy & Utilities", slug: "energy-utilities", img: "/assets/pfs-energy-hero_82223207.png", imgPosition: "center 40%", desc: "Industrial finishing equipment for pipeline, power generation, and utility infrastructure." },
  { label: "Government & Military", slug: "government-military", img: "/assets/pfs-military-humvee-booth-clean_ef5c4409.jpeg", desc: "Compliant finishing facilities for government agencies and military applications." },
  { label: "Woodworking", slug: "woodworking", img: "/assets/pfs-woodworking-booth-clean_26912a5d.jpg", desc: "Open-face and cross-flow booths for lacquers, stains, and sealers — built for cabinet shops and furniture manufacturers." },
];

export default function IndustriesHub() {
  useSEO({
    title: "Industries Served | PFS Industrial Spray Booth & Finishing Equipment",
    description: "PFS supplies industrial spray paint booths, powder coating systems, ovens, and blast equipment to aerospace, automotive, collision repair, military, heavy equipment, marine, rail, and fleet industries.",
    canonical: "/industries",
  });

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Industries Served by PFS",
      "url": "https://pfsspraybooths.com/industries",
      "description": "PFS serves automotive, aerospace, collision repair, industrial manufacturing, government, military, marine, rail, energy, and woodworking industries with custom finishing systems.",
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
        title="Industries Served"
        subtitle="PFS finishing equipment is deployed across a wide range of demanding industries. Whatever your application, we have the expertise and equipment to match."
        breadcrumbs={[{ label: "Industries" }]}
        bgImage={HERO}
        bgVideo={HERO_VIDEO}
      />
      <section className="py-16 bg-white">
        <div className="container">
          <div className="mb-10">
            <span className="section-label">Industries</span>
            <h2 data-animation="slideLeft" className="section-heading-lg">Built for Your Industry</h2>
            <p  className="section-body max-w-2xl">From collision repair shops to aerospace facilities, PFS has the experience and product range to meet the most demanding finishing requirements.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {INDUSTRIES.map((ind) => (
              <Link key={ind.slug} href={`/industries/${ind.slug}`}>
                <div className="product-card group">
                  <div className="overflow-hidden" style={{ height: "240px" }}>
                    <img src={ind.img} alt={ind.label} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" style={{ objectPosition: (ind as any).imgPosition || 'center center' }} />
                  </div>
                  <div className="p-5">
                    <div className="flex items-center justify-between mb-2">
                      <h3 data-animation="slideLeft" style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "1rem", fontWeight: 600, color: "#1a1a1a", letterSpacing: "0.03em" }}>{ind.label}</h3>
                      <ChevronRight size={16} style={{ color: "#FFFFFF" }} />
                    </div>
                    <p data-animation="slideRight" style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.82rem", color: "#666", lineHeight: 1.6 }}>{ind.desc}</p>
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
