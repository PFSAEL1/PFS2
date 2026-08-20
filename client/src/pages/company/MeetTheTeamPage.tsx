// MeetTheTeamPage — /company/team
// Design: Dark #0a0a0a bg, royal blue accents, Chakra Petch headings, Archivo Narrow body
// Layout: Full-team photo hero → Leadership row (3 C-suite) → Management grid → Team grid → Placeholder cards → CTA

import { Link } from "wouter";
import { useState } from "react";
import { ChevronDown, ChevronUp, Shield, Target, Zap, Heart, Lightbulb } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const GOLD = "#B8860B";
const BLUE_DARK = "#1B3A6B";

const VALUES = [
  { icon: Shield,    title: "Professionalism", tagline: "Do it right the first time.", body: "We represent ourselves and our clients with integrity at every touchpoint — from the first call to the final inspection. No shortcuts. No excuses." },
  { icon: Target,    title: "Precision",        tagline: "Every detail matters.",       body: "Spray finishing is an exacting science. Our equipment is engineered to spec, our installations are executed to plan, and our quality checks leave nothing to chance." },
  { icon: Zap,       title: "Speed with Quality", tagline: "Fast — never sloppy.",     body: "We move quickly because our clients' operations depend on it. But speed is never an excuse for cutting corners. We deliver on time and we deliver right." },
  { icon: Heart,     title: "Integrity",        tagline: "Say it, mean it.",            body: "We quote what we build and build what we quote. Our word is our contract. If something isn't right, we make it right — no fine print, no runaround." },
  { icon: Lightbulb, title: "Innovation",       tagline: "Always improve.",             body: "We don't rest on legacy designs. Every project is an opportunity to engineer a better solution — better airflow, better controls, better lead times, better outcomes." },
];
const PILLARS = [
  { num: "01", title: "Speed",          body: "When we control manufacturing, we control the schedule. No waiting on third-party fabricators. No supply chain surprises. Your booth ships when we say it ships." },
  { num: "02", title: "Quality",        body: "Every weld, every panel, every control panel is built to our standards — not someone else's. In-house production means we catch problems before they become your problems." },
  { num: "03", title: "Accountability", body: "One company. One point of contact. From engineering to installation to service. If there's ever an issue, you call us — and we answer." },
];

function Collapsible({ title, label, children }: { title: string; label?: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: "1px solid rgba(255,255,255,0.1)" }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: "100%", display: "flex", alignItems: "center", justifyContent: "space-between", padding: "1.25rem 0", background: "transparent", border: "none", cursor: "pointer", textAlign: "left" }}
      >
        <div>
          {label && <span style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.65rem", fontWeight: 700, color: GOLD, letterSpacing: "0.18em", textTransform: "uppercase", display: "block", marginBottom: "0.2rem" }}>{label}</span>}
          <span style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "clamp(1.1rem,3vw,1.4rem)", fontWeight: 800, color: "#fff", letterSpacing: "0.02em", textTransform: "uppercase" }}>{title}</span>
        </div>
        <span style={{ color: "#fff", flexShrink: 0, marginLeft: "1rem" }}>{open ? <ChevronUp size={20} /> : <ChevronDown size={20} />}</span>
      </button>
      {open && <div style={{ paddingBottom: "1.75rem" }}>{children}</div>}
    </div>
  );
}

const GROUP_PHOTO = "/assets/team-full-group_238cf8d7.webp";

// ── Leadership (C-Suite) ──────────────────────────────────────────────────────
const LEADERSHIP = [
  {
    name: "Christian Hluz",
    title: "CEO & Founder",
    photo: "/assets/team-christian-hluz_a43b39ad.webp",
    bio: "Founded PFS with a single standard: deliver the best equipment and service in the industry, no exceptions. That commitment drives every hire, every system, and every client relationship.",
  },
  {
    name: "Isaac Hluz",
    title: "COO",
    photo: "/assets/team-isaac-hluz-new_86d3e12a.jpeg",
    bio: "Oversees manufacturing, sales, and operations across the PFS organization. Drives process efficiency and ensures every system ships on schedule and to spec.",
  },
  {
    name: "Kiera Hluz",
    title: "CFO",
    photo: "/assets/team-kiera-hluz-v2_19eda825.png",
    bio: "Manages financial strategy, planning, and reporting across the PFS organization. Ensures the company scales sustainably while maintaining the operational standards our clients depend on.",
  },
  {
    name: "Benjamin Sosa",
    title: "Plant Manager / Senior Service Tech",
    photo: "/assets/team-benjamin-sosa_6cf8ca24.webp",
    bio: "Bridges the shop floor and the executive team — overseeing plant operations and leading the senior service team to ensure every system we build and every client we serve meets the PFS standard.",
  },
];

