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
        href="https://wa.me/919999999999"
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
          className="
    w-14 h-14
    flex items-center justify-center
    rounded-full
    border border-gray-200
    bg-white
    text-[#1e3a5f]
    shadow-md
    cursor-pointer
    transition-all duration-200
    hover:scale-110
    hover:bg-[#00a896]
    hover:text-white
    hover:shadow-lg
  "
        >
          <ArrowUp size={20} />
        </button>
      )}
    </div>
  );
}
