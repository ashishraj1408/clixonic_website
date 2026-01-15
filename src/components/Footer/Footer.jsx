import React from "react";
import "./Footer.css";
import HeaderLogo from "../../assets/logo/title_logo.png";
import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";

export default function Footer({
  companyName = "ClixonicMedia",
  year = new Date().getFullYear(),
}) {
  const handleSubscribe = (e) => {
    e.preventDefault();
    alert("Thanks for subscribing!");
  };

  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">

          {/* BRAND */}
          <div className="col brand-col">
            <div className="brand-row">
              <img src={HeaderLogo} alt="logo" className="footer-logo" />
              <div>
                <h3 className="brand-title">{companyName}</h3>
                <p className="brand-sub">Digital growth & marketing studio</p>
              </div>
            </div>

            <p className="brand-desc">
              We create data-driven campaigns and beautiful digital experiences
              that help businesses grow faster.
            </p>

            <ul className="contact-list">
              <li><strong>Address:</strong> Delhi, India</li>
              <li>
                <strong>Email:</strong>{" "}
                <a href="mailto:info@clixonicmedia.com">info@clixonicmedia.com</a>
              </li>
              <li>
                <strong>Phone:</strong>{" "}
                <a href="tel:+123123123">+91 7303351343</a>
              </li>
            </ul>

            <div className="social-row">
              <a href="#"><Twitter size={18} /></a>
              <a href="#"><Linkedin size={18} /></a>
              <a href="#"><Facebook size={18} /></a>
              <a href="#"><Instagram size={18} /></a>
              <a href="#"><Youtube size={18} /></a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div className="col">
            <h4 className="font-medium">Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/portfolio">Portfolio</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/blog">Blog</a></li>
              <li><a href="/pricing">Pricing</a></li>
            </ul>
          </div>

          {/* SERVICES */}
          <div className="col">
            <h4 className="font-medium">Services</h4>
            <ul>
              <li><a href="/services">SEO Optimization</a></li>
              <li><a href="/services">Content Marketing</a></li>
              <li><a href="/services">Social Media</a></li>
              <li><a href="/services">Analytics</a></li>
            </ul>
          </div>

          {/* NEWSLETTER */}
          <div className="col subscribe-col">
            <h4 className="font-medium">Join Our Newsletter</h4>
            <p className="muted">
              Weekly insights to grow traffic & conversions.
            </p>

            <form className="subscribe-form text-black" onSubmit={handleSubscribe}>
              <input
                type="email"
                placeholder="Enter your email"
                required
              />
              <button type="submit">Subscribe</button>
            </form>

            <div className="cta-block">
              <div>
                <h5>Work Days</h5>
                <p className="muted">Mon – Fri, 09:00 – 17:00</p>
                <p className="muted">Sat - Sun : Closed</p>
              </div>
              <a href="/contact" className="cta-btn">Contact Us</a>
            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <p>© {year} {companyName}. All rights reserved.</p>
          <div className="legal-links">
            <a href="/privacy-policy">Privacy</a>
            <span>•</span>
            <a href="/terms-conditions">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
