const Contact = () => {
  return (
    <section id="contact" className="dark-section" style={{ padding: '8rem 0', textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.05)' }}>
      <div className="container fade-in" style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', fontWeight: '800', letterSpacing: '-0.02em', color: 'var(--clean-white)' }}>
          Ready to Get Started?
        </h2>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginBottom: '3rem', lineHeight: '1.7', maxWidth: '600px', margin: '0 auto 3rem' }}>
          Stop losing bids to competitors with better digital presence. Book a discovery call or get started right away.
        </p>
        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap', alignItems: 'center' }}>
          <a href="https://calendly.com/makerworkflows/compliancecore-gmp-batch-record-auditor" target="_blank" rel="noopener noreferrer" className="btn btn-transparent" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
            Book a Call
          </a>
          <a href="https://buy.stripe.com/00wcN497hb25dXtfLJ87K01" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.125rem' }}>
            Get Started
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
