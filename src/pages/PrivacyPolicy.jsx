import { useEffect } from "react";

const PrivacyPolicy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section style={{ padding: "6rem 1.5rem 4rem", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "0.5rem" }}>Privacy Policy</h1>
      <p style={{ color: "var(--text-light)", marginBottom: "2rem" }}>
        <strong>Effective Date:</strong> April 22, 2026 &nbsp;|&nbsp; <strong>Last Updated:</strong> April 22, 2026
      </p>

      <p>
        Maker Web Studios ("we," "us," or "our") operates the website{" "}
        <a href="https://makerwebstudios.com" style={{ color: "var(--industrial-orange)" }}>makerwebstudios.com</a>.
        This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website.
      </p>

      <h2>1. Information We Collect</h2>

      <h3>Information You Provide</h3>
      <p>
        When you fill out a contact form, request an audit, or schedule a call, we collect information you voluntarily
        provide, such as your name, email address, phone number, company name, and message content.
      </p>

      <h3>Information Collected Automatically</h3>
      <p>When you visit our website, we automatically collect certain information, including:</p>
      <ul>
        <li>IP address and approximate geographic location</li>
        <li>Browser type, device type, and operating system</li>
        <li>Pages visited, time spent on pages, and referring URLs</li>
        <li>Cookies and similar tracking technologies (see Section 4)</li>
      </ul>

      <h3>Information From Third-Party Services</h3>
      <p>
        When you visit or interact with our website, cookies and similar technologies may be used by our online data
        partners or vendors to associate these activities with other personal information they or others have about you,
        including by association with your email or LinkedIn profile. We (or service providers on our behalf) may then
        send communications and marketing to these email addresses. You may opt out of receiving this advertising by
        visiting{" "}
        <a href="https://app.retention.com/optout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>
          https://app.retention.com/optout
        </a>.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>We use the information we collect to:</p>
      <ul>
        <li>Respond to your inquiries and provide requested services</li>
        <li>Send you relevant communications about our services</li>
        <li>Analyze website traffic and usage patterns to improve our site</li>
        <li>Identify companies and professionals visiting our website to support our sales outreach</li>
        <li>Comply with legal obligations</li>
      </ul>

      <h2>3. Third-Party Services</h2>
      <p>We use the following third-party services that may collect data when you visit our website:</p>
      <ul>
        <li>
          <strong>Google Analytics 4 (GA4)</strong> and <strong>Google Tag Manager</strong> -- for website analytics and
          conversion tracking.{" "}
          <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>
            Google Privacy Policy
          </a>. You can opt out using the{" "}
          <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>
            Google Analytics Opt-out Browser Add-on
          </a>.
        </li>
        <li>
          <strong>RB2B</strong> -- for identifying businesses and professionals who visit our website. RB2B uses cookies
          and IP-based identification to associate website visits with publicly available business contact information.{" "}
          <a href="https://www.rb2b.com/privacy-policy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>
            RB2B Privacy Policy
          </a>. You can opt out at{" "}
          <a href="https://app.retention.com/optout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>
            https://app.retention.com/optout
          </a>.
        </li>
        <li>
          <strong>Calendly</strong> -- for scheduling discovery calls.{" "}
          <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>
            Calendly Privacy Policy
          </a>.
        </li>
        <li>
          <strong>Stripe</strong> -- for payment processing.{" "}
          <a href="https://stripe.com/privacy" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>
            Stripe Privacy Policy
          </a>.
        </li>
      </ul>

      <h2>4. Cookies and Tracking Technologies</h2>
      <p>
        Our website uses cookies and similar tracking technologies to enhance your browsing experience and analyze site
        traffic. Cookies are small text files stored on your device when you visit a website.
      </p>
      <p>We use the following types of cookies:</p>
      <ul>
        <li><strong>Essential cookies</strong> -- required for the website to function properly</li>
        <li><strong>Analytics cookies</strong> -- help us understand how visitors interact with our website (Google Analytics)</li>
        <li><strong>Marketing cookies</strong> -- used to identify visitors and deliver relevant communications (RB2B)</li>
      </ul>
      <p>
        You can control cookies through your browser settings. Most browsers allow you to block or delete cookies.
        However, blocking cookies may affect website functionality.
      </p>

      <h2>5. Data Sharing and Disclosure</h2>
      <p>We do not sell your personal information. We may share your information with:</p>
      <ul>
        <li>Third-party service providers who assist in operating our website and business (as listed in Section 3)</li>
        <li>Legal authorities when required by law or to protect our rights</li>
      </ul>

      <h2>6. Data Retention</h2>
      <p>
        We retain your personal information only as long as necessary to fulfill the purposes described in this policy,
        or as required by law. Analytics data is retained according to the default retention periods of each service
        provider.
      </p>

      <h2>7. Your Rights</h2>
      <p>Depending on your jurisdiction, you may have the right to:</p>
      <ul>
        <li>Access the personal information we hold about you</li>
        <li>Request correction or deletion of your personal information</li>
        <li>Opt out of marketing communications</li>
        <li>Opt out of visitor identification tracking (via <a href="https://app.retention.com/optout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>RB2B opt-out</a>)</li>
        <li>Opt out of analytics tracking (via <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer" style={{ color: "var(--industrial-orange)" }}>Google Analytics opt-out</a>)</li>
      </ul>
      <p>
        To exercise any of these rights, contact us at{" "}
        <a href="mailto:hello@makerwebstudios.com" style={{ color: "var(--industrial-orange)" }}>hello@makerwebstudios.com</a>.
      </p>

      <h2>8. Security</h2>
      <p>
        We implement reasonable technical and organizational measures to protect your personal information. However, no
        method of transmission over the Internet or electronic storage is 100% secure.
      </p>

      <h2>9. Children's Privacy</h2>
      <p>
        Our website is not directed at individuals under 16. We do not knowingly collect personal information from
        children. If you believe we have collected information from a child, please contact us immediately.
      </p>

      <h2>10. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
        "Last Updated" date. Your continued use of the website after changes constitutes acceptance of the updated
        policy.
      </p>

      <h2>11. Contact Us</h2>
      <p>If you have questions about this Privacy Policy, contact us at:</p>
      <p>
        <strong>Maker Web Studios</strong>
        <br />
        Guillermo Aristi, Founder
        <br />
        <a href="mailto:hello@makerwebstudios.com" style={{ color: "var(--industrial-orange)" }}>hello@makerwebstudios.com</a>
        <br />
        <a href="tel:5126359629" style={{ color: "var(--industrial-orange)" }}>(512) 635-9629</a>
        <br />
        Mission, TX 78572
      </p>

      <style>{`
        section h2 {
          font-size: 1.3rem;
          font-weight: 700;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
          color: var(--text-dark);
        }
        section h3 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-top: 1.25rem;
          margin-bottom: 0.5rem;
          color: var(--text-dark);
        }
        section p, section li {
          font-size: 0.95rem;
          line-height: 1.7;
          color: var(--text-light);
          margin-bottom: 0.75rem;
        }
        section ul {
          padding-left: 1.5rem;
          margin-bottom: 1rem;
        }
        section li {
          margin-bottom: 0.4rem;
        }
      `}</style>
    </section>
  );
};

export default PrivacyPolicy;
