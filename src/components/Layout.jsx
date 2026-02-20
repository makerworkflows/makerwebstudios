import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh', backgroundColor: 'var(--bg-color)' }}>
      <header className="glass-nav" style={{ 
        position: 'sticky',
        top: 0,
        zIndex: 50,
        padding: '1.25rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'var(--text-dark)', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em', textDecoration: 'none' }}>
            MAKER WEB STUDIO
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '2.5rem', alignItems: 'center' }} className="desktop-nav">
            <Link to="/services" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>Services</Link>
            <Link to="/process" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>Process</Link>
            <Link to="/portfolio" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>Portfolio</Link>
            <Link to="/about" style={{ color: 'var(--text-dark)', fontWeight: '500' }}>About</Link>
            <Link to="/contact" className="btn btn-primary">Get Free Audit</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer className="dark-section" style={{ 
        padding: '5rem 0 2rem',
        marginTop: '4rem'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem', marginBottom: '3rem' }}>
            <div>
              <h3 style={{ color: 'var(--industrial-orange)', marginBottom: '1.5rem', fontSize: '1.25rem', letterSpacing: '0.05em' }}>MAKER WEB STUDIO</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: '1.8' }}>Websites Built for Makers, By a Maker.<br />Serving Manufacturers Across the Rio Grande Valley and Texas.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--clean-white)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <li><Link to="/services" style={{ color: 'var(--text-muted)' }}>Services</Link></li>
                <li><Link to="/portfolio" style={{ color: 'var(--text-muted)' }}>Portfolio</Link></li>
                <li><Link to="/about" style={{ color: 'var(--text-muted)' }}>About</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--clean-white)', marginBottom: '1.5rem', fontSize: '1.1rem' }}>Contact</h4>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Mission, TX</p>
              <Link to="/contact" className="btn btn-primary">Request a Quote</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '2.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', color: 'var(--text-muted)', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Maker Web Studio. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Basic responsive styles hack for now */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
        .desktop-nav a {
          transition: color 0.2s ease, transform 0.2s ease;
        }
        .desktop-nav a:not(.btn):hover {
          color: var(--industrial-orange) !important;
          transform: translateY(-1px);
        }
        footer a:hover {
          color: var(--clean-white) !important;
        }
      `}</style>
    </div>
  );
};

export default Layout;
