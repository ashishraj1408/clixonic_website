import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import SEO from "../../components/SEO/SEO";
import RefreshPopup from "../../components/RefreshPopup/RefreshPopup";

// MAP IMAGE
import MapImage from "../../assets/hero/location.jpg";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact Clixonic Media | Book a Free Consultation"
        description="Get in touch with Clixonic Media to discuss your website, SEO, and digital marketing requirements."
        keywords="contact digital marketing agency, contact clixonic media, book free consultation"
      />

      <section className="w-full bg-white text-[#1e3a5f] pb-20">
        {/* HERO */}
        <div className="w-full py-4 flex items-center justify-center">
          <div className="bg-white/80 backdrop-blur-md px-10 md:px-20 py-10 rounded-xl text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 flex gap-2 items-center justify-center text-gray-600">
              Home <ArrowRight size={16} /> Contact Us
            </p>
          </div>
        </div>

        {/* INFO CARDS */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-6">
          {[
            {
              icon: <Phone size={28} className="text-[#00a896]" />,
              label: "Phone Number",
              value: "+91 7303351343",
            },
            {
              icon: <Mail size={28} className="text-[#00a896]" />,
              label: "Mail Address",
              value: "info@clixonicmedia.com",
            },
            {
              icon: <MapPin size={28} className="text-[#00a896]" />,
              label: "Location",
              value: "Delhi, India",
            },
            {
              icon: <Clock size={28} className="text-[#00a896]" />,
              label: "Work Days",
              value: "Mon–Fri, 09:00–17:00",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="border border-gray-200 bg-white p-6 rounded-xl
                         flex flex-col items-center text-center
                         hover:border-[#00a896] hover:shadow-md transition"
            >
              <div className="w-14 h-14 bg-[#00a896]/10
                              flex items-center justify-center
                              rounded-full mb-4">
                {item.icon}
              </div>

              <p className="text-gray-500 text-sm font-medium">{item.label}</p>
              <h4 className="text-lg mt-1 font-semibold">{item.value}</h4>
            </div>
          ))}
        </div>

        {/* MAIN CONTENT */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16 px-6">
          {/* LEFT */}
          <div>
            <p className="text-[#00a896] font-semibold flex items-center gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-[#00a896]" />
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold mt-4 leading-snug">
              Let’s Discuss How We Can <br />
              Support Your Success
            </h2>

            <p className="text-gray-600 mt-4 leading-relaxed">
              Tell us about your business, goals, and challenges.
              We’ll respond with a tailored SEO and digital marketing plan.
            </p>

            {/* MAP IMAGE */}
            <div className="mt-6 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
              <img
                src={MapImage}
                alt="Clixonic Media Location"
                className="w-full h-72 object-cover hover:scale-105 transition duration-500"
              />
            </div>
          </div>

          {/* RIGHT – INLINE FORM */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <RefreshPopup inline />
          </div>
        </div>
      </section>
    </>
  );
}
