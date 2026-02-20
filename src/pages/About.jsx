import { CheckCircle } from 'lucide-react';

const About = () => (
  <div id="about" className="container fade-in" style={{ padding: '5rem 1.5rem', minHeight: '80vh' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>Our Story</h1>
    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.25rem' }}>
      16 Years on the floor. Now building your digital presence.
    </p>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
      <div>
        <h2 style={{ marginBottom: '1.5rem' }}>We know what a Mill Spec is.</h2>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: '1.8' }}>
          Most web studios are run by designers who have never set foot inside a machine shop. They don't know the difference between 6061 and 7075 aluminum, and they certainly don't know what a procurement manager looks for when vetting suppliers.
        </p>
        <p style={{ color: 'var(--text-muted)', marginBottom: '2rem', lineHeight: '1.8' }}>
          We spent 16 years building and running manufacturing operations in the Rio Grande Valley. We've hired machinists, bought Haas mills, undergone ISO audits, and fought for aerospace contracts. We know exactly what your buyers need to see to give you the PO.
        </p>
        <ul style={{ listStyleType: 'none', padding: 0 }}>
          {['Deep understanding of industrial B2B sales cycles', 'We write your technical copy for you', 'No explaining what a "tolerance" is'].map((item, i) => (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem', color: 'var(--steel-blue-dark)', fontWeight: '500' }}>
              <CheckCircle size={18} color="var(--industrial-orange)" /> {item}
            </li>
          ))}
        </ul>
      </div>
      <div style={{ backgroundColor: '#f1f5f9', padding: '3rem', borderRadius: 'var(--border-radius)', border: '1px solid var(--border-color)' }}>
        <h3 style={{ marginBottom: '1rem', color: 'var(--industrial-orange)' }}>The RGV Advantage</h3>
        <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>
          Located in Mission, TX, we are perfectly positioned to serve the booming manufacturing corridor along the US-Mexico border and throughout Texas. We understand bilingual requirements, maquiladora supplier networks, and the unique challenges of South Texas manufacturing.
        </p>
      </div>
    </div>
  </div>
);

export default About;
