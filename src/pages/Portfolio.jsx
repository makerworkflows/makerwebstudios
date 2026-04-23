import { useState, useEffect, useRef, useCallback } from "react";

const PROJECTS = [
  {
    name: "ABBA Manufacturing",
    initials: "ABBA",
    industry: "Corrugated Packaging",
    category: "manufacturing",
    metric: "4x revenue growth",
    desc: "ABBA had been in the corrugated packaging business for decades but relied entirely on word of mouth. We built them a lead-generating website that turned online visitors into qualified buyers within the first quarter.",
    metrics: [
      { label: "Load Time", before: "14s", after: "1.8s" },
      { label: "SEO Score", before: "12", after: "94" },
      { label: "Leads/Month", before: "0", after: "15" },
    ],
    url: "https://abbamfg.com",
  },
  {
    name: "Valley Modern Plumbing",
    initials: "VMP",
    industry: "Plumbing & Hardware",
    category: "services",
    metric: "Page 1 rankings in 45 days",
    desc: "VMP was invisible on Google despite serving the entire Rio Grande Valley. Our targeted SEO strategy and conversion-focused site pushed them to the top of local search results before the second invoice was even sent.",
    metrics: [
      { label: "Load Time", before: "9s", after: "2.1s" },
      { label: "Google Ranking", before: "Page 8", after: "Page 1" },
      { label: "Monthly Calls", before: "4", after: "37" },
    ],
    url: "https://valleymodernplumbing.com",
  },
];

const FILTERS = ["all", "manufacturing", "services"];

