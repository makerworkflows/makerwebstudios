import { useEffect } from "react";
import Layout from "../components/Layout";

const GrowthEngine = () => {
  useEffect(() => {
    // Scroll to top on mount since we are using React Router
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div id="growth-engine" className="fade-in">
        <header className="dark-section blueprint-bg hero-premium">
          <div className="container relative z-10 text-center">
            <div className="badge-premium reveal-anim visible">
              Digital Growth for Texas Manufacturers
            </div>
            <h1 className="hero-title reveal-anim visible" style={{ animationDelay: "0.1s" }}>
              Your Buyers Are Searching.<br />
              <span className="text-accent">Are They Finding You?</span>
            </h1>
            <p className="hero-subtext reveal-anim visible" style={{ animationDelay: "0.2s" }}>
              GrowthEngine gets RGV and Texas manufacturers found on Google, ranking for the right keywords, and generating inbound B2B leads — without a generic marketing agency that doesn't know your industry.
            </p>
            
            <div className="credibility-block reveal-anim visible" style={{ animationDelay: "0.3s" }}>
              <div className="credibility-badge">
                BUILT BY A MANUFACTURER, FOR MANUFACTURERS
              </div>
              <p className="credibility-text">
                Guillermo Aristi ran a manufacturing operation in the RGV for 16 years. He built GrowthEngine because he knows exactly what it costs to lose bids to competitors with better visibility.
              </p>
            </div>

            <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.4s" }}>
              <a
                href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
                className="btn btn-primary btn-lg-premium"
              >
                Get Started — $1,997
              </a>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-transparent btn-lg-premium"
              >
                Book a Discovery Call
              </a>
            </div>
          </div>
          <div className="hero-glow" />
        </header>

        <style>{`
          .hero-premium {
            position: relative;
            min-height: 85vh;
            display: flex;
            align-items: center;
            padding-top: 10rem;
            padding-bottom: 10rem;
            overflow: hidden;
          }

          .relative { position: relative; }
          .z-10 { z-index: 10; }

          .badge-premium {
            display: inline-block;
            padding: 0.5rem 1.25rem;
            background: rgba(255, 107, 0, 0.1);
            border: 1px solid rgba(255, 107, 0, 0.2);
            border-radius: 100px;
            color: var(--industrial-orange);
            font-size: 0.8125rem;
            font-weight: 700;
            margin-bottom: 2.5rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
          }

          .hero-title {
            margin-bottom: 2rem;
            line-height: 1.05;
            max-width: 1000px;
            margin-left: auto;
            margin-right: auto;
            color: white !important;
          }

          .hero-subtext {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.7);
            margin: 0 auto 3.5rem;
            line-height: 1.7;
            max-width: 800px;
            font-weight: 500;
          }

          .credibility-block {
            max-width: 700px;
            margin: 0 auto 4rem;
            padding: 2.5rem;
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.1);
            border-radius: var(--border-radius-lg);
            backdrop-filter: blur(10px);
          }

          .credibility-badge {
            font-size: 0.75rem;
            letter-spacing: 0.15em;
            font-weight: 800;
            color: var(--industrial-orange);
            margin-bottom: 1.25rem;
            text-transform: uppercase;
          }

          .credibility-text {
            font-size: 1rem;
            line-height: 1.6;
            color: rgba(255, 255, 255, 0.8);
          }

          .btn-lg-premium {
            padding: 1.25rem 2.5rem;
            font-size: 1.125rem;
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

          .hero-actions {
            display: flex;
            gap: 1.5rem;
            justify-content: center;
            flex-wrap: wrap;
          }
        `}</style>

        <section className="pain-section" style={{ padding: "10rem 0", background: "var(--bg-color)" }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: "5rem" }}>
              Most manufacturers are <span className="text-accent">invisible online.</span>
            </h2>
            <div className="bento-grid">
              {[
                {
                  emoji: "🔍",
                  title: "Not Ranking",
                  desc: "Your buyers search 'CNC machining shop Texas' or 'custom metal fabrication near me' — and your competitors show up. You don't.",
                },
                {
                  emoji: "📉",
                  title: "No Inbound Leads",
                  desc: "Your website gets a few visitors who leave without doing anything. No RFQs. No quoting opportunities. No pipeline.",
                },
                {
                  emoji: "🏭",
                  title: "Built for Trade Shows",
                  desc: "Your business grew on relationships. That still works — but the procurement managers who don't know you yet are finding someone else online.",
                },
              ].map((item, i) => (
                <div key={i} className="bento-card reveal-anim visible" style={{ animationDelay: `${i * 0.1}s`, textAlign: "center", padding: "4rem 2.5rem" }}>
                  <span style={{ fontSize: "3rem", display: "block", marginBottom: "2rem" }}>{item.emoji}</span>
                  <h3 className="card-title" style={{ fontSize: "1.5rem" }}>{item.title}</h3>
                  <p className="card-text">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="roadmap-section" style={{ padding: "10rem 0" }}>
          <div className="container">
            <div className="text-center" style={{ maxWidth: "800px", margin: "0 auto 6rem" }}>
              <h2 className="section-title">The GrowthEngine Roadmap</h2>
              <p className="section-subtitle">
                We don't sell you a massive retainer right out of the gate. We prove ROI first, setting up your core infrastructure.
              </p>
            </div>
            
            <div className="packages-grid">
              {/* Starter Package */}
              <div className="package-card premium-glass starter-package reveal-anim visible">
                <div className="package-badge">THE ENTRY POINT</div>
                <h3 className="package-name">GrowthEngine Starter</h3>
                <div className="package-price">
                  $1,997 <span className="price-label">one-time</span>
                </div>
                <p className="package-desc">
                  For manufacturers with no baseline digital presence who need to get found fast. Delivered in 30 days.
                </p>
                
                <ul className="package-features">
                  {[
                    "Complete Website Audit & Setup",
                    "On-page SEO fixes (up to 10 pages)",
                    "Competitor keyword analysis",
                    "Google Business Profile optimization",
                    "Google Search Console config",
                    "5 Industry Directory Listings",
                    "RFQ Form Optimization",
                    "90-Day Growth Roadmap report",
                    "60-min Strategy Delivery Call"
                  ].map((item, i) => (
                    <li key={i} className="package-feature">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--industrial-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" className="btn btn-primary btn-full">
                  Get Started
                </a>
              </div>

              {/* Visibility Package */}
              <div className="package-card premium-glass reveal-anim visible" style={{ animationDelay: "0.2s" }}>
                <h3 className="package-name">Visibility Engine</h3>
                <div className="package-price">
                  $1,500 <span className="price-label">/mo</span>
                </div>
                <p className="package-desc">
                  The natural next step after Starter. Consistent SEO content targeting your exact buyers.
                </p>
                
                <ul className="package-features">
                  {[
                    "2 SEO-optimized capabilities posts/mo",
                    "Targeted B2B manufacturing keywords",
                    "Active Rank Tracking",
                    "Google Business Profile management",
                    "Monthly performance reporting",
                    "Site maintenance & updates"
                  ].map((item, i) => (
                    <li key={i} className="package-feature">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon" style={{ opacity: 0.5 }}>
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span className="text-muted">{item}</span>
                    </li>
                  ))}
                </ul>
                
                <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-transparent btn-full">
                  Book a Call
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="faq-section" style={{ padding: "10rem 0", background: "var(--bg-color)" }}>
          <div className="container">
            <h2 className="section-title text-center" style={{ marginBottom: "6rem" }}>Common Questions</h2>
            <div className="faq-grid">
              {[
                {
                  q: "Do I need a new website?",
                  a: "Not necessarily. We start with the $1,997 Audit & Setup to optimize what you already have. We only recommend a rebuild if your current platform fundamentally cannot rank on Google or capture inbound leads."
                },
                {
                  q: "How are you different from an agency?",
                  a: "We are not generic marketers. We understand ISO certifications, tolerances, capabilities pages, and how a procurement manager actually evaluates a supplier. We don't need you to explain your industry to us."
                },
                {
                  q: "What do you need from my team?",
                  a: "Very little. We do a kickoff to understand your ideal client and capabilities, and then we execute. You review and approve via email."
                },
                {
                  q: "When will I see results?",
                  a: "Setup is completed in 30 days. Most clients begin seeing their organic keyword rankings climb within 60 days of the new infrastructure going live."
                }
              ].map((faq, i) => (
                <div key={i} className="faq-item bento-card">
                  <h3 className="faq-question">{faq.q}</h3>
                  <p className="faq-answer">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="cta-section dark-section blueprint-bg" style={{ padding: "12rem 0", textAlign: "center" }}>
          <div className="container" style={{ maxWidth: "900px" }}>
            <h2 className="cta-title">Ready to get found?</h2>
            <p className="cta-subtitle">
              Start with the GrowthEngine Starter — $1,997, delivered in 30 days. Or book a call if you'd like to talk through a custom scope first.
            </p>
            <div className="hero-actions">
              <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" className="btn btn-primary btn-lg-premium">
                Get Started — $1,997
              </a>
              <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-transparent btn-lg-premium">
                Book a Discovery Call
              </a>
            </div>
          </div>
        </section>

        <style>{`
          .packages-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
            gap: 3rem;
            align-items: stretch;
            max-width: 1100px;
            margin: 0 auto;
          }

          .package-card {
            padding: 4rem 3rem;
            display: flex;
            flex-direction: column;
            position: relative;
          }

          .starter-package {
            border: 2px solid var(--industrial-orange);
          }

          .package-badge {
            position: absolute;
            top: -15px;
            left: 50%;
            transform: translateX(-50%);
            background: var(--industrial-orange);
            color: white;
            padding: 0.5rem 1.5rem;
            border-radius: 100px;
            font-weight: 700;
            font-size: 0.8125rem;
            white-space: nowrap;
            letter-spacing: 0.05em;
          }

          .package-name {
            font-size: 1.75rem;
            margin-bottom: 0.5rem;
            font-family: "Outfit", sans-serif;
          }

          .package-price {
            font-size: 3rem;
            font-weight: 800;
            margin-bottom: 2rem;
            color: var(--text-dark);
            font-family: "Outfit", sans-serif;
          }

          .price-label {
            font-size: 1rem;
            font-weight: 500;
            color: var(--text-muted);
          }

          .package-desc {
            margin-bottom: 3rem;
            color: var(--text-muted);
            line-height: 1.7;
            font-size: 1.05rem;
          }

          .package-features {
            list-style: none;
            padding: 0;
            margin: 0 0 3.5rem;
            flex-grow: 1;
          }

          .package-feature {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1.25rem;
            line-height: 1.5;
            font-size: 0.95rem;
          }

          .feature-icon {
            margin-right: 12px;
            margin-top: 2px;
            flex-shrink: 0;
          }

          .btn-full {
            width: 100%;
            justify-content: center;
          }

          .faq-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
            gap: 2.5rem;
            max-width: 1100px;
            margin: 0 auto;
          }

          .faq-question {
            font-size: 1.25rem;
            margin-bottom: 1.25rem;
            font-family: "Outfit", sans-serif;
          }

          .faq-answer {
            color: var(--text-muted);
            line-height: 1.7;
          }

          .cta-title {
            font-size: clamp(2.5rem, 5vw, 4rem);
            margin-bottom: 2rem;
            color: white !important;
          }

          .cta-subtitle {
            font-size: 1.25rem;
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 4rem;
            line-height: 1.7;
          }

          @media (max-width: 768px) {
            .package-card {
              padding: 3rem 1.5rem;
            }
            .faq-grid {
              grid-template-columns: 1fr;
            }
            .packages-grid {
              gap: 2rem;
            }
          }
        `}</style>
      </div>
    </Layout>
  );
};

export default GrowthEngine;
