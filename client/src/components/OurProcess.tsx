// import { useEffect, useRef } from "react";
// import { Link } from "wouter";
// import { ArrowRight, CheckCircle, Phone, ChevronRight, Shield, Zap, Wrench, MapPin } from "lucide-react";

// export type ProcessStep = {
//   label?: string;
//   title: string;
//   text: string;
//   meta?: string[];
// };

// export type ProcessCta = {
//   label: string;
//   href: string;
//   variant?: "solid" | "ghost";
// };

// export type OurProcessProps = {
//   id?: string;
//   steps?: ProcessStep[];
//   ctas?: ProcessCta[];
//   className?: string;
//   renderCta?: (cta: ProcessCta, className: string) => React.ReactNode;
// };

// export const DEFAULT_PROCESS_STEPS: ProcessStep[] = [
//   {
//     title: "Discovery & Site Assessmentaddeedfe",
//     text: "We start with your parts, throughput targets and facility constraints — walking the floor, measuring the envelope and documenting utilities before a single line is drawn.",
//     meta: ["Site walk", "Airflow audit", "Requirements"],
//   },
//   {
//     title: "Engineering & Layout",
//     text: "Our in-house engineers model the booth, oven or automated line in CAD, size the air make-up and filtration, and confirm code compliance for your jurisdiction.",
//     meta: ["CAD drawings", "CFM sizing", "ETL / NFPA"],
//   },
//   {
//     title: "Proposal & Approval",
//     text: "You get a transparent scope, lead time and budget — equipment, controls, freight and installation itemized, with revisions until the package is exactly right.",
//     meta: ["Itemized quote", "Lead time", "Sign-off"],
//   },
//   {
//     title: "Fabrication in the USA",
//     text: "Panels, plenums and control packages are built in our own facility under QC inspection, so tolerances and finish quality never depend on a third party.",
//     meta: ["Made in USA", "QC checks", "Controls build"],
//   },
//   {
//     title: "Delivery & Installation",
//     text: "Coordinated freight and a factory-trained install crew set, seal and wire the system — mechanical, electrical and exhaust brought together on schedule.",
//     meta: ["Freight", "Mechanical", "Electrical"],
//   },
// ];

// export default function OurProcess({
//   id = "our-process",
//   steps = DEFAULT_PROCESS_STEPS,
//   className = "",
// }: OurProcessProps) {
//   const listRef = useRef<HTMLOListElement>(null);
//   const progressRef = useRef<HTMLSpanElement>(null);


//   const titleId = `${id}-title`;

//   return (
//     <section className={`pfs-process ${className}`} id={id} aria-labelledby={titleId}>
//       <div className="container">
//         <p className="pfs-process__eyebrow">Our Process</p>
//         <h2 data-animation="slideLeft" className="pfs-process__title">
//           How We Engineer Your Finishing System
//         </h2>
//         <p data-animation="slideLeft" className="pfs-process__lede"> Every PFS project follows the same disciplined path — from the first site assessment to lifetime filter and service support. Here is exactly what happens, step by step.</p>

//         <ol className="pfs-steps" ref={listRef}>

//           {/* Default timeline line */}
//           <span
//             className="pfs-steps__line"
//             aria-hidden="true"
//           />

//           {/* Active progress line */}
//           <span
//             className="pfs-steps__progress"
//             ref={progressRef}
//             aria-hidden="true"
//           />

//           {steps.map((step, i) => {
//             const num = String(i + 1).padStart(2, "0");
//             const isLeft = i % 2 === 0;

//             return (
//               <li
//                 key={step.title}
//                 className={`pfs-step ${isLeft
//                   ? "pfs-step--left"
//                   : "pfs-step--right"
//                   }`}
//               >

//                 <div className="pfs-step__side pfs-step__side--left">

//                   {isLeft && (
//                     <div
//                       className="pfs-step__body"
//                       data-animation="slideLeft"
//                     >
//                       <p className="pfs-step__label">
//                         {step.label ?? `Step ${num}`}
//                       </p>

//                       <h3 className="pfs-step__title">
//                         {step.title}
//                       </h3>

//                       <p className="pfs-step__text">
//                         {step.text}
//                       </p>

//                       {step.meta?.length ? (
//                         <ul className="pfs-step__meta">
//                           {step.meta.map((m) => (
//                             <li key={m}>{m}</li>
//                           ))}
//                         </ul>
//                       ) : null}
//                     </div>
//                   )}

//                 </div>

//                 <div className="pfs-step__center">

//                   <div
//                     className="pfs-step__marker"
//                     aria-hidden="true"
//                   >
//                     {num}
//                   </div>

//                 </div>

//                 <div className="pfs-step__side pfs-step__side--right">

//                   {!isLeft && (
//                     <div
//                       className="pfs-step__body"
//                       data-animation="slideRight"
//                     >
//                       <p className="pfs-step__label">
//                         {step.label ?? `Step ${num}`}
//                       </p>

//                       <h3 className="pfs-step__title">
//                         {step.title}
//                       </h3>

//                       <p className="pfs-step__text">
//                         {step.text}
//                       </p>

//                       {step.meta?.length ? (
//                         <ul className="pfs-step__meta">
//                           {step.meta.map((m) => (
//                             <li key={m}>{m}</li>
//                           ))}
//                         </ul>
//                       ) : null}
//                     </div>
//                   )}

//                 </div>

//               </li>
//             );
//           })}
//         </ol>

//         <div className="flex flex-wrap gap-3 flex-shrink-0 mt-10">
//           <Link href="/contact/request-a-quote" data-animation="slideLeft">
//             <span
//               style={{
//                 display: "inline-flex",
//                 alignItems: "center",
//                 gap: "0.45rem",
//                 backgroundColor: "white",
//                 color: "#0A0A0A",
//                 border: "2px solid white",
//                 padding: "0.8rem 1.75rem",
//                 fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
//                 fontSize: "0.82rem",
//                 fontWeight: 700,
//                 letterSpacing: "0.1em",
//                 textTransform: "uppercase",
//                 transition: "all 0.2s ease",
//                 cursor: "pointer",
//               }}
//               onMouseEnter={(e) => {
//                 e.currentTarget.style.backgroundColor = "transparent";
//                 e.currentTarget.style.color = "white";
//               }}
//               onMouseLeave={(e) => {
//                 e.currentTarget.style.backgroundColor = "white";
//                 e.currentTarget.style.color = "#0A0A0A";
//               }}
//             >
//               Request Info <ArrowRight size={14} />
//             </span>
//           </Link>
//           <a data-animation="slideRight"
//             href="/products"
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: "0.45rem",
//               backgroundColor: "transparent",
//               color: "white",
//               border: "2px solid rgba(255,255,255,0.45)",
//               padding: "0.8rem 1.75rem",
//               fontFamily: "'Chakra Petch', 'Barlow Condensed', sans-serif",
//               fontSize: "0.82rem",
//               fontWeight: 700,
//               letterSpacing: "0.1em",
//               textTransform: "uppercase",
//               transition: "all 0.2s ease",
//               cursor: "pointer",
//               textDecoration: "none",
//             }}
//             onMouseEnter={(e) => {
//               e.currentTarget.style.borderColor = "white";
//             }}
//             onMouseLeave={(e) => {
//               e.currentTarget.style.borderColor = "rgba(255,255,255,0.45)";
//             }}
//           >
//             View Products
//           </a>
//         </div>
//       </div>
//     </section>
//   );
// }