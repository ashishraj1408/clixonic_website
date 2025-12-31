import React from "react";
import { motion } from "framer-motion";
import "./About.css";

import heroTeam from "../../assets/hero/employee_images.webp";
import { Lightbulb, ArrowRight } from "lucide-react";
import OurTeam from "../../components/OurTeam/OurTeam";
import BackgroundImg from "../../assets/hero/main-background.png";
import SEO from "../../components/SEO/SEO";

export default function About({ showHero = true, showTeam = true }) {
  return (
    <div className="bg-[#0b0b0b] text-white font-sans overflow-hidden">
      <SEO
        title="About Clixonic Media | Our Story & Team"
        description="Learn more about Clixonic Media, a digital marketing & web development agency helping brands grow online."
        keywords="about clixonic media, digital agency team, marketing experts"
      />

      {/* HERO */}
      {showHero && (
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl py-4 flex items-center justify-center 
                     bg-center bg-cover rounded-xl mx-auto mt-10 overflow-hidden"
          style={{ backgroundImage: `url(${BackgroundImg})` }}
        >
          <div className="backdrop-blur-xl px-20 py-10 rounded-xl text-center">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="mt-2 flex items-center gap-4 justify-center text-gray-200">
              Home <ArrowRight size={16} /> About Us
            </p>
          </div>
        </motion.div>
      )}

      <div className="max-w-7xl mx-auto px-6 py-10 mobile-screen-padding">
        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: false }}
          className="flex items-center justify-between py-6"
        >
          <div className="flex gap-4 items-center fontfamily-content flex-wrap ">
            {[
              "Creative Expertise",
              "Result-Driven Approach",
              "Client-Focused Team",
              "Innovative Solutions",
              "Digital Growth Mindset"
            ].map((item, i) => (
              <div
                key={i}
                className="logo-placeholder text-[#aaaeb7] font-bold text-md border p-2 shadow-md rounded-full"
              >
                {item}
              </div>
            ))}
          </div>
        </motion.div>



        {/* MAIN CONTENT */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* LEFT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="lg:col-span-6"
          >
            <div className="mb-4 flex text-2xl items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-pink-400 block" />
              <span className="text-brand-pink text-md">About Us</span>
            </div>

            <h1 className="text-4xl fontfamily-content md:text-5xl font-extrabold leading-tight mb-6">
              Transforming Businesses with <br /> Strategic Marketing
            </h1>

            <p className="text-gray-300 fontfamily-content mb-6 max-w-xl">
              At Clixonic Media, we help brands grow through strategic marketing, intelligent
              design, and result-driven digital solutions. Our team blends creativity with
              data analytics to build strong online visibility, boost customer engagement,
              and drive long-term business growth. Whether you're scaling a startup or
              elevating an established brand, we craft strategies that deliver measurable
              impact.
            </p>

            <button className="inline-block common-button text-[#aaaeb7] fontfamily-content  font-semibold">
              Learn More
            </button>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: false }}
            className="lg:col-span-6 relative"
          >
            <div className="relative mx-auto max-w-[720px] rounded-2xl overflow-hidden">
              <img
                src={heroTeam}
                alt="team"
                className="w-full h-[420px] object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>

        {/* THREE CARDS */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.25,
              },
            },
          }}
          className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {[
            {
              title: "Our Philosophy",
              desc:
                "We believe in combining creativity with data-backed decisions to build marketing strategies that actually move businesses forward.",
            },
            {
              title: "Our Vision",
              desc:
                "Our vision is to empower brands worldwide with powerful digital presence and scalable marketing systems that deliver long-term growth.",
            },
            {
              title: "Our Mission",
              desc:
                "Our mission is to help businesses attract more customers, strengthen their branding, and grow consistently through innovative digital solutions.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                show: { opacity: 1, y: 0 },
              }}
              className="feature-card p-6 rounded-2xl"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-full border border-1 flex items-center justify-center">
                  <Lightbulb className="w-6 h-6 text-smokey" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold fontfamily-content">{item.title}</h3>
                  <p className="text-gray-300 text-sm mt-2 fontfamily-content">{item.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* SHOW TEAM (conditional) */}
      {showTeam && <OurTeam />}
    </div>
  );
}
