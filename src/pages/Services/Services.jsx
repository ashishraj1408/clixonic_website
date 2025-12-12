import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import "./Services.css";
import centerPattern from "../../assets/hero/card_background.jpeg";
import statsBg from "../../assets/hero/card_background.jpeg";
import BackgroundImg from "../../assets/hero/main-background.png";

import {
  FileText,
  Search,
  Share2,
  Users,
  BarChart2,
  ExternalLink,
  ArrowRight,
} from "lucide-react";

import OurProcess from "../../components/OurProcess/OurProcess";
import WhyChooseUs from "../../components/WhyChooseUs/WhyChooseUs";
import SEO from "../../components/SEO/SEO";

const services = [
  { id: 1, title: "Content Marketing", icon: <FileText className="w-6 h-6 text-black" /> },
  { id: 2, title: "On-Page SEO", icon: <Search className="w-6 h-6 text-black" />, center: true },
  { id: 3, title: "Off-Page SEO", icon: <Search className="w-6 h-6 text-black" /> },
  { id: 4, title: "Social Media Marketing", icon: <Share2 className="w-6 h-6 text-black" /> },
  { id: 5, title: "Analytic Reporting", icon: <BarChart2 className="w-6 h-6 text-black" /> },
  { id: 6, title: "Influencer Marketing", icon: <Users className="w-6 h-6 text-black" /> },
];

// Counter Animation
function Counter({ to = 1000, duration = 1200, startWhen = false }) {
  const [value, setValue] = useState(0);
  const rafRef = useRef(null);
  useEffect(() => {
    if (!startWhen) return;
    let start = null;
    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const progressRatio = Math.min(progress / duration, 1);
      const current = Math.floor(progressRatio * to);
      setValue(current);
      if (progress < duration) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setValue(to);
      }
    };
    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [startWhen, to, duration]);
  return <span>{value.toLocaleString()}</span>;
}

export default function Services({ showHero = true }) {
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  // Observe Stats Section
  useEffect(() => {
    if (!statsRef.current) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setStatsVisible(true);
            obs.disconnect();
          }
        });
      },
      { threshold: 0.25 }
    );
    obs.observe(statsRef.current);
    return () => obs.disconnect();
  }, []);

  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.14 },
    },
  };

  const card = {
    hidden: { opacity: 0, y: 28, scale: 0.98 },
    show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section className="bg-[#0b0b0b] text-white py-10">
      <SEO
        title="SEO, Web Development & Social Media Services | Clixonic Media"
        description="Clixonic Media provides SEO, website development, content marketing, and social media marketing services designed to help businesses grow and scale."
        keywords="seo services, web development, digital marketing, content creation, branding"
      />

      {/* HERO */}
      {showHero && (
        <motion.div
          initial={{ opacity: 0, scale: 0.995 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-7xl py-4 flex items-center justify-center bg-center bg-cover rounded-xl mx-auto overflow-hidden"
          style={{ backgroundImage: `url(${BackgroundImg})` }}
        >
          <div className="backdrop-blur-xl px-20 py-10 rounded-xl fontfamily-content text-center">
            <h1 className="text-4xl font-bold">Services</h1>
            <p className="mt-2 flex gap-4 items-center justify-center text-gray-200">
              Home <ArrowRight size={16} /> Services
            </p>
          </div>
        </motion.div>
      )}

      {/* MAIN SECTION */}
      <div className="max-w-6xl mx-auto px-6 py-10">
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 text-2xl text-brand-pink">
            <span className="w-3 h-3 rounded-full border-2 border-pink-400 block" />
            Services
          </span>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold text-center mb-10 fontfamily-content"
        >
          Smart Digital Solutions Designed to Grow Your Business
        </motion.h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((s) => (
            <motion.article
              key={s.id}
              variants={card}
              whileHover={{ scale: 1.02, translateY: -6 }}
              className="relative overflow-hidden rounded-2xl border p-10 min-h-[220px] service-feature-card group"
            >
              {s.center && (
                <div
                  className="absolute inset-0 rounded-2xl opacity-80"
                  style={{
                    backgroundImage: `url(${centerPattern})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    zIndex: 0,
                    transform: "scale(1.05)",
                    filter: "brightness(0.95)",
                  }}
                />
              )}

              <div className="relative z-10 flex flex-col items-center text-center service-feature-content">
                <div className="w-14 h-14 rounded-full bg-brand-green flex items-center justify-center mb-6">
                  {s.icon}
                </div>

                <h3 className="text-xl font-semibold mb-3 fontfamily-content">{s.title}</h3>

                {/* Updated REAL content for each service */}
                <p className="text-sm text-gray-300 max-w-[18rem] fontfamily-content">
                  {s.title === "Content Marketing" &&
                    "We create high-quality content that attracts the right audience, builds trust, and converts visitors into loyal customers."}

                  {s.title === "On-Page SEO" &&
                    "We optimize your website’s structure, content, and technical elements to improve rankings, visibility, and organic traffic."}

                  {s.title === "Off-Page SEO" &&
                    "We strengthen your website’s authority with backlinks, reputation-building, and strategic online presence expansion."}

                  {s.title === "Social Media Marketing" &&
                    "We manage social platforms, create engaging content, and help your brand connect with customers across all channels."}

                  {s.title === "Analytic Reporting" &&
                    "We monitor performance, track KPIs, and deliver insights that help you make smarter, data-backed decisions."}

                  {s.title === "Influencer Marketing" &&
                    "We collaborate with authentic influencers to expand reach, build credibility, and boost your brand awareness."}
                </p>

                <a
                  className="mt-6 inline-flex fontfamily-content items-center gap-2 text-md border p-2 rounded-full justify-center text-smokey learn-more-btn font-medium"
                  href="#"
                >
                  Learn More <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* STATS */}
        <motion.div
          ref={statsRef}
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mt-12 rounded-2xl p-6 md:p-8 stats-wrapper"
          style={{
            backgroundImage: `url(${statsBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="backdrop-overlay rounded-2xl p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center text-white">
            <div>
              <div className="text-3xl md:text-4xl text-smokey font-extrabold">
                <Counter to={2} startWhen={statsVisible} />
                <span className="ml-1">+</span>
              </div>
              <div className="text-sm opacity-80 fontfamily-content">Years in Business</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">
                <Counter to={120} startWhen={statsVisible} />
                <span className="ml-1">+</span>
              </div>
              <div className="text-sm opacity-80 fontfamily-content">Projects Delivered</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">
                <Counter to={300} startWhen={statsVisible} />
                <span className="ml-1">+</span>
              </div>
              <div className="text-sm opacity-80 fontfamily-content">Happy Clients</div>
            </div>

            <div>
              <div className="text-3xl md:text-4xl font-extrabold">
                <Counter to={15} startWhen={statsVisible} />
                <span className="ml-1">+</span>
              </div>
              <div className="text-sm opacity-80 fontfamily-content">Expert Team</div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* PROCESS + WHY CHOOSE US */}
      <OurProcess />
      <WhyChooseUs />
    </section>
  );
}
