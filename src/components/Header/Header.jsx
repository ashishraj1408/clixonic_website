import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import HeaderLogo from "../../assets/logo/header_logo.png";
import MobileLogo from "../../assets/logo/title_logo.png";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 z-50 bg-[#0d0d0d]/95 backdrop-blur-md text-white w-full py-2">
      <div className="max-w-[1200px] border-[#676767] border mx-auto h-[75px] rounded-full flex items-center justify-between px-6 mobile-screen-header">

        {/* LOGO */}
        <NavLink to="/" className="flex items-center gap-3">
          {/* Desktop Logo */}
          <div className="hidden md:flex w-[150px] header-logo-div py-2 rounded-full items-center justify-center shadow">
            <img
              src={HeaderLogo}
              alt="logo"
              className="rounded-full py-2 px-2 header-logo"
            />
          </div>

          {/* Mobile Logo */}
          <div className="flex md:hidden w-[120px] py-2 items-center justify-center mobile-header-logo-div">
            <img
              src={MobileLogo}
              alt="mobile-logo"
              className="w-[60px] object-contain"
            />
          </div>
        </NavLink>

        {/* DESKTOP NAV */}
        <nav className="hidden md:flex items-center gap-8">

          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[18px] font-medium ${
                isActive ? "text-brand-pink" : "hover:text-brand-pink"
              }`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[18px] font-medium ${
                isActive ? "text-brand-pink" : "hover:text-brand-pink"
              }`
            }
          >
            About Us
          </NavLink>

          {/* SERVICES (CLICK → PAGE | HOVER → DROPDOWN) */}
          <div className="relative group">

            {/* CLICKABLE SERVICES */}
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `text-[18px] font-medium ${
                  isActive ? "text-brand-pink" : "hover:text-brand-pink"
                }`
              }
            >
              Services
            </NavLink>

            {/* HOVER DROPDOWN */}
            <div
              className="absolute left-1/2 -translate-x-1/2 top-full mt-2
                         bg-[#0d0d0d] border border-white/10 rounded-xl
                          min-w-[200px]
                         opacity-0 invisible
                         group-hover:opacity-100 group-hover:visible
                         transition-all duration-200 z-50"
            >
              <NavLink
                to="/edtech-seo"
                className="block text-center py-1 text-md hover:text-brand-pink"
              >
                EdTech SEO
              </NavLink>
            </div>
          </div>

          <NavLink
            to="/pages"
            className={({ isActive }) =>
              `text-[18px] font-medium ${
                isActive ? "text-brand-pink" : "hover:text-brand-pink"
              }`
            }
          >
            Pages
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[18px] font-medium ${
                isActive ? "text-brand-pink" : "hover:text-brand-pink"
              }`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA BUTTON */}
        <button
          onClick={() =>
            window.dispatchEvent(new Event("open-refresh-popup"))
          }
          className="hidden lg:inline-block px-8 py-3 rounded-full border-1 border cursor-pointer font-semibold"
        >
          Get Started
        </button>

        {/* MOBILE TOGGLE */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle Menu"
        >
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          >
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

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] px-6 py-4 border-t border-white/10">

          <NavLink
            to="/"
            className="block py-3 text-[18px]"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className="block py-3 text-[18px]"
            onClick={() => setOpen(false)}
          >
            About Us
          </NavLink>

          {/* MOBILE SERVICES */}
          <div className="py-3">
            <NavLink
              to="/services"
              className="text-[18px] font-medium block mb-2"
              onClick={() => setOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/edtech-seo"
              className="block pl-4 py-2 text-[16px] hover:text-brand-pink border border-white/10 rounded-lg"
              onClick={() => setOpen(false)}
            >
              EdTech SEO
            </NavLink>
          </div>

          <NavLink
            to="/pages"
            className="block py-3 text-[18px]"
            onClick={() => setOpen(false)}
          >
            Pages
          </NavLink>

          <NavLink
            to="/contact"
            className="block py-3 text-[18px]"
            onClick={() => setOpen(false)}
          >
            Contact
          </NavLink>

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
