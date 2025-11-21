import React from "react";
import "./Footer.css";
import HeaderLogo from "../../assets/logo/clixonic_media_logo.jpg";



export default function Footer({
  companyName = "ClixonicMedia",
  year = new Date().getFullYear(),
}) {
  return (
    <footer className="w-full bg-[#0d0d0d] text-[#dfe7f3] py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Left column */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="text-2xl text-brand-pink font-semibold">
                <img src={HeaderLogo} alt="" className="w-40 rounded-full" />
              </div>
            </div>

            <p className="text-[#b7c6d9] leading-relaxed max-w-sm">
              Quam lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Vel quam elementum pulvinar etiam.
            </p>

            <ul className="space-y-3 text-[#c7d5ea]">
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/90"><path d="M12 2C8 2 4 5 4 9c0 6 8 13 8 13s8-7 8-13c0-4-4-7-8-7z" fill="currentColor"/></svg>
                <span>Somewhere, Earth</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/90"><path d="M4 4h16v12H4z" stroke="currentColor" strokeWidth="1.2" fill="none"/></svg>
                <span>ClixonicMedia@dummy.com</span>
              </li>
              <li className="flex items-center gap-3">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-white/90"><path d="M6.6 10.8a12 12 0 006.6 6.6l2.2-2.2a1 1 0 011-.2c1.1.4 2.4.6 3.6.6a1 1 0 001-1V5a1 1 0 00-1-1C18 4 14 6 12 8c-1.5 1-3 2.8-4.4 2.8z" fill="currentColor"/></svg>
                <span>+123 123 123</span>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-brand-green">Quick Links</h4>
            <ul className="mt-4 space-y-3">
              <li><a className="footer-link text-[#dfe7f3]" href="/about">About</a></li>
              <li><a className="footer-link text-[#dfe7f3]" href="/contact">Contact</a></li>
              <li><a className="footer-link text-[#dfe7f3]" href="/team">Team</a></li>
              <li><a className="footer-link text-[#dfe7f3]" href="/faqs">FAQs</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-brand-green">Services</h4>
            <ul className="mt-4 space-y-3">
              <li className="text-[#dbeaf8]">On-Page SEO</li>
              <li className="text-[#dbeaf8]">Content Marketing</li>
              <li className="text-[#dbeaf8]">Off-Page SEO</li>
              <li className="text-[#dbeaf8]">Social Media Marketing</li>
              <li className="text-[#dbeaf8]">Analytics & Reporting</li>
              <li className="text-[#dbeaf8]">Influencer Marketing</li>
            </ul>
          </div>

          {/* Work Days / CTA */}
          <div className="flex flex-col gap-4">
            <h4 className="text-lg font-semibold text-brand-green">Work Days</h4>
            <p className="text-[#b7c6d9] max-w-sm">
              Euismod elementum nisi quis eleifend quam adipiscing vitae proin sagittis.
            </p>

            <div className="flex items-center gap-3 text-[#c7d5ea]">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 7v6l4 2" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
              <span>Mon to Fri, 09:00 - 17:00</span>
            </div>

            <div className="mt-2">
              <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-brand-green text-black font-semibold">
                Contact Us
              </a>
            </div>

            <div className="mt-auto">
              <div className="flex items-center gap-4 justify-end">
                {/* Social icons using your gradient text */}
                <a href="#" className="w-9 h-9 rounded flex items-center justify-center bg-[#081017] text-brand-pink hover:brightness-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 4.01H2v15.98h20V4.01zM8.5 18.5H5.5V9.5h3v9zm-1.5-10.7c-1 0-1.6-.7-1.6-1.5S5.9 4.8 6.9 4.8s1.6.7 1.6 1.5-.6 1.5-1.6 1.5zM19.5 18.5h-3v-4.3c0-1-.03-2.3-1.4-2.3-1.4 0-1.6 1.1-1.6 2.2v4.4h-3V9.5h2.9v1.3h.04c.4-.8 1.3-1.6 2.7-1.6 2.9 0 3.9 1.9 3.9 4.4v4.9z" /></svg>
                </a>

                <a href="#" className="w-9 h-9 rounded flex items-center justify-center bg-[#081017] text-brand-pink hover:brightness-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C7 2 3.5 5.5 3.5 10.5 3.5 16 12 22 12 22s8.5-6 8.5-11.5C20.5 5.5 17 2 12 2z" /></svg>
                </a>

                <a href="#" className="w-9 h-9 rounded flex items-center justify-center bg-[#081017] text-brand-pink hover:brightness-110">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5A4.5 4.5 0 1016.5 13 4.5 4.5 0 0012 8.5z" /></svg>
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* divider */}
        <div className="mt-10 border-t border-white/6 pt-6">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="text-sm text-[#90a4c0]">© {year} {companyName}. All rights reserved.</div>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="text-[#90a4c0] footer-link">Privacy</a>
              <span className="text-[#5f748f]">•</span>
              <a href="/terms" className="text-[#90a4c0] footer-link">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
