/*
 * Accordion filter media pair — PFS dark/royal-blue design system.
 * Purpose: Present approved generic and authorized Andreae accordion media side by side
 * without diluting the PFS conversion path or making performance/compliance guarantees.
 */
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

const GENERIC_ACCORDION_IMAGE = "/assets/pfs-generic-accordion-filter_6c3e9169.png";
const ANDREAE_ACCORDION_IMAGE = "/assets/pfs-andreae-accordion-filter_4c1c78c4.png";

type AccordionFilterMediaPairProps = {
  label: string;
  title: string;
  intro: string;
  genericCopy: string;
  andreaeCopy: string;
  note?: string;
};

export default function AccordionFilterMediaPair({
  label,
  title,
  intro,
  genericCopy,
  andreaeCopy,
  note,
}: AccordionFilterMediaPairProps) {
  const cards = [
    {
      src: GENERIC_ACCORDION_IMAGE,
      alt: "Generic accordion paint arrestor filter for spray booth exhaust replacement",
      eyebrow: "Generic Replacement Media",
      heading: "Accordion Paint Arrestor",
      copy: genericCopy,
    },
    {
      src: ANDREAE_ACCORDION_IMAGE,
      alt: "Andreae accordion exhaust filter with branded packaging",
      eyebrow: "Authorized Distributor",
      heading: "Andreae Accordion Media",
      copy: andreaeCopy,
    },
  ];

  return (
    <section className="py-16 section-white">
      <div className="container">
        <div style={{ textAlign: "center", maxWidth: "780px", margin: "0 auto 2.5rem" }}>
          <span className="section-label">{label}</span>
          <h2 className="section-heading">{title}</h2>
          <div className="red-divider" style={{ margin: "0.75rem auto 1rem" }} />
          <p className="section-body" style={{ margin: 0 }}>{intro}</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6" style={{ maxWidth: "1080px", margin: "0 auto" }}>
          {cards.map((card) => (
            <article key={card.heading} className="card-hover" style={{ background: "#f6f6f4", border: "1px solid #e7e7e2", borderRadius: "2px", overflow: "hidden" }}>
              <div style={{ background: "#fff", aspectRatio: "4 / 3", display: "flex", alignItems: "center", justifyContent: "center", padding: "clamp(1rem, 2vw, 1.5rem)" }}>
                <img src={card.src} alt={card.alt} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
              </div>
              <div style={{ padding: "1.45rem" }}>
                <span style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "0.68rem", fontWeight: 800, color: "#1B3A6B", letterSpacing: "0.14em", textTransform: "uppercase" }}>{card.eyebrow}</span>
                <h3 style={{ fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif", fontSize: "1.08rem", fontWeight: 800, color: "#1C1C1E", letterSpacing: "0.015em", textTransform: "uppercase", margin: "0.5rem 0 0.65rem" }}>{card.heading}</h3>
                <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.95rem", color: "#555", lineHeight: 1.68, margin: 0 }}>{card.copy}</p>
              </div>
            </article>
          ))}
        </div>

        {note && (
          <p style={{ fontFamily: "'Archivo Narrow', 'Inter', sans-serif", fontSize: "0.84rem", color: "#6a6a6a", lineHeight: 1.65, maxWidth: "850px", textAlign: "center", margin: "1.35rem auto 0" }}>{note}</p>
        )}

        <div style={{ textAlign: "center", marginTop: "2rem" }}>
          <Link href="/contact">
            <span className="btn-glow" style={{ display: "inline-flex", alignItems: "center", gap: "0.45rem" }}>
              GET FILTER QUOTE <ArrowRight size={14} />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
