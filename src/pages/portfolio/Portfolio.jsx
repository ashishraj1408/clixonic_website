import React, { useState } from "react";
import { ArrowUpRight, Users, TrendingUp, Briefcase } from "lucide-react";
import ecommerceImg from "../../assets/team/ecommerce.webp";
import ppcImg from "../../assets/team/ppc-campaign.webp";
import instagramImg from "../../assets/team/instagram.webp";
import corporateImg from "../../assets/team/corporate.webp";
import brandImg from "../../assets/team/brand.webp";
import SEO from "../../components/SEO/SEO";

/* ---------------- DATA ---------------- */
const TABS = ["All Projects", "SEO", "PPC", "SMM", "Web Design", "Branding"];

const PROJECTS = [
  {
    id: 1,
    title: "E-commerce SEO Success",
    category: "SEO",
    image: ecommerceImg,
    client: "Fashion Retailer",
  },
  {
    id: 2,
    title: "PPC Campaign Optimization",
    category: "PPC",
    image: ppcImg,
    client: "SaaS Company",
  },
  {
    id: 3,
    title: "Instagram Growth Strategy",
    category: "SMM",
    image: instagramImg,
    client: "Lifestyle Brand",
  },
  {
    id: 4,
    title: "Corporate Website Redesign",
    category: "Web Design",
    image: corporateImg,
    client: "Tech Startup",
  },
  {
    id: 5,
    title: "Brand Identity Revamp",
    category: "Branding",
    image: brandImg,
    client: "Creative Agency",
  },
];

/* ---------------- COMPONENT ---------------- */
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All Projects");

  const filteredProjects =
    activeTab === "All Projects"
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === activeTab);

  return (
    <>
      <SEO
        title="Our Work & Case Studies | SEO, PPC & Web Design – Clixonic Media"
        description="Explore real SEO, PPC, social media, and web design case studies showcasing growth, traffic, and conversions."
        image="https://clixonicmedia.com/portfolio-og.jpg"
        schema={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Clixonic Media Portfolio",
          description:
            "Case studies and digital marketing projects by Clixonic Media",
          url: "https://clixonicmedia.com/portfolio",
        }}
      />
      <section className="bg-white text-[#1e3a5f]">
        {/* ---------- HEADER ---------- */}
        <div className="max-w-7xl mx-auto px-6 pt-12 pb-12 text-center">
          <h1 className="text-4xl font-bold mb-3">Our Work</h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore how we've helped businesses increase traffic, leads, and
            sales.
          </p>
        </div>

        {/* ---------- TABS ---------- */}
        <div className="flex flex-wrap justify-center gap-3 mb-14 px-4">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-md text-sm font-semibold border-[#b9b9b94d] border-1 transition
              ${
                activeTab === tab
                  ? "bg-[#00a896] text-white border-[#ffff]-[#00a896]"
                  : "bg-white border-[#ffff]-gray-300 text-gray-700 hover:border-[#ffff]-[#00a896]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* ---------- PROJECT GRID ---------- */}
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group bg-white border-[#ffff] rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* IMAGE */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[260px] object-cover group-hover:scale-105 transition duration-300"
                />

                <span className="absolute top-4 left-4 bg-[#ff6b35] text-white text-xs font-semibold px-3 py-1 rounded-full">
                  {project.category}
                </span>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{project.client}</p>

                <button className="inline-flex items-center gap-2 text-sm font-semibold text-[#00a896] hover:gap-3 transition-all">
                  View Case Study <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* ---------- STATS ---------- */}
        <div className="max-w-6xl mx-auto px-6 py-20 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <StatCard icon={<Users />} value="200+" label="Happy Clients" />
          <StatCard
            icon={<Briefcase />}
            value="500+"
            label="Projects Completed"
          />
          <StatCard icon={<TrendingUp />} value="350%" label="Average Growth" />
        </div>

        {/* ---------- CTA ---------- */}
        <div className="bg-[#1e3a5f] text-white py-20 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Success Story</h2>
          <p className="text-gray-200 mb-8">
            Let’s create results like these for your business.
          </p>
          <button className="bg-[#ff6b35] hover:bg-[#e65c2e] px-8 py-3 rounded-md font-semibold transition">
            Start Your Project
          </button>
        </div>
      </section>
    </>
  );
}

/* ---------------- STAT CARD ---------------- */
function StatCard({ icon, value, label }) {
  return (
    <div className="bg-white border-[#b9b9b94d] border-1 rounded-xl p-8 shadow-sm">
      <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center rounded-full bg-[#00a896]/10 text-[#00a896]">
        {icon}
      </div>
      <h3 className="text-3xl font-bold mb-1">{value}</h3>
      <p className="text-gray-600 text-sm">{label}</p>
    </div>
  );
}
