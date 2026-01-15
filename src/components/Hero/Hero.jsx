// src/components/Hero/Hero.jsx
import React from "react";
import { Target, FileText, TrendingUp, Settings } from "lucide-react";

const Hero = () => {
  return (
    <section className="w-full bg-white py-14">
      <div className="max-w-6xl mx-auto px-4 text-center">
        {/* HEADING */}
        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-[#1e3a5f]">
          Grow Your Business with{" "}
          <span className="text-[#00a896]">Data-Driven</span>
          <br />
          Digital Marketing
        </h1>

        {/* SUBTITLE */}
        <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
          At Clixonic Media, we help brands scale with performance-focused SEO,
          PPC, SMO, Web Design & Branding.
        </p>

        {/* CTA BUTTONS */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <button
            onClick={() =>
              window.dispatchEvent(new Event("open-refresh-popup"))
            }
            className="bg-[#ff6b35] hover:bg-[#ff4d1c]
                       text-white px-8 py-3 rounded-md
                       font-semibold transition-all duration-300
                       inline-flex items-center justify-center gap-2"
          >
            Get a Free Consultation →
          </button>

          <button
            onClick={() => (window.location.href = "/services")}
            className="border-2 border-[#1e3a5f]
                       text-[#1e3a5f] px-8 py-3 rounded-md
                       font-semibold hover:bg-[#1e3a5f]
                       hover:text-white transition-all duration-300"
          >
            View Services
          </button>
        </div>

        {/* FEATURES */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-10">
          {[
            {
              label: "Result-Driven Strategies",
              Icon: Target,
            },
            {
              label: "Transparent Reporting",
              Icon: FileText,
            },
            {
              label: "ROI-Focused Campaigns",
              Icon: TrendingUp,
            },
            {
              label: "Custom Growth Plans",
              Icon: Settings,
            },
          ].map(({ label, Icon }, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center gap-4"
            >
              {/* ICON CIRCLE */}
              <div className="w-16 h-16 rounded-full bg-[#00a896] flex items-center justify-center">
                <Icon size={28} className="text-white" />
              </div>

              {/* LABEL */}
              <p className="text-sm font-semibold text-[#1e3a5f]">{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
