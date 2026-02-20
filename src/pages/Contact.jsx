import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="container fade-in" style={{ padding: '5rem 1.5rem', minHeight: '80vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Get Your Free Audit</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.25rem' }}>
        PageSpeed score, mobile test, SEO audit, GBP status. 15 minutes, no pitch.
      </p>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Contact form */}
        <div style={{ padding: '3rem', backgroundColor: 'var(--clean-white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
          <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="name" style={{ fontWeight: '500', color: 'var(--steel-blue-dark)' }}>Name</label>
              <input type="text" id="name" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="company" style={{ fontWeight: '500', color: 'var(--steel-blue-dark)' }}>Company Website (Optional but recommended)</label>
              <input type="text" id="company" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="email" style={{ fontWeight: '500', color: 'var(--steel-blue-dark)' }}>Email</label>
              <input type="email" id="email" style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }} />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              <label htmlFor="message" style={{ fontWeight: '500', color: 'var(--steel-blue-dark)' }}>What are you trying to accomplish?</label>
              <textarea id="message" rows={4} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid var(--border-color)' }}></textarea>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1rem', marginTop: '1rem', fontSize: '1.125rem' }}>Request Free Audit</button>
          </form>
        </div>

        {/* Contact Details */}
        <div style={{ alignSelf: 'center', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          <div>
            <h3 style={{ color: 'var(--steel-blue-dark)', marginBottom: '0.5rem' }}>Have questions?</h3>
            <p style={{ color: 'var(--text-muted)' }}>We are always happy to discuss your specific needs before moving forward.</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: '#e2e8f0', padding: '1rem', borderRadius: '50%' }}>
              <MapPin color="var(--industrial-orange)" />
            </div>
            <div>
              <h4 style={{ margin: 0, color: 'var(--steel-blue-dark)' }}>Location</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>Mission, Texas (Serving RGV & Statewide)</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: '#e2e8f0', padding: '1rem', borderRadius: '50%' }}>
              <Mail color="var(--industrial-orange)" />
            </div>
            <div>
              <h4 style={{ margin: 0, color: 'var(--steel-blue-dark)' }}>Email</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>hello@makerwebstudio.com</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <div style={{ backgroundColor: '#e2e8f0', padding: '1rem', borderRadius: '50%' }}>
              <Phone color="var(--industrial-orange)" />
            </div>
            <div>
              <h4 style={{ margin: 0, color: 'var(--steel-blue-dark)' }}>Call Us</h4>
              <p style={{ color: 'var(--text-muted)', margin: 0 }}>(956) 555-0123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
