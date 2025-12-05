import React, { useEffect, useState } from "react";
import { Avatar } from "antd";
import { motion } from "framer-motion";
import {
  Twitter,
  Linkedin,
  Facebook,
  Instagram,
  Youtube,
} from "lucide-react";

import heroBg from "../../assets/hero/main-background.png";
import ImgAvatar from "../../assets/hero/Team4.webp";
import "./Hero.css";

function Hero() {
  // rotating words
  const rotatingText = ["Website", "SEO", "Marketing", "Branding", "Strategy"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % rotatingText.length);
    }, 2000); // change every 2 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full bg-[#0b0b0b] text-white pt-20 pb-16 overflow-hidden mobile-screen-padding-hero">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* TITLE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Transform Your{" "}
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-gradient inline-block"
            >
              {rotatingText[index]}
            </motion.span>
            <br />
            With <span className="text-gradient">ClixonicMedia</span>
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-lg text-smokey">
            Viverra vitae congue eu consequat ac. Tortor condimentum lacinia quis vel eros donec.
            Faucibus interdum posuere lorem ipsum. Lacus sed turpis tincidunt id aliquet risus.
          </p>
        </motion.div>

        {/* AVATARS */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: false }}
          className="mt-10 flex items-center justify-center gap-6 flex-wrap"
        >
          <div className="flex items-center -space-x-4">
            {[1, 2, 3, 4].map((i) => (
              <Avatar key={i} size={56} className="ring-4 ring-brand-green">
                <img src={ImgAvatar} alt="Team Member" />
              </Avatar>
            ))}
          </div>

          <div>
            <h3 className="text-3xl font-bold">1500+</h3>
            <p className="text-smokey text-sm">Trusted Clients</p>
          </div>
        </motion.div>

        {/* BACKGROUND BOX */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: false }}
          className="mt-14 rounded-3xl p-8 md:p-10 relative overflow-hidden"
          style={{
            backgroundImage: `url(${heroBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="relative z-10">
            <div className="flex flex-wrap gap-3 justify-start">
              {[
                "On-Page SEO",
                "Digital Marketing",
                "Off-Page SEO",
                "Social Media Marketing",
                "Analytic and Reporting",
                "Influencer Marketing",
              ].map((item) => (
                <motion.span
                  key={item}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="px-5 py-2 rounded-full text-sm font-medium bg-black text-smokey"
                >
                  {item}
                </motion.span>
              ))}
            </div>

            {/* Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-10"
            >
              <button className="view-portfolio-btn px-8 py-3 bg-white text-black rounded-full font-semibold shadow hover:shadow-lg transition">
                View Portfolio
              </button>
            </motion.div>
          </div>
        </motion.div>

        {/* SOCIAL + FEATURES */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <nav className="flex items-center gap-3">
            {[Twitter, Linkedin, Facebook, Instagram, Youtube].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
              >
                <Icon size={18} />
              </a>
            ))}
          </nav>

          <div className="mt-4 md:mt-0 flex items-center justify-center gap-2 text-smokey text-sm flex-wrap">
            <span className="expert-container">Proven Result</span>
            <span className="expert-container">Experienced Team</span>
            <span className="expert-container">Affordable Pricing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
