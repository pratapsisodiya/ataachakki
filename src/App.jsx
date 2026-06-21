import { useState, useEffect } from "react";
import './index.css';
import {
  IconPhone, IconWhatsapp, IconMapPin, IconClock,
  IconLeaf, IconShield, IconCheck, IconScale,
  IconWheat, IconChakki, IconStar, IconMenu, IconX
} from "./Icons";

const PHONE     = "+918559958128";
const PHONE_FMT = "+91 85599 58128";
const WA        = "https://wa.me/918559958128";
const MAP       = "https://maps.app.goo.gl/ej6gHT931V5XftsBA";

/* ── Small reusables ─────────────────────────────────────── */
function BtnCall({ full = false, inv = false }) {
  return (
    <a href={`tel:${PHONE}`}
      className="btn-call"
      style={full ? { width: "100%", justifyContent: "center" } : {}}
    >
      <IconPhone size={15} color="#fff" />
      {PHONE_FMT}
    </a>
  );
}

function BtnWa({ full = false }) {
  return (
    <a href={WA} target="_blank" rel="noopener noreferrer"
      className="btn-wa"
      style={full ? { width: "100%", justifyContent: "center" } : {}}
    >
      <IconWhatsapp size={16} color="#fff" />
      WhatsApp
    </a>
  );
}

