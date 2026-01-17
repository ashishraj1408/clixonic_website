import React from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MousePointerClick,
  Share2,
  Layout,
  Palette,
  BarChart3,
  ArrowRight,
} from "lucide-react";
import SEO from "../../components/SEO/SEO";

/* 🔹 EXPORT SERVICES */
export const SERVICES = [
  {
    slug: "seo",
    title: "Search Engine Optimization (SEO)",
    desc: "Rank higher, attract intent-driven traffic, and dominate search results.",
    Icon: Search,
    points: [
      "Keyword Research",
      "On-Page SEO",
      "Technical SEO",
      "Content Optimization",
      "Link Building",
      "Local SEO",
    ],
    result: "Higher rankings, organic traffic & long-term growth",
  },
  {
    slug: "ppc",
    title: "Pay-Per-Click Advertising (PPC)",
    desc: "Scalable ad campaigns focused on conversions and ROI.",
    Icon: MousePointerClick,
    points: [
      "Google Ads",
      "Conversion Tracking",
      "A/B Testing",
      "Budget Optimization",
    ],
    result: "Instant traffic & predictable lead flow",
  },
  {
    slug: "smm",
    title: "Social Media Marketing (SMM)",
    desc: "Build authority, engagement, and consistent lead flow.",
    Icon: Share2,
    points: ["Content Strategy", "Community Management", "Paid Social Ads"],
    result: "Brand awareness & engagement growth",
  },
  {
    slug: "web",
    title: "Website Design & Development",
    desc: "High-converting, fast, and mobile-optimized websites.",
    Icon: Layout,
    points: [
      "UI/UX Design",
      "Responsive Layouts",
      "Performance Optimization",
      "SEO-Ready Code",
    ],
    result: "Higher conversions & faster load times",
  },
  {
    slug: "branding",
    title: "Branding & Creative Design",
    desc: "Logos, creatives, and visuals that build trust.",
    Icon: Palette,
    points: ["Logo Design", "Brand Guidelines", "Creative Assets"],
    result: "Strong brand identity & recall",
  },
  {
    slug: "analytics",
    title: "Analytics & Reporting",
    desc: "Clear insights, monthly reports, and tracking.",
    Icon: BarChart3,
    points: ["Google Analytics", "Conversion Reports", "Monthly Insights"],
    result: "Data-driven decisions",
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <>
      <SEO
        title="Digital Marketing Services | SEO, PPC, Web Design – Clixonic Media"
        description="Professional digital marketing services including SEO, PPC advertising, social media marketing, web design, branding, and analytics."
        image="https://clixonicmedia.com/services-og.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "ItemList",
          name: "Clixonic Media Services",
          itemListElement: SERVICES.map((service, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: service.title,
            url: `https://clixonicmedia.com/services/${service.slug}`,
          })),
        }}
      />
      <section className="bg-gray-50 py-14">
        <div className="max-w-7xl mx-auto px-4">
          {/* HEADER */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
              Our Digital Marketing Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              End-to-end solutions designed to attract, engage, and convert.
            </p>
          </div>

          {/* SERVICE CARDS */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <div
                key={service.slug}
                onClick={() => navigate(`/services/${service.slug}`)}
                className="bg-white border border-gray-200 rounded-xl p-8
                         shadow-sm hover:shadow-md transition cursor-pointer"
              >
                <div
                  className="w-14 h-14 rounded-lg bg-[#ff6b35]/10
                              flex items-center justify-center mb-6"
                >
                  <service.Icon size={26} className="text-[#ff6b35]" />
                </div>

                <h3 className="text-lg font-semibold text-[#1e3a5f] mb-3">
                  {service.title}
                </h3>

                <p className="text-gray-600 text-sm mb-6">{service.desc}</p>

                <span className="inline-flex items-center gap-2 text-[#00a896] font-semibold">
                  Learn More <ArrowRight size={16} />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
