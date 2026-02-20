const Services = () => (
  <div className="container fade-in" style={{ padding: '4rem 1.5rem' }}>
    <h1 style={{ marginBottom: '1rem', textAlign: 'center' }}>Transparent Pricing for Manufacturers</h1>
    <p style={{ textAlign: 'center', marginBottom: '4rem', color: 'var(--text-muted)' }}>
      No surprise invoices. Fixed-price packages tailored to industrial B2B companies.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
      
      {/* Foundation Package */}
      <div style={{ padding: '2rem', border: '1px solid var(--border-color)', borderRadius: 'var(--border-radius)', backgroundColor: 'var(--clean-white)', boxShadow: 'var(--box-shadow)' }}>
        <h3 style={{ color: 'var(--steel-blue)', fontSize: '1.5rem' }}>Digital Foundation</h3>
        <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--industrial-orange)', margin: '1rem 0' }}>$3,500 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>one-time</span></p>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>Perfect for updating an old site and getting the fundamentals right.</p>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
          {['Modern 5-6 page website', 'Capabilities page', 'RFQ form setup', 'On-page SEO', 'GBP Profile Setup', 'Analytics + Search Console'].map((item, i) => (
            <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #e2e8f0' }}>{item}</li>
          ))}
        </ul>
        <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
      </div>

      {/* Modernization Package */}
      <div style={{ padding: '2rem', border: '2px solid var(--industrial-orange)', borderRadius: 'var(--border-radius)', backgroundColor: 'var(--clean-white)', boxShadow: 'var(--box-shadow)', position: 'relative' }}>
        <div style={{ position: 'absolute', top: '-12px', left: '50%', transform: 'translateX(-50%)', backgroundColor: 'var(--industrial-orange)', color: 'white', padding: '0.25rem 1rem', borderRadius: '20px', fontSize: '0.875rem', fontWeight: 'bold' }}>MOST POPULAR</div>
        <h3 style={{ color: 'var(--steel-blue)', fontSize: '1.5rem' }}>Full Modernization</h3>
        <p style={{ fontSize: '2rem', fontWeight: '800', color: 'var(--industrial-orange)', margin: '1rem 0' }}>$4,500 <span style={{ fontSize: '1rem', color: 'var(--text-muted)' }}>one-time</span></p>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-muted)' }}>For manufacturers ready to turn their site into a lead-gen asset.</p>
        <ul style={{ listStyleType: 'none', padding: 0, marginBottom: '2rem' }}>
          {['Everything in Foundation', '8-10 pages', 'Photography coordination', 'Full capabilities + certs list', '90-day post-launch support'].map((item, i) => (
            <li key={i} style={{ padding: '0.5rem 0', borderBottom: '1px solid #e2e8f0' }}>{item}</li>
          ))}
        </ul>
        <button className="btn btn-primary" style={{ width: '100%' }}>Get Started</button>
      </div>
      
    </div>
  </div>
);

export default Services;
