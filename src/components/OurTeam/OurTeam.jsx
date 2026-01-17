// src/components/OurTeam/OurTeam.jsx
import React, { useState, useEffect } from "react";
import { Linkedin, X, Instagram, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

import team1 from "../../assets/team/Team1.webp";
import team2 from "../../assets/team/Team2.webp";
import team3 from "../../assets/team/Team3.webp";
import team4 from "../../assets/team/Team4.webp";

import "./OurTeam.css";

const team = [
  {
    name: "John Anderson",
    role: "Founder & CEO",
    desc: "Digital marketing with a passion for helping businesses grow.",
    img: team1,
  },
  {
    name: "Sarah Mitchell",
    role: "Head of SEO",
    desc: "SEO expert who has helped hundreds of businesses rank on page 1 of Google.",
    img: team2,
  },
  {
    name: "David Kim",
    role: "PPC Strategist",
    desc: "Specialized in high-ROI ad campaigns with over $10M in managed ad spend.",
    img: team3,
  },
  {
    name: "Emily Foster",
    role: "Creative Director",
    desc: "Award-winning designer creating memorable brand experiences.",
    img: team4,
  },
];

const SocialIcon = ({ children }) => (
  <div className="social-icon">
    {children}
  </div>
);

const TeamCard = ({ member, index }) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, amount: 0.25 }}
      className="team-card-light"
    >
      <div className="team-img-wrapper">
        {!loaded && <div className="team-skeleton" />}

        <img
          src={member.img}
          alt={member.name}
          onLoad={() => setLoaded(true)}
          className={`team-img ${loaded ? "show" : ""}`}
        />

        <div className="team-socials">
          <SocialIcon><Linkedin size={18} /></SocialIcon>
          <SocialIcon><X size={18} /></SocialIcon>
          <SocialIcon><Instagram size={18} /></SocialIcon>
        </div>
      </div>

      <div className="team-info">
        <h3>{member.name}</h3>
        <p className="role">{member.role}</p>
        <p className="desc">{member.desc}</p>
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

  const next = () => setActiveIndex((i) => (i + 1) % team.length);
  const prev = () => setActiveIndex((i) => (i === 0 ? team.length - 1 : i - 1));

  return (
    <section className="team-section-light">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="team-title">Meet Our Team</h2>
          <p className="team-subtitle">
            Experts dedicated to your success.
          </p>
        </div>

        {/* Desktop Grid */}
        {!isMobile && (
          <div className="team-grid">
            {team.map((member, index) => (
              <TeamCard key={member.name} member={member} index={index} />
            ))}
          </div>
        )}

        {/* Mobile Slider */}
        {isMobile && (
          <>
            <TeamCard member={team[activeIndex]} index={0} />

            <div className="team-slider-controls">
              <button onClick={prev} className="slider-btn">
                <ChevronLeft />
              </button>
              <button onClick={next} className="slider-btn">
                <ChevronRight />
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
