// Inline SVG icons (replaces lucide-react to reduce bundle size)
const CheckCircle2 = ({ size = 24, className = "", color, style = {} }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color || "currentColor"} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className} style={style}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
);
const TrendingDown = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="22 17 13.5 8.5 8.5 13.5 2 7"/><polyline points="16 17 22 17 22 11"/></svg>
);
const VolumeX = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"/><line x1="22" y1="9" x2="16" y2="15"/><line x1="16" y1="9" x2="22" y2="15"/></svg>
);
const Factory = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1"/><path d="M12 18h1"/><path d="M7 18h1"/></svg>
);
const ArrowRight = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
);

const Home = () => {
  return (
    <div id="home" className="fade-in">

      {/* ============================================================ */}
      {/* SECTION 1 -- HERO */}
      {/* ============================================================ */}
      <section className="blueprint-bg hero-premium">
        <div className="container relative z-10">
          <div className="hero-content text-center">
            <h1 className="hero-title reveal-anim visible" style={{ animationDelay: "0.1s" }}>
              The Revenue Builder System<br />
              <span className="text-accent">For Texas Manufacturers.</span>
            </h1>
            <p className="hero-subtitle reveal-anim visible" style={{ animationDelay: "0.15s", fontSize: "1.5rem", color: "var(--industrial-orange)", fontWeight: "700", fontFamily: "'Outfit', sans-serif", marginBottom: "1.5rem", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
              Your website should work as hard as your plant does.
            </p>
            <p className="hero-subtext reveal-anim visible" style={{ animationDelay: "0.2s" }}>
              We build, optimize, and scale the digital infrastructure of manufacturing businesses across Texas &mdash; starting with a website that generates leads, and ending with a company worth selling.
            </p>
            <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.3s", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "400px", margin: "0 auto", width: "100%" }}>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg-premium"
                style={{ width: "100%", textAlign: "center" }}
              >
                Get Your Free Audit
              </a>
              <a
                href="#system"
                className="btn btn-dark btn-lg-premium"
                style={{ width: "100%", textAlign: "center" }}
              >
                See What's Included
              </a>
            </div>

            <div className="hero-stat reveal-anim visible" style={{ animationDelay: "0.4s", marginTop: "4rem", display: "flex", gap: "3rem", justifyContent: "center", flexWrap: "wrap", textAlign: "center", width: "100%", maxWidth: "750px", marginLeft: "auto", marginRight: "auto" }}>
              <div className="stat-item">
                <div className="stat-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>Texas Manufacturers</div>
              </div>
              <div className="stat-item" style={{ color: "var(--border-color)" }}>|</div>
              <div className="stat-item">
                <div className="stat-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>ISO &amp; GMP Specialists</div>
              </div>
              <div className="stat-item" style={{ color: "var(--border-color)" }}>|</div>
              <div className="stat-item">
                <div className="stat-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>16 Years on the Shop Floor</div>
              </div>
              <div className="stat-item" style={{ color: "var(--border-color)" }}>|</div>
              <div className="stat-item">
                <div className="stat-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", fontWeight: "600" }}>90-Day Lead Guarantee</div>
              </div>
            </div>
          </div>
        </div>

        <div className="hero-glow" />
      </section>

      <style>{`
        .hero-premium {
          position: relative;
          min-height: 85vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding-top: 8rem;
          padding-bottom: 10rem;
          overflow: hidden;
        }

        .hero-content {
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
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
          margin-bottom: 1rem;
          line-height: 1.05;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
          color: var(--text-dark);
        }

        .hero-subtext {
          font-size: 1.25rem;
          color: var(--text-muted);
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

        .system-cards-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 1.5rem;
        }

        .value-line-items {
          display: flex;
          flex-direction: column;
          gap: 0;
        }

        .value-line-item {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 1rem 0;
          border-bottom: 1px solid rgba(255,255,255,0.08);
        }

        .value-line-item:last-child {
          border-bottom: none;
        }

        @media (max-width: 900px) {
          .system-cards-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }

        @media (max-width: 600px) {
          .system-cards-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>



      {/* ============================================================ */}
      {/* SECTION 2 -- PHILOSOPHY DIVIDER */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "900px" }}>
          <p style={{
            fontSize: "clamp(2rem, 4vw, 3.5rem)",
            fontWeight: "900",
            fontFamily: "'Outfit', sans-serif",
            color: "var(--text-dark)",
            lineHeight: "1.15",
            letterSpacing: "-0.02em",
            margin: 0,
          }}>
            &ldquo;Your website should work as hard as your plant does.&rdquo;
          </p>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 3 -- THE PROBLEM */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              The Reality
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1.5rem" }}>
              You built a serious operation. Your website doesn't show it.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", maxWidth: "800px", lineHeight: "1.75" }}>
              Most manufacturers in Texas have websites that were built once and never touched again. No SEO. No lead capture. No credibility signal for buyers doing due diligence. Meanwhile, your competitors &mdash; even the ones with half your capabilities &mdash; are showing up first on Google, presenting their certifications front and center, and converting visitors into quote requests while you're waiting for the phone to ring. That's not a product problem. That's a digital presence problem. And it's fixable.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {[
              {
                title: "Not Ranking on Google",
                desc: "Procurement teams search for your exact service every day. If you're not on page one, someone else gets the call.",
                icon: <TrendingDown size={28} />,
                delay: "0.1s",
              },
              {
                title: "No Inbound Leads",
                desc: "Your site looks fine. But it doesn't convert. We build RFQ systems that qualify buyers before they pick up the phone.",
                icon: <VolumeX size={28} />,
                delay: "0.2s",
              },
              {
                title: "Outdated Presence",
                desc: "If your site looks like it was built for a trade show in 2012, buyers move on in seconds. First impressions are digital now.",
                icon: <Factory size={28} />,
                delay: "0.3s",
              },
            ].map((item, idx) => (
              <div key={idx} className="bento-card reveal-anim visible" style={{ animationDelay: item.delay }}>
                <div className="icon-badge orange-badge">
                  {item.icon}
                </div>
                <h3 className="card-title" style={{ fontSize: "1.5rem", fontWeight: "800", fontFamily: "'Outfit', sans-serif", color: "white" }}>{item.title}</h3>
                <p className="card-text" style={{ color: "rgba(255,255,255,0.65)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 4 -- THE SYSTEM */}
      {/* ============================================================ */}
      <section id="system" style={{ padding: "8rem 0", background: "var(--bg-color)" }} className="blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>
              The Revenue Builder System
            </div>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              One system. Eight deliverables. Built for manufacturers.
            </h2>
            <p className="section-subtitle" style={{ maxWidth: "800px" }}>
              The Revenue Builder System is not a website package. It's a complete growth infrastructure &mdash; installed in your business, starting with your digital presence and scaling to every revenue-generating function you run.
            </p>
          </div>

          <div className="system-cards-grid">
            {[
              {
                num: "01",
                title: "Digital Presence Audit",
                desc: "A full diagnostic of your current website, SEO performance, Google Business Profile, and online visibility. We find every gap costing you leads.",
              },
              {
                num: "02",
                title: "Blind Spot Audit",
                desc: "We analyze what your competitors are doing that you are not. From backlinks to content strategy to paid media, we surface the opportunities hiding in plain sight.",
              },
              {
                num: "03",
                title: "Market Analysis & 5-Year Forecast",
                desc: "Industry-specific research on your market, buyer trends, regulatory shifts, and growth projections. You see the landscape before you invest in it.",
              },
              {
                num: "04",
                title: "Revenue Growth Playbook",
                desc: "A step-by-step plan to increase revenue from your existing operations. Pricing strategy, upsell frameworks, and margin optimization tailored to your business.",
              },
              {
                num: "05",
                title: "Revenue Builder Playbook",
                desc: "The master execution plan. What to build, in what order, and why. This is the operating system for your digital growth engine.",
              },
              {
                num: "06",
                title: "Lead Flow Playbook",
                desc: "How to generate, capture, qualify, and convert inbound leads consistently. From RFQ form design to follow-up sequences to CRM setup.",
              },
              {
                num: "07",
                title: "Revenue Model Playbook",
                desc: "A financial model built around your actual numbers. Revenue targets, customer acquisition cost, lifetime value, and the levers that move each one.",
              },
              {
                num: "08",
                title: "Master Plan Roadmap",
                desc: "A 12-month execution timeline that ties every deliverable together into a single, sequenced plan. This is your strategic GPS from launch to scale.",
              },
            ].map((item, idx) => (
              <div key={idx} className="bento-card reveal-anim visible" style={{ animationDelay: `${0.05 * idx}s`, position: "relative" }}>
                <div style={{ fontSize: "3rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.15, position: "absolute", top: "1.25rem", right: "1.5rem", lineHeight: 1, fontFamily: "'Outfit', sans-serif" }}>{item.num}</div>
                <h3 className="card-title" style={{ fontSize: "1.25rem", fontWeight: "800", fontFamily: "'Outfit', sans-serif", marginBottom: "0.75rem" }}>{item.title}</h3>
                <p className="card-text" style={{ fontSize: "0.95rem" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 5 -- VALUE STACK */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              What It's Worth
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1rem" }}>
              Total Value of The Revenue Builder System
            </h2>
          </div>

          <div className="value-line-items" style={{ marginBottom: "3rem" }}>
            {[
              { label: "Revenue Engine Website Build", value: "$4,500" },
              { label: "Digital Presence Audit", value: "$1,500" },
              { label: "Blind Spot Audit", value: "$1,500" },
              { label: "Market Analysis & 5-Year Forecast", value: "$2,500" },
              { label: "Revenue Growth Playbook", value: "$2,000" },
              { label: "Revenue Builder Playbook", value: "$2,500" },
              { label: "Lead Flow Playbook", value: "$2,000" },
              { label: "Revenue Model Playbook", value: "$2,500" },
              { label: "Master Plan Roadmap", value: "$1,500" },
              { label: "12-Month Revenue Builder Retainer", value: "$18,000" },
            ].map((item, idx) => (
              <div key={idx} className="value-line-item">
                <span style={{ color: "rgba(255,255,255,0.75)", fontSize: "1.05rem", fontWeight: "500" }}>{item.label}</span>
                <span style={{ color: "rgba(255,255,255,0.4)", fontSize: "1.05rem", fontWeight: "700", fontFamily: "'Outfit', sans-serif" }}>{item.value}</span>
              </div>
            ))}
          </div>

          {/* Total */}
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "1.5rem 0", borderTop: "2px solid var(--industrial-orange)", marginBottom: "3rem" }}>
            <span style={{ color: "white", fontSize: "1.25rem", fontWeight: "700" }}>Total Value</span>
            <span style={{ color: "var(--industrial-orange)", fontSize: "2rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif" }}>$38,500</span>
          </div>

          {/* Investment */}
          <div style={{ textAlign: "center", padding: "3rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", marginBottom: "2rem" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Your Investment
            </p>
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "white", lineHeight: "1.2" }}>
              $4,500 <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500", fontSize: "1.25rem" }}>to build it</span> + $1,500/mo <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500", fontSize: "1.25rem" }}>to grow it</span>
            </div>
            <p style={{ color: "var(--industrial-orange)", fontSize: "0.95rem", fontWeight: "600", marginTop: "1.5rem", marginBottom: "0" }}>
              Price increases to $6,000 in May 2026 when the Sales Training module launches.
            </p>
          </div>

          {/* CTAs */}
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "400px", margin: "0 auto", width: "100%" }}>
            <a href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: "1rem 2.5rem", fontSize: "1rem", background: "#fff", color: "#000", border: "1px solid rgba(255,255,255,0.2)", width: "100%", textAlign: "center", fontWeight: "700" }}>
              Get Started
            </a>
            <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem", width: "100%", textAlign: "center" }}>
              Book a Strategy Call
            </a>
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 6 -- GUARANTEE */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }} className="blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>
              Our Guarantee
            </div>
            <h2 className="section-title" style={{ marginBottom: "1rem" }}>
              We guarantee results. Not just deliverables.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem", marginBottom: "3rem" }}>
            {/* 30-Day Unconditional */}
            <div className="bento-card reveal-anim visible" style={{ borderLeft: "4px solid var(--industrial-orange)" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.3, lineHeight: 1, marginBottom: "1rem" }}>30</div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-dark)", marginBottom: "1rem", fontWeight: "700" }}>Day Unconditional Redesign Guarantee</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                If you're not completely satisfied with the website within 30 days of launch, we redesign it for free. No questions asked. No fine print.
              </p>
            </div>

            {/* 90-Day Lead Guarantee */}
            <div className="bento-card reveal-anim visible" style={{ border: "2px solid var(--industrial-orange)" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.3, lineHeight: 1, marginBottom: "1rem" }}>90</div>
              <h3 style={{ fontSize: "1.25rem", color: "var(--text-dark)", marginBottom: "1rem", fontWeight: "700" }}>Day Lead Guarantee</h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                We guarantee at least 1 qualified inbound lead within 90 days of launch. If we don't deliver, we keep working at no charge until you get one.
              </p>
            </div>
          </div>

          <p style={{ textAlign: "center", fontSize: "1.25rem", fontWeight: "700", color: "var(--text-dark)", fontFamily: "'Outfit', sans-serif", margin: 0 }}>
            We only win when you win.
          </p>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 7 -- ABOUT */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ marginBottom: "3rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Why Maker Web Studios
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1.5rem" }}>
              Built by someone who's been on your plant floor.
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: "1.75", maxWidth: "800px" }}>
              Maker Web Studios was founded by Guillermo Aristi &mdash; a 16-year manufacturing veteran with GMP, ISO 9001, and SQF certifications who built and exited a regulated manufacturing facility in Texas. This isn't an agency that learned about manufacturing from a Google search. We know what a maquila operation looks like. We know what C-TPAT means. We know why your ISO certification matters to a procurement manager doing supplier qualification &mdash; and exactly where to put it on your homepage so they see it in the first 8 seconds. We speak manufacturer. Because we are one.
            </p>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { num: "16", label: "Years in Manufacturing" },
              { num: "3", label: "New Clients Per Month" },
              { num: "90", label: "Day Lead Guarantee" },
              { num: "100%", label: "Texas Focused" },
            ].map((stat, idx) => (
              <div key={idx} style={{ textAlign: "center" }}>
                <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--industrial-orange)", fontFamily: "'Outfit', sans-serif", lineHeight: "1" }}>{stat.num}</div>
                <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.5)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.5rem", fontWeight: "600" }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* ============================================================ */}
      {/* SECTION 8 -- SCARCITY / CTA */}
      {/* ============================================================ */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>
            Limited Availability
          </div>
          <h2 className="section-title" style={{ color: "var(--text-dark)", textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2.25rem, 5vw, 3.5rem)", lineHeight: "1.1", fontFamily: "'Outfit', sans-serif", fontWeight: "900" }}>
            We only take 3 new Revenue Builder clients per month.
          </h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", textAlign: "center", marginBottom: "2.5rem", lineHeight: "1.75", fontWeight: "500", opacity: 0.9, maxWidth: "650px" }}>
            Not as a marketing tactic &mdash; as a quality commitment. Every client gets our full attention from discovery to launch. Three slots means your project never gets deprioritized. The May 2026 price increase to $6,000 is real. If you're reading this before then, you're looking at the last months of the $4,500 build rate.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "400px", width: "100%" }}>
            <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px", width: "100%", textAlign: "center" }}>
              Claim Your Free Audit
            </a>
          </div>
          <p style={{ fontSize: "0.9rem", color: "var(--text-muted)", marginTop: "1.25rem", opacity: 0.7, maxWidth: "500px" }}>
            No cost. No commitment. Just a detailed look at what your digital presence is costing you.
          </p>
        </div>
      </section>

      {/* Footer Line */}
      <div style={{ padding: "2rem 0", textAlign: "center", borderTop: "1px solid var(--border-color)", background: "var(--bg-color)" }}>
        <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", opacity: 0.6, margin: 0 }}>
          &copy; 2026 Maker Web Studios. The Revenue Builder System is a proprietary framework of Maker Web Studios.
        </p>
      </div>

    </div>
  );
};

export default Home;
