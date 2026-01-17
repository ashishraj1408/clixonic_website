import React from "react";
import {
  Users,
  TrendingUp,
  Settings,
  FileText,
} from "lucide-react";

const FEATURES = [
  {
    title: "Expert Digital Marketers",
    desc: "Our team brings years of experience and proven strategies.",
    Icon: Users,
  },
  {
    title: "Proven ROI-Driven Strategy",
    desc: "We focus on results that matter: traffic, leads, and revenue.",
    Icon: TrendingUp,
  },
  {
    title: "Custom Solutions",
    desc: "Every business is unique. We create tailored strategies for your goals.",
    Icon: Settings,
  },
  {
    title: "Transparent Reporting",
    desc: "Clear, honest communication and detailed monthly reports.",
    Icon: FileText,
  },
];

const WhyChooseUs = () => {
  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            Why Choose Clixonic Media
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We're not just another agency. We're your growth partner.
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map(({ title, desc, Icon }, i) => (
            <div
              key={i}
              className="bg-white border border-gray-200 rounded-xl p-8
                         shadow-sm hover:shadow-md transition"
            >
              {/* ICON */}
              <div className="w-14 h-14 rounded-lg bg-[#00a896]/10
                              flex items-center justify-center mb-6">
                <Icon className="text-[#00a896]" size={26} />
              </div>

              {/* TEXT */}
              <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">
                {title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;
