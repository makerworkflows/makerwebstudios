import {
  ShieldCheck,
  MapPin,
  Code,
  DollarSign,
  Clock,
  CheckCircle2,
  Search,
  TrendingDown,
  Factory,
  Hammer,
  Eye,
  Magnet,
  Target,
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

      {/* The Pain Section */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }}>
        <div className="container">
          <div style={{ maxWidth: "800px", marginBottom: "4rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <h2 className="section-title">Most regulated manufacturers are invisible online.</h2>
          </div>

          <div className="bento-grid">
            {[
              {
                title: "Not Ranking",
                desc: 'Your buyers search "aloe vera extract wholesale" or "private label nutraceutical manufacturer Texas" — and your competitors show up. You don\'t.',
                icon: <Search />,
                delay: "0.1s",
              },
              {
                title: "No Inbound Leads",
                desc: "Your website gets visitors who leave without doing anything. No sample requests. No inquiries. No pipeline.",
                icon: <TrendingDown />,
                delay: "0.2s",
              },
              {
                title: "Built for Trade Shows, Not the Internet",
                desc: "Your business grew on relationships and referrals. That still works — but the buyers who don't know you yet are finding someone else online.",
                icon: <Factory />,
                delay: "0.3s",
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

      {/* Services Overview Bento Grid */}
      <section style={{ padding: "10rem 0", background: "var(--bg-color)" }}>
        <div className="container">
          <div style={{ maxWidth: "700px", marginBottom: "5rem", marginLeft: "auto", marginRight: "auto", textAlign: "center" }}>
            <h2 className="section-title">Your Buyers Are Searching.<br />Are They Finding You?</h2>
            <p className="section-subtitle">
              Maker Web Studios gets manufacturers found on Google, ranking for the right keywords, and generating inbound B2B leads — without a generic marketing agency that doesn't know your industry.
            </p>
          </div>

          <div className="bento-grid">
            {/* Large Feature Card */}
            <div className="bento-card bento-grid-wide premium-card-dark">
              <div className="icon-badge blue-badge">
                <Hammer size={24} />
              </div>
              <h3 className="card-title-lg">Built By Manufacturers, For Manufacturers</h3>
              <p className="card-text-lg">
                Guillermo Aristi grew a manufacturing business for 8 years knowing his online presence was invisible. He built Maker Web Studios because his own buyers couldn't find him either.
              </p>
              <div className="card-decoration" />
            </div>

            {/* Standard Feature Cards */}
            {[
              {
                title: "Foundation",
                desc: "We audit your digital presence, fix your SEO, and build or optimize your website so buyers can actually find and convert.",
                icon: <Code />,
                delay: "0.1s",
              },
              {
                title: "Visibility",
                desc: "Monthly content targeting your buyers' search terms. Google Ads for immediate inbound. Directory listings on the platforms your buyers use.",
                icon: <Eye />,
                delay: "0.2s",
              },
              {
                title: "Conversion",
                desc: "Sample request funnels, lead capture, product spec sheets, and email sequences that turn visitors into qualified buyers.",
                icon: <Magnet />,
                delay: "0.3s",
              },
              {
                title: "Outreach",
                desc: "Qualified buyer lists and outreach campaigns reaching formulators, supplement brands, and manufacturers who need your ingredients.",
                icon: <Target />,
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

      {/* Three Simple Steps Section (Process) */}
      <section className="dark-section blueprint-bg" style={{ padding: "8rem 0" }}>
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 className="section-title" style={{ color: "white" }}>Three Simple Steps to Pipeline Growth.</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px", margin: "0 auto", color: "rgba(255,255,255,0.7)" }}>
              Process transparency. Engineers pay for certainty, not surprises. We follow a strict operational procedure to get you online in 30 days.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {[
              {
                step: "01",
                title: "Check Out",
                desc: "Book your kickoff call and secure your spot.",
              },
              {
                step: "02",
                title: "We Build",
                desc: "In 30 days we build your foundation, launch your SEO, and deploy your visibility engine.",
              },
              {
                step: "03",
                title: "You Get Found",
                desc: "Rankings climb. Buyers find you. You get sample requests and qualified leads directly in your inbox.",
              }
            ].map((item, idx) => (
              <div key={idx} className="bento-card premium-glass reveal-anim visible" style={{ animationDelay: `0.${idx + 1}s`, backgroundColor: "var(--dark-bg)", position: "relative" }}>
                <div style={{ fontSize: "3rem", fontWeight: "800", color: "rgba(255,107,0,0.1)", position: "absolute", top: "20px", right: "20px", fontFamily: "'Outfit', sans-serif" }}>
                  {item.step}
                </div>
                <h3 className="card-title" style={{ color: "white", marginTop: "1rem", fontSize: "1.5rem" }}>{item.title}</h3>
                <p className="card-text" style={{ color: "rgba(255,255,255,0.7)" }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The GrowthEngine Roadmap (Pricing) */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }} id="roadmap">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "5rem" }}>
            <h2 className="section-title">The GrowthEngine Roadmap</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px", margin: "0 auto" }}>
              We don't sell you a massive retainer right out of the gate. We prove ROI first, then scale as your leads grow.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "start" }}>
            
            {/* Starter Package (Most Popular) */}
            <div className="bento-card reveal-anim visible" style={{ border: "2px solid var(--industrial-orange)", position: "relative" }}>
               <div style={{ position: "absolute", top: 0, left: "50%", transform: "translate(-50%, -50%)", background: "var(--industrial-orange)", color: "white", padding: "4px 12px", borderRadius: "100px", fontSize: "0.75rem", fontWeight: "bold", textTransform: "uppercase", letterSpacing: "1px" }}>
                 Most Popular Entry Point
               </div>
               <h3 className="card-title-lg" style={{ color: "var(--text-dark)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>GrowthEngine Starter</h3>
               <div style={{ fontSize: "2rem", fontWeight: "800", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "1rem" }}>
                 $1,997 <span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: "500" }}>one-time</span>
               </div>
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem" }}>
                 For manufacturers with no baseline digital presence who need to get found fast.
               </p>
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                 {[
                   "Complete Digital Website Audit", "On-page SEO fixes (up to 10 pages)", "Competitor keyword analysis", 
                   "Google Business Profile Setup", "Google Search Console Config", "Google Analytics 4 Setup",
                   "5 Industry Directory Listings", "3 Product Spec Sheets (PDF)", "90-Day Growth Roadmap report", "60-min Strategy Delivery Call"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
               <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%" }}>
                 Get Started <ArrowRight size={18} style={{ marginLeft: "8px" }} />
               </a>
               <p style={{ fontSize: "0.75rem", color: "var(--text-muted)", textAlign: "center", marginTop: "1rem" }}>
                 Full refund if every deliverable isn't complete within 30 days of your onboarding form.
               </p>
            </div>

            {/* Visibility Engine Package */}
            <div className="bento-card reveal-anim visible" style={{ animationDelay: "0.2s" }}>
               <h3 className="card-title-lg" style={{ color: "var(--text-dark)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Visibility Engine</h3>
               <div style={{ fontSize: "2rem", fontWeight: "800", fontFamily: "'Outfit', sans-serif", color: "var(--text-dark)", marginBottom: "1rem" }}>
                 $1,500<span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: "500" }}>/mo</span>
               </div>
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem" }}>
                 Natural next step after Starter. Consistent SEO content targeting your buyers.
               </p>
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                 {[
                   "2 SEO-optimized posts per month", "Targeted B2B keyword writing", "Active Rank Tracking", "Monthly performance reporting"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--steel-blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
               <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-transparent" style={{ width: "100%" }}>
                 Book a Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
               </a>
            </div>

            {/* Google Ads Package */}
            <div className="bento-card reveal-anim visible" style={{ animationDelay: "0.4s" }}>
               <h3 className="card-title-lg" style={{ color: "var(--text-dark)", fontSize: "1.75rem", marginBottom: "0.5rem" }}>Google Ads Management</h3>
               <div style={{ fontSize: "2rem", fontWeight: "800", fontFamily: "'Outfit', sans-serif", color: "var(--text-dark)", marginBottom: "1rem" }}>
                 $1,000<span style={{ fontSize: "1rem", color: "var(--text-muted)", fontWeight: "500" }}>/mo + spend</span>
               </div>
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem" }}>
                 For suppliers looking to capture immediate, high-intent buyer searches.
               </p>
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2rem", display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                 {[
                   "High-intent keyword targeting", "Ad copy written for formulators", "Landing page optimization advice", "Monthly ROI/Spend reporting"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--steel-blue)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
               <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-transparent" style={{ width: "100%" }}>
                 Book a Call <ArrowRight size={18} style={{ marginLeft: "8px" }} />
               </a>
            </div>

          </div>
          
          <div style={{ textAlign: "center", marginTop: "4rem", color: "var(--text-muted)" }}>
            Need a custom scope for your full digital presence? <a href="https://calendly.com/hello-makerwebstudios/30min" style={{ fontWeight: "600" }}>Book a discovery call</a> — most full engagements start at $3,500.
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} id="faq" className="dark-section blueprint-bg">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
            <h2 className="section-title" style={{ color: "white" }}>Common Questions</h2>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "1fr", maxWidth: "800px", margin: "0 auto", gap: "1rem" }}>
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
              {
                q: "What if I need more than the Starter package?",
                a: "Most clients do. The Starter phase simply ensures your foundation is solid before we start pouring money into monthly content engines or paid ads."
              }
            ].map((faq, idx) => (
              <div key={idx} className="bento-card premium-glass reveal-anim visible" style={{ padding: "2rem", display: "flex", gap: "1.5rem", alignItems: "flex-start", backgroundColor: "rgba(15, 23, 42, 0.4)" }}>
                <HelpCircle size={24} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "4px" }} />
                <div>
                  <h3 style={{ fontSize: "1.25rem", color: "white", marginBottom: "0.5rem", fontFamily: "'Inter', sans-serif" }}>{faq.q}</h3>
                  <p style={{ color: "rgba(255,255,255,0.7)", fontSize: "1rem", lineHeight: "1.6" }}>{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Work Sections */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)" }} id="portfolio">
        <div className="container">
          <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h2 className="section-title">Our Work</h2>
             <p className="section-subtitle" style={{ maxWidth: "700px", margin: "0 auto" }}>
               Real results for real manufacturers.
             </p>
          </div>
          
          <div className="bento-card reveal-anim visible" style={{ textAlign: "center", padding: "4rem", borderStyle: "dashed", borderColor: "var(--border-color)", background: "transparent", boxShadow: "none" }}>
            <h3 style={{ fontSize: "1.5rem", color: "var(--text-dark)", marginBottom: "1rem" }}>Case studies coming soon.</h3>
            <p style={{ color: "var(--text-muted)", maxWidth: "600px", margin: "0 auto" }}>
              We are continually adding new projects measuring real ROI and lead generation metrics for industrial B2B clients.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} id="about" className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "800px", margin: "0 auto" }}>
           <h2 className="section-title" style={{ color: "white", marginBottom: "2rem" }}>Our Story</h2>
           <h3 style={{ fontSize: "1.5rem", color: "var(--industrial-orange)", marginBottom: "2rem", fontWeight: "600", fontFamily: "'Inter', sans-serif", lineHeight: "1.4" }}>
             16 years on the shop floor. Now building digital presences that win manufacturing contracts.
           </h3>
           <div style={{ color: "rgba(255,255,255,0.8)", fontSize: "1.125rem", lineHeight: "1.8", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
             <p>Most web agencies have never run a production line, optimized a supply chain, or survived a regulatory audit.</p>
             <p style={{ fontSize: "1.5rem", color: "white", fontWeight: "bold" }}>We have.</p>
             <p>
               For 16 years, we scaled regulated manufacturing operations in the Rio Grande Valley — leading teams, implementing ISO 9001 systems (70+ procedures), driving 4x revenue growth, and maintaining certifications like GMP, HACCP, SQF, and more. We know what procurement demands: proven compliance, process discipline, and reliable capability.
             </p>
             <p>
               Now we craft websites, messaging, and visuals that pass the buyer gut-check instantly — so you close more deals and focus on production.
             </p>
           </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section style={{ padding: "8rem 0", background: "var(--bg-color)", textAlign: "center" }}>
        <div className="container" style={{ maxWidth: "700px" }}>
          <h2 className="section-title" style={{ marginBottom: "1.5rem" }}>Ready to Get Started?</h2>
          <p style={{ fontSize: "1.25rem", color: "var(--text-muted)", marginBottom: "3rem" }}>
            Stop losing bids to competitors with better digital presence. Book a discovery call or get started right away.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
             <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-transparent btn-lg-premium" style={{ borderColor: "var(--border-color)", color: "var(--text-dark)" }}>
               Book a Call
             </a>
             <a href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg-premium">
               Get Started
             </a>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
