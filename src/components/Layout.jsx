import { Menu, X, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";

const Layout = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = savedTheme ? savedTheme : (prefersDark ? "dark" : "light");
    setTheme(initialTheme);
    document.documentElement.setAttribute("data-theme", initialTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        backgroundColor: "var(--bg-color)",
      }}
    >
      <header
        className="glass-nav"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          padding: "1.25rem 0",
        }}
      >
        <div
          className="container"
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo(0, 0);
            }}
            style={{
              color: "var(--text-dark)",
              fontSize: "1.5rem",
              fontWeight: "800",
              letterSpacing: "-0.05em",
              textDecoration: "none",
              whiteSpace: "nowrap",
              display: "flex",
              alignItems: "center"
            }}
            className="brand-logo"
          >
            MAKER WEB STUDIO
          </a>

          {/* Desktop Nav */}
          <nav
            style={{ display: "flex", gap: "1.5rem", alignItems: "center" }}
            className="desktop-nav"
          >
            <button
              onClick={toggleTheme}
              style={{
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: "var(--text-dark)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "0.5rem",
              }}
              title={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
            >
              {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <div className="nav-button-group" style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
              <a href="https://calendly.com/hello-makerwebstudios/30min" target="_blank" rel="noopener noreferrer" className="btn btn-sm btn-transparent">
                Book A Call
              </a>
              <a
                href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-sm btn-primary"
              >
                Get Started — $3,500
              </a>
            </div>
          </nav>
        </div>
      </header>

      <main style={{ flex: 1 }}>{children}</main>

      <footer
        className="dark-section"
        style={{
          padding: "5rem 0 2rem",
          marginTop: "4rem",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "3rem",
              marginBottom: "3rem",
            }}
          >
            <div>
              <h3
                style={{
                  color: "var(--industrial-orange)",
                  marginBottom: "1.5rem",
                  fontSize: "1.25rem",
                  letterSpacing: "0.05em",
                }}
              >
                MAKER WEB STUDIO
              </h3>
              <p style={{ color: "var(--text-muted)", lineHeight: "1.8" }}>
                Websites Built for Makers, By a Maker.
                <br />
                Serving Manufacturers Across the Rio Grande Valley and Texas.
              </p>
            </div>
            <div>
              <h4
                style={{
                  color: "var(--clean-white)",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                }}
              >
                Quick Links
              </h4>
              <ul
                style={{
                  listStyle: "none",
                  padding: 0,
                  display: "flex",
                  flexDirection: "column",
                  gap: "0.75rem",
                }}
              >
                <li>
                  <a href="#services" style={{ color: "var(--text-muted)" }}>
                    Services
                  </a>
                </li>
                <li>
                  <a href="#portfolio" style={{ color: "var(--text-muted)" }}>
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#about" style={{ color: "var(--text-muted)" }}>
                    About
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4
                style={{
                  color: "var(--clean-white)",
                  marginBottom: "1.5rem",
                  fontSize: "1.1rem",
                }}
              >
                Contact
              </h4>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <a
                  href="https://calendly.com/hello-makerwebstudios/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-transparent"
                >
                  Book a Call
                </a>
                <a
                  href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Get Started — $3,500
                </a>
              </div>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingTop: "2.5rem",
              borderTop: "1px solid rgba(255,255,255,0.1)",
              color: "var(--text-muted)",
              fontSize: "0.875rem",
            }}
          >
            <div>
              &copy; {new Date().getFullYear()} Maker Web Studio. All rights
              reserved.
            </div>
            <a
              href="https://www.linkedin.com/company/makerwebstudios/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                opacity: 0.8,
                transition: "opacity 0.2s",
                display: "flex",
                alignItems: "center",
              }}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ color: "var(--text-muted)" }}
              >
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </a>
          </div>
        </div>
      </footer>

      {/* Basic responsive styles hack for now */}
      <style>{`
        /* Stage 1: > 768px */
        @media (min-width: 769px) {
           .nav-button-group .btn-sm {
              font-size: 18px !important;
              max-height: 60.79px !important;
           }
           .brand-logo {
              font-size: 1.5rem !important;
           }
        }

        /* Stage 2: 528px - 768px */
        @media (max-width: 768px) {
          .desktop-nav { gap: 0.3rem !important; }
          header .container {
            flex-direction: row !important;
            justify-content: space-between !important;
            gap: 0.2rem !important;
            padding: 0 0.5rem !important;
          }
          
          .brand-logo {
            height: 38px !important;
            font-size: 1.1rem !important;
          }

          .nav-button-group {
            display: flex !important;
            gap: 0.4rem !important;
            flex: 1;
            justify-content: flex-end;
            align-items: center !important;
          }
          
          .nav-button-group .btn-sm {
            height: 38px !important;
            font-size: 13px !important;
            padding: 0 10px !important;
            white-space: nowrap !important;
            word-break: keep-all !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
          }
        }

        /* Stage 3: < 528px */
        @media (max-width: 528px) {
          .desktop-nav { gap: 0.2rem !important; }
          header .container {
            padding: 0 0.4rem !important;
          }
          
          .brand-logo {
            height: auto !important;
            font-size: 0.85rem !important;
            letter-spacing: -0.05em !important;
          }

          .nav-button-group {
            gap: 0.25rem !important;
          }
          
          .nav-button-group .btn-sm {
            height: 34px !important;
            font-size: 10px !important;
            padding: 0 6px !important;
            white-space: nowrap !important;
            word-break: keep-all !important;
            display: inline-flex !important;
            align-items: center !important;
            justify-content: center !important;
            flex-shrink: 0 !important;
          }
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
