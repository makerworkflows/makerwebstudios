import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

const Layout = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <header style={{ 
        backgroundColor: 'var(--steel-blue-dark)', 
        color: 'var(--clean-white)',
        padding: '1rem 0'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Link to="/" style={{ color: 'var(--clean-white)', fontSize: '1.5rem', fontWeight: '800', letterSpacing: '-0.05em' }}>
            MAKER WEB STUDIO
          </Link>

          {/* Desktop Nav */}
          <nav style={{ display: 'flex', gap: '2rem', alignItems: 'center' }} className="desktop-nav">
            <Link to="/services" style={{ color: 'var(--clean-white)' }}>Services</Link>
            <Link to="/process" style={{ color: 'var(--clean-white)' }}>Process</Link>
            <Link to="/portfolio" style={{ color: 'var(--clean-white)' }}>Portfolio</Link>
            <Link to="/about" style={{ color: 'var(--clean-white)' }}>About</Link>
            <Link to="/contact" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>Get Free Audit</Link>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      <footer style={{ 
        backgroundColor: '#111827', 
        color: 'var(--clean-white)',
        padding: '4rem 0 2rem'
      }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '2rem' }}>
            <div>
              <h3 style={{ color: 'var(--industrial-orange)', marginBottom: '1rem' }}>MAKER WEB STUDIO</h3>
              <p style={{ color: 'var(--text-muted)' }}>Websites Built for Makers, By a Maker.<br />Serving Manufacturers Across the Rio Grande Valley and Texas.</p>
            </div>
            <div>
              <h4 style={{ color: 'var(--clean-white)', marginBottom: '1rem' }}>Quick Links</h4>
              <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <li><Link to="/services" style={{ color: 'var(--text-muted)' }}>Services</Link></li>
                <li><Link to="/portfolio" style={{ color: 'var(--text-muted)' }}>Portfolio</Link></li>
                <li><Link to="/about" style={{ color: 'var(--text-muted)' }}>About</Link></li>
              </ul>
            </div>
            <div>
              <h4 style={{ color: 'var(--clean-white)', marginBottom: '1rem' }}>Contact</h4>
              <p style={{ color: 'var(--text-muted)' }}>Mission, TX</p>
              <Link to="/contact" className="btn btn-primary mt-4">Request a Quote</Link>
            </div>
          </div>
          <div style={{ textAlign: 'center', paddingTop: '2rem', borderTop: '1px solid #374151', color: '#6B7280', fontSize: '0.875rem' }}>
            &copy; {new Date().getFullYear()} Maker Web Studio. All rights reserved.
          </div>
        </div>
      </footer>
      
      {/* Basic responsive styles hack for now */}
      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
        }
      `}</style>
    </div>
  );
};

export default Layout;
