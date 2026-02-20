const Portfolio = () => (
  <div className="container fade-in" style={{ padding: '5rem 1.5rem', minHeight: '80vh' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Work</h1>
    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.25rem' }}>
      Real results for real manufacturers.
    </p>
    
    <div style={{ padding: '4rem', backgroundColor: '#f8fafc', borderRadius: 'var(--border-radius)', border: '2px dashed var(--border-color)', textAlign: 'center' }}>
      <h3 style={{ color: 'var(--steel-blue)', marginBottom: '1rem' }}>Case studies coming soon.</h3>
      <p style={{ color: 'var(--text-muted)' }}>We are continually adding new projects measuring real ROI and lead generation metrics for industrial B2B clients.</p>
    </div>
  </div>
);

export default Portfolio;
