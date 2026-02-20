import { Link } from 'react-router-dom';
import { ShieldCheck, MapPin, Code, DollarSign, Clock, CheckCircle2 } from 'lucide-react';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{ 
        backgroundColor: 'var(--steel-blue-dark)', 
        color: 'var(--clean-white)',
        padding: '5rem 0',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container text-center fade-in">
          <h1 style={{ color: 'var(--clean-white)', marginBottom: '1.5rem', maxWidth: '800px', margin: '0 auto 1.5rem', fontSize: '3.5rem' }}>
            Your Website Is Losing You Bids You Don't Even Know About
          </h1>
          <p style={{ fontSize: '1.25rem', color: '#cbd5e1', maxWidth: '700px', margin: '0 auto 2.5rem', lineHeight: '1.8' }}>
            77% of B2B buyers research suppliers online before making contact. If your manufacturer website is slow, outdated, or missing a capabilities page — they're choosing your competitor before they ever call you.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.125rem' }}>Get a Free Website Audit</Link>
            <Link to="/portfolio" className="btn btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.125rem', borderColor: '#cbd5e1', color: '#cbd5e1' }}>See Our Work</Link>
          </div>
        </div>
      </section>

      {/* Credibility Bar */}
      <section style={{ backgroundColor: '#f1f5f9', padding: '2rem 0', borderBottom: '1px solid var(--border-color)' }}>
        <div className="container">
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', color: 'var(--steel-blue-dark)', fontWeight: '600' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><ShieldCheck size={20} color="var(--industrial-orange)" /> 16 Years in Manufacturing</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><MapPin size={20} color="var(--industrial-orange)" /> RGV & Texas Focused</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Code size={20} color="var(--industrial-orange)" /> No Custom Code Required</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><DollarSign size={20} color="var(--industrial-orange)" /> Fixed-Price Packages</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}><Clock size={20} color="var(--industrial-orange)" /> Results in 30 Days</div>
          </div>
        </div>
      </section>

      {/* The Problem */}
      <section style={{ padding: '6rem 0' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 style={{ marginBottom: '2rem' }}>We Speak Manufacturing.</h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
            Most web agencies have never been on a shop floor. They don't know what a tolerance is, what a capabilities page needs to say, or why your RFQ form is the most important conversion point on your site. We do — because we spent 16 years building and running manufacturing operations before building Maker Web Studio.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section style={{ backgroundColor: 'var(--bg-color)', padding: '5rem 0' }}>
        <div className="container">
          <h2 className="text-center" style={{ marginBottom: '4rem' }}>What We Fix</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
            {[
              { title: 'Speed', desc: 'Your website loads in 10 seconds on mobile — we get it under 2.' },
              { title: 'Capabilities', desc: 'You have no capabilities page — we build one that qualifies procurement teams before they call.' },
              { title: 'Conversions', desc: 'Your RFQ form is buried or broken — we rebuild it as your #1 conversion tool.' },
              { title: 'Visibility', desc: "You're invisible on Google — we fix your local SEO so engineers find you." },
              { title: 'Modernization', desc: 'Your site looks like 2003 — we modernize it for under $5,000.' }
            ].map((item, idx) => (
              <div key={idx} style={{ 
                backgroundColor: 'var(--clean-white)', 
                padding: '2rem', 
                borderRadius: 'var(--border-radius)',
                boxShadow: 'var(--box-shadow)',
                borderLeft: '4px solid var(--steel-blue)'
              }}>
                <h3 style={{ marginBottom: '1rem', fontSize: '1.25rem' }}>{item.title}</h3>
                <p style={{ color: 'var(--text-muted)' }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Offer */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--steel-blue)', color: 'var(--clean-white)' }}>
        <div className="container text-center" style={{ maxWidth: '800px' }}>
          <h2 style={{ color: 'var(--clean-white)', marginBottom: '1rem' }}>The Manufacturer's Digital Foundation Package</h2>
          <p style={{ fontSize: '1.5rem', fontWeight: '700', color: 'var(--industrial-orange)', marginBottom: '2rem' }}>Starting at $3,500</p>
          
          <div style={{ textAlign: 'left', backgroundColor: 'var(--steel-blue-dark)', padding: '2rem', borderRadius: 'var(--border-radius)', marginBottom: '2rem' }}>
            <h4 style={{ color: 'var(--clean-white)', marginBottom: '1rem', borderBottom: '1px solid #374151', paddingBottom: '0.5rem' }}>What's Included:</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {['Modern mobile-responsive website', 'Capabilities page', 'RFQ form optimization', 'Google Business Profile setup', 'On-page SEO', 'SSL + speed optimization', 'Google Analytics + Search Console', 'Professional copy for all pages'].map((feat, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: '#cbd5e1' }}>
                  <CheckCircle2 size={18} color="var(--industrial-orange)" /> {feat}
                </li>
              ))}
            </ul>
          </div>
          
          <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.25rem' }}>
            Get Your Free Audit First — No Obligation
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
