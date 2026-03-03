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
              77% of B2B buyers research suppliers online before making contact. We build custom, SEO-optimized digital foundations that turn procurement managers from browsers into buyers—so your pipeline stays full.
            </p>
            <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.3s", display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "1rem" }}>
              <a
                href="#pricing"
                className="btn btn-primary btn-lg-premium"
              >
                Get a Custom Quote in 24 Hours
              </a>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-dark btn-lg-premium"
              >
                Book Your Discovery Call
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
                desc: "Stop hiding on page 10. We get you found by procurement teams actively searching for your services today, right when they need you.",
                icon: <TrendingDown size={28} />,
                delay: "0.1s",
              },
              {
                title: "No Inbound Leads",
                desc: "Turn your website from a digital brochure into a 24/7 sales rep. We build RFQ systems that qualify and convert visitors while you sleep.",
                icon: <VolumeX size={28} />,
                delay: "0.2s",
              },
              {
                title: "Built for Trade Shows",
                desc: "Your brochure site worked in 2012, but today's buyers Google you first. We replace outdated designs with instant credibility that passes the buyer gut-check.",
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

      {/* Our Process Section */}
      <section style={{ padding: "8rem 0", background: "var(--dark-bg)" }} id="process" className="dark-section blueprint-bg">
        <div className="container" style={{ maxWidth: "1100px", margin: "0 auto" }}>
           <div style={{ textAlign: "center", marginBottom: "4rem" }}>
             <h2 className="section-title" style={{ color: "white", marginBottom: "1rem", fontSize: "clamp(2.5rem, 5vw, 4rem)", letterSpacing: "-0.02em" }}>
               From Vision to Launch in <span style={{ color: "var(--industrial-orange)" }}>3 Simple Steps</span>
             </h2>
             <p style={{ color: "rgba(255,255,255,0.65)", fontSize: "1.125rem", maxWidth: "700px", margin: "0 auto" }}>
               We take the stress out of your tech with a proven system that turns your expertise into a digital asset.
             </p>
           </div>
           
           <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "2rem" }}>
             {/* Step 1 */}
             <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem", position: "relative" }}>
               <div style={{ fontSize: "4rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.2, position: "absolute", top: "1.5rem", right: "2rem", lineHeight: 1 }}>01</div>
               <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Discovery & Strategy</h3>
               <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
                 We map out your buyers' exact pain points and craft the messaging that proves you are the most reliable supplier.
               </p>
             </div>
             
             {/* Step 2 */}
             <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem", position: "relative" }}>
               <div style={{ fontSize: "4rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.2, position: "absolute", top: "1.5rem", right: "2rem", lineHeight: 1 }}>02</div>
               <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Design & Build</h3>
               <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
                 We build a fast, secure, and mobile-responsive asset that works flawlessly whether your client is at their desk or on the shop floor.
               </p>
             </div>
             
             {/* Step 3 */}
             <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: "var(--border-radius)", padding: "2.5rem", position: "relative" }}>
               <div style={{ fontSize: "4rem", fontWeight: "900", color: "var(--industrial-orange)", opacity: 0.2, position: "absolute", top: "1.5rem", right: "2rem", lineHeight: 1 }}>03</div>
               <h3 style={{ fontSize: "1.5rem", color: "white", marginBottom: "1rem", fontWeight: "700" }}>Launch & Grow</h3>
               <p style={{ color: "rgba(255,255,255,0.65)", lineHeight: "1.7" }}>
                 Launched in under 30 days. You take the wheel, or let us handle the maintenance so you can focus entirely on production.
               </p>
             </div>
           </div>
        </div>
      </section>

      {/* Services (Pricing) Section */}
      <section style={{ padding: "10rem 0", background: "var(--bg-color)" }} id="pricing">
        <div className="container" style={{ maxWidth: "1100px" }}>
          <div style={{ marginBottom: "5rem" }}>
            <div className="badge-premium" style={{ color: "var(--industrial-orange)", background: "transparent", border: "none", padding: 0, marginBottom: "1rem" }}>TRANSPARENT PRICING</div>
            <h2 className="section-title">GrowthEngine</h2>
            <p className="section-subtitle" style={{ maxWidth: "700px" }}>
              Modern Digital Transformation<br/>
              Tailored for industrial B2B manufacturing companies.
            </p>
          </div>

          <div className="bento-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", alignItems: "stretch" }}>
            
            {/* Full Modernization Package (Featured) */}
            <div className="bento-card reveal-anim visible" style={{ border: "2px solid var(--industrial-orange)", display: "flex", flexDirection: "column" }}>
               <div style={{ color: "var(--industrial-orange)", fontSize: "0.75rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: "0.75rem" }}>
                 One-Time Build
               </div>
               <h3 className="card-title-lg" style={{ color: "var(--text-dark)", fontSize: "2rem", marginBottom: "0.5rem", fontFamily: "'Outfit', sans-serif", fontWeight: "900", lineHeight: "1" }}>Full Modernization</h3>
               <div style={{ fontSize: "2.5rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", color: "var(--industrial-orange)", marginBottom: "0.5rem", lineHeight: "1" }}>
                 $4,500
               </div>
               <div style={{ fontSize: "0.85rem", color: "var(--text-muted)", marginBottom: "1.5rem" }}>One-time · 30-day delivery</div>
               
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem", minHeight: "4.5rem" }}>
                 For manufacturers ready to turn their website into a lead generation asset that works around the clock.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                 {[
                   "Modern 8–10 page website built for B2B manufacturers", 
                   "Capabilities page that qualifies procurement teams before they call", 
                   "RFQ form engineered as your #1 lead conversion tool", 
                   "Messaging architecture written for engineers and buyers — not fluff", 
                   "Photography coordination included", 
                   "Full certifications + equipment list page",
                   "On-page SEO + Google Business Profile setup",
                   "Analytics + Search Console connected",
                   "SSL + speed optimization (PageSpeed 85+ target)",
                   "90-day post-launch support",
                   "30-day delivery"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span style={{ fontWeight: i === 0 ? "600" : "400" }}>{feat}</span>
                   </li>
                 ))}
               </ul>
               <div style={{ marginTop: "auto" }}>
                 <a href="https://buy.stripe.com/4gM00idnx9Y16v10QP87K03" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ width: "100%" }}>
                   Claim Your Build Spot
                 </a>
                 <div style={{ fontSize: "0.8rem", color: "var(--text-muted)", marginTop: "0.75rem", textAlign: "center", fontStyle: "italic" }}>
                   Join businesses that scaled their reach with Maker Web Studios.
                 </div>
               </div>
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
               
               <p style={{ color: "var(--text-muted)", marginBottom: "2rem", fontSize: "0.95rem", minHeight: "4.5rem" }}>
                 Keep your site fast, secure, and up to date. We handle maintenance so you can focus on production.
               </p>
               
               <ul style={{ listStyle: "none", padding: 0, marginBottom: "2.5rem", display: "flex", flexDirection: "column", gap: "0.75rem", borderTop: "1px solid var(--border-color)", paddingTop: "1.5rem" }}>
                 {[
                   "Hosting + security updates handled for you", 
                   "Monthly PageSpeed + performance monitoring", 
                   "Content updates (up to 4 per month)", 
                   "Uptime monitoring with instant alerts", 
                   "Google Business Profile management", 
                   "Monthly analytics report delivered to your inbox",
                   "Priority support — real response times, not a ticket queue",
                   "Cancel anytime — no contracts, no surprises"
                 ].map((feat, i) => (
                   <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", fontSize: "0.9rem", color: "var(--text-dark)" }}>
                     <CheckCircle2 size={16} color="var(--industrial-orange)" style={{ flexShrink: 0, marginTop: "2px" }} />
                     <span>{feat}</span>
                   </li>
                 ))}
               </ul>
               <div style={{ marginTop: "auto" }}>
                 <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ width: "100%" }}>
                   Book Your Discovery Call
                 </a>
               </div>
            </div>

          </div>
        </div>
      </section>

      <section style={{ padding: "8rem 0", background: "var(--surface-color)", textAlign: "center", borderTop: "1px solid var(--border-color)" }}>
        <div className="container" style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <h2 className="section-title" style={{ color: "var(--text-dark)", textAlign: "center", marginBottom: "1.5rem", fontSize: "clamp(2.75rem, 6vw, 4.5rem)", lineHeight: "1", fontFamily: "'Outfit', sans-serif", fontWeight: "900" }}>Ready to Scale Your Reach?</h2>
          <p style={{ fontSize: "1.125rem", color: "var(--text-muted)", textAlign: "center", marginBottom: "2.5rem", lineHeight: "1.55", fontWeight: "500", opacity: 0.9, maxWidth: "600px", margin: "0 auto 2.5rem" }}>
            Stop losing bids to competitors with better digital presence. Book a discovery call or get started right away.
          </p>
          <div style={{ display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "1.5rem" }}>
             <a href="https://buy.stripe.com/4gM00idnx9Y16v10QP87K03" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: "1.125rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px" }}>
               CLAIM YOUR BUILD SPOT
             </a>
             <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-dark" style={{ padding: "1.125rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px" }}>
               BOOK YOUR DISCOVERY CALL
             </a>
          </div>
          <div style={{ fontSize: "0.95rem", color: "var(--text-muted)", fontStyle: "italic" }}>
            Join 20+ businesses that scaled their reach with Maker Web Studios.
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;
