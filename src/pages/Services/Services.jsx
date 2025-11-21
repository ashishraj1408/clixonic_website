import React from "react";
import "./Services.css";

import centerPattern from "../../assets/hero/card_background.jpeg";
import statsBg from "../../assets/hero/card_background.jpeg";

import { FileText, Search, Share2, Users, BarChart2, ExternalLink } from "lucide-react";

const services = [
  { id: 1, title: "Content Marketing", icon: <FileText className="w-6 h-6 text-black" /> },
  { id: 2, title: "On-Page SEO", icon: <Search className="w-6 h-6 text-black" />, center: true },
  { id: 3, title: "Off-Page SEO", icon: <Search className="w-6 h-6 text-black" /> },
  { id: 4, title: "Social Media Marketing", icon: <Share2 className="w-6 h-6 text-black" /> },
  { id: 5, title: "Analytic Reporting", icon: <BarChart2 className="w-6 h-6 text-black" /> },
  { id: 6, title: "Influencer Marketing", icon: <Users className="w-6 h-6 text-black" /> },
];

export default function Services() {
  return (
    <section className="bg-[#0b0b0b] text-white py-16">
      <div className="max-w-6xl mx-auto px-6">

        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-2xl text-brand-pinks">
            <span className="w-3 h-3 rounded-full border-2 border-pink-400 block" />
            Services
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-10">
          Comprehensive Solutions for Your Digital Growth
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.id}
              className="relative overflow-hidden rounded-2xl border border-[rgba(255,255,255,0.05)] p-10 min-h-[220px] feature-card group"
            >
              {s.center && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-90"
                  style={{
                    backgroundImage: `url(${centerPattern})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                  }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center text-center">
                <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center mb-6">
                  {s.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3">{s.title}</h3>

                <p className="text-sm text-gray-300 max-w-[18rem]">
                  Rhoncus magna curabitur pretium non arcu magnis vestibulum cursus.
                </p>

                <a
                  className="mt-6 inline-flex items-center gap-2 text-md border p-2 rounded-full justify-center text-smokey  font-medium"
                  href="#"
                >
                  Learn More <ExternalLink className="w-4 h-4"/>
                </a>
              </div>
            </article>
          ))}
        </div>

        <div
          className="mt-12 rounded-2xl p-6 md:p-8 stats-wrapper"
          style={{
            backgroundImage: `url(${statsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="backdrop-overlay rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl text-smokey font-extrabold">20+</div>
              <div className="text-sm opacity-80">Years of Experience</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">173+</div>
              <div className="text-sm opacity-80">Projects Done</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">1.5K+</div>
              <div className="text-sm opacity-80">Trusted Clients</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">52+</div>
              <div className="text-sm opacity-80">Expert Team</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
