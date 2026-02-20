import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Code, DollarSign, Clock, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div className="fade-in">
      {/* Hero Section */}
      <section className="dark-section blueprint-bg" style={{ 
        padding: '8rem 0 6rem',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        {/* Abstract glow effect */}
        <div style={{
          position: 'absolute',
          top: '-20%',
          right: '-10%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(142,185,250,0.15) 0%, rgba(30,30,30,0) 70%)',
          borderRadius: '50%',
          zIndex: 0,
          pointerEvents: 'none'
        }} />
        
        <div className="container text-center" style={{ position: 'relative', zIndex: 1, maxWidth: '900px' }}>
          <div style={{ display: 'inline-block', padding: '0.5rem 1rem', background: 'rgba(255,107,0,0.1)', border: '1px solid rgba(255,107,0,0.2)', borderRadius: '2rem', color: 'var(--industrial-orange)', fontSize: '0.875rem', fontWeight: '600', marginBottom: '2rem', letterSpacing: '0.05em' }}>
            ENGINEERED FOR GROWTH
          </div>
          <h1 style={{ marginBottom: '1.5rem', fontSize: 'clamp(3rem, 5vw, 4.5rem)', fontWeight: '800', lineHeight: '1.05', letterSpacing: '-0.03em' }}>
            Your Website Is Losing You Bids <span style={{ color: 'var(--accent-blue)' }}>You Don't Even Know About.</span>
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', margin: '0 auto 3rem', lineHeight: '1.7', maxWidth: '750px' }}>
            77% of B2B buyers research suppliers online before making contact. If your site is slow, outdated, or missing a capabilities page — they're choosing your competitor before they ever call you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Get a Free Website Audit</Link>
            <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: 'rgba(255,255,255,0.2)', color: 'var(--clean-white)' }}>View Case Studies</Link>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section style={{ backgroundColor: 'var(--clean-white)', padding: '2.5rem 0', borderBottom: '1px solid var(--border-color)', position: 'relative', zIndex: 10 }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3.5rem', color: 'var(--text-muted)', fontWeight: '500', fontSize: '0.95rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><ShieldCheck size={20} color="var(--industrial-orange)" /> 16 Years in Manufacturing</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><MapPin size={20} color="var(--industrial-orange)" /> RGV & Texas Focused</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Code size={20} color="var(--industrial-orange)" /> No Custom Code Required</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><DollarSign size={20} color="var(--industrial-orange)" /> Fixed-Price Packages</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Clock size={20} color="var(--industrial-orange)" /> Results in 30 Days</div>
          </div>
        </div>
      </section>

      {/* Services Overview Bento Grid */}
      <section style={{ padding: '8rem 0' }}>
        <div className="container">
          <div style={{ maxWidth: '600px', marginBottom: '4rem' }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>Built for the Shop Floor.</h2>
            <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.7' }}>
              Most web agencies don't know what a tolerance is or why your RFQ form is your most important asset. We do.
            </p>
          </div>
          
          <div className="bento-grid">
            {/* Large Feature Card */}
            <div className="bento-card bento-grid-wide" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: 'var(--dark-bg)', color: 'var(--clean-white)' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(142,185,250,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.5rem' }}>
                <CheckCircle2 color="var(--accent-blue)" size={24} />
              </div>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem', color: 'var(--clean-white)' }}>Capabilities Pages That Sell</h3>
              <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', maxWidth: '500px' }}>
                You have no capabilities page — we build one that qualifies procurement teams before they call, saving your sales team hours of wasted time.
              </p>
            </div>

            {/* Standard Feature Cards */}
            {[
              { title: 'Lightning Speed', desc: 'Your website loads in 10s on mobile. We get it under 2s.', icon: <Clock /> },
              { title: 'Lead Conversions', desc: 'Your RFQ form is buried. We rebuild it as your #1 tool.', icon: <CheckCircle2 /> },
              { title: 'Local Visibility', desc: "Invisible on Google? We setup your SEO so engineers find you.", icon: <ShieldCheck /> },
              { title: 'Modern Blueprint', desc: 'Your site looks like 2003. We modernize it for under $5K.', icon: <Code /> }
            ].map((item, idx) => (
              <div key={idx} className="bento-card">
                <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(255,107,0,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '1.25rem', color: 'var(--industrial-orange)' }}>
                  {item.icon}
                </div>
                <h3 style={{ marginBottom: '0.75rem', fontSize: '1.25rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Offer CTA */}
      <section className="dark-section blueprint-bg" style={{ padding: '6rem 0' }}>
        <div className="container">
          <div style={{ 
            backgroundColor: 'rgba(255,255,255,0.03)', 
            border: '1px solid rgba(255,255,255,0.1)', 
            borderRadius: 'var(--border-radius-lg)', 
            padding: '4rem',
            textAlign: 'center',
            maxWidth: '900px',
            margin: '0 auto',
            backdropFilter: 'blur(10px)'
          }}>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>The Manufacturer's Digital Foundation</h2>
            <p style={{ fontSize: '1.5rem', fontWeight: '600', color: 'var(--accent-blue)', marginBottom: '3rem' }}>Starting at $3,500</p>
            
            <ul style={{ 
              listStyle: 'none', 
              padding: 0, 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
              gap: '1.5rem',
              textAlign: 'left',
              marginBottom: '4rem'
            }}>
              {['Modern mobile-responsive website', 'Capabilities & RFQ pages', 'Google Business Profile setup', 'On-page SEO included', 'SSL + speed optimization', 'Professional site copywriting'].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: '#cbd5e1', fontSize: '1.05rem' }}>
                  <CheckCircle2 size={24} color="var(--industrial-orange)" style={{ flexShrink: 0 }} /> {feat}
                </li>
              ))}
            </ul>
            
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.25rem' }}>
              Get Your Free Audit — No Obligation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
