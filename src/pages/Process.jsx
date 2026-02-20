const Process = () => (
  <div className="container fade-in" style={{ padding: '5rem 1.5rem', minHeight: '80vh' }}>
    <h1 style={{ textAlign: 'center', marginBottom: '1rem' }}>How We Work</h1>
    <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '4rem', fontSize: '1.25rem' }}>
      Process transparency. Clients pay for certainty, not surprises.
    </p>

    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      {[
        { step: '1', title: 'Discovery', desc: 'We audit your current capabilities, machines, and tolerances. We figure out exactly who your buyer is.' },
        { step: '2', title: 'Strategy', desc: 'No design until the copy is written. We put together a messaging architecture that speaks to procurement teams.' },
        { step: '3', title: 'Build', desc: 'We build your mobile-optimized Foundation site using our proven architecture. Speedy and responsive.' },
        { step: '4', title: 'Launch', desc: 'We coordinate the domain switch, SEO setup, and Google Business Profile launch.' },
      ].map((item, idx) => (
        <div key={idx} style={{ display: 'flex', gap: '2rem', padding: '2rem', backgroundColor: 'var(--clean-white)', borderRadius: 'var(--border-radius)', boxShadow: 'var(--box-shadow)' }}>
          <div style={{ fontSize: '3rem', fontWeight: '800', color: 'var(--steel-blue-light)', alignSelf: 'center' }}>{item.step}</div>
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', color: 'var(--steel-blue-dark)' }}>{item.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: '1.6' }}>{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Process;
