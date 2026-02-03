import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { SERVICES } from "./Services";

export default function ServiceDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const service = SERVICES.find((s) => s.slug === slug);

  /* 🔒 Safe redirect */
  useEffect(() => {
    if (!service) {
      navigate("/services");
    }
  }, [service, navigate]);

  if (!service) return null;

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="py-14 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* BACK */}
        <button
          onClick={() => navigate("/services")}
          className="flex items-center gap-2 text-[#00a896]
                     font-semibold mb-10"
        >
          <ArrowLeft size={18} /> Back to Services
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2
                        border rounded-2xl overflow-hidden">

          {/* LEFT */}
          <div className="p-10">
            <h1 className="text-3xl font-bold text-[#1e3a5f] mb-4">
              {service.title}
            </h1>

            <p className="text-gray-600 mb-6">
              {service.desc}
            </p>

            <ul className="space-y-3 mb-8">
              {service.points.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 text-sm text-gray-700"
                >
                  <Check size={18} className="text-[#00a896]" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="bg-gray-50 rounded-lg p-4 mb-8">
              <strong className="text-sm text-[#1e3a5f]">Result</strong>
              <p className="text-sm text-gray-600 mt-1">
                {service.result}
              </p>
            </div>

            <button
              className="bg-[#ff6b35] text-white px-6 py-3
                         rounded-md font-semibold cursor-pointer
                         hover:bg-[#e65c2e] transition"
            >
              Get Started →
            </button>
          </div>

          {/* RIGHT */}
          <div className="bg-gradient-to-br from-[#eef9ff] to-[#e6f3fb]
                          flex items-center justify-center">
            <div className="w-64 h-64 bg-white rounded-full shadow-xl" />
          </div>

        </div>
      </div>
    </motion.section>
  );
}