const BeforeAfterSlider = ({ index }) => {
  const containerRef = useRef(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updatePos = useCallback((clientX) => {
    const rect = containerRef.current.getBoundingClientRect();
    const pct = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
    setPos(pct);
  }, []);

  useEffect(() => {
    const onMove = (e) => {
      if (!dragging.current) return;
      e.preventDefault();
      const x = e.touches ? e.touches[0].clientX : e.clientX;
      updatePos(x);
    };
    const onUp = () => { dragging.current = false; };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseup", onUp);
    window.addEventListener("touchmove", onMove, { passive: false });
    window.addEventListener("touchend", onUp);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseup", onUp);
      window.removeEventListener("touchmove", onMove);
      window.removeEventListener("touchend", onUp);
    };
  }, [updatePos]);

  return (
    <div
      ref={containerRef}
      className="pf-ba-container"
      onMouseDown={(e) => { dragging.current = true; updatePos(e.clientX); }}
      onTouchStart={(e) => { dragging.current = true; updatePos(e.touches[0].clientX); }}
    >
      <div className="pf-ba-side pf-ba-before">
        <span className="pf-ba-label">Before</span>
        <span className="pf-ba-text">Old Website</span>
      </div>
      <div className="pf-ba-side pf-ba-after" style={{ clipPath: `inset(0 0 0 ${pos}%)` }}>
        <span className="pf-ba-label">After</span>
        <span className="pf-ba-text">MWS Build</span>
      </div>
      <div className="pf-ba-handle" style={{ left: `${pos}%` }}>
        <div className="pf-ba-handle-circle">
          <div className="pf-ba-handle-arrow left" />
          <div className="pf-ba-handle-arrow right" />
        </div>
      </div>
    </div>
  );
};

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [expandedIndex, setExpandedIndex] = useState(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("pf-visible");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    cardsRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, [activeFilter]);

  const toggleExpand = (i) => {
    setExpandedIndex(expandedIndex === i ? null : i);
  };

  const filtered = PROJECTS.filter(
    (p) => activeFilter === "all" || p.category === activeFilter
  );

  return (
    <div className="section-padding fade-in" style={{ background: "var(--bg-color)" }}>
      {/* Hero -- matches homepage blueprint-bg hero-premium */}
      <section className="blueprint-bg hero-premium" style={{ minHeight: "auto", paddingTop: "10rem", paddingBottom: "5rem" }}>
        <div className="container" style={{ position: "relative", zIndex: 10 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
            <div className="hero-authority-badge reveal-anim visible">
              <span className="auth-dot" />
              Portfolio
            </div>
            <h1 className="hero-title reveal-anim visible">
              Built for Manufacturers<br />
              <span className="text-accent">By a Manufacturer.</span>
            </h1>
            <p className="hero-subtitle reveal-anim visible" style={{ fontSize: "1.5rem", color: "var(--industrial-orange)", fontWeight: "700", fontFamily: "'Outfit', sans-serif", marginBottom: "1.5rem", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
              Every project started the same way: a great company with a terrible website.
            </p>
            <p className="hero-subtext reveal-anim visible">
              We build websites, SEO infrastructure, and lead generation systems for manufacturers and industrial B2B companies &mdash; built by someone who actually understands the industry.
            </p>
          </div>
        </div>
        <div className="hero-glow" />
      </section>

      {/* Filter Bar */}
      <div className="pf-filter-bar">
        {FILTERS.map((f) => (
          <button
            key={f}
            className={`pf-filter-btn ${activeFilter === f ? "active" : ""}`}
            onClick={() => {
              setActiveFilter(f);
              setExpandedIndex(null);
            }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
          </button>
        ))}
      </div>

      {/* Case Studies */}
      <div className="pf-case-studies">
        {filtered.map((project, i) => {
          const realIndex = PROJECTS.indexOf(project);
          return (
            <article
              key={project.name}
              className="pf-case-card pf-visible"
              ref={(el) => (cardsRef.current[i] = el)}
            >
              <div className={`pf-case-card-main ${i % 2 === 1 ? "reversed" : ""}`}>
                <div className="pf-case-image">
                  <div className="pf-case-image-bg" />
                  <div className="pf-case-image-initials">{project.initials}</div>
                  <div className="pf-case-image-label">Project Screenshot</div>
                </div>
                <div className="pf-case-content">
                  <div className="pf-case-industry">{project.industry}</div>
                  <h2 className="pf-case-company">{project.name}</h2>
                  <div className="pf-case-metric">{project.metric}</div>
                  <p className="pf-case-desc">{project.desc}</p>
                  <button
                    className={`pf-case-btn ${expandedIndex === realIndex ? "active" : ""}`}
                    onClick={() => toggleExpand(realIndex)}
                  >
                    See the Transformation
                    <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 6l4 4 4-4" /></svg>
                  </button>
                </div>
              </div>

              <div className={`pf-case-expand ${expandedIndex === realIndex ? "open" : ""}`}>
                <div className="pf-case-expand-inner">
                  <div className="pf-case-expand-title">Before &amp; After Comparison</div>
                  {expandedIndex === realIndex && <BeforeAfterSlider index={realIndex} />}
                  <div className="pf-metrics-row">
                    {project.metrics.map((m) => (
                      <div key={m.label} className="pf-metric-card">
                        <div className="pf-metric-label">{m.label}</div>
                        <div className="pf-metric-value">
                          {m.before} <span>&#8594;</span> {m.after}
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="pf-visit-btn-wrap">
                    <a
                      href={project.url}
                      className="pf-visit-btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Visit Live Site
                      <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 11l6-6M5 5h6v6" /></svg>
                    </a>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>

      <style>{`
        /* ── Hero (shared styles from Home -- needed since they're scoped there) ── */
        .hero-premium {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8rem;
          padding-bottom: 3rem;
          overflow: hidden;
        }
        .hero-authority-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.6rem;
          padding: 0.55rem 1.25rem;
          background: rgba(255, 107, 0, 0.08);
          border: 1px solid rgba(255, 107, 0, 0.2);
          border-radius: 100px;
          color: var(--industrial-orange);
          font-size: 0.78rem;
          font-weight: 600;
          font-family: 'Outfit', sans-serif;
          margin-bottom: 1.75rem;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }
        .hero-authority-badge .auth-dot {
          width: 8px;
          height: 8px;
          background: var(--industrial-orange);
          border-radius: 50%;
          flex-shrink: 0;
          box-shadow: 0 0 0 4px rgba(255, 107, 0, 0.15);
        }
        .hero-title {
          margin-bottom: 1rem;
          line-height: 1.05;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          color: var(--text-dark);
        }
        .hero-subtext {
          font-size: 1.25rem;
          color: var(--text-muted);
          margin: 0 auto 3.5rem;
          line-height: 1.7;
          max-width: 750px;
          font-weight: 500;
        }
        .hero-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 80vw;
          height: 80vw;
          background: radial-gradient(circle, rgba(142, 185, 250, 0.08) 0%, transparent 70%);
          border-radius: 50%;
          pointer-events: none;
          z-index: 1;
        }

        /* ── Filter Bar ── */
        .pf-filter-bar {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 40px 0;
          display: flex;
          gap: 8px;
          flex-wrap: wrap;
        }
        .pf-filter-btn {
          padding: 10px 24px;
          border: 2px solid var(--text-dark, #0f172a);
          background: transparent;
          color: var(--text-dark, #0f172a);
          font-family: 'Inter', sans-serif;
          font-weight: 600;
          font-size: 13px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.25s ease;
        }
        .pf-filter-btn:hover,
        .pf-filter-btn.active {
          background: var(--text-dark, #0f172a);
          color: var(--surface-color, #ffffff);
        }

        /* ── Case Studies ── */
        .pf-case-studies {
          max-width: 1280px;
          margin: 0 auto;
          padding: 40px 40px 120px;
        }
        .pf-case-card {
          background: var(--surface-color, #ffffff);
          border-radius: 20px;
          overflow: hidden;
          margin-bottom: 48px;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04), 0 8px 40px rgba(0,0,0,0.04);
          border: 1px solid var(--border-color, #e2e8f0);
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s ease, transform 0.7s ease, box-shadow 0.4s ease;
        }
        .pf-case-card.pf-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .pf-case-card:hover {
          box-shadow: 0 1px 3px rgba(0,0,0,0.06), 0 16px 60px rgba(0,0,0,0.08);
        }

        .pf-case-card-main {
          display: grid;
          grid-template-columns: 1fr 1fr;
          min-height: 440px;
        }
        .pf-case-card-main.reversed {
          direction: rtl;
        }
        .pf-case-card-main.reversed > * {
          direction: ltr;
        }

        /* ── Screenshot Placeholder ── */
        .pf-case-image {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
        }
        .pf-case-image-bg {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, #1B2A3D 0%, #0F1A27 100%);
        }
        .pf-case-image-bg::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .pf-case-image-initials {
          position: relative;
          z-index: 1;
          font-size: 72px;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.08);
          letter-spacing: -0.04em;
          user-select: none;
        }
        .pf-case-image-label {
          position: absolute;
          bottom: 24px; left: 24px;
          z-index: 1;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: rgba(255, 255, 255, 0.3);
        }

        /* ── Card Content ── */
        .pf-case-content {
          padding: 56px 48px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }
        .pf-case-industry {
          display: inline-block;
          background: var(--industrial-orange, #FF6B00);
          color: #FFFFFF;
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 5px 14px;
          border-radius: 100px;
          margin-bottom: 20px;
          width: fit-content;
        }
        .pf-case-company {
          font-size: clamp(28px, 3vw, 36px);
          font-weight: 800;
          letter-spacing: -0.02em;
          line-height: 1.15;
          margin-bottom: 12px;
          color: var(--text-dark, #0f172a);
        }
        .pf-case-metric {
          font-size: 18px;
          font-weight: 700;
          color: var(--industrial-orange, #FF6B00);
          margin-bottom: 16px;
          letter-spacing: -0.01em;
        }
        .pf-case-desc {
          font-size: 15px;
          color: var(--text-muted, #64748b);
          line-height: 1.7;
          margin-bottom: 32px;
          max-width: 420px;
        }
        .pf-case-btn {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          background: transparent;
          border: 2px solid var(--text-dark, #0f172a);
          color: var(--text-dark, #0f172a);
          font-family: 'Inter', sans-serif;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 28px;
          border-radius: 10px;
          cursor: pointer;
          transition: all 0.25s ease;
          letter-spacing: -0.01em;
          width: fit-content;
        }
        .pf-case-btn:hover,
        .pf-case-btn.active {
          background: var(--text-dark, #0f172a);
          color: var(--surface-color, #ffffff);
        }
        .pf-case-btn svg {
          width: 16px; height: 16px;
          transition: transform 0.25s ease;
        }
        .pf-case-btn.active svg {
          transform: rotate(180deg);
        }

        /* ── Expanded Panel ── */
        .pf-case-expand {
          max-height: 0;
          overflow: hidden;
          transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1);
          background: var(--bg-color, #fafafa);
        }
        .pf-case-expand.open {
          max-height: 900px;
        }
        .pf-case-expand-inner {
          padding: 48px;
        }
        .pf-case-expand-title {
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: var(--text-muted, #8A96A3);
          margin-bottom: 24px;
          text-align: center;
        }

        /* ── Before / After Slider ── */
        .pf-ba-container {
          position: relative;
          width: 100%;
          max-width: 960px;
          margin: 0 auto 40px;
          aspect-ratio: 16 / 7;
          border-radius: 14px;
          overflow: hidden;
          cursor: col-resize;
          user-select: none;
          box-shadow: 0 4px 24px rgba(0,0,0,0.1);
        }
        .pf-ba-side {
          position: absolute;
          top: 0; bottom: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-direction: column;
          gap: 8px;
        }
        .pf-ba-before {
          left: 0; right: 0;
          background: linear-gradient(135deg, #8B8B8B 0%, #A0A0A0 30%, #787878 100%);
          z-index: 1;
        }
        .pf-ba-before::before {
          content: '';
          position: absolute;
          inset: 0;
          background:
            repeating-linear-gradient(0deg, transparent, transparent 30px, rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 31px),
            repeating-linear-gradient(90deg, transparent, transparent 30px, rgba(0,0,0,0.03) 30px, rgba(0,0,0,0.03) 31px);
        }
        .pf-ba-after {
          left: 0; right: 0;
          background: linear-gradient(135deg, #1B2A3D 0%, #243447 50%, #1B2A3D 100%);
          z-index: 2;
        }
        .pf-ba-after::before {
          content: '';
          position: absolute;
          inset: 0;
          background-image:
            linear-gradient(rgba(255,107,0,0.04) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,107,0,0.04) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        .pf-ba-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          position: relative;
          z-index: 1;
        }
        .pf-ba-before .pf-ba-label { color: rgba(0,0,0,0.35); }
        .pf-ba-after .pf-ba-label { color: rgba(255,255,255,0.3); }
        .pf-ba-text {
          font-size: clamp(24px, 3vw, 40px);
          font-weight: 900;
          letter-spacing: -0.03em;
          position: relative;
          z-index: 1;
        }
        .pf-ba-before .pf-ba-text { color: rgba(0,0,0,0.12); }
        .pf-ba-after .pf-ba-text { color: rgba(255,255,255,0.1); }

        .pf-ba-handle {
          position: absolute;
          top: 0; bottom: 0;
          width: 3px;
          background: #FFFFFF;
          z-index: 10;
          transform: translateX(-50%);
          pointer-events: none;
        }
        .pf-ba-handle-circle {
          position: absolute;
          top: 50%; left: 50%;
          transform: translate(-50%, -50%);
          width: 44px; height: 44px;
          border-radius: 50%;
          background: #FFFFFF;
          border: 3px solid var(--industrial-orange, #FF6B00);
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          box-shadow: 0 2px 12px rgba(0,0,0,0.2);
          pointer-events: none;
        }
        .pf-ba-handle-arrow {
          width: 0; height: 0;
          border-top: 5px solid transparent;
          border-bottom: 5px solid transparent;
        }
        .pf-ba-handle-arrow.left { border-right: 6px solid var(--industrial-orange, #FF6B00); }
        .pf-ba-handle-arrow.right { border-left: 6px solid var(--industrial-orange, #FF6B00); }

        /* ── Metrics ── */
        .pf-metrics-row {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 960px;
          margin: 0 auto 32px;
        }
        .pf-metric-card {
          background: var(--surface-color, #FFFFFF);
          border-radius: 12px;
          padding: 28px 24px;
          text-align: center;
          box-shadow: 0 1px 3px rgba(0,0,0,0.04);
          border: 1px solid var(--border-color, #e2e8f0);
        }
        .pf-metric-label {
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          color: var(--text-muted, #8A96A3);
          margin-bottom: 10px;
        }
        .pf-metric-value {
          font-size: 20px;
          font-weight: 800;
          color: var(--text-dark, #0f172a);
          letter-spacing: -0.02em;
        }
        .pf-metric-value span {
          color: var(--industrial-orange, #FF6B00);
          margin: 0 6px;
        }

        /* ── Visit Button ── */
        .pf-visit-btn-wrap { text-align: center; }
        .pf-visit-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: var(--industrial-orange, #FF6B00);
          color: #FFFFFF;
          font-size: 14px;
          font-weight: 600;
          padding: 12px 28px;
          border: none;
          border-radius: 10px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.2s ease;
          letter-spacing: -0.01em;
        }
        .pf-visit-btn:hover {
          background: var(--industrial-orange-dark, #E55F00);
          transform: translateY(-1px);
        }
        .pf-visit-btn svg { width: 14px; height: 14px; }

        /* ── Responsive ── */
        @media (max-width: 900px) {
          .pf-case-card-main {
            grid-template-columns: 1fr;
          }
          .pf-case-card-main.reversed {
            direction: ltr;
          }
          .pf-case-image { min-height: 280px; }
          .pf-case-content { padding: 36px 32px; }
          .pf-case-expand-inner { padding: 32px 24px; }
          .pf-metrics-row { grid-template-columns: 1fr; gap: 12px; }
          .pf-hero { padding: 100px 24px 80px; }
          .pf-filter-bar { padding: 24px 20px 0; }
          .pf-case-studies { padding: 24px 20px 80px; }
        }
        @media (max-width: 480px) {
          .pf-case-content { padding: 28px 24px; }
          .pf-ba-container { aspect-ratio: 4 / 3; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
