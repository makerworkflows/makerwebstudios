const Process = () => (
  <div id="process" className="fade-in" style={{ backgroundColor: 'var(--bg-color)', minHeight: '100vh', paddingBottom: '6rem' }}>
    
    {/* Header / Intro */}
    <section className="dark-section blueprint-bg" style={{ padding: '8rem 0 6rem', textAlign: 'center' }}>
      <div className="container" style={{ maxWidth: '800px' }}>
        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4rem)', marginBottom: '1.5rem', letterSpacing: '-0.03em' }}>
          How We Build <span style={{ color: 'var(--accent-blue)' }}>Systems.</span>
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.7', margin: '0 auto' }}>
          Process transparency. Engineers pay for certainty, not surprises. We follow a strict operational procedure to get you online in 30 days.
        </p>
      </div>
    </section>

    {/* The Steps - ScrollyTelling / Grid */}
    <section style={{ paddingTop: '4rem', marginTop: '-3rem' }}>
      <div className="container" style={{ maxWidth: '1000px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}>
          {[
            { step: '01', title: 'Discovery & Audit', desc: 'We audit your current capabilities, machines, and tolerances. We figure out exactly who your buyer is and what technical data they need to see.' },
            { step: '02', title: 'Messaging Architecture', desc: 'No design until the copy is written. We put together a messaging framework that speaks directly to procurement teams and engineers, stripping out the fluff.' },
            { step: '03', title: 'Blueprint & Build', desc: 'We build your mobile-optimized Foundation site using our proven architecture. Speedy, responsive, and hardcoded to convert traffic into RFQs.' },
            { step: '04', title: 'Deployment & SEO', desc: 'We coordinate the domain switch, technical SEO setup, and Google Business Profile launch. Your digital factory floor is officially open for business.' },
          ].map((item, idx) => (
            <div key={idx} className="bento-card" style={{ 
              display: 'flex', 
              flexDirection: 'column',
              gap: '1rem', 
              position: 'relative',
              overflow: 'hidden'
            }}>
              {/* Large background number for visual flair */}
              <div style={{
                position: 'absolute',
                top: '-20px',
                right: '-10px',
                fontSize: '12rem',
                fontWeight: '800',
                color: 'var(--bg-color)',
                lineHeight: '1',
                zIndex: 0,
                userSelect: 'none'
              }}>
                {item.step}
              </div>
              
              <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '3rem', height: '3rem', borderRadius: '50%', backgroundColor: 'var(--dark-bg)', color: 'var(--accent-blue)', fontWeight: '700', fontSize: '1.1rem', zIndex: 1, marginBottom: '0.5rem' }}>
                {item.step}
              </div>
              
              <h3 style={{ fontSize: '2rem', color: 'var(--text-dark)', zIndex: 1 }}>{item.title}</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.125rem', lineHeight: '1.7', maxWidth: '600px', zIndex: 1 }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Process;
