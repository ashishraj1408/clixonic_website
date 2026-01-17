import React from "react";
import { ArrowRight, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

import heroTeam from "../../assets/hero/employee_images.webp";
import OurTeam from "../../components/OurTeam/OurTeam";
import SEO from "../../components/SEO/SEO";

const About = ({ showHero = true, showTeam = true }) => {
  return (
    <div className="bg-white text-[#1e3a5f] overflow-hidden">

      <SEO
        title="About Clixonic Media | Our Story & Team"
        description="Learn more about Clixonic Media, a performance-driven digital marketing agency helping businesses grow smarter and faster."
        keywords="about clixonic media, digital marketing agency, performance marketing team"
      />

      {/* HERO */}
      {showHero && (
        <div className="w-full py-4">
          <div className="max-w-6xl mx-auto px-4 text-center bg-white/80 backdrop-blur-md rounded-xl py-6">
            <h1 className="text-4xl md:text-5xl font-bold">About Us</h1>
            <p className="mt-3 flex items-center justify-center gap-2 text-gray-600">
              Home <ArrowRight size={16} /> About Us
            </p>
          </div>
        </div>
      )}

      {/* TAGS */}
      <div className="max-w-6xl mx-auto px-4 py-10">
        <div className="flex flex-wrap justify-center gap-4">
          {[
            "Creative Expertise",
            "Result-Driven Approach",
            "Client-Focused Team",
            "Innovative Solutions",
            "Digital Growth Mindset",
          ].map((item, i) => (
            <span
              key={i}
              className="px-5 py-2 rounded-full border border-gray-200 text-sm font-medium text-gray-700"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

        {/* LEFT TEXT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="text-md font-semibold text-[#00a896]">
            About Clixonic Media
          </span>

          <h2 className="text-3xl md:text-4xl font-extrabold mt-3 mb-6">
            Helping Businesses Grow Smarter, Faster & More Profitably
          </h2>

          <p className="text-gray-600 mb-5 max-w-xl">
            <strong>Clixonic Media was founded with a simple goal:</strong> help
            businesses grow smarter, faster, and more profitably online.
          </p>

          <p className="text-gray-600 mb-5 max-w-xl">
            We’re a <strong>performance-driven digital marketing agency</strong>
            built for businesses that want measurable growth — not vanity
            metrics.
          </p>

          <p className="text-gray-600 mb-6 max-w-xl">
            By combining strategy, creativity, and data, we help brands stand
            out, attract the right audience, and convert traffic into real
            revenue.
          </p>

          <button className="px-7 py-3 rounded-md bg-[#ff6b35] text-white font-semibold hover:bg-[#ff4d1c] transition">
            Learn More
          </button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <img
            src={heroTeam}
            alt="Clixonic Media Team"
            className="w-full h-[420px] object-cover rounded-2xl shadow-lg"
          />
        </motion.div>
      </div>

      {/* THREE CARDS */}
      <div className="max-w-6xl mx-auto px-4 pb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          {
            title: "Who We Are",
            desc:
              "A performance-focused digital marketing agency built to deliver real, trackable growth for ambitious businesses.",
          },
          {
            title: "Our Vision",
            desc:
              "To help brands scale globally through smart marketing systems powered by strategy, creativity, and data.",
          },
          {
            title: "Our Mission",
            desc:
              "To turn traffic into revenue by helping businesses attract the right audience and convert with confidence.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition"
          >
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-[#00a896]/10 flex items-center justify-center">
                <Lightbulb className="text-[#00a896]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600">{item.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* TEAM */}
      {showTeam && <OurTeam />}
    </div>
  );
};

export default About;
