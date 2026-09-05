import Image from "next/image";

const quickLinks = [
  ["Home", "/"], ["About Rupali", "/about-rupali"], ["Our Approach", "/our-approach"],
  ["Experiences", "/experiences"], ["Testimonials", "/testimonials"], ["Contact", "/contact"],
];
const experiences = [
  ["One-to-One Coaching", "#"], ["Group Programs", "#"], ["Harmony Circles", "#"],
  ["Workshops & Retreats", "#"], ["Harmony Parenting", "#"], ["Harmony Leadership", "#"],
];

export default function Footer() {
  return (
    <footer className="site-footer" aria-label="Harmony & Her footer">
      <div className="site-footer-inner">
        <div className="site-footer-brand">
          <Image
            src="/images/logo/harmonyherlogo.png"
            alt="Harmony & Her"
            width={175}
            height={90}
            className="site-footer-logo"
          />
          <p className="site-footer-description">
            Helping women create harmony across their personal, professional
            and family lives.
          </p>
        </div>

        <FooterLinks title="Quick Links" links={quickLinks} />
        <FooterLinks title="Experiences" links={experiences} />

        <div className="site-footer-connect">
          <h2 id="footer-title">Connect</h2>
          <span className="site-footer-rule" aria-hidden="true" />
          <p>Phone: <a href="#">[Add Number]</a></p>
          <p>Email: <a href="mailto:">[Add Email]</a></p>
          <a href="#">Instagram</a>
          <a href="#">YouTube</a>
        </div>
      </div>
      <div className="site-footer-bottom">
        <strong>Live Fully. Love Deeply. Lead in Harmony.</strong>
        <span>&copy; 2026 Harmony &amp; Her. All Rights Reserved.</span>
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }) {
  return (
    <div className="site-footer-links">
      <h2>{title}</h2>
      <span className="site-footer-rule" aria-hidden="true" />
      <nav aria-label={title}>
        {links.map(([label, href]) => (
          <a href={href} key={`${title}-${label}`}>
            {label}
          </a>
        ))}
      </nav>
    </div>
  );
}
