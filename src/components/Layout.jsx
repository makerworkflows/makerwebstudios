import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", "light");

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app-wrapper">
      <header className={`glass-nav ${scrolled ? "scrolled" : ""}`}>
        <div className="container nav-container">
          <a
            href="/"
            onClick={(e) => {
              if (window.location.pathname === "/") {
                e.preventDefault();
                window.scrollTo(0, 0);
              }
            }}
            className="brand-logo"
          >
            <img
              src="/logos/Maker Logo - 300 x 300 px - Official.png"
              alt="Maker Web Studio"
              className="navbar-logo"
              style={{ height: "48px", width: "auto", objectFit: "contain" }}
            />
          </a>

          <nav className="desktop-nav">
            <div className="nav-button-group">
              <a
                href="https://buy.stripe.com/5kQ6oJ6Zb2sg5tO3hXejK01"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-dark"
              >
                Lock In $4,500 Build
              </a>
              <a
                href="https://calendly.com/hello-makerwebstudios/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Get My Free Audit
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main className="main-content">{children}</main>

      <footer className="dark-section footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <h3 className="footer-logo">MAKER WEB STUDIO</h3>
              <p className="footer-tagline">
                Websites Built for Manufacturers.
                <br />
                16+ Years on the Shop Floor.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li>
                  <a href="/#process">How It Works</a>
                </li>
                <li>
                  <a href="/#difference">About</a>
                </li>
                <li>
                  <a href="/#pricing">Pricing</a>
                </li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Get in Touch</h4>
              <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.95rem", lineHeight: "1.7" }}>
                <a href="mailto:hello@makerwebstudios.com" style={{ color: "var(--industrial-orange)", textDecoration: "none" }}>hello@makerwebstudios.com</a>
              </p>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} Maker Web Studios. The Revenue Builder System is a proprietary framework of Maker Web Studios.</div>
            <a
              href="https://www.linkedin.com/company/makerwebstudios/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-link"
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
