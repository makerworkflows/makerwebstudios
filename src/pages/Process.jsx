const Process = () => (
  <div id="process" className="fade-in" style={{ background: "var(--bg-color)" }}>
    
    <header className="dark-section blueprint-bg hero-sub">
      <div className="container text-center">
        <h2 className="section-title">How We Build Systems.</h2>
        <p className="section-subtitle" style={{ color: "rgba(255, 255, 255, 0.7)" }}>
          Process transparency. Engineers pay for certainty, not surprises. We follow a strict operational procedure to get you online in 30 days.
        </p>
      </div>
    </header>

    <section className="section-padding">
      <div className="container" style={{ maxWidth: "1000px" }}>
        <div className="process-timeline">
          {[
            { step: '01', title: 'Discovery & Audit', desc: 'We audit your current capabilities, machines, and tolerances. We figure out exactly who your buyer is and what technical data they need to see.' },
            { step: '02', title: 'Messaging Architecture', desc: 'No design until the copy is written. We put together a messaging framework that speaks directly to procurement teams and engineers, stripping out the fluff.' },
            { step: '03', title: 'Blueprint & Build', desc: 'We build your mobile-optimized Foundation site using our proven architecture. Speedy, responsive, and hardcoded to convert traffic into RFQs.' },
            { step: '04', title: 'Deployment & SEO', desc: 'We coordinate the domain switch, technical SEO setup, and Google Business Profile launch. Your digital factory floor is officially open for business.' },
          ].map((item, idx) => (
            <div key={idx} className="process-step premium-glass reveal-anim visible" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="step-number-bg">{item.step}</div>
              
              <div className="step-header">
                <div className="step-badge">{item.step}</div>
                <h3 className="step-title">{item.title}</h3>
              </div>
              
              <p className="step-desc">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <style>{`
      .hero-sub {
        padding: 10rem 0 8rem;
      }

      .process-timeline {
        display: flex;
        flex-direction: column;
        gap: 4rem;
      }

      .process-step {
        padding: 4rem;
        position: relative;
        overflow: hidden;
      }

      .step-number-bg {
        position: absolute;
        top: -20px;
        right: -10px;
        font-size: clamp(8rem, 15vw, 15rem);
        font-weight: 900;
        color: rgba(255, 255, 255, 0.02);
        line-height: 1;
        user-select: none;
        z-index: 0;
        font-family: "Outfit", sans-serif;
      }

      .step-header {
        display: flex;
        align-items: center;
        gap: 1.5rem;
        margin-bottom: 2rem;
        position: relative;
        z-index: 1;
      }

      .step-badge {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.5rem;
        height: 3.5rem;
        border-radius: 50%;
        background: var(--dark-bg);
        border: 2px solid var(--industrial-orange);
        color: var(--industrial-orange);
        font-weight: 800;
        font-size: 1.25rem;
        font-family: "Outfit", sans-serif;
      }

      .step-title {
        font-size: 2rem;
        color: var(--text-dark);
        font-family: "Outfit", sans-serif;
      }

      .step-desc {
        color: var(--text-muted);
        font-size: 1.15rem;
        line-height: 1.7;
        max-width: 700px;
        position: relative;
        z-index: 1;
      }

      @media (max-width: 768px) {
        .process-step {
          padding: 2.5rem 1.5rem;
        }
        .step-header {
          flex-direction: column;
          align-items: flex-start;
          gap: 1rem;
        }
        .step-title {
          font-size: 1.75rem;
        }
      }
    `}</style>
  </div>
);

export default Process;
