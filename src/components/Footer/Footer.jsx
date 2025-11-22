import React from "react";
import "./Footer.css";
import HeaderLogo from "../../assets/logo/clixonic_media_logo.jpg";
import { Facebook, Instagram, Linkedin, MapPin, Twitter, Youtube } from "lucide-react";

export default function Footer({
  companyName = "ClixonicMedia",
  year = new Date().getFullYear(),
}) {
  const handleSubscribe = (e) => {
    e.preventDefault();
    // TODO: wire up to real subscribe endpoint
    alert("Thanks! (subscribe flow not implemented in this demo)");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          {/* Brand + short about + contact */}
          <div className="col brand-col">
            <div className="brand-row">
              <img src={HeaderLogo} alt={`${companyName} logo`} className="footer-logo" />
              <div>
                <h3 className="brand-title">{companyName}</h3>
                <p className="brand-sub fontfamily-title">Digital growth & marketing studio</p>
              </div>
            </div>

            <p className="brand-desc fontfamily-content">
              We create data-driven campaigns and beautiful digital experiences that drive results for
              businesses of all sizes.
            </p>

            <ul className="contact-list fontfamily-content" aria-label="company contact information">
              <li><strong>Address:</strong> Location, Upcoming</li>
              <li><strong>Email:</strong> <a href="mailto:hello@clixonicmedia.com" className="muted-link">ClixonicMedia@dummy.com</a></li>
              <li><strong>Phone:</strong> <a href="tel:+123123123" className="muted-link">+123 123 123</a></li>
            </ul>

            <div className="social-row" aria-hidden="false">
              <nav aria-label="Hero social links" className="flex items-center gap-3">
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                  className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                >
                  <Twitter size={18} />
                </a>

                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                >
                  <Linkedin size={18} />
                </a>

                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                >
                  <Facebook size={18} />
                </a>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                >
                  <Instagram size={18} />
                </a>

                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                >
                  <Youtube size={18} />
                </a>
              </nav>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col links-col fontfamily-content" role="navigation" aria-label="quick links">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/insights">Insights</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/team">Team</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="col services-col fontfamily-content" aria-label="services list">
            <h4>Services</h4>
            <ul>
              <li><a href="/services#on-page">On-Page SEO</a></li>
              <li><a href="/services#content">Content Marketing</a></li>
              <li><a href="/services#off-page">Off-Page SEO</a></li>
              <li><a href="/services#social">Social Media</a></li>
              <li><a href="/services#analytics">Analytics</a></li>
            </ul>
          </div>

          {/* Newsletter + CTA */}
          <div className="col subscribe-col fontfamily-content">
            <h4>Join Our Newsletter</h4>
            <p className="muted">Weekly insights & tips to grow your traffic and conversions.</p>

            <form className="subscribe-form" onSubmit={handleSubscribe} aria-label="subscribe form">
              <label htmlFor="ft-email" className="sr-only">Email address</label>
              <input id="ft-email" type="email" placeholder="Enter your email" required className="subscribe-input" />
              <button type="submit" className="subscribe-btn">Subscribe</button>
            </form>

            <div className="cta-block">
              <div>
                <h5>Work Days</h5>
                <p className="muted">Mon to Fri, 09:00 - 17:00</p>
              </div>

              <a href="/contact" className="contact-cta">Contact Us</a>
            </div>
          </div>
        </div>

        {/* bottom */}
        <div className="footer-bottom">
          <div className="copyright fontfamily-title">© {year} {companyName}. All rights reserved.</div>
          <div className="legal-links">
            <a href="/privacy">Privacy</a>
            <span>•</span>
            <a href="/terms">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
