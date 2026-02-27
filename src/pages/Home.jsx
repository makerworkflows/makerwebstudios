import {
  ShieldCheck,
  MapPin,
  Code,
  DollarSign,
  Clock,
  CheckCircle2,
} from "lucide-react";

const Home = () => {
  return (
    <div id="home" className="fade-in">
      {/* Hero Section */}
      <section className="dark-section blueprint-bg hero-premium">
        <div className="container relative z-10">
          <div className="hero-content text-center">
            <div className="badge-premium reveal-anim visible">
              WEB DESIGN FOR MANUFACTURERS, BY MANUFACTURERS
            </div>
            <h1 className="hero-title reveal-anim visible" style={{ animationDelay: "0.1s" }}>
              Your Website Is Losing You Bids <br />
              <span className="text-accent">You Don't Even Know About.</span>
            </h1>
            <p className="hero-subtext reveal-anim visible" style={{ animationDelay: "0.2s" }}>
              77% of B2B buyers research suppliers online before making contact.
              If your site is slow, outdated, or missing a capabilities page —
              they're choosing your competitor before they ever call you.
            </p>
            <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.3s" }}>
              <a
                href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg-premium"
              >
                Get Started — $3,500
              </a>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="hero-glow" />
      </section>

      <style>{`
        .hero-premium {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          padding-top: 8rem;
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
          max-width: 750px;
          font-weight: 500;
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
      `}</style>

      {/* Credibility Bar */}
      <section className="credibility-bar premium-glass">
        <div className="container">
          <div className="credibility-items">
            {[
              { icon: <ShieldCheck size={20} />, text: "16 Years in Manufacturing" },
              { icon: <MapPin size={20} />, text: "RGV & Texas Focused" },
              { icon: <Code size={20} />, text: "No Custom Code Required" },
              { icon: <DollarSign size={20} />, text: "Fixed-Price Packages" },
              { icon: <Clock size={20} />, text: "Results in 30 Days" },
            ].map((item, i) => (
              <div key={i} className="credibility-item">
                <span className="icon-wrapper">{item.icon}</span>
                <span className="item-text">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .credibility-bar {
          margin-top: -3rem;
          margin-bottom: 2rem;
          padding: 2rem 0;
          z-index: 20;
          position: relative;
          border-radius: var(--border-radius-lg);
          max-width: 1100px;
          margin-left: auto;
          margin-right: auto;
        }

        .credibility-items {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 3rem;
        }

        .credibility-item {
          display: flex;
          align-items: center;
          gap: 0.75rem;
        }

        .icon-wrapper {
          color: var(--industrial-orange);
          display: flex;
          align-items: center;
        }

        .item-text {
          font-weight: 600;
          font-size: 0.9rem;
          color: var(--text-dark);
        }

        [data-theme="dark"] .item-text {
          color: #ffffff;
        }

        @media (max-width: 768px) {
          .credibility-bar {
            margin-top: -2rem;
            border-radius: 0;
            width: 100%;
            max-width: 100%;
          }
          .credibility-items { gap: 1.5rem; }
        }
      `}</style>

      {/* Services Overview Bento Grid */}
      <section style={{ padding: "10rem 0", background: "var(--bg-color)" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", marginBottom: "5rem" }}>
            <h2 className="section-title">Built for the Shop Floor.</h2>
            <p className="section-subtitle">
              Most web agencies don't know what a tolerance is or why your RFQ
              form is your most important asset. We do.
            </p>
          </div>

          <div className="bento-grid">
            {/* Large Feature Card */}
            <div className="bento-card bento-grid-wide premium-card-dark">
              <div className="icon-badge blue-badge">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="card-title-lg">Capabilities Pages That Sell</h3>
              <p className="card-text-lg">
                You have no capabilities page — we build one that qualifies
                procurement teams before they call, saving your sales team hours
                of wasted time.
              </p>
              <div className="card-decoration" />
            </div>

            {/* Standard Feature Cards */}
            {[
              {
                title: "Lightning Speed",
                desc: "Your website loads in 10s on mobile. We get it under 2s.",
                icon: <Clock />,
                delay: "0.1s",
              },
              {
                title: "Lead Conversions",
                desc: "Your RFQ form is buried. We rebuild it as your #1 tool.",
                icon: <CheckCircle2 />,
                delay: "0.2s",
              },
              {
                title: "Local Visibility",
                desc: "Invisible on Google? We setup your SEO so engineers find you.",
                icon: <ShieldCheck />,
                delay: "0.3s",
              },
              {
                title: "Modern Blueprint",
                desc: "Your site looks like 2003. We modernize it for under $5K.",
                icon: <Code />,
                delay: "0.4s",
              },
            ].map((item, idx) => (
              <div key={idx} className="bento-card reveal-anim visible" style={{ animationDelay: item.delay }}>
                <div className="icon-badge orange-badge">
                  {item.icon}
                </div>
                <h3 className="card-title">{item.title}</h3>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .section-title {
          font-size: clamp(2.5rem, 4vw, 3.5rem);
          margin-bottom: 1.5rem;
          color: var(--text-dark);
        }

        .section-subtitle {
          font-size: 1.125rem;
          color: var(--text-muted);
          line-height: 1.7;
          font-weight: 500;
        }

        .premium-card-dark {
          background-color: var(--dark-bg) !important;
          color: white !important;
          display: flex;
          flex-direction: column;
          justify-content: center;
          min-height: 320px;
        }

        .icon-badge {
          width: 56px;
          height: 56px;
          border-radius: 16px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 2rem;
        }

        .blue-badge {
          background: rgba(142, 185, 250, 0.1);
          color: var(--accent-blue);
        }

        .orange-badge {
          background: rgba(255, 107, 0, 0.1);
          color: var(--industrial-orange);
        }

        .card-title-lg {
          font-size: 2rem;
          margin-bottom: 1.25rem;
          color: white !important;
        }

        .card-text-lg {
          color: rgba(255, 255, 255, 0.8) !important;
          font-size: 1.125rem;
          max-width: 550px;
        }

        .card-title {
          font-size: 1.25rem;
          margin-bottom: 1rem;
          color: var(--text-dark);
        }

        .card-text {
          font-size: 1rem;
          color: var(--text-muted);
        }

        .card-decoration {
          position: absolute;
          bottom: -20px;
          right: -20px;
          width: 150px;
          height: 150px;
          background: radial-gradient(circle, rgba(142, 185, 250, 0.05) 0%, transparent 70%);
          border-radius: 50%;
        }
      `}</style>

      {/* The Offer CTA */}
      <section className="dark-section blueprint-bg offer-section">
        <div className="container">
          <div className="offer-card premium-glass reveal-anim visible">
            <h2 className="offer-title">The Manufacturer's Digital Foundation</h2>
            <p className="offer-price">Starting at $3,500</p>

            <ul className="offer-features">
              {[
                "Modern mobile-responsive website",
                "Capabilities & RFQ pages",
                "Google Business Profile setup",
                "On-page SEO included",
                "SSL + speed optimization",
                "Professional site copywriting",
              ].map((feat, i) => (
                <li key={i} className="offer-feature">
                  <CheckCircle2
                    size={24}
                    className="feature-icon"
                  />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>

            <div className="offer-actions">
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-transparent btn-lg-premium"
              >
                Book a Call
              </a>
              <a
                href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg-premium"
              >
                Get Started — $3,500
              </a>
            </div>
          </div>
        </div>
      </section>

      <style>{`
        .offer-section {
          padding: 10rem 0;
        }

        .offer-card {
          padding: 5rem;
          text-align: center;
          max-width: 1000px;
          margin: 0 auto;
          border-radius: var(--border-radius-lg);
        }

        .offer-title {
          font-size: clamp(2rem, 3.5vw, 3rem);
          margin-bottom: 1.5rem;
          color: white !important;
        }

        .offer-price {
          font-size: 1.75rem;
          font-weight: 700;
          color: var(--industrial-orange);
          margin-bottom: 4rem;
          font-family: "Outfit", sans-serif;
        }

        .offer-features {
          list-style: none;
          padding: 0;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 2rem;
          text-align: left;
          margin-bottom: 5rem;
        }

        .offer-feature {
          display: flex;
          align-items: flex-start;
          gap: 1rem;
          color: rgba(255, 255, 255, 0.8);
          font-size: 1.125rem;
          font-weight: 500;
        }

        .feature-icon {
          color: var(--industrial-orange);
          flex-shrink: 0;
        }

        .offer-actions {
          display: flex;
          gap: 1.5rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        @media (max-width: 768px) {
          .offer-card {
            padding: 3rem 1.5rem;
          }
          .offer-features {
            grid-template-columns: 1fr;
            gap: 1.5rem;
          }
          .offer-actions .btn {
            width: 100%;
          }
        }
      `}</style>
    </div>
  );
};

export default Home;
