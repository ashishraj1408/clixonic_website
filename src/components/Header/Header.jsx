import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

import HeaderLogo from "../../assets/logo/header_logo.png";
import MobileLogo from "../../assets/logo/title_logo.png";
import { Phone, Mail } from "lucide-react";

const Header = () => {
  const [open, setOpen] = useState(false);

  const navClass = ({ isActive }) =>
    `text-[15px] font-medium transition-colors ${
      isActive ? "text-[#00a896]" : "text-gray-700 hover:text-[#00a896]"
    }`;

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-md">
        {/* 🔹 TOP BAR */}
        <div className="bg-[#1e3a5f] text-white text-sm">
          <div className="max-w-[1200px] mx-auto px-4 py-2 flex justify-between items-center">
            <div className="flex gap-6">
          <span className="flex items-center gap-2"><Phone size={16} /> +91 7303351343</span>
          <span className="flex items-center gap-2"><Mail size={16} /> info@clixonicmedia.com</span>
            </div>
            <div className="hidden md:block">
          Grow Your Business with Data-Driven Marketing
            </div>
          </div>
        </div>

        {/* 🔹 MAIN HEADER */}
      <div className="max-w-[1200px] mx-auto px-4">
        <div className="h-[72px] flex items-center justify-between">

          {/* LOGO */}
          <NavLink to="/" className="flex items-center">
            {/* Desktop */}
            <img
              src={HeaderLogo}
              alt="Clixonic Logo"
              className="hidden md:block h-[42px] object-contain"
            />
            {/* Mobile */}
            <img
              src={MobileLogo}
              alt="Clixonic Logo"
              className="block md:hidden h-[38px] object-contain"
            />
          </NavLink>

          {/* DESKTOP NAV */}
          <nav className="hidden md:flex items-center gap-8">
            <NavLink to="/" className={navClass}>Home</NavLink>
            <NavLink to="/about" className={navClass}>About</NavLink>
            <NavLink to="/services" className={navClass}>Services</NavLink>
            <NavLink to="/portfolio" className={navClass}>Portfolio</NavLink>
            <NavLink to="/pricing" className={navClass}>Pricing</NavLink>
            <NavLink to="/blog" className={navClass}>Blog</NavLink>
            <NavLink to="/contact" className={navClass}>Contact</NavLink>
          </nav>

          {/* CTA BUTTON */}
          <button
            onClick={() =>
              window.dispatchEvent(new Event("open-refresh-popup"))
            }
            className="hidden md:inline-block bg-[#ff6b35] cursor-pointer hover:bg-[#ff4d1c]
                       text-white px-6 py-2 rounded-md font-semibold
                       transition-all duration-300"
          >
            Get Free Consultation
          </button>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-800"
            aria-label="Toggle Menu"
          >
            <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path
                d={
                  open
                    ? "M6 18L18 6M6 6l12 12"
                    : "M4 7h16M4 12h16M4 17h16"
                }
              />
            </svg>
          </button>
        </div>
      </div>

      {/* 🔹 MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white border-t shadow-lg">
          <nav className="flex flex-col px-6 py-6 gap-4">
            {[
              ["Home", "/"],
              ["About", "/about"],
              ["Services", "/services"],
              ["Portfolio", "/portfolio"],
              ["Pricing", "/pricing"],
              ["Blog", "/blog"],
              ["Contact", "/contact"],
            ].map(([label, path]) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setOpen(false)}
                className="text-gray-700 text-[16px] font-medium"
              >
                {label}
              </NavLink>
            ))}

            <button
              onClick={() => {
                window.dispatchEvent(new Event("open-refresh-popup"));
                setOpen(false);
              }}
              className="mt-4 bg-[#ff6b35] get-free-header-btn cursor-pointer text-white py-3 rounded-md font-semibold"
            >
              Get Free Consultation
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