// ── Management ───────────────────────────────────────────────────────────────
const MANAGEMENT = [
  { name: "Alberto Perez",            title: "Assembly Manager & Lead Technician", photo: "/assets/team-alberto-perez_dc1cde45.webp" },
  { name: "Cindy Salazar",            title: "Office Manager",                     photo: "/assets/team-cindy-salazar_d67bcb18.webp" },
  { name: "Jaime Garcia",            title: "Production Manager",                  photo: "/assets/team-jaime-garcia_b9d7737b.webp" },
  { name: "Frank Garcia",            title: "Fabrication Manager",                 photo: "/assets/team-frank-garcia_8319a409.webp" },
  { name: "Kevin Hinostrosa",        title: "Welding Manager",                     photo: "/assets/team-kevin-hinostrosa_78aaa989.webp" },
  { name: "Sai Bhuvanesh Nandipati", title: "Engineering Lead",                    photo: "/assets/team-sai-nandipati_d2924fe4.webp" },
  { name: "Diego Madrid Cuzal",      title: "Installation Manager",                photo: null },
];

// ── Team ─────────────────────────────────────────────────────────────────────
const TEAM = [
  { name: "Genaro Bustamante",        title: "Lead Welder",                        photo: "/assets/team-genaro-bustamante_0317113b.webp" },
  { name: "Juan Morales",             title: "Lead Fabrication",                   photo: "/assets/team-juan-morales_2765b41a.webp" },
  { name: "Jair Valencia Jr",         title: "Sales Specialist",                   photo: "/assets/team-jair-valencia_a4c83c71.webp" },
  { name: "Cursine Garcia Untiveros", title: "Welding Tech",                       photo: "/assets/team-cursine-garcia_f3f7f889.webp" },
  { name: "Enrique Estrada",          title: "Assembly Tech",                      photo: "/assets/team-enrique-estrada_85787397.webp" },
  { name: "Jesus Tosdato",            title: "Installation Lead",                  photo: null },
  { name: "Aremi Espinoza Barajas",   title: "Engineering",                        photo: "/assets/team-aremi-espinoza_8ffb35c8.webp" },
  { name: "Daniel Villalobos",        title: "Fabrication Tech",                   photo: null },
  { name: "Leah Garcia Hluz",         title: "Marketing Assistant",                photo: "/assets/team-leah-garcia-hluz_c2ec4d3b.webp" },
  { name: "Jose Torres",              title: "Service Lead",                       photo: null },
];

// ── Placeholder silhouette ────────────────────────────────────────────────────
function PlaceholderPhoto() {
  return (
    <div style={{
      width: "100%", aspectRatio: "3/4",
      background: "linear-gradient(160deg, #111827 0%, #0d1520 100%)",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0.5rem",
    }}>
      <svg width="56" height="56" viewBox="0 0 64 64" fill="none">
        <circle cx="32" cy="22" r="12" fill="rgba(27,58,107,0.45)" />
        <path d="M8 56c0-13.255 10.745-24 24-24s24 10.745 24 24" fill="rgba(27,58,107,0.3)" />
      </svg>
      <span style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.55rem", letterSpacing: "0.15em", color: "rgba(255,255,255,0.28)", textTransform: "uppercase" }}>
        Photo Coming Soon
      </span>
    </div>
  );
}

