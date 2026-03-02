const Contact = () => {
  return (
    <section id="contact" className="contact-premium" style={{ background: "white" }}>
      <div className="container relative z-10 text-center">
        <h2 className="cta-title reveal-anim visible" style={{ color: "black", fontFamily: "'Outfit', sans-serif", fontWeight: "900", fontSize: "clamp(2.75rem, 6vw, 4.5rem)" }}>
          Ready to Get Started?
        </h2>
        <p className="cta-subtitle reveal-anim visible" style={{ animationDelay: "0.1s", color: "black", fontSize: "1.125rem", fontWeight: "500", opacity: 0.9, marginBottom: "2.5rem" }}>
          Stop losing bids to competitors with better digital presence. Book a discovery call or get started right away.
        </p>
        <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.2s", display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="https://calendly.com/hello-makerwebstudios/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-dark"
            style={{ background: "black", color: "white", padding: "1.125rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px" }}
          >
            Book a Call
          </a>
          <a
            href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            style={{ padding: "1.125rem 3rem", fontSize: "1.125rem", fontWeight: "900", fontFamily: "'Outfit', sans-serif", borderRadius: "4px" }}
          >
            Get Started
          </a>
        </div>
      </div>
      <div className="hero-glow" style={{ opacity: 0.1 }} />

      <style>{`
        .contact-premium {
          padding: 12rem 0;
          position: relative;
          overflow: hidden;
          border-top: 1px solid var(--glass-border);
        }
      `}</style>
    </section>
  );
};

export default Contact;
