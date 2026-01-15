import React, { useState } from "react";
import { Check, ArrowRight, ChevronDown } from "lucide-react";

const PLANS = [
  {
    name: "Starter Plan",
    subtitle: "Small Businesses & Startups",
    price: "Custom",
    features: [
      "Basic SEO Optimization",
      "Social Media Management (2 platforms)",
      "Monthly Performance Report",
      "Email Support",
      "Basic Website Audit",
    ],
    cta: "Request Quote",
    highlight: false,
  },
  {
    name: "Growth Plan",
    subtitle: "Growing Brands",
    price: "Custom",
    features: [
      "Advanced SEO & Content Strategy",
      "PPC Campaign Management",
      "Social Media Marketing (All platforms)",
      "Custom Website Development",
      "Bi-weekly Strategy Calls",
      "Priority Support",
      "Detailed Analytics Dashboard",
    ],
    cta: "Request Quote",
    highlight: true,
  },
  {
    name: "Enterprise Plan",
    subtitle: "High-Scale Businesses",
    price: "Custom",
    features: [
      "Full-Service Digital Marketing",
      "Dedicated Account Manager",
      "Custom Strategy & Execution",
      "Advanced Analytics & Reporting",
      "Weekly Strategy Sessions",
      "24/7 Priority Support",
      "White-Label Solutions",
      "API Integration",
    ],
    cta: "Book Strategy Call",
    highlight: false,
  },
];

const FAQS = [
  {
    q: "Do you offer monthly contracts?",
    a: "Yes! We offer flexible month-to-month contracts with no long-term lock-ins.",
  },
  {
    q: "What's included in the pricing?",
    a: "All plans include strategy development, implementation, monthly reporting, and dedicated support.",
  },
  {
    q: "Can I upgrade or downgrade my plan?",
    a: "Absolutely! You can change your plan anytime as your business grows.",
  },
];

export default function Pricing() {
  const [open, setOpen] = useState(null);

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1e3a5f] mb-4">
            Flexible Pricing for Every Business
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Choose the plan that fits your needs. All plans include transparent
            reporting and dedicated support.
          </p>
        </div>

        {/* PRICING CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {PLANS.map((plan, i) => (
            <div
              key={i}
              className={`relative rounded-xl border p-8 shadow-sm transition
                ${plan.highlight
                  ? "border-[#00a896] ring-2 ring-[#00a896]"
                  : "border-gray-200"
                }`}
            >
              {plan.highlight && (
                <span className="absolute top-4 right-4 bg-[#ff6b35] text-white text-xs font-bold px-3 py-1 rounded">
                  POPULAR
                </span>
              )}

              <h3 className="text-xl font-semibold text-[#1e3a5f] mb-1">
                {plan.name}
              </h3>
              <p className="text-sm text-gray-500 mb-4">
                {plan.subtitle}
              </p>

              <div className="text-3xl font-bold text-[#00a896] mb-6">
                {plan.price}
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((f, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm text-gray-600">
                    <Check className="text-[#00a896]" size={18} />
                    {f}
                  </li>
                ))}
              </ul>

              <button
                onClick={() =>
                  window.dispatchEvent(new Event("open-refresh-popup"))
                }
                className={`w-full flex items-center justify-center gap-2 px-6 py-3 rounded-md font-semibold transition
                  ${plan.highlight
                    ? "bg-[#ff6b35] text-white hover:bg-[#e65c2e]"
                    : "bg-[#1e3a5f] text-white hover:bg-[#162c47]"
                  }`}
              >
                {plan.cta} <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* CUSTOM CTA */}
        <div className="mt-24 border border-[#00a896] rounded-xl p-12 text-center">
          <h2 className="text-3xl font-bold text-[#1e3a5f] mb-3">
            Need a Custom Solution?
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto mb-6">
            Every business is unique. Let's create a custom package tailored
            to your specific goals.
          </p>
          <button
            onClick={() =>
              window.dispatchEvent(new Event("open-refresh-popup"))
            }
            className="bg-[#ff6b35] hover:bg-[#e65c2e] text-white px-8 py-3 rounded-md font-semibold transition"
          >
            Contact Us for Custom Pricing →
          </button>
        </div>

        {/* FAQ */}
        <div className="mt-28 max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-[#1e3a5f] mb-10">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {FAQS.map((item, i) => (
              <div
                key={i}
                className="border border-gray-200 rounded-lg p-5 cursor-pointer"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-[#1e3a5f]">
                    {item.q}
                  </h4>
                  <ChevronDown
                    className={`transition ${open === i ? "rotate-180" : ""}`}
                  />
                </div>

                {open === i && (
                  <p className="text-gray-600 text-sm mt-3">
                    {item.a}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
