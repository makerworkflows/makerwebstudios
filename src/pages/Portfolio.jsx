const Portfolio = () => (
  <div id="portfolio" className="section-padding fade-in" style={{ background: "var(--bg-color)" }}>
    <div className="container">
      <div className="text-center" style={{ maxWidth: "800px", margin: "0 auto 6rem" }}>
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">Real results for real manufacturers.</p>
      </div>
      
      <div className="portfolio-checklist premium-glass reveal-anim visible" style={{ padding: "4rem 3rem", background: "rgba(255,255,255,0.02)", border: "1px solid var(--glass-border)", borderRadius: "var(--border-radius-lg)", maxWidth: "900px", margin: "0 auto", position: "relative", overflow: "hidden" }}>
        <h3 className="empty-title" style={{ color: "var(--text-dark)", fontSize: "2rem", marginBottom: "1.5rem", fontFamily: "'Outfit', sans-serif" }}>The Manufacturer's Checklist</h3>
        <p className="empty-text" style={{ color: "var(--text-muted)", fontSize: "1.125rem", marginBottom: "2.5rem", lineHeight: "1.7" }}>
          Until our newest real-world ROI case studies launch, verify your current site against these 5 critical markers of a high-converting supplier asset:
        </p>
        <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "1.25rem" }}>
          {[
            "A \"Capabilities\" page written for engineers, not marketers.",
            "An RFQ form that qualifies leads automatically.",
            "Clear, upfront equipment and tolerance lists.",
            "ISO/Certifications prominently displayed.",
            "Mobile-responsive design for shop-floor accessibility."
          ].map((item, i) => (
            <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "1rem" }}>
              <div style={{ background: "var(--industrial-orange)", color: "white", borderRadius: "50%", width: "24px", height: "24px", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", fontWeight: "700", flexShrink: 0, marginTop: "2px" }}>
                {i + 1}
              </div>
              <span style={{ fontSize: "1.125rem", color: "var(--text-dark)", lineHeight: "1.4" }}>{item}</span>
            </li>
          ))}
        </ul>
        <div className="empty-decoration" />
      </div>
    </div>

    <style>{`
      .portfolio-empty {
        padding: 8rem 4rem;
        text-align: center;
        border: 2px dashed var(--glass-border);
        max-width: 900px;
        margin: 0 auto;
        border-radius: var(--border-radius-lg);
        position: relative;
        overflow: hidden;
      }

      .empty-title {
        font-size: 2rem;
        color: var(--text-dark);
        margin-bottom: 1.5rem;
        font-family: "Outfit", sans-serif;
      }

      .empty-text {
        color: var(--text-muted);
        font-size: 1.125rem;
        max-width: 600px;
        margin: 0 auto;
        line-height: 1.7;
      }

      .empty-decoration {
        position: absolute;
        bottom: -50px;
        right: -50px;
        width: 250px;
        height: 250px;
        background: radial-gradient(circle, rgba(142, 185, 250, 0.05) 0%, transparent 70%);
        border-radius: 50%;
      }
    `}</style>
  </div>
);

export default Portfolio;
