import React from "react";
import { Users, FileText, Monitor } from "lucide-react";
import { motion } from "framer-motion";
import "./OurProcess.css";

export default function OurProcess() {
  const steps = [
    {
      id: "01",
      title: "Initial Consultation",
      icon: <Users className="w-12 h-12 text-brand-pink" />,
      desc:
        "We begin with a discovery session to understand your business, target audience, and growth goals. This helps us identify what’s working, what’s missing, and where the biggest opportunities lie.",
    },
    {
      id: "02",
      title: "Market Research",
      icon: <FileText className="w-12 h-12 text-brand-pink" />,
      desc:
        "We analyze your competition, industry trends, and customer behavior to uncover insights that guide a powerful and effective marketing strategy tailored to your business.",
    },
    {
      id: "03",
      title: "Strategy Development",
      icon: <Monitor className="w-12 h-12 text-brand-pink" />,
      desc:
        "Based on research, we create a clear, data-driven plan combining SEO, content, social media, and creative assets to help you attract qualified leads and grow consistently.",
    },
  ];

  const leftVariant = {
    hidden: { opacity: 0, x: -120 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 120 },
    show: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const bottomVariant = {
    hidden: { opacity: 0, y: 120 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="our-process-section bg-[#0b0b0b] text-white py-10">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Title */}
        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 text-2xl text-brand-pink">
            <span className="w-3 h-3 rounded-full border-2 border-pink-400 block fontfamily-content" />
            Our Process
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16 fontfamily-content">
          Step-by-Step to Achieving Your Goals
        </h2>

        {/* Step Numbers */}
        <div className="grid grid-cols-3 text-center mb-10">
          {steps.map((step, index) => (
            <div key={index}>
              <div className="flex items-center justify-center">
                <div className="process-line"></div>
                <h3 className="text-3xl font-extrabold mx-4">{step.id}</h3>
                <div className="process-line"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Card Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">

          {/* Card 1 */}
          <motion.div
            variants={leftVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="process-card p-10 rounded-2xl border border-[rgba(255,255,255,0.08)] text-center"
          >
            <div className="mb-6 flex justify-center">{steps[0].icon}</div>
            <h3 className="text-xl font-semibold mb-3 fontfamily-content">{steps[0].title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed fontfamily-content">
              {steps[0].desc}
            </p>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={bottomVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="process-card p-10 rounded-2xl border border-[rgba(255,255,255,0.08)] text-center"
          >
            <div className="mb-6 flex justify-center">{steps[1].icon}</div>
            <h3 className="text-xl font-semibold mb-3 fontfamily-content">{steps[1].title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed fontfamily-content">
              {steps[1].desc}
            </p>
          </motion.div>

          {/* Card 3 */}
          <motion.div
            variants={rightVariant}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="process-card p-10 rounded-2xl border border-[rgba(255,255,255,0.08)] text-center"
          >
            <div className="mb-6 flex justify-center">{steps[2].icon}</div>
            <h3 className="text-xl font-semibold mb-3 fontfamily-content">{steps[2].title}</h3>
            <p className="text-sm text-gray-300 leading-relaxed fontfamily-content">
              {steps[2].desc}
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