/* ── App ─────────────────────────────────────────────────── */
export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navLinks = [
    { label: "Rates", id: "rates" },
    { label: "About", id: "about" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <div style={{ fontFamily: "'Nunito', sans-serif", background: "#FDFAF4", color: "#1C1008" }}>

      {/* ══ NAV ════════════════════════════════════════════ */}
      <nav style={{
        position: "sticky", top: 0, zIndex: 200,
        background: scrolled ? "rgba(253,250,244,.97)" : "#FDFAF4",
        borderBottom: scrolled ? "1.5px solid #E8D4B0" : "1.5px solid transparent",
        backdropFilter: scrolled ? "blur(8px)" : "none",
        transition: "border-color .25s, background .25s",
      }}>
        <div className="container" style={{ height: 60, display: "flex", alignItems: "center", justifyContent: "space-between" }}>

          {/* Logo */}
          <div style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer" }}
            onClick={() => go("home")} role="link" aria-label="Go to top">
            <div style={{
              width: 38, height: 38, borderRadius: "50%", background: "#7C3D0F",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <IconChakki size={20} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "1rem", color: "#1C1008", lineHeight: 1.1 }}>
                Yatendra Desi Chakki
              </div>
              <div style={{ fontSize: "0.58rem", color: "#7C3D0F", fontFamily: "'Poppins', sans-serif", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" }}>
                Fresh Atta · Jaipur
              </div>
            </div>
          </div>

          {/* Desktop */}
          <div className="desktop-only" style={{ display: "flex", alignItems: "center", gap: 28 }}>
            {navLinks.map(l => (
              <button key={l.id} className="nav-link" onClick={() => go(l.id)}>{l.label}</button>
            ))}
            <BtnCall />
          </div>

          {/* Hamburger */}
          <button className="ham-btn" onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            style={{ display: "none" }}
            ref={el => { if (el) el.style.display = window.innerWidth <= 900 ? "flex" : "none"; }}>
            {menuOpen ? <IconX size={22} color="#1C1008" /> : <IconMenu size={22} color="#1C1008" />}
          </button>
        </div>

        {menuOpen && (
          <div style={{
            background: "#fff", borderTop: "1px solid #E8D4B0",
            padding: "16px 20px", display: "flex", flexDirection: "column", gap: 14,
          }}>
            {navLinks.map(l => (
              <button key={l.id} className="nav-link"
                style={{ fontSize: "1rem", textAlign: "left" }}
                onClick={() => go(l.id)}>{l.label}
              </button>
            ))}
            <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 4 }}>
              <BtnCall full />
              <BtnWa full />
            </div>
          </div>
        )}
      </nav>

      {/* ══ HERO ═══════════════════════════════════════════ */}
      <section id="home" className="section" style={{ paddingTop: 56, paddingBottom: 48 }}>
        <div className="container hero-grid">

          {/* Text */}
          <div>
            <span className="tag">
              <IconMapPin size={11} color="#7C3D0F" style={{ marginRight: 4 }} />
              &nbsp;Jaipur, Rajasthan
            </span>

            <div style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 900,
              fontSize: "clamp(1.3rem, 4.5vw, 2rem)",
              color: "#7C3D0F", marginBottom: 8, lineHeight: 1.2, marginTop: 4,
            }}>
              यतेन्द्र देसी चक्की
            </div>

            <h1 style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 900,
              fontSize: "clamp(2rem, 6vw, 3.2rem)",
              color: "#1C1008", lineHeight: 1.12, marginBottom: 18,
            }}>
              Pure Desi Atta,<br />
              <span style={{ color: "#7C3D0F" }}>Stone Ground.</span>
            </h1>

            <p style={{ fontSize: "0.97rem", color: "#6B4A28", lineHeight: 1.82, maxWidth: 400, marginBottom: 28 }}>
              No mixing. No chemicals. Just your gehu, freshly ground on our stone chakki — the way it has always been done.
            </p>

            <div className="hero-btns" style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 36 }}>
              <BtnCall />
              <BtnWa />
            </div>

            {/* Open badge */}
            <div style={{
              display: "inline-flex", alignItems: "center", gap: 10,
              background: "#F0FFF4", border: "1.5px solid #86EFAC",
              borderRadius: 10, padding: "11px 18px",
            }}>
              <div style={{
                width: 9, height: 9, borderRadius: "50%",
                background: "#16A34A", boxShadow: "0 0 0 3px #BBF7D0", flexShrink: 0,
              }} />
              <div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "0.84rem", color: "#15803D" }}>
                  Open Every Day
                </div>
                <div style={{ fontSize: "0.73rem", color: "#166534", marginTop: 1 }}>
                  Mon – Sun &nbsp;·&nbsp; Opens 4:30 PM
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div className="hero-visual" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ position: "relative", width: 300, height: 300 }}>
              {/* Outer ring */}
              <div style={{
                position: "absolute", inset: 0, borderRadius: "50%",
                background: "conic-gradient(from 0deg, #F5E6CC, #D4A96A, #F5E6CC, #C8893A, #F5E6CC)",
                padding: 10,
              }}>
                <div style={{
                  width: "100%", height: "100%", borderRadius: "50%",
                  background: "radial-gradient(circle at 38% 32%, #FFF8EE, #F5E6CC)",
                  display: "flex", flexDirection: "column",
                  alignItems: "center", justifyContent: "center", gap: 10,
                }}>
                  <div className="spin" style={{ color: "#7C3D0F" }}>
                    <IconChakki size={80} color="#7C3D0F" />
                  </div>
                  <div style={{
                    fontFamily: "'Poppins', sans-serif", fontWeight: 900,
                    fontSize: "0.88rem", color: "#5A2A08", textAlign: "center", lineHeight: 1.2,
                  }}>
                    Stone Chakki
                  </div>
                </div>
              </div>

              {/* Price floaters */}
              {[
                { style: { top: "-8%", left: "50%", transform: "translateX(-50%)" }, label: "Desi Atta", price: "₹37 / kg" },
                { style: { bottom: "-8%", left: "50%", transform: "translateX(-50%)" }, label: "Gehu Pisai", price: "₹3.5 / kg" },
              ].map(item => (
                <div key={item.label} style={{
                  position: "absolute", ...item.style,
                  background: "#7C3D0F", color: "#fff",
                  borderRadius: 8, padding: "8px 16px",
                  textAlign: "center", whiteSpace: "nowrap",
                  boxShadow: "0 4px 16px rgba(124,61,15,.32)",
                }}>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, fontSize: "0.63rem", textTransform: "uppercase", letterSpacing: "0.08em", opacity: 0.8 }}>
                    {item.label}
                  </div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "1.1rem", lineHeight: 1.15 }}>
                    {item.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ══ TRUST BAR ══════════════════════════════════════ */}
      <div style={{ background: "#F5E6CC", borderTop: "1px solid #E8D4B0", borderBottom: "1px solid #E8D4B0", padding: "15px 20px" }}>
        <div className="trust-bar-inner container" style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap" }}>
          {[
            [IconCheck,  "Pure Jaggery"],
            [IconWheat,  "100% Desi Gehu"],
            [IconLeaf,   "No Chemicals"],
            [IconShield, "No Mixing"],
            [IconScale,  "Wholesale Available"],
          ].map(([Icon, label]) => (
            <div key={label} className="trust-item">
              <Icon size={13} color="#7C3D0F" />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ══ RATES ══════════════════════════════════════════ */}
      <section id="rates" className="section section-dark">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.7rem", textTransform: "uppercase", letterSpacing: "0.13em", color: "#C8893A", marginBottom: 10 }}>
              Our Rates
            </div>
            <h2 className="section-heading light">Seedha Rate, Koi Chhupa Nahin</h2>
            <p style={{ color: "#9A7A5A", marginTop: 10, fontSize: "0.92rem" }}>Simple pricing. No hidden charges.</p>
          </div>

          <div className="rates-grid">

            {/* Atta */}
            <div className="rate-card featured">
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(200,137,58,.15)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconWheat size={28} color="#C8893A" />
                </div>
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#C8893A", marginBottom: 8 }}>
                Pure Desi Atta
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "3.4rem", color: "#fff", lineHeight: 1 }}>
                ₹37
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#9A7A5A", fontSize: "0.82rem", marginTop: 4, marginBottom: 18 }}>
                per kilogram
              </div>
              <p style={{ color: "#9A7A5A", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: 26 }}>
                100% pure gehu ka atta. Stone ground, fresh daily. No mixing, no preservatives.
              </p>
              <BtnCall full />
            </div>

            {/* Pisai */}
            <div className="rate-card">
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(200,137,58,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconChakki size={28} color="#C8893A" />
                </div>
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#C8893A", marginBottom: 8 }}>
                Gehu Pisai
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "3.4rem", color: "#fff", lineHeight: 1 }}>
                ₹3.5
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#9A7A5A", fontSize: "0.82rem", marginTop: 4, marginBottom: 18 }}>
                per kilogram
              </div>
              <p style={{ color: "#9A7A5A", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: 26 }}>
                Bring your own wheat — we grind it fresh on our stone chakki. Clean, fast, affordable.
              </p>
              <BtnWa full />
            </div>

            {/* Timings */}
            <div className="rate-card">
              <div style={{ display: "flex", justifyContent: "center", marginBottom: 16 }}>
                <div style={{ width: 56, height: 56, borderRadius: "50%", background: "rgba(200,137,58,.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <IconClock size={28} color="#C8893A" />
                </div>
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.68rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#C8893A", marginBottom: 8 }}>
                Timings
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "3.4rem", color: "#fff", lineHeight: 1 }}>
                4:30
              </div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 600, color: "#9A7A5A", fontSize: "0.82rem", marginTop: 4, marginBottom: 18 }}>
                PM onwards · Every Day
              </div>
              <p style={{ color: "#9A7A5A", fontSize: "0.82rem", lineHeight: 1.65, marginBottom: 26 }}>
                Open Monday to Sunday. No band days, no holidays — we're here when you need us.
              </p>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#16A34A", boxShadow: "0 0 0 3px rgba(22,163,74,.3)" }} />
                <span style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#16A34A", fontSize: "0.82rem" }}>
                  Open Today
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ ABOUT / WHY ════════════════════════════════════ */}
      <section id="about" className="section">
        <div className="container about-grid">

          {/* Left */}
          <div>
            <span className="tag">Why Desi Chakki?</span>
            <h2 className="section-heading" style={{ marginBottom: 18 }}>
              Stone-ground atta is<br />
              <span style={{ color: "#7C3D0F" }}>simply better.</span>
            </h2>
            <p style={{ color: "#6B4A28", lineHeight: 1.82, fontSize: "0.95rem", marginBottom: 14 }}>
              Mill machines grind at high speed, generating heat that destroys the bran, fibre, and natural oils in wheat. A stone chakki grinds slowly and cool — everything stays intact.
            </p>
            <p style={{ color: "#6B4A28", lineHeight: 1.82, fontSize: "0.95rem", marginBottom: 32 }}>
              The result is darker, coarser, more nutritious atta — and roti that actually tastes like gehu.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <BtnCall />
              <BtnWa />
            </div>
          </div>

          {/* Right */}
          <div>
            {[
              { Icon: IconWheat,  title: "Pure Gehu, Nothing Else",   body: "We don't mix maida, starch, or any additive. What you bring is what you get — just ground finer on stone." },
              { Icon: IconChakki, title: "Stone Chakki, Slow Grind",  body: "Slow grinding keeps nutrients intact. No heat damage, no nutrient loss — just proper atta." },
              { Icon: IconScale,  title: "Lowest Rate in the Area",   body: "₹37/kg for atta and ₹3.5/kg for pisai. No hidden charges, no minimum order." },
              { Icon: IconClock,  title: "Open Every Single Day",     body: "Monday to Sunday from 4:30 PM. No holidays — because hunger doesn't take a day off." },
            ].map((f, i) => (
              <div key={f.title} className="feat-row" style={{ borderBottom: i < 3 ? "1px solid #E8D4B0" : "none" }}>
                <div style={{
                  width: 42, height: 42, borderRadius: 10,
                  background: "#F5E6CC", color: "#7C3D0F",
                  display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                }}>
                  <f.Icon size={20} color="#7C3D0F" />
                </div>
                <div>
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.9rem", color: "#1C1008", marginBottom: 4 }}>
                    {f.title}
                  </div>
                  <div style={{ fontSize: "0.82rem", color: "#6B4A28", lineHeight: 1.65 }}>
                    {f.body}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ REVIEWS ════════════════════════════════════════ */}
      <section className="section section-alt">
        <div className="container">
          <div style={{ marginBottom: 36 }}>
            <span className="tag">Customer Reviews</span>
            <h2 className="section-heading">Log Kya Kehte Hain</h2>
          </div>
          <div className="review-grid">
            {[
              { name: "Ramesh Sharma",  text: "Bahut badhiya chakki hai. Atta bilkul sahi milta hai, koi mixing nahi. Roz yahan se lete hain.", role: "Regular customer" },
              { name: "Sunita Devi",    text: "Pisai rate bhi sahi hai aur atta fresh milta hai. Bachon ko ghar ki roti mein fark dikha.",     role: "Regular customer" },
              { name: "Mahesh Gupta",   text: "Bulk mein lete hain dukaan ke liye. Rate acha hai, quality consistent rehti hai.",               role: "Wholesale buyer" },
            ].map(r => (
              <div key={r.name} className="review-card">
                <div style={{ display: "flex", gap: 3, marginBottom: 12 }}>
                  {[...Array(5)].map((_, i) => <IconStar key={i} size={13} />)}
                </div>
                <p style={{ fontSize: "0.86rem", color: "#6B4A28", lineHeight: 1.72, marginBottom: 18 }}>
                  "{r.text}"
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <div style={{
                    width: 34, height: 34, borderRadius: "50%",
                    background: "#7C3D0F", color: "#fff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "'Poppins', sans-serif", fontWeight: 800, fontSize: "0.85rem", flexShrink: 0,
                  }}>
                    {r.name[0]}
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.83rem", color: "#1C1008" }}>
                      {r.name}
                    </div>
                    <div style={{ fontSize: "0.7rem", color: "#A0AEC0" }}>{r.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ CTA BAND ═══════════════════════════════════════ */}
      <section style={{ background: "#7C3D0F", padding: "52px 20px", textAlign: "center" }}>
        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 14, opacity: 0.6 }}>
            <IconChakki size={44} color="#fff" />
          </div>
          <h2 style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, fontSize: "clamp(1.6rem, 5vw, 2.2rem)", color: "#fff", marginBottom: 12 }}>
            Aaj Hi Order Karo
          </h2>
          <p style={{ color: "rgba(255,255,255,.76)", fontSize: "0.95rem", lineHeight: 1.76, marginBottom: 28 }}>
            Fresh atta ready from 4:30 PM daily. Call us or drop a WhatsApp — we'll get it sorted.
          </p>
          <div className="cta-btns" style={{ display: "flex", justifyContent: "center", gap: 12, flexWrap: "wrap" }}>
            <a href={`tel:${PHONE}`} style={{
              display: "inline-flex", alignItems: "center", gap: 9,
              background: "#fff", color: "#7C3D0F",
              borderRadius: 9, fontFamily: "'Poppins', sans-serif", fontWeight: 800,
              fontSize: "0.97rem", padding: "14px 28px", textDecoration: "none",
              boxShadow: "0 3px 14px rgba(0,0,0,.18)", transition: "transform .14s",
            }}>
              <IconPhone size={14} color="#7C3D0F" />
              {PHONE_FMT}
            </a>
            <BtnWa />
          </div>
        </div>
      </section>

      {/* ══ CONTACT ════════════════════════════════════════ */}
      <section id="contact" className="section">
        <div className="container">
          <div style={{ marginBottom: 36 }}>
            <span className="tag">Find Us</span>
            <h2 className="section-heading">Kahan Hain Hum?</h2>
          </div>
          <div className="contact-grid">
            {[
              { Icon: IconPhone,  label: "Phone",    val: PHONE_FMT, href: `tel:${PHONE}` },
              { Icon: IconWhatsapp, label: "WhatsApp", val: PHONE_FMT, href: WA },
              { Icon: IconMapPin, label: "Location", val: "Jaipur, Rajasthan", href: MAP },
              { Icon: IconClock,  label: "Timings",  val: "4:30 PM onwards\nMon – Sun", href: null },
            ].map(c => (
              <div key={c.label} className="contact-card">
                <div style={{ display: "flex", justifyContent: "center", marginBottom: 12 }}>
                  <c.Icon size={26} color="#7C3D0F" />
                </div>
                <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, fontSize: "0.66rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#9A7A5A", marginBottom: 8 }}>
                  {c.label}
                </div>
                {c.href ? (
                  <a href={c.href}
                    target={c.href.startsWith("http") ? "_blank" : undefined}
                    rel="noopener noreferrer"
                    style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#7C3D0F", fontSize: "0.88rem", textDecoration: "none", lineHeight: 1.4 }}>
                    {c.val}
                  </a>
                ) : (
                  <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 700, color: "#1C1008", fontSize: "0.85rem", whiteSpace: "pre-line", lineHeight: 1.55 }}>
                    {c.val}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <footer style={{ background: "#0F0804", padding: "26px 20px" }}>
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 14 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <div style={{ color: "#C8893A" }}><IconChakki size={22} color="#C8893A" /></div>
            <div>
              <div style={{ fontFamily: "'Poppins', sans-serif", fontWeight: 900, color: "#fff", fontSize: "0.9rem" }}>
                Yatendra Desi Chakki
              </div>
              <div style={{ fontSize: "0.58rem", color: "#C8893A", fontFamily: "'Poppins', sans-serif", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Jaipur, Rajasthan
              </div>
            </div>
          </div>
          <p style={{ color: "#3D2410", fontSize: "0.76rem", fontFamily: "'Poppins', sans-serif" }}>
            © 2026 Yatendra Desi Chakki · Fresh Atta Daily
          </p>
          <a href={`tel:${PHONE}`} style={{ display: "flex", alignItems: "center", gap: 6, fontFamily: "'Poppins', sans-serif", fontWeight: 800, color: "#C8893A", fontSize: "0.88rem", textDecoration: "none" }}>
            <IconPhone size={13} color="#C8893A" />
            {PHONE_FMT}
          </a>
        </div>
      </footer>
    </div>
  );
}
