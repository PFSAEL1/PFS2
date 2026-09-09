import { ArrowRight } from "lucide-react";

export const PFS_FILTERS_URL = "https://www.pfsfilters.com/paint-booth-filters";

export default function ReplacementFiltersCTA() {
  return (
    <section
      style={{
        background: "#f4f6f9",
        borderTop: "1px solid #dde3ec",
        padding: "clamp(2.5rem, 5vw, 3.5rem) 0",
      }}
    >
      <div className="container">
        <div
          className="flex flex-col md:flex-row md:items-center md:justify-between gap-6"
          style={{ maxWidth: "980px", margin: "0 auto" }}
        >
          <div style={{ maxWidth: "640px" }}>
            <span
              style={{
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "0.68rem",
                fontWeight: 700,
                letterSpacing: "0.16em",
                color: "#1B3A6B",
                textTransform: "uppercase",
                display: "block",
                marginBottom: "0.5rem",
              }}
            >
              Replacement Filters
            </span>
            <h2
              data-animation="slideLeft"
              style={{
                fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
                fontSize: "clamp(1.35rem, 3vw, 1.9rem)",
                fontWeight: 800,
                color: "#111",
                textTransform: "uppercase",
                letterSpacing: "0.02em",
                margin: "0 0 0.75rem",
                lineHeight: 1.15,
              }}
            >
              Replacement Filters for This Booth
            </h2>
            <p
              data-animation="slideLeft"
              style={{
                fontFamily: "'Archivo Narrow', 'Inter', sans-serif",
                fontSize: "0.95rem",
                color: "#4a5568",
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Need replacement filters for this booth? PFS Filters stocks intake, exhaust,
              ceiling, and prefilter media for paint booth maintenance.
            </p>
          </div>
          <a
            data-animation="slideRight"
            href={PFS_FILTERS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full md:w-auto items-center justify-center gap-2"
            style={{
              background: "#1B3A6B",
              color: "#fff",
              fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
              fontSize: "0.82rem",
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "1rem 1.75rem",
              textDecoration: "none",
              boxSizing: "border-box",
              whiteSpace: "nowrap",
            }}
          >
            Shop Replacement Filters <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
