import React, { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingButtons() {
  const [showTop, setShowTop] = useState(false);

  // show arrow when user scrolls down 200px
  useEffect(() => {
    const handleScroll = () => {
      setShowTop(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-19 right-4 flex flex-col gap-2 z-50">

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/917303351343?text=Hi%20I%20want%20to%20know%20more%20about%20your%20services"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-green-500 text-white shadow-xl hover:scale-110 transition-all"
      >
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
          alt="WhatsApp"
          className="w-8 h-8"
        />
      </a>

      {/* Back To Top Button */}
      {showTop && (
        <button
          onClick={scrollToTop}
          className="w-14 h-14 border-[#676767] border-1 flex items-center cursor-pointer justify-center rounded-full bg-brand-green text-black shadow-xl hover:scale-110 transition-all"
        >
          <ArrowUp />
        </button>
      )}

    </div>
  );
}
