import {
  ShieldCheck,
  MapPin,
  Code,
  DollarSign,
  Clock,
  CheckCircle2,
  Search,
  TrendingDown,
  VolumeX,
  Factory,
  ArrowRight,
  HelpCircle,
} from "lucide-react";

const Home = () => {
  return (
    <div id="home" className="fade-in">
      {/* Hero Section */}
      <section className="blueprint-bg hero-premium">
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
                href="#pricing"
                className="btn btn-primary btn-lg-premium"
                style={{ marginRight: "1rem" }}
              >
                Get Started — $3,500
              </a>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-transparent btn-lg-premium"
              >
                Book a Call
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
        
        {/* Decorative elements */}
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

      {/* The Problem (Pain) Section */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }}>
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>THE PROBLEM</div>
            <h2 className="section-title">Most Manufacturers Are Invisible Online.</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px" }}>
              Your business grew on relationships and referrals. That still works — but the buyers who don't know you yet are finding someone else online.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
            {[
              {
                title: "Not Ranking on Google",
                desc: "Your buyers search '[your product category] manufacturer Texas' — and your competitors show up on page one. You don't appear until page three — or not at all.",
                icon: <TrendingDown size={28} />,
                delay: "0.1s",
              },
              {
                title: "No Inbound Leads",
                desc: "Your website gets visitors who leave without doing anything. No RFQ submissions. No sample requests. No inquiries. No pipeline.",
                icon: <VolumeX size={28} />,
                delay: "0.2s",
              },
              {
                title: "Built for Trade Shows",
                desc: "Your brochure site was fine in 2012. Today's procurement managers Google you before they call you — and what they find isn't winning you business.",
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

      {/* Our Story Section / We Have */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} id="about" className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "4rem", alignItems: "center" }}>
           <div>
             <h3 style={{ fontSize: "2rem", color: "rgba(255,255,255,0.55)", marginBottom: "2rem", fontWeight: "300", fontFamily: "'Outfit', sans-serif", lineHeight: "1.3", fontStyle: "italic" }}>
               "Most web agencies have never run a production line, optimized a supply chain, or survived a regulatory audit."
             </h3>
             <h2 className="section-title" style={{ color: "white", marginBottom: "0", fontSize: "clamp(4rem, 8vw, 6rem)", lineHeight: "0.9", letterSpacing: "-0.02em" }}>We<br/><span style={{ color: "var(--industrial-orange)" }}>Have.</span></h2>
           </div>
           <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
             <p>
               For 16 years, we scaled regulated manufacturing operations in the Rio Grande Valley —
               leading teams, implementing ISO 9001 quality systems across 70+ procedures,
               driving 4x revenue growth, and maintaining certifications that procurement
               managers actually care about.
             </p>
             <p>
               We build websites, messaging, and digital presence that passes the buyer
               gut-check instantly — because we know exactly what procurement demands.
               We speak your language because we lived it.
             </p>
             <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem", marginTop: "1rem" }}>
               {["ISO 9001", "GMP", "SQF", "HACCP", "USDA Organic", "OTC"].map((cert, i) => (
                 <span key={i} style={{ padding: "0.25rem 0.75rem", background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.15)", borderRadius: "100px", color: "rgba(255,255,255,0.8)", fontSize: "0.85rem", fontWeight: "600", letterSpacing: "0.05em" }}>
                   {cert}
                 </span>
               ))}
             </div>
           </div>
        </div>
      </section>

      {/* Services (Pricing) Section */}
      <section style={{ padding: "10rem 0", background: "var(--bg-color)" }} id="pricing">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "5rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>TRANSPARENT PRICING</div>
            <h2 className="section-title">No Surprise Invoices.<br/>Fixed-Price Packages.</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px" }}>
              Tailored for industrial B2B manufacturers. Every engagement starts with a solid foundation before we pour resources into growth.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "stretch" }}>
            
            {/* Digital Foundation Package */}
            <div className="bento-card reveal-anim visible" style={{ display: "flex", flexDirection: "column" }}>
               <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                 One-Time Build
               </div>
               <h3 className="card-title-lg" style={{ color: "var(--text-dark)", fontSize: "2rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>Digital Foundation</h3>
               <div style={{ fontSize: "2.5rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.5rem", lineHeight: "1" }}>
                 $3,500
               </div>
               <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>One-time · 30-day delivery</div>
               
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem", flex: 1 }}>
                 Perfect for manufacturers with an outdated site who need to get the fundamentals right and get found online.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                 {[
                   "Modern 5–6 page website", "Capabilities page", "RFQ form setup", 
                   "On-page SEO", "Google Business Profile setup", "Analytics + Search Console"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
               <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%" }}>
                 Get Started
               </a>
            </div>

            {/* Full Modernization Package (Featured) */}
            <div className="bento-card reveal-anim visible" style={{ border: "2px solid var(--industrial-orange)", position: "relative", display: "flex", flexDirection: "column" }}>
               <div style={{ position: "absolute", top: "-14px", left: "50%", transform: "translateX(-50%)", background: "var(--industrial-orange)", color: "white", padding: "4px 16px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", whiteSpace: "nowrap" }}>
                 Most Popular
               </div>
               <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                 One-Time Build
               </div>
               <h3 className="card-title-lg" style={{ color: "var(--text-dark)", fontSize: "2rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>Full Modernization</h3>
               <div style={{ fontSize: "2.5rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.5rem", lineHeight: "1" }}>
                 $4,500
               </div>
               <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>One-time · 30-day delivery</div>
               
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem", flex: 1 }}>
                 For manufacturers ready to turn their website into a lead generation asset that works around the clock.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                 {[
                   "Everything in Foundation", "8–10 pages", "Photography coordination", 
                   "Full capabilities + certs page", "90-day post-launch support", "Messaging architecture"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span style={{ fontWeight: i === 0 ? "600" : "400" }}>{feat}</span>
                   </li>
                 ))}
               </ul>
               <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%" }}>
                 Get Started
               </a>
            </div>

            {/* Care Plan Package */}
            <div className="bento-card reveal-anim visible" style={{ display: "flex", flexDirection: "column" }}>
               <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                 Monthly Retainer
               </div>
               <h3 className="card-title-lg" style={{ color: "var(--text-dark)", fontSize: "2rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>Care Plan</h3>
               <div style={{ fontSize: "2.5rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.5rem", lineHeight: "1" }}>
                 $500
               </div>
               <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>Per month · Cancel anytime</div>
               
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem", flex: 1 }}>
                 Keep your site fast, secure, and up to date. We handle maintenance so you can focus on production.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                 {[
                   "Hosting + security updates", "Monthly performance monitoring", "Content updates (up to 4/mo)", 
                   "Uptime monitoring", "Priority support", "Monthly analytics report"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
               <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-secondary" style={{ width: "100%" }}>
                 Book a Call
               </a>
            </div>

          </div>
        </div>
      </section>

      {/* 4-Step Process Section */}
      <section className="dark-section blueprint-bg" style={{ padding: "8rem 0" }} id="process">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>HOW IT WORKS</div>
            <h2 className="section-title" style={{ color: "white" }}>Process Transparency.<br/>30 Days to Launch.</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px", margin: "0 auto", color: "rgba(255,255,255,0.7)" }}>
              Engineers pay for certainty, not surprises. We follow a strict operational procedure to get you online fast.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", position: "relative" }}>
            {/* Using transparent background cards for process steps to match the dark section */}
            {[
              {
                step: "01",
                title: "Discovery & Audit",
                desc: "We audit your current capabilities, machines, and certifications. We identify exactly who your buyer is and what technical data they need to see to send an RFQ.",
              },
              {
                step: "02",
                title: "Messaging Architecture",
                desc: "No design until the copy is right. We build a messaging framework that speaks directly to procurement teams and engineers — stripping out the fluff.",
              },
              {
                step: "03",
                title: "Blueprint & Build",
                desc: "We build your mobile-optimized site using proven B2B manufacturing architecture. Speedy, responsive, and built to convert traffic into RFQ requests.",
              },
              {
                step: "04",
                title: "Deployment & SEO",
                desc: "We coordinate the domain switch, technical SEO setup, and Google Business Profile launch. Your digital factory floor is officially open for business.",
              }
            ].map((item, idx) => (
              <div key={idx} className="reveal-anim visible" style={{ animationDelay: `0.${idx + 1}s`, padding: "0 1rem", textAlign: "center", position: "relative", zIndex: 1 }}>
                <div style={{ width: "80px", height: "80px", borderRadius: "50%", background: "var(--dark-bg)", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 1.5rem", fontFamily: "'Outfit', sans-serif", fontSize: "1.75rem", fontWeight: "900", color: "var(--industrial-orange)", border: "3px solid rgba(255,255,255,0.1)", boxShadow: "0 0 0 2px var(--dark-bg)" }}>
                  {item.step}
                </div>
                <h3 className="card-title" style={{ color: "white", marginBottom: "0.75rem", fontSize: "1.25rem", fontFamily: "'Outfit', sans-serif", fontWeight: "800" }}>{item.title}</h3>
                <p className="card-text" style={{ color: "rgba(255,255,255,0.65)", fontSize: "0.9rem", lineHeight: "1.6" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The GrowthEngine Section (Optional Add-On) */}
      <section style={{ padding: "8rem 0", background: "linear-gradient(135deg, var(--steel-blue-dark) 0%, var(--dark-bg) 100%)", position: "relative", overflow: "hidden" }} id="growth-engine">
        <div style={{ position: "absolute", right: "-40px", top: "50%", transform: "translateY(-50%)", fontFamily: "'Outfit', sans-serif", fontSize: "400px", fontWeight: "900", color: "rgba(255,255,255,0.02)", pointerEvents: "none", userSelect: "none", lineHeight: "1" }}>
          GE
        </div>
        
        <div className="container" style={{ maxWidth: "1100px", position: "relative", zIndex: 1 }}>
          <div style={{ marginBottom: "4rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>OPTIONAL ADD-ON</div>
            <h2 className="section-title" style={{ color: "white" }}>The GrowthEngine</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px", color: "rgba(255,255,255,0.55)" }}>
              Your buyers are searching. Are they finding you? After your site is built, GrowthEngine keeps it climbing — ranking higher, generating inbound leads, and building your digital pipeline month after month.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "stretch" }}>
            
            {/* Audit Package */}
            <div className="bento-card reveal-anim visible" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "2.5rem 1.75rem", display: "flex", flexDirection: "column" }}>
               <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                 Entry Point
               </div>
               <h3 className="card-title-lg" style={{ color: "white", fontSize: "1.75rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>Foundation Audit</h3>
               <div style={{ fontSize: "2.25rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.25rem", lineHeight: "1" }}>
                 $1,997
               </div>
               <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>One-time · 30-day delivery</div>
               
               <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem", fontSize: "0.9rem", flex: 1 }}>
                 For manufacturers with no digital baseline who need to get found fast before committing to a monthly retainer.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1rem" }}>
                 {[
                   "Complete digital presence audit", "On-page SEO fixes (up to 10 pages)", "Competitor keyword analysis", 
                   "Google Business Profile setup", "Google Search Console + GA4", "5 industry directory listings", "90-day growth roadmap", "60-min strategy delivery call"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0 }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Visibility Engine Package */}
            <div className="bento-card reveal-anim visible" style={{ animationDelay: "0.2s", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "2.5rem 1.75rem", display: "flex", flexDirection: "column" }}>
               <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                 Monthly Retainer
               </div>
               <h3 className="card-title-lg" style={{ color: "white", fontSize: "1.75rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>Visibility Engine</h3>
               <div style={{ fontSize: "2.25rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.25rem", lineHeight: "1" }}>
                 $1,500
               </div>
               <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>Per month</div>
               
               <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem", fontSize: "0.9rem", flex: 1 }}>
                 Consistent SEO content targeting your buyers' exact search terms. Rankings climb. Leads follow.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1rem" }}>
                 {[
                   "2 SEO-optimized posts/month", "Targeted B2B keyword writing", "Active rank tracking", 
                   "Monthly performance reporting", "Google Business Profile management", "Directory listing maintenance"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0 }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
            </div>

            {/* Google Ads Package */}
            <div className="bento-card reveal-anim visible" style={{ animationDelay: "0.4s", background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "8px", padding: "2.5rem 1.75rem", display: "flex", flexDirection: "column" }}>
               <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                 Paid Acquisition
               </div>
               <h3 className="card-title-lg" style={{ color: "white", fontSize: "1.75rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>Google Ads</h3>
               <div style={{ fontSize: "2.25rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.25rem", lineHeight: "1" }}>
                 $1,000
               </div>
               <div style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.4)", marginBottom: "1.25rem" }}>Per month + ad spend</div>
               
               <p style={{ color: "rgba(255,255,255,0.55)", marginBottom: "1.5rem", fontSize: "0.9rem", flex: 1 }}>
                 For manufacturers ready to capture immediate, high-intent buyer searches. We manage the campaigns. You handle the RFQs.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0.5rem", borderTop: "1px solid rgba(255,255,255,0.07)", paddingTop: "1rem" }}>
                 {[
                   "High-intent keyword targeting", "Ad copy written for formulators", "Landing page optimization advice", 
                   "Monthly ROI/Spend reporting", "Ad spend management", "A/B testing ad variations"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "8px", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0 }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
            </div>

          </div>
          
          <div style={{ textAlign: "center", marginTop: "4rem", color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}>
            Ready to add GrowthEngine to your pipeline? <a href="https://calendly.com/hello-makerwebstudios/30min" style={{ color: "var(--industrial-orange)", fontWeight: "600", textDecoration: "none" }}>Book a Call</a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }} id="faq">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title">Common Questions</h2>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))", gap: "1.5rem" }}>
            {[
              {
                q: "Do I need a new website?",
                a: "No. We start with the $1,997 Audit & Setup to optimize what you already have. We only recommend a rebuild if your current platform fundamentally cannot rank on Google or capture inbound leads."
              },
              {
                q: "How are you different from an agency?",
                a: "We are not generic marketers. We understand INCI names, cGMP compliance, formulation specs, and how a purchasing manager evaluates an ingredient supplier."
              },
              {
                q: "What do you need from my team?",
                a: "Very little. We do a 60-minute kickoff to understand your ideal client and products, and then we execute. You review and approve via email."
              },
              {
                q: "When will I see results?",
                a: "Setup is completed in 30 days. Most clients begin seeing their organic keyword rankings climb within 60 days of the new infrastructure going live."
              },
            ].map((faq, idx) => (
              <div key={idx} className="bento-card reveal-anim visible" style={{ padding: "2.25rem", display: "flex", flexDirection: "column", gap: "1rem", backgroundColor: "var(--surface-color)", boxShadow: "0 4px 6px -1px rgb(0 0 0 / 0.05)" }}>
                <h3 style={{ fontSize: "1.25rem", color: "var(--navy)", marginBottom: "0.25rem", fontFamily: "'Outfit', sans-serif", fontWeight: "800" }}>{faq.q}</h3>
                <p style={{ color: "var(--gray)", fontSize: "0.95rem", lineHeight: "1.65" }}>{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "6rem 0", background: "var(--industrial-orange)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 className="section-title" style={{ color: "white", marginBottom: "1.5rem", fontSize: "clamp(2.75rem, 6vw, 4.5rem)", lineHeight: "1" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: "1.125rem", color: "rgba(255,255,255,0.8)", marginBottom: "2.5rem", lineHeight: "1.55" }}>
            Stop losing bids to competitors with better digital presence. Book a discovery call or get started right away.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
             <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "white", color: "var(--industrial-orange)", padding: "1.125rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px", boxShadow: "0 4px 14px 0 rgba(0,0,0,0.1)" }}>
               GET STARTED
             </a>
             <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn" style={{ background: "transparent", color: "white", border: "2px solid rgba(255,255,255,0.3)", padding: "1.125rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px" }}>
               BOOK A CALL
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
