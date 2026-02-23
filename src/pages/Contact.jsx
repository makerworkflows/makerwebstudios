import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div id="contact" className="container fade-in" style={{ padding: '5rem 1.5rem', minHeight: '80vh' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Get In Touch</h1>
      <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.25rem' }}>
        We are always happy to discuss your specific needs before moving forward.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '400px', margin: '0 auto', backgroundColor: 'var(--clean-white)', padding: '3rem', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
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
  );
};

export default Contact;
