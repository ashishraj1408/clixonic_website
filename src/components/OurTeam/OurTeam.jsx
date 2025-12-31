// src/components/OurTeam/OurTeam.jsx
import React, { useState, useEffect } from "react";
import { Linkedin, X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import team1 from "../../assets/team/Team1.webp";
import team2 from "../../assets/team/Team2.webp";
import team3 from "../../assets/team/Team3.webp";
import team4 from "../../assets/team/Team4.webp";

import "./OurTeam.css";
import WhyChooseUs from "../WhyChooseUs/WhyChooseUs";
import OurProcess from "../OurProcess/OurProcess";

const team = [
  { name: "Jhon Doe", role: "Ceo & Founder", img: team1 },
  { name: "Peter Willson", role: "Co-Founder", img: team4 },
  { name: "Marry Adams", role: "Designer", img: team3 },
  { name: "Sarah Jane", role: "Developer", img: team2 },
  { name: "Jessica Gillbert", role: "Business Manager", img: team3 },
  { name: "William", role: "Business Manager", img: team4 },
  { name: "Katy Wayne", role: "Marketing", img: team2 },
  { name: "Bruce Parker", role: "Developer", img: team1 },
];

const SocialIcon = ({ children }) => (
  <div className="w-8 h-8 bg-[#2a2a2a] flex items-center justify-center rounded-full cursor-pointer hover:scale-105 transition">
    {children}
  </div>
);

// ⬇️ Single team card (UNCHANGED)
const TeamCard = ({ member, index, cardVariant }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      variants={cardVariant}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.2 }}
      transition={{ delay: index * 0.15 }}
      className="bg-[#111] rounded-2xl overflow-hidden shadow-xl border border-[#1b1b1b] team-card transition hover:scale-[1.03]"
    >
      <div className="relative">
        {!loaded && <div className="team-skeleton absolute inset-0" />}

        <img
          src={member.img}
          alt={member.name}
          loading="lazy"
          onLoad={() => setLoaded(true)}
          className={`w-full h-64 object-cover transition-opacity duration-300 ${
            loaded ? "opacity-100" : "opacity-0"
          }`}
        />

        <div className="absolute top-3 left-3 flex gap-2">
          <SocialIcon>
            <Linkedin size={20} color="#ff00b9b0" />
          </SocialIcon>
          <SocialIcon>
            <X size={20} color="#ff00b9b0" />
          </SocialIcon>
          <SocialIcon>
            <Instagram size={20} color="#ff00b9b0" />
          </SocialIcon>
        </div>
      </div>

      <div className="p-5 text-center bg-[#0f0f0f]/90 backdrop-blur">
        <h3 className="text-xl font-bold fontfamily-content">
          {member.name}
        </h3>
        <p className="text-sm text-gray-300 mt-1 fontfamily-content">
          {member.role}
        </p>
      </div>
    </motion.div>
  );
};

export default function OurTeam() {
  const [isMobile, setIsMobile] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 640);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const next = () =>
    setActiveIndex((i) => (i + 1) % team.length);
  const prev = () =>
    setActiveIndex((i) => (i === 0 ? team.length - 1 : i - 1));

  // Animation Variant (UNCHANGED)
  const cardVariant = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    show: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <section className="w-full bg-[#0b0b0b] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="text-center mb-14">
          <p className="text-brand-pink font-semibold text-2xl flex items-center fontfamily-content justify-center gap-2">
            <span className="w-3 h-3 rounded-full border-2 border-pink-400 block" />
            Our Team
          </p>
          <h2 className="text-4xl font-bold mt-2 fontfamily-content">
            Meet the Expert Behind Our Success
          </h2>
        </div>

        {/* DESKTOP GRID — UNCHANGED */}
        {!isMobile && (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
            {team.map((member, index) => (
              <TeamCard
                key={member.name + index}
                member={member}
                index={index}
                cardVariant={cardVariant}
              />
            ))}
          </div>
        )}

        {/* MOBILE — ONLY ADDITION */}
        {isMobile && (
          <>
            <TeamCard
              member={team[activeIndex]}
              index={0}
              cardVariant={cardVariant}
            />

            <div className="flex justify-center gap-6 mt-6">
              <button className="slider-btn" onClick={prev}>
                <ChevronLeft />
              </button>
              <button className="slider-btn" onClick={next}>
                <ChevronRight />
              </button>
            </div>
          </>
        )}
      </div>

      <WhyChooseUs />
      <OurProcess />
    </section>
  );
}
