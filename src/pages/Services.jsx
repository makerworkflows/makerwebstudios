const Services = () => (
  <div id="services" className="section-padding fade-in" style={{ background: "var(--bg-color)" }}>
    <div className="container">
      <div className="text-center" style={{ maxWidth: "800px", margin: "0 auto 6rem" }}>
        <h2 className="section-title">Transparent Pricing for Manufacturers</h2>
        <p className="section-subtitle">
          No surprise invoices. Fixed-price packages tailored to industrial B2B companies.
        </p>
      </div>

      <div className="packages-grid">
        {/* Foundation Package */}
        <div className="package-card premium-glass reveal-anim visible">
          <h3 className="package-name">Digital Foundation</h3>
          <div className="package-price">
            $3,500 <span className="price-label">one-time</span>
          </div>
          <p className="package-desc">Perfect for updating an old site and getting the fundamentals right.</p>
          <ul className="package-features">
            {['Modern 5-6 page website', 'Capabilities page', 'RFQ form setup', 'On-page SEO', 'GBP Profile Setup', 'Analytics + Search Console'].map((item, i) => (
              <li key={i} className="package-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--industrial-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">Get Started</a>
        </div>

        {/* Modernization Package */}
        <div className="package-card premium-glass reveal-anim visible" style={{ border: "2px solid var(--industrial-orange)", animationDelay: "0.1s" }}>
          <div className="package-badge">MOST POPULAR</div>
          <h3 className="package-name">Full Modernization</h3>
          <div className="package-price">
            $4,500 <span className="price-label">one-time</span>
          </div>
          <p className="package-desc">For manufacturers ready to turn their site into a lead-gen asset.</p>
          <ul className="package-features">
            {['Everything in Foundation', '8-10 pages', 'Photography coordination', 'Full capabilities + certs list', '90-day post-launch support'].map((item, i) => (
              <li key={i} className="package-feature">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--industrial-orange)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feature-icon">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-full">Get Started</a>
        </div>
      </div>
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
