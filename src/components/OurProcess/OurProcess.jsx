import React from "react";
import { Users, FileText, Monitor } from "lucide-react";
import "./OurProcess.css";

export default function OurProcess() {
  const steps = [
    {
      id: "01",
      title: "Initial Consultation",
      icon: <Users className="w-12 h-12 text-brand-green" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: "02",
      title: "Market Research",
      icon: <FileText className="w-12 h-12 text-brand-green" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
    {
      id: "03",
      title: "Strategy Development",
      icon: <Monitor className="w-12 h-12 text-brand-green" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-4">
          <span className="inline-flex items-center gap-2 text-2xl text-brand-pinks">
            <span className="w-3 h-3 rounded-full border-2 border-pink-400 block" />
            Our Process
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-extrabold text-center mb-16">
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
          {steps.map((step) => (
            <div
              key={step.id}
              className="process-card p-10 rounded-2xl border border-[rgba(255,255,255,0.08)] text-center"
            >
              <div className="mb-6 flex justify-center">{step.icon}</div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
