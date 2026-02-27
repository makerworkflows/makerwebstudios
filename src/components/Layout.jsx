import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    const initialTheme = savedTheme
      ? savedTheme
      : prefersDark
        ? "dark"
        : "light";
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);

    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

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
            style={{ fontSize: "1.25rem", fontWeight: "800" }}
          >
            MAKER WEB <span className="text-accent">STUDIO</span>
          </a>

          <nav className="desktop-nav">
            <a href="#about" className="nav-link">
              About
            </a>
            <a href="#pricing" className="nav-link">
              Roadmap
            </a>
            <a href="#faq" className="nav-link">
              FAQ
            </a>
            <button
              onClick={toggleTheme}
              className="theme-toggle"
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div className="nav-button-group">
              <a
                href="https://calendly.com/makerworkflows/growthengine-discovery"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-transparent"
              >
                Book A Call
              </a>
              <a
                href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary nav-cta"
              >
                Get Started — $3,500
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
              <h3 className="footer-logo">MAKER WEB STUDIOS</h3>
              <p className="footer-tagline">
                Websites Built for Makers, By a Maker.
                <br />
                Serving Manufacturers Across the Rio Grande Valley and Texas.
              </p>
            </div>
            <div className="footer-links">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#services">Services</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>GrowthEngine</h4>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li><a href="#pricing">Roadmap</a></li>
                <li><a href="#faq">FAQ</a></li>
                <li><a href="https://calendly.com/makerworkflows/growthengine-discovery">Book a Call</a></li>
              </ul>
            </div>
            <div className="footer-contact">
              <h4>Ready to Start?</h4>
              <div className="footer-actions">
                <a
                  href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary btn-full"
                >
                  Get Started — $3,500
                </a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} Maker Web Studios.</div>
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
