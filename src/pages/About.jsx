const About = () => (
  <div id="about" className="section-padding fade-in" style={{ background: "var(--bg-color)" }}>
    <div className="container" style={{ maxWidth: "900px" }}>
      <div className="text-center" style={{ marginBottom: "6rem" }}>
        <h2 className="section-title">Our Story</h2>
        <p className="about-intro">
          16 years on the shop floor. Now building digital presences that win manufacturing contracts.
        </p>
      </div>

      <div className="about-content">
        <div className="about-quote reveal-anim visible">
          <p className="quote-text">Most web agencies have never run a production line, optimized a supply chain, or survived a regulatory audit.</p>
          <div className="quote-emphasis">We have.</div>
        </div>
        
        <div className="about-main reveal-anim visible" style={{ animationDelay: "0.2s" }}>
          <p className="main-text">
            For 16 years, we scaled regulated manufacturing operations in the Rio Grande Valley — leading teams, implementing ISO 9001 systems (70+ procedures), driving 4x revenue growth, and maintaining certifications like GMP, HACCP, SQF, and more.
          </p>
          
          <div className="main-highlight premium-glass">
            <p>
              We know what procurement demands: proven compliance, process discipline, and reliable capability. Now we craft websites, messaging, and visuals that pass the buyer gut-check instantly.
            </p>
          </div>

          <p className="main-text">
            So you close more deals and focus on production. We speak your language because we lived it.
          </p>
        </div>
      </div>
    </div>

    <style>{`
      .about-intro {
        font-size: clamp(1.5rem, 3.5vw, 2.25rem);
        color: var(--industrial-orange);
        font-weight: 700;
        line-height: 1.3;
        font-family: "Outfit", sans-serif;
        max-width: 800px;
        margin: 0 auto;
      }

      .about-content {
        display: flex;
        flex-direction: column;
        gap: 5rem;
      }

      .about-quote {
        text-align: center;
      }

      .quote-text {
        font-size: 1.5rem;
        color: var(--text-muted);
        line-height: 1.6;
        margin-bottom: 2rem;
        font-style: italic;
      }

      .quote-emphasis {
        font-size: 4rem;
        font-weight: 900;
        color: var(--text-dark);
        font-family: "Outfit", sans-serif;
        letter-spacing: -0.05em;
      }

      .about-main {
        display: flex;
        flex-direction: column;
        gap: 3rem;
      }

      .main-text {
        font-size: 1.15rem;
        color: var(--text-muted);
        line-height: 1.8;
      }

      .main-highlight {
        padding: 3rem;
        border-left: 6px solid var(--industrial-orange);
        border-radius: 0 var(--border-radius-lg) var(--border-radius-lg) 0;
        font-size: 1.25rem;
        font-weight: 600;
        color: var(--text-dark);
        line-height: 1.6;
        background: rgba(255, 107, 0, 0.02);
      }

      @media (max-width: 768px) {
        .quote-emphasis {
          font-size: 3rem;
        }
        .main-highlight {
          padding: 2rem;
        }
      }
    `}</style>
  </div>
);

export default About;
