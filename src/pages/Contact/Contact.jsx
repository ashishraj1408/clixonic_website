// src/pages/Contact/Contact.jsx
import React from "react";
import { Phone, Mail, MapPin, Clock, ArrowRight } from "lucide-react";
import BackgroundImg from "../../assets/hero/main-background.png";
import SEO from "../../components/SEO/SEO";
import RefreshPopup from "../../components/RefreshPopup/RefreshPopup";

export default function Contact() {
  return (
    <>
      <div className="w-full bg-[#0b0b0b] text-white pb-20">
        <SEO
          title="Contact Clixonic Media | Book a Free Consultation"
          description="Get in touch with Clixonic Media to discuss your website, SEO, and digital marketing requirements."
          keywords="contact digital marketing agency, contact clixonic media, book free consultation"
        />

        {/* Hero Section */}
        <div
          className="w-full max-w-7xl py-4 flex items-center justify-center 
             bg-center bg-cover rounded-xl mx-auto mt-10 overflow-hidden"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
          }}
        >
          <div className="backdrop-blur-xl px-20 fontfamily-content py-10 rounded-xl text-center">
            <h1 className="text-4xl font-bold">Contact Us</h1>
            <p className="mt-2 flex gap-4 items-center justify-center text-gray-200">
              Home <ArrowRight size={16} /> Contact Us
            </p>
          </div>
        </div>

        {/* Contact Info Boxes */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-6 mt-14 px-6">
          {/* Phone */}
          <div className="border border-[#2a2a2a] p-6 rounded-xl flex flex-col items-center text-center hover:border-[#ff00b9] transition">
            <div className="w-14 h-14 bg-[#2a2a2a] flex items-center justify-center rounded-full mb-4">
              <Phone size={28} color="#ff00b9" />
            </div>
            <p className="text-gray-400 text-sm fontfamily-content">
              Phone Number
            </p>
            <h4 className="text-lg mt-1 font-semibold fontfamily-content">
              +123 123 123
            </h4>
          </div>

          {/* Email */}
          <div className="border border-[#2a2a2a] p-6 rounded-xl flex flex-col items-center text-center hover:border-[#ff00b9] transition">
            <div className="w-14 h-14 bg-[#2a2a2a] flex items-center justify-center rounded-full mb-4">
              <Mail size={28} color="#ff00b9" />
            </div>
            <p className="text-gray-400 text-sm fontfamily-content">
              Mail Address
            </p>
            <h4 className="text-lg mt-1 font-semibold fontfamily-content">
              aspire@dummy.com
            </h4>
          </div>

          {/* Location */}
          <div className="border border-[#2a2a2a] p-6 rounded-xl flex flex-col items-center text-center hover:border-[#ff00b9] transition">
            <div className="w-14 h-14 bg-[#2a2a2a] flex items-center justify-center rounded-full mb-4">
              <MapPin size={28} color="#ff00b9" />
            </div>
            <p className="text-gray-400 text-sm fontfamily-content">Delhi</p>
            <h4 className="text-lg mt-1 font-semibold fontfamily-content">
              Delhi, India
            </h4>
          </div>

          {/* Work Time */}
          <div className="border border-[#2a2a2a] p-6 rounded-xl flex flex-col items-center text-center hover:border-[#ff00b9] transition">
            <div className="w-14 h-14 bg-[#2a2a2a] flex items-center justify-center rounded-full mb-4">
              <Clock size={28} color="#ff00b9" />
            </div>
            <p className="text-gray-400 text-sm fontfamily-content">
              Work Days
            </p>
            <h4 className="text-lg mt-1 font-semibold fontfamily-content">
              Mon–Fri, 09:00–17:00
            </h4>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 mt-16 px-6">
          {/* Left Side */}
          <div>
            <p className="text-[#ff00b9] font-semibold flex items-center fontfamily-content gap-2">
              <span className="w-3 h-3 rounded-full border-2 border-[#ff00b9]"></span>{" "}
              Get In Touch
            </p>

            <h2 className="text-4xl font-bold mt-4 fontfamily-content leading-snug">
              Let's Discuss How We Can <br />
              Support Your Success
            </h2>

            <p className="text-gray-400 mt-4 fontfamily-content leading-relaxed">
              Tell us about your business, your goals, and the challenges you’re
              facing. We’ll come back with a tailored plan to help you grow
              using SEO, web design and digital marketing.
            </p>

            {/* Google Map */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19814.71711962913!2d-0.1277585!3d51.5033248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTHCsDMwJzA5LjYiTiAwwrAwNycyNy4xIlc!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              className="w-full h-72 rounded-xl mt-6"
              loading="lazy"
            ></iframe>
          </div>

          {/* Right Side – reuse RefreshPopup form inline */}
          <RefreshPopup inline />
        </div>
      </div>
    </>
  );
}
