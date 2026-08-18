/**
 * Hydrogen Bus Finishing System Page — PFS Custom Solutions & SEO Landing Page
 * Route: /products/custom-solutions/hydrogen-bus-finishing-system
 */

import { useState, useRef, useEffect } from "react";
import { Link } from "wouter";
import { ChevronDown, ChevronUp, ArrowRight, Phone, Shield, CheckCircle, Flame, Wrench } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const HERO_VIDEO = "/manus-storage/pfs-prep-station-hero_2554e281.mp4";
const FEATURED_IMG = "/manus-storage/IMG_0590_3d8a1a7e.jpeg";

const GALLERY_IMGS = [
    { src: "/manus-storage/IMG_0590_3d8a1a7e.jpeg", alt: "PFS Hydrogen Bus & Fleet Finishing Bay — front wide angle showing structural frame and enclosure", pos: "center 50%" },
    { src: "/manus-storage/IMG_0588_ad7f6fa0.jpeg", alt: "PFS Hydrogen Bus & Fleet Finishing Bay — angled view with exhaust wall and lighting", pos: "center 50%" },
    { src: "/manus-storage/IMG_0592_2fbb0712.jpeg", alt: "PFS Hydrogen Bus & Fleet Finishing Bay — side structural assembly view", pos: "center 50%" },
    { src: "/manus-storage/enclosed-booth-card-zenith_7e010642.jpg", alt: "PFS Zenith Enclosed Industrial Finishing Booth", pos: "center 50%" },
    { src: "/manus-storage/IMG_2132_c21b2839.jpg", alt: "PFS Open Face Finishing Booth", pos: "center 50%" },
    { src: "/manus-storage/IMG_0498_a98f5f38.jpg", alt: "PFS Paint Mixing Room", pos: "center 50%" },
];

const ETL_LOGO = "/manus-storage/pfs-etl-logo_7758f722.png";
const UL_LOGO = "/manus-storage/pfs-ul508a-clean_e8efdeb8.jpg";
const NFPA_LOGO = "/manus-storage/pfs-nfpa-logo_4b710cc9.png";
const EPA_LOGO = "/manus-storage/pfs-epa-logo_e4165f68.webp";
const OSHA_LOGO = "/manus-storage/pfs-osha-logo_0c460739.jpg";
const USA_FLAG = "/manus-storage/pfs-usa-flag_8fca512e.jpg";

const BLUE = "#1B3A6B";

const CERTS = [
    { img: ETL_LOGO, title: "ETL & ETL-C Listed", sub: "Intertek — USA & Canada", imgH: 44 },
    { img: UL_LOGO, title: "UL 508A Certified", sub: "Industrial Control Panel Fabricator", imgH: 44 },
    { img: NFPA_LOGO, title: "NFPA 33 / 2 / 855", sub: "Hazardous Location Standards", imgH: 44 },
    { img: EPA_LOGO, title: "EPA Compliant", sub: "Air Quality Standards", imgH: 36 },
    { img: OSHA_LOGO, title: "OSHA 1910.307 Compliant", sub: "Classified Location Safety", imgH: 36 },
    { img: USA_FLAG, title: "Made in the USA", sub: "Santa Rosa, CA", imgH: 36 },
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
    { label: "Enclosed Paint Booths", href: "/products/paint-booths/enclosed", img: "/manus-storage/enclosed-booth-card-zenith_7e010642.jpg", desc: "Full-enclosure industrial booths for transit bus and commercial vehicle refinishing." },
    { label: "Air Make-Up Units", href: "/products/air-make-up-units", img: "/manus-storage/pfs-amu-card_41f0dd88.jpg", desc: "Tempered make-up air systems engineered to replace exhausted air and maintain facility pressurization." },
    { label: "Mixing Rooms", href: "/products/mixing-rooms", img: "/manus-storage/IMG_0498_a98f5f38.jpg", desc: "NFPA 33 compliant mixing rooms for safe coating preparation adjacent to bus bays." },
    { label: "Blast Systems", href: "/products/blast-systems", img: "/manus-storage/IMG_2132_c21b2839.jpg", desc: "Heavy-duty containerized and room blast systems for fleet surface preparation." },
];

