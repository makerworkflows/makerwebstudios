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
        <h2 className="section-title">No Surprise Invoices.</h2>
        <p className="section-subtitle">
          You know what you're paying before we start. Fixed-price packages
          tailored for B2B manufacturers.
        </p>
      </div>

      <div className="packages-grid">
        {/* GrowthEngine — $4,500 one-time + $1,500/month */}
        <div
          className="package-card premium-glass reveal-anim visible"
          style={{
            border: "2px solid var(--industrial-orange)",
          }}
        >
          <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
            Full Build + Growth
          </div>
          <h3 className="package-name">GrowthEngine</h3>
          <div className="package-price">
            $4,500 <span className="price-label">one-time</span>
          </div>
          <div style={{ fontSize: "1.5rem", fontWeight: "800", color: "var(--industrial-orange)", fontFamily: "'Outfit', sans-serif", marginBottom: "1.5rem" }}>
            + $1,500<span className="price-label">/month</span>
          </div>
          <p className="package-desc">
            A complete website build and ongoing SEO growth engine. We build the
            asset, then drive buyers to it every month.
          </p>

          <div className="section-label">Deliverables</div>
          <ul className="package-features">
            {[
              "Full website design and modernization \u2014 8\u201310 pages built for B2B buyers",
              "Capabilities page that qualifies procurement teams before they call",
              "RFQ form engineered as your #1 lead conversion tool",
              "Messaging written for engineers and buyers \u2014 not fluff",
              "On-page SEO foundation built into every page from day one",
              "Keyword research and buyer-intent targeting \u2014 updated quarterly",
              "Google Business Profile setup and full optimization",
              "2\u20134 SEO pages or blog posts published monthly",
              "Monthly keyword rank tracking and position reports",
              "Competitor SEO analysis \u2014 quarterly gap review",
              "Backlink building \u2014 directories, associations, industry listings",
              "Technical SEO monitoring \u2014 Core Web Vitals, crawl health, broken links",
              "Google Analytics 4 and Search Console connected and monitored",
              "Monthly performance report \u2014 rankings, traffic, leads, next steps",
              "Monthly strategy call \u2014 30 minutes, results review and priority alignment",
              "Photography coordination included",
              "SSL and speed optimization",
              "You own your code \u2014 no lock-in, no proprietary builders",
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

          <div className="section-label">Guarantees</div>
          <ul className="package-features guarantee-list">
            {[
              "Site delivered in 30 days or you don\u2019t pay for that month",
              "PageSpeed score of 85+ or we keep working until it hits",
              "If the finished site doesn\u2019t match approved design and scope we rebuild at no charge",
              "90-day ranking check-in \u2014 if no measurable keyword movement we audit and adjust strategy at no cost",
              "You own everything \u2014 code, domain, content \u2014 from day one",
            ].map((item, i) => (
              <li key={i} className="package-feature" style={{ fontWeight: "600" }}>
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

        {/* Care Plan — $500/month */}
        <div
          className="package-card premium-glass reveal-anim visible"
          style={{ animationDelay: "0.1s" }}
        >
          <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>
            Maintenance & Support
          </div>
          <h3 className="package-name">Care Plan</h3>
          <div className="package-price">
            $500<span className="price-label">/month</span>
          </div>
          <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>
            Cancel anytime &middot; No contracts
          </div>
          <p className="package-desc">
            Keep your site fast, secure, and up to date while you focus on
            production.
          </p>

          <div className="section-label">Deliverables</div>
          <ul className="package-features">
            {[
              "Hosting management and uptime monitoring with instant alerts",
              "Security monitoring \u2014 malware scans, firewall, threat detection",
              "Monthly CMS, plugin, and theme updates",
              "Up to 4 content updates per month \u2014 hours, staff, services, pricing",
              "Google Business Profile basic maintenance \u2014 hours, address, reviews current",
              "Monthly PageSpeed and Core Web Vitals check",
              "Broken link and 404 error monitoring \u2014 monthly crawl",
              "SSL certificate management \u2014 active and auto-renewing",
              "Weekly offsite backups \u2014 full site restore capability",
              "Monthly uptime and performance report delivered to your inbox",
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

          <div className="section-label">Guarantees</div>
          <ul className="package-features guarantee-list">
            {[
              "99% uptime or we credit that month\u2019s retainer",
              "Any site-breaking issue resolved within 24 business hours or your next month is free",
              "Cancel anytime \u2014 no contracts, no penalties",
            ].map((item, i) => (
              <li key={i} className="package-feature" style={{ fontWeight: "600" }}>
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
        $4,500 builds the factory. $1,500/month runs it. $500/month keeps it running.
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

      .section-label {
        font-size: 0.8rem;
        font-weight: 700;
        text-transform: uppercase;
        letter-spacing: 0.08em;
        color: var(--text-dark);
        margin-bottom: 0.75rem;
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
