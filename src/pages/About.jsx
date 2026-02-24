import { CheckCircle } from 'lucide-react';

const About = () => (
  <div id="about" className="container fade-in" style={{ padding: '8rem 1.5rem', minHeight: '80vh' }}>
    <div style={{ maxWidth: '800px', margin: '0 auto' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 5vw, 4rem)' }}>Our Story</h1>
      <p style={{ textAlign: 'center', color: 'var(--industrial-orange)', marginBottom: '5rem', fontSize: '1.5rem', fontWeight: '600', lineHeight: '1.4' }}>
        16 years on the shop floor. Now building digital presences that win manufacturing contracts.
      </p>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
          Most web agencies have never run a production line, optimized a supply chain, or survived a regulatory audit.
        </p>
        
        <p style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)', margin: '0' }}>
          We have.
        </p>

        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.9' }}>
          For 16 years, we scaled regulated manufacturing operations in the Rio Grande Valley — leading teams, implementing ISO 9001 systems (70+ procedures), driving 4x revenue growth, and maintaining certifications like GMP, HACCP, SQF, and more. We know what procurement demands: proven compliance, process discipline, and reliable capability.
        </p>

        <p style={{ fontSize: '1.125rem', color: 'var(--text-muted)', lineHeight: '1.9', padding: '2rem', borderLeft: '4px solid var(--industrial-orange)', backgroundColor: 'rgba(255,107,0,0.03)', borderRadius: '0 12px 12px 0' }}>
          Now we craft websites, messaging, and visuals that pass the buyer gut-check instantly — so you close more deals and focus on production.
        </p>
      </div>
    </div>
  </div>
);

export default About;
