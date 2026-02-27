import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    // Reveal animation logic
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal-anim').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fade-in">
      {/* SECTION 1: THE PROBLEM HERO */}
      <header className="dark-section blueprint-bg hero-premium" id="home" style={{ minHeight: '95vh', display: 'flex', alignItems: 'center' }}>
        <div className="container relative z-10 text-center">
          <div className="badge-premium reveal-anim">
            WEB DESIGN FOR MANUFACTURERS, BY MANUFACTURERS
          </div>
          <h1 className="hero-title reveal-anim" style={{ animationDelay: "0.1s", color: 'white' }}>
            Your Website Is Losing You Bids <br />
            <span className="text-secondary" style={{ color: 'var(--industrial-orange)' }}>You Don't Even Know About.</span>
          </h1>
          <p className="hero-subtext reveal-anim" style={{ animationDelay: "0.2s", color: 'rgba(255,255,255,0.9)' }}>
            77% of B2B buyers research suppliers online before making contact. If your site is slow, outdated, or missing a capabilities page — they're choosing your competitor before they ever call you.
          </p>
          
          <div className="hero-actions reveal-anim" style={{ animationDelay: "0.3s", marginBottom: '4rem' }}>
            <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" className="btn btn-primary btn-lg-premium">
              Get Started — $3,500
            </a>
          </div>

          <div className="benefits-bar reveal-anim" style={{ animationDelay: "0.4s" }}>
            <div className="benefit-item"><span>16 Years in Manufacturing</span></div>
            <div className="benefit-item"><span>RGV & Texas Focused</span></div>
            <div className="benefit-item"><span>No Custom Code Required</span></div>
            <div className="benefit-item"><span>Fixed-Price Packages</span></div>
            <div className="benefit-item"><span>Results in 30 Days</span></div>
          </div>
        </div>
        <div className="hero-glow" />
      </header>

      {/* SECTION 2: THE GROWTH ENGINE INTRO */}
      <section className="section-padding" style={{ background: 'var(--dark-bg)', borderTop: '1px solid var(--glass-border)' }}>
        <div className="container text-center">
          <h2 className="section-title reveal-anim">
            Your Buyers Are Searching. <br />
            <span className="text-accent">Are They Finding You?</span>
          </h2>
          <p className="section-subtitle reveal-anim" style={{ maxWidth: '900px', margin: '0 auto 4rem' }}>
            Maker Web Studios gets manufacturers found on Google, ranking for the right keywords, and generating inbound B2B leads — without a generic marketing agency that doesn't know your industry.
          </p>

          <div className="credibility-block reveal-anim premium-glass" style={{ maxWidth: '800px', margin: '0 auto' }}>
            <div className="credibility-badge">BUILT BY MANUFACTURERS, FOR MANUFACTURERS</div>
            <p className="credibility-text">
              Guillermo Aristi grew a manufacturing business for 8 years knowing his online presence was invisible. He built Maker Web Studios because his own buyers couldn't find him either.
            </p>
            <div className="hero-actions" style={{ marginTop: '2rem' }}>
              <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" className="btn btn-primary">Get Started — $1,997</a>
              <a href="https://calendly.com/makerworkflows/growthengine-discovery" className="btn btn-transparent">Book a Discovery Call</a>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: THE PAIN */}
      <section className="section-padding">
        <div className="container">
          <h2 className="section-title text-center reveal-anim">
            Most regulated manufacturers are <span className="text-accent">invisible online.</span>
          </h2>
          <div className="bento-grid" style={{ marginTop: '4rem' }}>
            {[
              { emoji: "🔍", title: "Not Ranking", text: "Your buyers search \"aloe vera extract wholesale\" or \"private label nutraceutical manufacturer Texas\" — and your competitors show up. You don't." },
              { emoji: "📉", title: "No Inbound Leads", text: "Your website gets visitors who leave without doing anything. No sample requests. No inquiries. No pipeline." },
              { emoji: "🏭", title: "Built for Trade Shows, Not the Internet", text: "Your business grew on relationships and referrals. That still works — but the buyers who don't know you yet are finding someone else online." }
            ].map((item, i) => (
              <div key={i} className="bento-card reveal-anim" style={{ animationDelay: `${i*0.1}s`, textAlign: 'center' }}>
                <div style={{ fontSize: '3rem', marginBottom: '1.5rem' }}>{item.emoji}</div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: WHAT WE DO */}
      <section className="section-padding dark-section blueprint-bg">
        <div className="container">
          <h2 className="section-title text-center reveal-anim">What We Do</h2>
          <div className="bento-grid" style={{ marginTop: '4rem' }}>
            {[
              { icon: "🏗️", title: "Foundation", text: "We audit your digital presence, fix your SEO, and build or optimize your website so buyers can actually find and convert." },
              { icon: "👀", title: "Visibility", text: "Monthly content targeting your buyers' search terms. Google Ads for immediate inbound. Directory listings on the platforms your buyers use." },
              { icon: "🧲", title: "Conversion", text: "Sample request funnels, lead capture, product spec sheets, and email sequences that turn visitors into qualified buyers." },
              { icon: "🎯", title: "Outreach", text: "Qualified buyer lists and outreach campaigns reaching formulators, supplement brands, and manufacturers who need your ingredients." }
            ].map((item, i) => (
              <div key={i} className="bento-card reveal-anim premium-glass" style={{ animationDelay: `${i*0.1}s` }}>
                <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>{item.icon}</div>
                <h3 className="card-title" style={{ color: 'white' }}>{item.title}</h3>
                <p className="card-text" style={{ color: 'rgba(255,255,255,0.7)' }}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: PROCESS */}
      <section className="section-padding">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title reveal-anim">Three Simple Steps to Pipeline Growth.</h2>
          </div>
          <div className="process-steps-new">
            {[
              { step: "01", title: "Check Out", text: "Book your kickoff call and secure your spot." },
              { step: "02", title: "We Build", text: "In 30 days we build your foundation, launch your SEO, and deploy your visibility engine." },
              { step: "03", title: "You Get Found", text: "Rankings climb. Buyers find you. You get sample requests and qualified leads directly in your inbox." }
            ].map((item, i) => (
              <div key={i} className="process-item-new reveal-anim" style={{ animationDelay: `${i*0.1}s` }}>
                <div className="process-number-new">{item.step}</div>
                <div className="process-content-new">
                  <h3 className="process-title-new">✓ {item.title}</h3>
                  <p className="process-text-new">{item.text}</p>
                </div>
                {i < 2 && <div className="process-arrow-new">↓</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: ROADMAP */}
      <section className="section-padding dark-section" id="pricing">
        <div className="container">
          <div className="text-center" style={{ marginBottom: '5rem' }}>
            <h2 className="section-title reveal-anim">The GrowthEngine Roadmap</h2>
            <p className="section-subtitle reveal-anim">We don't sell you a massive retainer right out of the gate. We prove ROI first, then scale as your leads grow.</p>
          </div>
          
          <div className="packages-grid">
            {/* STARTER */}
            <div className="package-card premium-glass reveal-anim featured-card">
              <div className="package-badge">MOST POPULAR ENTRY POINT</div>
              <h3 className="package-name">GrowthEngine Starter</h3>
              <div className="package-price">$1,997 <span className="price-label">one-time</span></div>
              <p className="package-desc">For manufacturers with no baseline digital presence who need to get found fast.</p>
              <ul className="package-features">
                {["Complete Digital Website Audit", "On-page SEO fixes (up to 10 pages)", "Competitor keyword analysis", "Google Business Profile Setup", "Google Search Console Config", "Google Analytics 4 Setup", "5 Industry Directory Listings", "3 Product Spec Sheets (PDF)", "90-Day Growth Roadmap written report", "60-min Strategy Delivery Call"].map((f, idx) => (
                  <li key={idx} className="package-feature">✓ {f}</li>
                ))}
              </ul>
              <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" className="btn btn-primary btn-full">Get Started</a>
              <p style={{ fontSize: '0.8rem', opacity: 0.6, marginTop: '1.5rem', textAlign: 'center' }}>Full refund if every deliverable isn't complete within 30 days of your onboarding form.</p>
            </div>

            {/* VISIBILITY */}
            <div className="package-card premium-glass reveal-anim">
              <h3 className="package-name">Visibility Engine</h3>
              <div className="package-price">$1,500 <span className="price-label">/mo</span></div>
              <p className="package-desc">Natural next step after Starter. Consistent SEO content targeting your buyers.</p>
              <ul className="package-features">
                {["2 SEO-optimized posts per month", "Targeted B2B keyword writing", "Active Rank Tracking", "Monthly performance reporting"].map((f, idx) => (
                  <li key={idx} className="package-feature">✓ {f}</li>
                ))}
              </ul>
              <a href="https://calendly.com/hello-makerwebstudios/30min" className="btn btn-transparent btn-full">Book a Call</a>
            </div>

            {/* ADS */}
            <div className="package-card premium-glass reveal-anim">
              <h3 className="package-name">Google Ads Management</h3>
              <div className="package-price">$1,000 <span className="price-label">/mo + spend</span></div>
              <p className="package-desc">For suppliers looking to capture immediate, high-intent buyer searches.</p>
              <ul className="package-features">
                {["High-intent keyword targeting", "Ad copy written for formulators", "Landing page optimization advice", "Monthly ROI/Spend reporting"].map((f, idx) => (
                  <li key={idx} className="package-feature">✓ {f}</li>
                ))}
              </ul>
              <a href="https://calendly.com/makerworkflows/growthengine-discovery" className="btn btn-transparent btn-full">Book a Call</a>
            </div>
          </div>
          
          <p className="text-center reveal-anim" style={{ marginTop: '4rem', color: 'var(--text-muted)' }}>
            Need a custom scope for your full digital presence? <a href="https://calendly.com/makerworkflows/growthengine-discovery" style={{ color: 'var(--industrial-orange)' }}>Book a discovery call</a> — most full engagements start at $3,500.
          </p>
        </div>
      </section>

      {/* SECTION 7: OUR WORK */}
      <section className="section-padding" id="portfolio">
        <div className="container">
          <h2 className="section-title text-center reveal-anim">Our Work</h2>
          <p className="section-subtitle text-center reveal-anim">Real results for real manufacturers.</p>
          <div className="credibility-block reveal-anim premium-glass" style={{ maxWidth: '800px', margin: '4rem auto', textAlign: 'center' }}>
            <h3 className="card-title">Case studies coming soon.</h3>
            <p className="card-text">We are continually adding new projects measuring real ROI and lead generation metrics for industrial B2B clients.</p>
          </div>
        </div>
      </section>

      {/* SECTION 8: OUR STORY */}
      <section className="section-padding dark-section blueprint-bg" id="about">
        <div className="container">
          <div className="footer-grid" style={{ alignItems: 'center' }}>
             <div className="reveal-anim">
                <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '2rem' }}>Our Story</h2>
                <h3 className="card-title" style={{ color: 'var(--industrial-orange)', marginBottom: '1.5rem' }}>16 years on the shop floor. Now building digital presences that win manufacturing contracts.</h3>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)' }}>
                  Most web agencies have never run a production line, optimized a supply chain, or survived a regulatory audit.
                </p>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
                  <strong>We have.</strong>
                </p>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
                  For 16 years, we scaled regulated manufacturing operations in the Rio Grande Valley — leading teams, implementing ISO 9001 systems (70+ procedures), driving 4x revenue growth, and maintaining certifications like GMP, HACCP, SQF, and more. We know what procurement demands: proven compliance, process discipline, and reliable capability.
                </p>
                <p className="card-text" style={{ fontSize: '1.1rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.8)', marginTop: '1rem' }}>
                  Now we craft websites, messaging, and visuals that pass the buyer gut-check instantly — so you close more deals and focus on production.
                </p>
             </div>
             <div className="reveal-anim" style={{ display: 'flex', justifyContent: 'center' }}>
                <div className="premium-glass" style={{ padding: '2rem', borderRadius: 'var(--border-radius)', borderLeft: '4px solid var(--industrial-orange)' }}>
                   <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>🏪</div>
                   <h4 style={{ color: 'white', marginBottom: '0.5rem' }}>Manufacturing Veteran</h4>
                   <p style={{ color: 'rgba(255,255,255,0.6)' }}>ISO 9001 • GMP • HACCP • SQF</p>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* SECTION 9: INDUSTRIES */}
      <section className="section-padding" id="services">
        <div className="container">
          <h2 className="section-title text-center reveal-anim" style={{ marginBottom: '5rem' }}>Built for Regulated Manufacturing</h2>
          <div className="industry-grid-new">
            {[
              { icon: "💄", label: "Personal Care" },
              { icon: "💊", label: "Nutraceuticals" },
              { icon: "🩹", label: "OTCs" },
              { icon: "🥗", label: "Food & Beverage" },
              { icon: "🍺", label: "Breweries" },
              { icon: "🍷", label: "Wineries" },
              { icon: "🥃", label: "Distilleries" }
            ].map((item, i) => (
              <div key={i} className="industry-item-new reveal-anim premium-glass" style={{ animationDelay: `${i*0.05}s` }}>
                <span className="industry-icon-new">{item.icon}</span>
                <span className="industry-label-new">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10: FAQ */}
      <section className="section-padding dark-section" id="faq">
        <div className="container" style={{ maxWidth: '900px' }}>
          <h2 className="section-title text-center reveal-anim" style={{ marginBottom: '5rem' }}>Common Questions</h2>
          <div className="faq-list-new">
            {[
              { q: "Do I need a new website?", a: "No. We start with the $1,997 Audit & Setup to optimize what you already have. We only recommend a rebuild if your current platform fundamentally cannot rank on Google or capture inbound leads." },
              { q: "How are you different from an agency?", a: "We are not generic marketers. We understand INCI names, cGMP compliance, formulation specs, and how a purchasing manager evaluates an ingredient supplier." },
              { q: "What do you need from my team?", a: "Very little. We do a 60-minute kickoff to understand your ideal client and products, and then we execute. You review and approve via email." },
              { q: "When will I see results?", a: "Setup is completed in 30 days. Most clients begin seeing their organic keyword rankings climb within 60 days of the new infrastructure going live." },
              { q: "What if I need more than the Starter package?", a: "Most clients do. The Starter phase simply ensures your foundation is solid before we start pouring money into monthly content engines or paid ads." }
            ].map((item, i) => (
              <div key={i} className="faq-card-new reveal-anim" style={{ animationDelay: `${i*0.1}s` }}>
                <h3 className="faq-q-new">{item.q}</h3>
                <p className="faq-a-new">{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 11: FINAL CTA */}
      <section className="section-padding blueprint-bg text-center dark-section" style={{ borderTop: '1px solid var(--glass-border)' }} id="contact">
        <div className="container">
          <h2 className="section-title reveal-anim">Ready to Get Started?</h2>
          <p className="section-subtitle reveal-anim" style={{ marginBottom: '3rem' }}>
            Stop losing bids to competitors with better digital presence. Book a discovery call or get started right away.
          </p>
          <div className="hero-actions reveal-anim">
            <a href="https://calendly.com/makerworkflows/growthengine-discovery" className="btn btn-transparent btn-lg-premium">Book a Call</a>
            <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" className="btn btn-primary btn-lg-premium">Get Started</a>
          </div>
        </div>
      </section>

      <style>{`
        .hero-premium {
          position: relative;
          padding-top: 12rem;
          padding-bottom: 10rem;
          overflow: hidden;
          display: flex;
          align-items: center;
        }

        .badge-premium {
          display: inline-block;
          padding: 0.6rem 1.4rem;
          background: rgba(255, 107, 0, 0.1);
          border: 1px solid rgba(255, 107, 0, 0.2);
          border-radius: 100px;
          color: var(--industrial-orange);
          font-size: 0.85rem;
          font-weight: 800;
          letter-spacing: 0.05em;
          margin-bottom: 2.5rem;
        }

        .hero-title {
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          margin-bottom: 2rem;
          font-weight: 900;
          letter-spacing: -0.04em;
          color: white !important;
        }

        .hero-subtext {
          font-size: clamp(1.1rem, 2vw, 1.35rem);
          max-width: 800px;
          margin: 0 auto 4rem;
          line-height: 1.6;
          opacity: 0.8;
          font-weight: 500;
        }

        .credibility-block {
          padding: 3rem;
          border-radius: var(--border-radius-lg);
          border: 1px solid var(--glass-border);
          text-align: left;
        }

        .credibility-badge {
          color: var(--industrial-orange);
          font-weight: 800;
          font-size: 0.8rem;
          letter-spacing: 0.1em;
          margin-bottom: 1rem;
        }

        .credibility-text {
          font-size: 1.15rem;
          line-height: 1.7;
          font-weight: 500;
        }

        .process-steps-new {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          max-width: 600px;
          margin: 0 auto;
        }

        .process-item-new {
          display: flex;
          align-items: flex-start;
          gap: 2rem;
          position: relative;
        }

        .process-number-new {
          font-size: 1.25rem;
          font-weight: 900;
          color: var(--industrial-orange);
          opacity: 0.3;
          font-family: 'Outfit', sans-serif;
        }

        .process-title-new {
          font-size: 1.5rem;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }

        .process-text-new {
          color: var(--text-muted);
          font-size: 1.1rem;
          line-height: 1.6;
        }

        .process-arrow-new {
          position: absolute;
          bottom: -2.5rem;
          left: 1rem;
          font-size: 1.5rem;
          color: var(--industrial-orange);
          opacity: 0.4;
        }

        .industry-grid-new {
          display: flex;
          flex-wrap: wrap;
          gap: 1.5rem;
          justify-content: center;
        }

        .industry-item-new {
          padding: 1.25rem 2rem;
          display: flex;
          align-items: center;
          gap: 1rem;
          border-radius: 100px;
          font-weight: 700;
          font-size: 1rem;
        }

        .industry-icon-new {
          font-size: 1.5rem;
        }

        .faq-list-new {
          display: flex;
          flex-direction: column;
          gap: 2rem;
        }

        .faq-card-new {
          padding: 2.5rem;
          background: rgba(255,255,255,0.03);
          border-radius: var(--border-radius-lg);
          border: 1px solid rgba(255,255,255,0.05);
        }

        .faq-q-new {
          font-size: 1.35rem;
          font-weight: 700;
          margin-bottom: 1rem;
          color: white;
        }

        .faq-a-new {
          color: rgba(255,255,255,0.6);
          line-height: 1.7;
          font-size: 1.1rem;
        }

        .featured-card {
          border: 2px solid var(--industrial-orange);
          position: relative;
          z-index: 2;
        }

        .package-badge {
          position: absolute;
          top: -15px;
          left: 50%;
          transform: translateX(-50%);
          background: var(--industrial-orange);
          color: white;
          padding: 0.4rem 1rem;
          border-radius: 100px;
          font-size: 0.75rem;
          font-weight: 800;
          white-space: nowrap;
        }

        .package-feature {
          margin-bottom: 1rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .hero-premium { padding-top: 10rem; }
          .industry-item-new { width: 100%; justify-content: flex-start; }
          .process-steps-new { padding-left: 1rem; }
          .industry-grid-new { flex-direction: column; }
        }

        .benefits-bar {
          display: flex;
          justify-content: center;
          gap: 2rem;
          flex-wrap: wrap;
          margin-top: 2rem;
        }

        .benefit-item {
          color: white;
          font-weight: 700;
          font-size: 0.9rem;
          display: flex;
          align-items: center;
          gap: 0.5rem;
          opacity: 0.6;
        }

        .benefit-item::before {
          content: '•';
          color: var(--industrial-orange);
        }
      `}</style>
    </div>
  );
};

export default Home;
