import React, { useState } from "react";
import HeaderLogo from "../../assets/logo/clixonic_media_logo.jpg";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);
  const navLinks = [
    { name: "Home", href: "/", active: true },
    { name: "About Us", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Pages", href: "/pages" },
    { name: "Contact", href: "/contact" }
  ];

  return (
    <header className="bg-[#0d0d0d] text-white w-full py-2">
      <div className="max-w-[1400px] border-[#292222] border-1 mx-auto h-[80px] rounded-full flex items-center justify-between px-6">
        <a href="/" className="flex items-center gap-3">
          <div className="w-[100px] h-[46px] py-2 rounded-full flex items-center justify-center shadow">
            {/* <span className="text-black font-extrabold text-xl">CM</span> */}
            <img src={HeaderLogo} alt="" className="rounded-full py-2 px-2" />
          </div>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[18px] font-medium ${l.active ? "text-brand-green" : "hover:text-brand-green"}`}
            >
              {l.name}
            </a>
          ))}
        </nav>

        <a href="/get-started" className="hidden lg:inline-block px-8 py-3 rounded-full bg-brand-gradient text-black font-semibold">
          Get Started
        </a>

        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
            <path d={open ? "M6 18L18 6M6 6l12 12" : "M4 7h16M4 12h16M4 17h16"} />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-[#0d0d0d] px-6 py-4 border-t border-white/10">
          {navLinks.map((l) => (
            <a key={l.href} href={l.href} className={`block py-3 text-[18px] ${l.active ? "text-brand-green" : "hover:text-brand-green"}`}>
              {l.name}
            </a>
          ))}
          <a href="/get-started" className="block mt-4 px-6 py-3 bg-brand-gradient text-black rounded-full text-center font-semibold">
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
