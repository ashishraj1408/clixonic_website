// src/components/Header/Header.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../assets/logo/header_logo.png";
import MobileLogo from "../../assets/logo/title_logo.png";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", to: "/" },
    { name: "About Us", to: "/about" },
    { name: "Services", to: "/services" },
    { name: "Pages", to: "/pages" },
    { name: "Contact", to: "/contact" }
  ];

  return (
    <header className="fixed top-0 left-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md text-white w-full py-2">
      <div className="max-w-[1200px] border-[#676767] border-1 mx-auto h-[75px] rounded-full flex items-center justify-between px-6 mobile-screen-header">
        <NavLink to="/" className="flex items-center gap-3">

          {/* Desktop Logo */}
          <div className="hidden md:flex w-[150px] header-logo-div py-2 rounded-full items-center justify-center shadow">
            <img src={HeaderLogo} alt="logo" className="rounded-full py-2 px-2 header-logo" />
          </div>

          {/* Mobile Logo */}
          <div className="flex md:hidden w-[120px] py-2 items-center justify-center mobile-header-logo-div ">
            <img src={MobileLogo} alt="mobile-logo" className="w-[60px] object-contain " />
          </div>

        </NavLink>


        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) =>
                `text-[18px] font-medium ${isActive ? "text-brand-pink" : "hover:text-brand-pink"}`
              }
              onClick={() => setOpen(false)}
            >
              {l.name}
            </NavLink>
          ))}
        </nav>

        <button
          onClick={() => window.dispatchEvent(new Event("open-refresh-popup"))}
          className="hidden lg:inline-block px-8 py-3 rounded-full bg-brand-gradient cursor-pointer font-semibold"
        >
          Get Started
        </button>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d0d] px-6 py-4 border-t border-white/10">
          {navLinks.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              className={({ isActive }) => `block py-3 text-[18px] ${isActive ? "text-brand-pink" : "hover:text-brand-pink"}`}
              onClick={() => setOpen(false)}
            >
              {l.name}
            </NavLink>
          ))}
          <button
            onClick={() => {
              window.dispatchEvent(new Event("open-refresh-popup"));
              setOpen(false);
            }}
            className="block mt-4 px-6 py-3 bg-brand-gradient cursor-pointer rounded-full text-center font-semibold"
          >
            Get Started
          </button>

        </div>
      )}
    </header>
  );
}
