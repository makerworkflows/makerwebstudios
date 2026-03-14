const Services = () => (
  <div
    id="services"
    className="section-padding fade-in"
    style={{ background: "var(--bg-color)" }}
  >
    <div className="container">
      <div
        className="text-center"
        style={{ maxWidth: "800px", margin: "0 auto 6rem" }}
      >
        <h2 className="section-title">The Growth Engine</h2>
        <p className="section-subtitle">
          No surprise invoices. Fixed-price packages tailored to industrial B2B
          manufacturing companies.
        </p>
      </div>

      <div className="packages-grid">
        {/* GrowthEngine — One-Time Build */}
        <div
          className="package-card premium-glass reveal-anim visible"
          style={{
            border: "2px solid var(--industrial-orange)",
          }}
        >
          <h3 className="package-name">GrowthEngine</h3>
          <div className="package-price">
            $4,500 <span className="price-label">One-Time Build</span>
          </div>
          <p className="package-desc">
            Turn your website into a lead generation asset that works around the
            clock.
          </p>
          <ul className="package-features">
            {[
              "Modern 8\u201310 page website built for B2B manufacturers",
              "Capabilities page that qualifies procurement teams before they call",
              "RFQ form engineered as your #1 lead conversion tool",
              "Messaging written for engineers and buyers \u2014 not fluff",
              "Photography coordination included",
              "Full certifications + equipment list page",
              "On-page SEO + Google Business Profile setup",
              "Analytics + Search Console connected",
              "PageSpeed 90+ guaranteed",
              "You own your code \u2014 no lock-in, no proprietary traps",
              "30-day delivery",
            ].map((item, i) => (
              <li key={i} className="package-feature">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--industrial-orange)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-full"
          >
            Get Started
          </a>
        </div>

        {/* CarePlan — Monthly Retainer */}
        <div
          className="package-card premium-glass reveal-anim visible"
          style={{ animationDelay: "0.1s" }}
        >
          <h3 className="package-name">CarePlan</h3>
          <div className="package-price">
            $1,500 <span className="price-label">Monthly Retainer</span>
          </div>
          <p className="package-desc">
            Active SEO growth, monthly content, and full site maintenance so you
            can focus on production.
          </p>
          <ul className="package-features">
            {[
              "Keyword research and buyer-intent targeting",
              "2\u20134 SEO pages or blog posts published monthly",
              "Monthly rank tracking and competitor analysis",
              "Backlink building and technical SEO monitoring",
              "Google Business Profile management",
              "Hosting + security updates handled for you",
              "Monthly performance report and strategy call",
              "Priority support \u2014 real response times, not a ticket queue",
            ].map((item, i) => (
              <li key={i} className="package-feature">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="var(--industrial-orange)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="feature-icon"
                >
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a
            href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-full"
            style={{
              background: "transparent",
              border: "1px solid var(--glass-border)",
              color: "var(--text-dark)",
            }}
          >
            Get Started
          </a>
        </div>
      </div>

      <p className="sequence-line">
        The $4,500 builds the factory. The $1,500/month runs it.
      </p>
    </div>

    <style>{`
      .section-padding {
        padding: 10rem 0;
      }

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

      .package-name {
        font-size: 1.75rem;
        margin-bottom: 0.5rem;
        font-family: "Outfit", sans-serif;
        color: var(--text-dark);
      }

      .package-price {
        font-size: 3rem;
        font-weight: 800;
        margin-bottom: 2rem;
        color: var(--industrial-orange);
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
        color: var(--text-dark);
        border-bottom: 1px solid var(--glass-border);
        padding-bottom: 0.75rem;
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

      .sequence-line {
        text-align: center;
        margin-top: 3rem;
        font-size: 1.15rem;
        font-weight: 600;
        color: var(--text-muted);
        font-style: italic;
      }

      @media (max-width: 768px) {
        .package-card {
          padding: 3rem 1.5rem;
        }
        .packages-grid {
          grid-template-columns: 1fr;
          gap: 2rem;
        }
      }
    `}</style>
  </div>
);

export default Services;
