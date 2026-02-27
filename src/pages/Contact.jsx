const Contact = () => {
  return (
    <section id="contact" className="dark-section blueprint-bg contact-premium">
      <div className="container relative z-10 text-center">
        <h2 className="cta-title reveal-anim visible">
          Ready to Get Started?
        </h2>
        <p className="cta-subtitle reveal-anim visible" style={{ animationDelay: "0.1s" }}>
          Stop losing bids to competitors with better digital presence. Book a discovery call or get started right away.
        </p>
        <div className="hero-actions reveal-anim visible" style={{ animationDelay: "0.2s" }}>
          <a
            href="https://calendly.com/hello-makerwebstudios/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-transparent btn-lg-premium"
          >
            Book a Call
          </a>
          <a
            href="https://buy.stripe.com/00w28q5V5dad6v1fLJ87K02"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg-premium"
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
