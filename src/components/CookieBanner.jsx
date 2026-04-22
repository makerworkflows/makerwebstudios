import { useState, useEffect } from "react";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("mws_cookie_consent");
    if (!consent) {
      // Small delay so it doesn't flash on page load
      const timer = setTimeout(() => setVisible(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem("mws_cookie_consent", "accepted");
    setVisible(false);
  };

  const decline = () => {
    localStorage.setItem("mws_cookie_consent", "declined");
    setVisible(false);
    // Disable GA4 tracking
    window["ga-disable-G-XXXXXXXXXX"] = true;
  };

  if (!visible) return null;

  return (
    <div style={{
      position: "fixed",
      bottom: "80px",
      left: "50%",
      transform: "translateX(-50%)",
      width: "calc(100% - 2rem)",
      maxWidth: "560px",
      background: "var(--bg-dark, #1a1a2e)",
      color: "#fff",
      borderRadius: "12px",
      padding: "1.25rem 1.5rem",
      boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
      zIndex: 9999,
      display: "flex",
      flexDirection: "column",
      gap: "0.75rem",
      animation: "cookieSlideUp 0.4s ease-out",
    }}>
      <p style={{
        fontSize: "0.875rem",
        lineHeight: 1.6,
        margin: 0,
        color: "rgba(255,255,255,0.85)",
      }}>
        We use cookies for analytics and to identify businesses visiting our site.{" "}
        <a href="/privacy" style={{ color: "var(--industrial-orange, #FF6B00)", textDecoration: "underline" }}>
          Privacy Policy
        </a>
      </p>
      <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
        <button
          onClick={decline}
          style={{
            padding: "0.5rem 1rem",
            fontSize: "0.8rem",
            borderRadius: "6px",
            border: "1px solid rgba(255,255,255,0.2)",
            background: "transparent",
            color: "rgba(255,255,255,0.6)",
            cursor: "pointer",
          }}
        >
          Decline
        </button>
        <button
          onClick={accept}
          style={{
            padding: "0.5rem 1.25rem",
            fontSize: "0.8rem",
            fontWeight: 600,
            borderRadius: "6px",
            border: "none",
            background: "var(--industrial-orange, #FF6B00)",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Accept
        </button>
      </div>
      <style>{`
        @keyframes cookieSlideUp {
          from { opacity: 0; transform: translateX(-50%) translateY(20px); }
          to { opacity: 1; transform: translateX(-50%) translateY(0); }
        }
      `}</style>
    </div>
  );
};

export default CookieBanner;