// ── Leader card (large, with bio) ─────────────────────────────────────────────
function LeaderCard({ member }: { member: typeof LEADERSHIP[0] }) {
  return (
    <div
      style={{ background: "#111", border: "1px solid rgba(27,58,107,0.3)", borderRadius: "2px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,58,107,0.8)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,58,107,0.3)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
    >
      <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
        <img src={member.photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
      </div>
      <div style={{ padding: "1.25rem 1rem 1.5rem" }}>
        <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.2em", color: "#C8A84B", textTransform: "uppercase", marginBottom: "0.3rem" }}>{member.title}</div>
        <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#fff", marginBottom: "0.75rem", lineHeight: 1.2 }}>{member.name}</div>
        <p style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.6, margin: 0 }}>{member.bio}</p>
      </div>
    </div>
  );
}

// ── Team card (compact) ───────────────────────────────────────────────────────
function TeamCard({ member }: { member: { name: string; title: string; photo: string | null } }) {
  return (
    <div
      style={{ background: "#111", border: "1px solid rgba(255,255,255,0.07)", borderRadius: "2px", overflow: "hidden", transition: "border-color 0.2s, transform 0.2s" }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(27,58,107,0.6)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
    >
      <div style={{ width: "100%", aspectRatio: "3/4", overflow: "hidden" }}>
        {member.photo ? (
          <img src={member.photo} alt={member.name} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
        ) : (
          <PlaceholderPhoto />
        )}
      </div>
      <div style={{ padding: "0.9rem 0.85rem 1.1rem" }}>
        <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.5rem", fontWeight: 700, letterSpacing: "0.18em", color: "#C8A84B", textTransform: "uppercase", marginBottom: "0.25rem" }}>{member.title}</div>
        <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.95rem", fontWeight: 700, color: "#fff", lineHeight: 1.2 }}>{member.name}</div>
      </div>
    </div>
  );
}

// ── Section header helper ─────────────────────────────────────────────────────
function SectionHeader({ label }: { label: string }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "2.5rem" }}>
      <div style={{ width: "3px", height: "28px", background: "#1B3A6B", flexShrink: 0 }} />
      <h2 style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "clamp(1.1rem,2.5vw,1.5rem)", fontWeight: 700, color: "#fff", margin: 0, letterSpacing: "0.06em" }}>{label}</h2>
    </div>
  );
}