function CertCarousel() {
    const trackRef = useRef<HTMLDivElement>(null);
    const animRef = useRef<number>(0);
    const posRef = useRef(0);
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
        }
    });

    const [activeImg, setActiveImg] = useState(GALLERY_IMGS[0].src);
    const [openFeature, setOpenFeature] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-background text-foreground flex flex-col">
            {/* Hero */}
            <section className="relative h-[65vh] min-h-[450px] flex items-center justify-center bg-black">
                <video autoPlay muted loop playsInline className="absolute inset-0 w-full h-full object-cover">
                    <source src={HERO_VIDEO} type="video/mp4" />
                </video>
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(90deg, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.55) 60%, rgba(0, 0, 0, 0.2) 100%)"
                    }}
                />               <div className="relative z-10 container mx-auto px-4 text-center max-w-4xl">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-semibold tracking-widest uppercase bg-primary text-white border border-primary/30 rounded">
                        Alternative Fuel & FCEV Protection
                    </span>
                    {/* <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-4 font-heading text-white">
                        HYDROGEN BUS & FLEET <span className="text-primary">FINISHING SYSTEMS</span>
                    </h1> */}
                    <h1 data-animation="slideLeft"
                        style={{
                            fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                            fontSize: "clamp(2.2rem, 5vw, 3.8rem)",
                            fontWeight: 800,
                            color: "rgb(255, 255, 255)",
                            lineHeight: 1.05,
                            letterSpacing: "0.02em",
                            textTransform: "uppercase",
                            marginBottom: "1rem",
                        }}
                    >
                        HYDROGEN BUS & FLEET{" "}
                        <span style={{ color: "rgb(27, 58, 107)" }}>FINISHING SYSTEMS</span>
                    </h1>
                    <p data-animation="slideLeft" className="text-lg md:text-xl text-zinc-300 mb-8 max-w-2xl mx-auto font-sans">
                        Engineered service bays and ventilation enclosures for hydrogen fuel cell electric transit buses and heavy commercial fleets. NFPA 33, NFPA 2, and UL 508A compliant.
                    </p>
                    <div className="flex flex-wrap gap-4 justify-center">
                        <Link data-animation="slideLeft" href="/contact/request-a-quote">
                            <a className="btn-glow" style={{ padding: "0.75rem 2rem", fontSize: "0.85rem" }}>
                                Request Specifications <ArrowRight className="w-5 h-5" />
                            </a>
                        </Link>
                        <a data-animation="slideRight"
                            href="tel:8885457715"
                            className="btn-glow-white"
                            style={{ background: "transparent", color: "#fff", padding: "0.75rem 2rem", fontSize: "0.85rem" }}
                        >
                            <Phone className="w-5 h-5" />
                            (888) 545-7715
                        </a>
                    </div>
                </div>
            </section>

            {/* Certification Ticker */}
            <div className="bg-white border-b border-zinc-200 py-6 overflow-hidden">
                <div className="container mx-auto px-4"><CertCarousel /></div>
            </div>

            {/* Main Product Showcase */}
            <section className="py-16 md:py-16 container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                    {/* Gallery Column */}
                    <div className="lg:col-span-7 space-y-4">
                        <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900 aspect-[4/3] shadow-2xl">
                            <img src={activeImg} alt="PFS Hydrogen Bus System" className="w-full h-full object-cover transition-all duration-300" />
                            <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-md px-3 py-1 rounded text-xs font-mono text-primary border border-primary/30">
                                PFS CUSTOM ENGINEERING
                            </div>
                        </div>
                        <div className="grid grid-cols-6 gap-2">
                            {GALLERY_IMGS.map((img, i) => (
                                <button key={i} onClick={() => setActiveImg(img.src)} className={`rounded-lg overflow-hidden border-2 aspect-square transition-all ${activeImg === img.src ? 'border-primary scale-105' : 'border-zinc-800 opacity-60 hover:opacity-100'}`}>
                                    <img src={img.src} alt={img.alt} className="w-full h-full object-cover" />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Details Column */}
                    <div className="lg:col-span-5 space-y-6">
                        <div
                            style={{
                                fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.14em",
                                color: "rgb(27, 58, 107)",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: "0.6rem",
                            }}
                        >
                            <Shield className="w-4 h-4 inline-block mr-2" />
                            Transit & Fleet Protection
                        </div>
                        <h2 data-animation="slideLeft"
                            style={{
                                fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                                fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                                fontWeight: 800,
                                color: "rgb(17, 17, 17)",
                                letterSpacing: "-0.01em",
                                marginBottom: "0.5rem",
                            }}
                        >
                            Safe Servicing for Hydrogen & FCEV Fleets
                        </h2>
                        <p
                            className="leading-relaxed"
                            style={{
                                color: "#4a4a4a",
                                fontFamily: '"Archivo Narrow", Inter, sans-serif',
                                fontSize: "0.9rem",
                                lineHeight: 1.75,
                                marginBottom: "16px",
                            }}
                        >
                            As municipal transit authorities and commercial fleets transition to hydrogen fuel cell electric vehicles (FCEV), maintenance facilities require specialized ventilation and hazardous-location engineering. Hydrogen gas is extremely buoyant and volatile; standard vehicle maintenance bays lack the high-level extraction and gas-detection interlocks required by fire marshals.
                        </p>
                        <p
                            className="leading-relaxed"
                            style={{
                                color: "#4a4a4a",
                                fontFamily: '"Archivo Narrow", Inter, sans-serif',
                                fontSize: "0.9rem",
                                lineHeight: 1.75,
                            }}
                        >
                            PFS hydrogen service bays and finishing enclosures provide continuous high-volume mechanical ventilation, UL 508A certified controls, optional LEL sensor arrays, and CID2 lighting to protect technicians and facility infrastructure.
                        </p>

                        <div
                            className="rounded-xl p-6 space-y-4"
                            style={{
                                backgroundColor: "#0D1B2E",
                                border: "1px solid rgba(255, 255, 255, 0.15)",
                            }}
                        >
                            <h3
                                style={{
                                    fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                                    fontWeight: 700,
                                    fontSize: "1.1rem",
                                    color: "#FFFFFF",
                                    lineHeight: 1.3,
                                }}
                            >
                                System Highlights
                            </h3>

                            <ul
                                className="space-y-3"
                                style={{
                                    fontFamily: '"Archivo Narrow", Inter, sans-serif',
                                    fontSize: "0.9rem",
                                    lineHeight: 1.7,
                                    color: "rgba(255, 255, 255, 0.72)",
                                }}
                            >
                                <li className="flex items-start gap-3">
                                    <CheckCircle
                                        className="w-5 h-5 shrink-0 mt-0.5"
                                        style={{ color: "#1B3A6B" }}
                                    />
                                    <span>
                                        Engineered for zero-emission transit buses, coaches, and commercial trucks
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle
                                        className="w-5 h-5 shrink-0 mt-0.5"
                                        style={{ color: "#1B3A6B" }}
                                    />
                                    <span>
                                        NFPA 33, NFPA 2, and OSHA 1910.307 classified location compliance
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle
                                        className="w-5 h-5 shrink-0 mt-0.5"
                                        style={{ color: "#1B3A6B" }}
                                    />
                                    <span>
                                        Optional high-level RKI / Honeywell LEL hydrogen gas sensor integration
                                    </span>
                                </li>

                                <li className="flex items-start gap-3">
                                    <CheckCircle
                                        className="w-5 h-5 shrink-0 mt-0.5"
                                        style={{ color: "#1B3A6B" }}
                                    />
                                    <span>
                                        Manufactured in Santa Rosa, CA — turnkey national & Canadian delivery
                                    </span>
                                </li>
                            </ul>
                        </div>

                        <div data-animation="slideRight" className="pt-2">
                            <Link href="/contact/request-a-quote">
                                <a className="btn-glow" style={{ padding: "0.75rem 2rem", fontSize: "0.85rem", width: "100%", transition: "all 0.3s ease-in-out" }}>
                                    Request Specifications <ArrowRight className="w-5 h-5" />
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Collapsible Features */}
            <section className="py-16 bg-zinc-950 border-t border-zinc-900">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="text-center mb-8">
                        <span
                            style={{
                                fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                                fontSize: "0.7rem",
                                fontWeight: 700,
                                letterSpacing: "0.14em",
                                color: "rgb(255, 255, 255)",
                                textTransform: "uppercase",
                                display: "block",
                                marginBottom: "0.6rem",
                            }}
                        >
                            Engineering & Safety Specifications
                        </span>
                        <h2 data-animation="slideLeft"
                            style={{
                                fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                                fontSize: 'clamp(1.6rem, 3vw, 2.4rem)',
                                fontWeight: 800,
                                color: 'white',
                                letterSpacing: '-0.01em',
                                marginBottom: '0.5rem',
                            }}
                        >
                            Built for Severe Alternative-Fuel Environments
                        </h2>

                    </div>
                    <div className="space-y-4">
                        {FEATURES.map((f, i) => {
                            const isOpen = openFeature === i;
                            return (
                                <div key={i} className="border border-zinc-800 bg-zinc-900/50 rounded-xl overflow-hidden transition-all">
                                    <button onClick={() => setOpenFeature(isOpen ? null : i)} className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-zinc-900 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <span
                                                style={{
                                                    fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                                                    fontSize: "1.5rem",
                                                    fontWeight: 800,
                                                    color: "rgba(255, 255, 255, 0.5)",
                                                    lineHeight: 1,
                                                    flexShrink: 0,
                                                    width: "48px",
                                                }}
                                            >
                                                {f.num}
                                            </span>
                                            <span className="font-heading font-bold text-white text-[clamp(1rem,1.25vw,1.125rem)]">
                                                {f.title}
                                            </span>

                                        </div>
                                        {isOpen ? <ChevronUp className="w-5 h-5 text-zinc-500" /> : <ChevronDown className="w-5 h-5 text-zinc-500" />}
                                    </button>
                                    {isOpen && (
                                        <div
                                            className="px-6 pb-6 pt-2 border-t border-zinc-800/60"
                                            style={{
                                                color: "rgba(255, 255, 255, 0.5)",
                                                fontFamily: '"Archivo Narrow", Inter, sans-serif',
                                                fontSize: "0.9rem",
                                                lineHeight: 1.75,
                                            }}
                                        >
                                            {f.body}
                                        </div>
                                    )}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Related Equipment */}
            <section className="py-16 container mx-auto px-4">
                <div className="text-center mb-8">
                    <h2 data-animation="slideLeft"
                        style={{
                            fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                            fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                            fontWeight: 800,
                            color: "rgb(17, 17, 17)",
                            letterSpacing: "-0.01em",
                            marginBottom: "0.5rem",
                        }}
                    >
                        Complementary Finishing Equipment
                    </h2>
                    <p
                        style={{
                            fontFamily: '"Archivo Narrow", Inter, sans-serif',
                            fontSize: "0.95rem",
                            color: "rgb(85, 85, 85)",
                            margin: "0 auto",
                            lineHeight: 1.7,
                        }}
                    >
                        Integrate your hydrogen bays with PFS air make-up units, mixing rooms, and heavy-duty blast systems.
                    </p>
                </div>
                <div data-animation="fadeIn
                " className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {PRODUCTS.map((p, i) => (
                        <Link key={i} href={p.href}>
                            <a style={{ height: "100%" }} className="group block bg-zinc-900 border border-zinc-800 rounded-xl hover:border-primary transition-all duration-300">
                                <div className="aspect-[16/10] overflow-hidden card-image">
                                    <img src={p.img} alt={p.label} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-5">
                                    <h3 data-animation="slideLeft" className="font-heading font-bold text-lg text-white transition-colors">{p.label}</h3>
                                    <p data-animation="slideRight" className="text-xs mt-2 line-clamp-2"
                                        style={{
                                            color: "rgba(255, 255, 255, 0.5)",
                                            fontFamily: '"Archivo Narrow", Inter, sans-serif',
                                            fontSize: "0.9rem",
                                            lineHeight: 1.75,
                                        }}>{p.desc}</p>
                                </div>
                            </a>
                        </Link>
                    ))}
                </div>
            </section>

            {/* Closing Return Banner */}
            <section className="py-12 bg-zinc-900 border-t border-zinc-800">
                <div className="container mx-auto px-4 text-center">
                    <p data-animation="slideLeft"
                        className="mb-8"
                        style={{
                            color: "rgba(255, 255, 255, 0.5)",
                            fontFamily: '"Archivo Narrow", Inter, sans-serif',
                            fontSize: "0.9rem",
                            lineHeight: 1.7,
                        }}
                    >
                        Part of the PFS Commercial Transit & Heavy Fleet Finishing Lineup
                    </p>
                    <Link href="/industries/truck-bus-fleet">
                        <a data-animation="slideRight"
                            className="inline-flex items-center gap-2"
                            style={{
                                background: "transparent",
                                color: "rgb(255, 255, 255)",
                                fontFamily: '"Chakra Petch", "Barlow Condensed", sans-serif',
                                fontSize: "0.88rem",
                                fontWeight: 700,
                                letterSpacing: "0.12em",
                                textTransform: "uppercase",
                                padding: "0.85rem 2rem",
                                border: "2px solid rgba(255, 255, 255, 0.5)",
                                cursor: "pointer",
                            }}
                        >
                            Explore Truck, Bus & Fleet Solutions
                            <ArrowRight className="w-4 h-4 text-white" />
                        </a>
                    </Link>
                </div>
            </section>
        </div>
    );
}