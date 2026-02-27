const Portfolio = () => (
  <div id="portfolio" className="section-padding fade-in" style={{ background: "var(--bg-color)" }}>
    <div className="container">
      <div className="text-center" style={{ maxWidth: "800px", margin: "0 auto 6rem" }}>
        <h2 className="section-title">Our Work</h2>
        <p className="section-subtitle">Real results for real manufacturers.</p>
      </div>
      
      <div className="portfolio-empty premium-glass reveal-anim visible">
        <h3 className="empty-title">Case studies coming soon.</h3>
        <p className="empty-text">We are continually adding new projects measuring real ROI and lead generation metrics for industrial B2B clients.</p>
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