// ── Page ─────────────────────────────────────────────────────────────────────
export default function MeetTheTeamPage() {
  useSEO({
    title: "Meet the PFS Team | PFS Industrial Finishing Equipment",
    description: "Meet the engineers, fabricators, welders, and service technicians behind every PFS spray booth and finishing system. Founded 2012, built in Santa Rosa, CA.",
    canonical: "/company/team",
    jsonLd: {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": "Meet the PFS Team",
      "description": "The people behind PFS Industrial Finishing Equipment — engineers, fabricators, welders, and service technicians building industrial finishing equipment in Santa Rosa, CA.",
      "url": "https://pfsspraybooths.com/company/team",
    },
  });

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh", color: "#fff" }}>

      {/* ── Hero: Full Team Photo ── */}
      <div style={{ position: "relative", width: "100%", overflow: "hidden", maxHeight: "520px" }}>
        <img
          src={GROUP_PHOTO}
          alt="The full PFS team outside the PFS Industrial Finishing Equipment manufacturing facility in Santa Rosa, CA"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 72%", display: "block", maxHeight: "520px" }}
        />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(10,10,10,0.1) 0%, rgba(10,10,10,0.0) 40%, rgba(10,10,10,0.8) 100%)" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "2.5rem 2rem 2rem", maxWidth: "1200px", margin: "0 auto" }}>
          <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.6rem", fontWeight: 700, letterSpacing: "0.25em", color: "#C8A84B", textTransform: "uppercase", marginBottom: "0.5rem" }}>PFS INDUSTRIAL FINISHING EQUIPMENT</div>
          <h1 data-animation="slideLeft" style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "clamp(1.8rem,4vw,3rem)", fontWeight: 700, color: "#fff", margin: 0, lineHeight: 1.1 }}>Meet the Team</h1>
          <p data-animation="slideLeft" style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.75)", marginTop: "0.6rem", maxWidth: "520px" }}>The people behind every system we ship — built to the highest standard in industrial finishing.</p>
        </div>
      </div>

      {/* ── Intro ── */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "3.5rem 1.5rem 2rem" }}>
        <p data-animation="slideLeft" style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "1.05rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.75, textAlign: "center" }}>
          PFS was founded in 2012 and brought manufacturing fully in-house in 2020. Today our team of engineers, fabricators, welders, assembly technicians, and field service specialists designs, builds, and installs finishing systems across the United States and Canada — for clients including SpaceX, Tesla, PACCAR, CARSTAR, and Caterpillar.
        </p>
      </div>

      {/* ── Leadership ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "1rem 1.5rem 4rem" }}>
        <SectionHeader label="LEADERSHIP" />
        <div data-animation="fadeIn" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "1.5rem" }}>
          {LEADERSHIP.map(m => <LeaderCard key={m.name} member={m} />)}
        </div>
      </section>

      {/* ── Management ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        <SectionHeader label="MANAGEMENT" />
        <div data-animation="fadeIn" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1.25rem" }}>
          {MANAGEMENT.map(m => <TeamCard key={m.name} member={m} />)}
        </div>
      </section>

      {/* ── Team ── */}
      <section style={{ maxWidth: "1200px", margin: "0 auto", padding: "0 1.5rem 4rem" }}>
        <SectionHeader label="THE TEAM" />
        <div data-animation="fadeIn" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))", gap: "1.1rem" }}>
          {TEAM.map(m => <TeamCard key={m.name} member={m} />)}
        </div>
      </section>

      {/* ── Core Purpose / Values / Vertical Integration ── */}
      <section style={{ background: "#0d1520", borderTop: "1px solid rgba(27,58,107,0.3)", padding: "3rem 1.5rem 1rem" }}>
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <Collapsible title="Core Purpose" label="What Drives Us">
            <div style={{ background: BLUE_DARK, padding: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0px, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px)" }} />
              <blockquote style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "clamp(1.4rem,3.5vw,2.2rem)", fontWeight: 800, color: "#fff", lineHeight: 1.2, letterSpacing: "0.02em", textTransform: "uppercase", position: "relative" }}>
                "To build the highest quality systems and spaces —<br /><span style={{ color: GOLD }}>faster, safer, and stronger."</span>
              </blockquote>
            </div>
          </Collapsible>
          <Collapsible title="Core Values" label="What We Stand For">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))", gap: "1rem" }}>
              {VALUES.map((v) => (
                <div key={v.title} style={{ background: "#111", border: "1px solid rgba(27,58,107,0.3)", borderTop: `3px solid ${BLUE_DARK}`, padding: "1.5rem 1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
                  <div style={{ width: 40, height: 40, background: `${BLUE_DARK}22`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <v.icon size={20} color={GOLD} strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "1.1rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.15rem" }}>{v.title}</h3>
                    <p style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.88rem", fontWeight: 500, color: GOLD, fontStyle: "italic" }}>{v.tagline}</p>
                  </div>
                  <p style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "0.83rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.65 }}>{v.body}</p>
                </div>
              ))}
            </div>
          </Collapsible>
          <Collapsible title="Full Vertical Integration" label="Why It Matters">
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <p style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                Most spray booth companies are distributors. They resell equipment built by someone else, installed by subcontractors, and supported by a third-party service network. When something goes wrong, nobody owns the problem.
              </p>
              <p style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "0.92rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8 }}>
                PFS is different. We design it, build it, ship it, and install it — under one roof, under one name.
              </p>
              {PILLARS.map((p) => (
                <div key={p.num} style={{ display: "flex", gap: "1.25rem", padding: "1.5rem", background: "#111", border: "1px solid rgba(27,58,107,0.3)", borderLeft: `4px solid ${BLUE_DARK}` }}>
                  <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "2rem", fontWeight: 800, color: `${BLUE_DARK}40`, lineHeight: 1, flexShrink: 0, width: 48 }}>{p.num}</div>
                  <div>
                    <h3 style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "1.15rem", fontWeight: 700, color: "#fff", letterSpacing: "0.04em", textTransform: "uppercase", marginBottom: "0.4rem" }}>{p.title}</h3>
                    <p style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "0.86rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7 }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </Collapsible>
        </div>
      </section>

      {/* ── Join Us CTA ── */}
      <section style={{ background: "#0d1520", borderTop: "1px solid rgba(27,58,107,0.3)", padding: "4rem 1.5rem" }}>
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <div style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.55rem", fontWeight: 700, letterSpacing: "0.22em", color: "#1B3A6B", textTransform: "uppercase", marginBottom: "0.75rem" }}>JOIN THE TEAM</div>
          <h2 data-animation="slideLeft" style={{ fontFamily: "'Chakra Petch',sans-serif", fontSize: "clamp(1.4rem,3vw,2rem)", fontWeight: 700, color: "#fff", marginBottom: "1rem" }}>We Build What Others Can't</h2>
          <p data-animation="slideLeft" style={{ fontFamily: "'Archivo Narrow',sans-serif", fontSize: "1rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.7, marginBottom: "2rem" }}>
            PFS is growing. We are always looking for skilled fabricators, welders, service technicians, and engineers who take pride in their craft. If you want to build systems that end up at SpaceX, Tesla, and PACCAR — we want to hear from you.
          </p>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            <Link data-animation="slideLeft" href="/company/careers">
              <a className="btn-glow" style={{ display: "inline-block", padding: "0.75rem 2rem", fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: "#fff" }}>
                VIEW OPEN POSITIONS
              </a>
            </Link>
            <Link data-animation="slideRight" href="/contact">
              <a style={{ display: "inline-block", padding: "0.75rem 2rem", fontFamily: "'Chakra Petch',sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", textDecoration: "none", color: "#fff", border: "1px solid rgba(27,58,107,0.6)" }}>
                CONTACT US
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
