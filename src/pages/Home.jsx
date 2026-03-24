// Inline SVG icons (replaces lucide-react to reduce bundle size)
const CheckCircle2 = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
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
      {/* Hero Section */}
      <section className="blueprint-bg hero-premium">
        <div className="container relative z-10">
          <div className="hero-content text-center">
            <div className="badge-premium reveal-anim visible">
              THE 90-DAY REVENUE ENGINE
            </div>
            <h1 className="hero-title reveal-anim visible" style={{ animationDelay: "0.1s" }}>
              The Revenue Engine System for <br />
              <span className="text-accent">Texas Manufacturers.</span>
            </h1>
            <p className="hero-subtext reveal-anim visible" style={{ animationDelay: "0.2s" }}>
              We build you a website that gets you found, train your team to close the leads that come in, and guarantee at least 1 qualified customer in 90 days — or we keep working for free. We only take 3 new clients a month.
            </p>
            <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.3s", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "400px", margin: "0 auto", width: "100%" }}>
              <a
                href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg-premium"
                style={{ width: "100%", textAlign: "center" }}
              >
                Get Started
              </a>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg-premium"
                style={{ width: "100%", textAlign: "center" }}
              >
                Book a Strategy Call
              </a>
            </div>

            <div className="hero-stat reveal-anim visible" style={{ animationDelay: "0.4s", marginTop: "4rem", display: "flex", gap: "4rem", justifyContent: "center", flexWrap: "wrap" }}>
              <div className="stat-item">
                <div className="stat-num" style={{ fontSize: "3rem", fontWeight: "900", color: "var(--industrial-orange)", fontFamily: "'Outfit', sans-serif", lineHeight: "1" }}>77%</div>
                <div className="stat-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.5rem", fontWeight: "600" }}>of B2B buyers research<br/>suppliers online first</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" style={{ fontSize: "3rem", fontWeight: "900", color: "var(--industrial-orange)", fontFamily: "'Outfit', sans-serif", lineHeight: "1" }}>30</div>
                <div className="stat-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.5rem", fontWeight: "600" }}>days to launch<br/>your new site</div>
              </div>
              <div className="stat-item">
                <div className="stat-num" style={{ fontSize: "3rem", fontWeight: "900", color: "var(--industrial-orange)", fontFamily: "'Outfit', sans-serif", lineHeight: "1" }}>16+</div>
                <div className="stat-label" style={{ fontSize: "0.85rem", color: "var(--text-muted)", textTransform: "uppercase", letterSpacing: "0.05em", marginTop: "0.5rem", fontWeight: "600" }}>years on the<br/>shop floor</div>
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
          margin-bottom: 2rem;
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
      `}</style>



      {/* Value Stack */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              WHAT YOU GET
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1rem" }}>
              Everything You Need to Win Customers Online
            </h2>
            <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", maxWidth: "700px", margin: "0 auto" }}>
              Not a website. A complete revenue system — built by someone who's been on your shop floor.
            </p>
          </div>

          <div className="value-stack-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1.5rem", marginBottom: "4rem" }}>
            {/* Core Offer */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "2px solid var(--industrial-orange)", borderRadius: "var(--border-radius)", padding: "2.5rem" }}>
              <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Core</div>
              <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "0.5rem", fontWeight: "700" }}>Revenue Engine Build</h3>
              <div style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.4)", fontWeight: "700", marginBottom: "1rem" }}>Valued at $8,500</div>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                Custom website built for manufacturers. Mobile-responsive, Cloudflare-powered, Google Business Profile optimized, on-page SEO foundation, RFQ form, tracked phone number. Delivered in 30 days.
              </p>
            </div>

            {/* Bonus 1 */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem" }}>
              <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Included</div>
              <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "0.5rem", fontWeight: "700" }}>Texas Manufacturer Sales Playbook</h3>
              <div style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.4)", fontWeight: "700", marginBottom: "1rem" }}>Valued at $2,500</div>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                How to answer the phone when a lead comes in. The 3 questions to ask before quoting a price. The 3 objections every manufacturer faces and how to handle them. A follow-up sequence so leads don't go cold. Built from 16 years of manufacturing sales experience.
              </p>
            </div>

            {/* Bonus 2 */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem" }}>
              <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Included</div>
              <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "0.5rem", fontWeight: "700" }}>Texas Visibility Blueprint</h3>
              <div style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.4)", fontWeight: "700", marginBottom: "1rem" }}>Valued at $1,500</div>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                3-competitor digital audit. Keyword map showing exactly what buyers search for your product. Google Business optimization checklist. Local SEO quick-win action list specific to your industry.
              </p>
            </div>

            {/* Bonus 3 */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem" }}>
              <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.5rem" }}>Included</div>
              <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "0.5rem", fontWeight: "700" }}>90-Day Revenue Launchpad Call</h3>
              <div style={{ fontSize: "1.25rem", color: "rgba(255,255,255,0.4)", fontWeight: "700", marginBottom: "1rem" }}>Valued at $750</div>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                1-hour onboarding strategy call with Guillermo. Custom 90-day roadmap specific to your industry. KPI dashboard setup. First-month execution plan.
              </p>
            </div>
          </div>

          {/* Investment */}
          <div style={{ textAlign: "center", padding: "3rem", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)" }}>
            <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "1rem", fontWeight: "600", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              Your Investment
            </p>
            <div style={{ fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "white", lineHeight: "1.2" }}>
              $4,500 <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500", fontSize: "1.25rem" }}>to build it</span> + $1,500/mo <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: "500", fontSize: "1.25rem" }}>to grow it</span>
            </div>
            <div style={{ marginTop: "2rem", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "400px", margin: "2rem auto 0", width: "100%" }}>
              <a href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: "1rem 2.5rem", fontSize: "1rem", background: "#fff", color: "#000", border: "1px solid rgba(255,255,255,0.2)", width: "100%", textAlign: "center" }}>
                Get Started
              </a>
              <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1rem 2.5rem", fontSize: "1rem", width: "100%", textAlign: "center" }}>
                Book a Strategy Call
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>THE PROBLEM</div>
            <h2 className="section-title">Most Manufacturers Are Invisible Online.</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px" }}>
              Your competitors aren't better. They're just easier to find.
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
                <h3 className="card-title" style={{ fontSize: "1.5rem", fontWeight: "800", fontFamily: "'Outfit', sans-serif" }}>{item.title}</h3>
                <p className="card-text">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} id="process" className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
           <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h2 className="section-title" style={{ color: "white", marginBottom: "1rem", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
               From Vision to Launch in <span style={{ color: "var(--industrial-orange)" }}>3 Steps</span>
             </h2>
             <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", maxWidth: "700px", margin: "0 auto" }}>
               A proven system that turns your expertise into a digital asset.
             </p>
           </div>

           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
             {/* Step 1 */}
             <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem", position: "relative" }}>
               <div style={{ fontSize: "4rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.2, position: "absolute", top: "1.5rem", right: "2rem", lineHeight: 1 }}>01</div>
               <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Audit & Strategy</h3>
               <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
                 We study your buyers, your competitors, and your current site. You get a clear plan before we write a single line of code.
               </p>
             </div>

             {/* Step 2 */}
             <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem", position: "relative" }}>
               <div style={{ fontSize: "4rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.2, position: "absolute", top: "1.5rem", right: "2rem", lineHeight: 1 }}>02</div>
               <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Design & Build</h3>
               <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
                 A fast, mobile-ready site built for B2B buyers — not a template with your logo slapped on it. Delivered in 30 days.
               </p>
             </div>

             {/* Step 3 */}
             <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem", position: "relative" }}>
               <div style={{ fontSize: "4rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.2, position: "absolute", top: "1.5rem", right: "2rem", lineHeight: 1 }}>03</div>
               <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Launch & Grow</h3>
               <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
                 Your site goes live. We connect analytics, Google Business Profile, and search console. You start showing up where buyers are looking.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Built by a Manufacturer */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }} id="difference" className="blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ marginBottom: "2rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>THE MAKER WEB DIFFERENCE</div>
            <h2 className="section-title">Built by a Manufacturer.</h2>
          </div>

          <div
            className="bento-card reveal-anim visible"
            style={{
              borderLeft: "4px solid var(--industrial-orange)",
              padding: "2.5rem 2.5rem 2.5rem 2.25rem",
            }}
          >
            <p style={{ fontSize: "1.2rem", lineHeight: "1.75", color: "var(--text-dark)", fontStyle: "italic", marginBottom: "1.5rem" }}>
              "I spent 16 years on the shop floor before I ever touched a line of code. I've run the machines, managed the production lines, and seen how many bids are lost because a website looks like a liability. I didn't build Maker Web Studios to be a 'creative agency' — I built it to be the digital arm of your machine shop."
            </p>
            <p style={{ fontSize: "1.05rem", color: "var(--text-muted)", fontWeight: "600", marginBottom: "0" }}>
              That's why our sites are built for engineers and procurement officers — not for design awards.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "900px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <div style={{ color: "var(--industrial-orange)", fontSize: "0.8125rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "1rem" }}>
              OUR GUARANTEE
            </div>
            <h2 className="section-title" style={{ color: "white", marginBottom: "1rem" }}>
              We Put Our Money Where Our Mouth Is.
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(350px, 1fr))", gap: "2rem" }}>
            {/* 30-Day Unconditional */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.3, lineHeight: 1, marginBottom: "1rem" }}>30</div>
              <h3 style={{ fontSize: "1.25rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Day Satisfaction Guarantee</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                If you're not completely satisfied with the website within 30 days of launch, we'll redesign any page for free — no questions asked.
              </p>
            </div>

            {/* 90-Day Conditional */}
            <div style={{ background: "rgba(255,255,255,0.03)", border: "2px solid var(--industrial-orange)", borderRadius: "var(--border-radius)", padding: "2.5rem" }}>
              <div style={{ fontSize: "2.5rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.3, lineHeight: 1, marginBottom: "1rem" }}>90</div>
              <h3 style={{ fontSize: "1.25rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Day Lead Guarantee</h3>
              <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7", fontSize: "0.95rem" }}>
                We guarantee at least 1 qualified inbound lead within 90 days of launch. If we don't deliver, we keep working at no charge until you get one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section style={{ padding: "10rem 0", background: "var(--bg-color)" }} id="pricing">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "5rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>TRANSPARENT PRICING</div>
            <h2 className="section-title">No Surprise Invoices.</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px" }}>
              You know what you're paying before we start. Fixed-price packages tailored for B2B manufacturers.
            </p>
          </div>

          <div style={{ maxWidth: "900px", margin: "0 auto" }}>
            <div className="bento-card reveal-anim visible" style={{ border: "2px solid var(--industrial-orange)", display: "flex", flexDirection: "column" }}>

              {/* 2x2 Grid: GrowthEngine + CarePlan side by side */}
              <div className="pricing-inner-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2.5rem" }}>

                {/* Left: GrowthEngine */}
                <div>
                  <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                    One-Time Build
                  </div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "2rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>GrowthEngine</h3>
                  <div style={{ fontSize: "2.5rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.5rem", lineHeight: "1" }}>
                    $4,500
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>One-time &middot; 30-day delivery</div>

                  <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                    Turn your website into a lead generation asset that works around the clock.
                  </p>

                  <div style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-dark)", marginBottom: "0.75rem" }}>Deliverables</div>
                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
                    {[
                      "Full website design and modernization \u2014 8\u201310 pages built for B2B buyers",
                      "Capabilities page that qualifies procurement teams before they call",
                      "RFQ form engineered as your #1 lead conversion tool",
                      "Messaging written for engineers and buyers \u2014 not fluff",
                      "On-page SEO foundation built into every page from day one",
                      "Google Business Profile setup and full optimization",
                      "Google Analytics 4 and Search Console connected and monitored",
                      "Photography coordination included",
                      "SSL and speed optimization",
                      "You own your code \u2014 no lock-in, no proprietary builders",
                    ].map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                        <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-dark)", marginBottom: "0.75rem" }}>Guarantees</div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
                    {[
                      "Site delivered in 30 days or you don\u2019t pay for that month",
                      "PageSpeed score of 85+ or we keep working until it hits",
                      "If the finished site doesn\u2019t match approved design and scope we rebuild at no charge",
                      "You own everything \u2014 code, domain, content \u2014 from day one",
                    ].map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                        <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontWeight: "600" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: CarePlan */}
                <div style={{ borderLeft: "1px solid var(--border-color)", paddingLeft: "2.5rem" }}>
                  <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                    Monthly Retainer
                  </div>
                  <h3 style={{ color: "var(--text-dark)", fontSize: "2rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>CarePlan</h3>
                  <div style={{ fontSize: "2.5rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.5rem", lineHeight: "1" }}>
                    $1,500<span style={{ fontSize: "0.85rem", fontWeight: "500", color: "var(--text-muted)" }}>/month</span>
                  </div>
                  <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>Cancel anytime &middot; No contracts</div>

                  <p style={{ color: "var(--text-muted)", marginBottom: "1.5rem", fontSize: "0.95rem" }}>
                    Ongoing SEO growth, monthly content, and full site maintenance so you can focus on production.
                  </p>

                  <div style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-dark)", marginBottom: "0.75rem" }}>Deliverables</div>
                  <ul style={{ listStyle: "none", padding: 0, marginBottom: "1.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
                    {[
                      "Keyword research and buyer-intent targeting \u2014 updated quarterly",
                      "2\u20134 SEO pages or blog posts published monthly",
                      "Monthly keyword rank tracking and position reports",
                      "Competitor SEO analysis \u2014 quarterly gap review",
                      "Backlink building \u2014 directories, associations, industry listings",
                      "Technical SEO monitoring \u2014 Core Web Vitals, crawl health, broken links",
                      "Monthly performance report \u2014 rankings, traffic, leads, next steps",
                      "Monthly strategy call \u2014 30 minutes, results review and priority alignment",
                      "Hosting management and uptime monitoring",
                      "Security monitoring, CMS and plugin updates",
                      "Up to 4 content updates per month",
                      "Weekly offsite backups \u2014 full site restore capability",
                      "Priority support \u2014 real response times, not a ticket queue",
                    ].map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                        <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  <div style={{ fontSize: "0.8rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.08em", color: "var(--text-dark)", marginBottom: "0.75rem" }}>Guarantees</div>
                  <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1rem" }}>
                    {[
                      "90-day ranking check-in \u2014 if no measurable keyword movement we audit and adjust at no cost",
                      "99% uptime or we credit that month\u2019s retainer",
                      "Any site-breaking issue resolved within 24 business hours or your next month is free",
                      "Cancel anytime \u2014 no contracts, no penalties",
                    ].map((feat, i) => (
                      <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                        <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                        <span style={{ fontWeight: "600" }}>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Single set of buttons at bottom */}
              <div style={{ marginTop: "3rem", paddingTop: "2rem", borderTop: "1px solid var(--border-color)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.75rem", maxWidth: "400px", margin: "3rem auto 0", width: "100%" }}>
                <a href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01" target="_blank" rel="noopener noreferrer" className="btn" style={{ padding: "1rem 3rem", fontSize: "1rem", background: "#000", color: "#fff", border: "1px solid var(--border-color)", width: "100%", textAlign: "center" }}>
                  Get Started
                </a>
                <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1rem 3rem", fontSize: "1rem", width: "100%", textAlign: "center" }}>
                  Book a Strategy Call
                </a>
              </div>
            </div>
          </div>

          <p style={{ textAlign: "center", marginTop: "2.5rem", fontSize: "1.1rem", fontWeight: "600", color: "var(--text-muted)", fontStyle: "italic" }}>
            The $4,500 builds the factory. The $1,500/month runs it.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 className="section-title" style={{ color: "var(--text-dark)", textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2.75rem, 6vw, 4.5rem)", lineHeight: "1", fontFamily: "'Outfit', sans-serif", fontWeight: "900" }}>Stop Losing Bids to a Better Website.</h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", textAlign: "center", marginBottom: "2.5rem", lineHeight: "1.55", fontWeight: "500", opacity: 0.9, maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Book a free strategy call. We'll audit your current site and show you exactly where you're losing buyers.
          </p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap", justifyContent: "center" }}>
            <a href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01" target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px", minWidth: "320px", textAlign: "center", flex: "1 1 320px", maxWidth: "400px" }}>
              GET STARTED
            </a>
            <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1.25rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px", minWidth: "320px", textAlign: "center", flex: "1 1 320px", maxWidth: "400px" }}>
              BOOK A STRATEGY CALL
            </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
