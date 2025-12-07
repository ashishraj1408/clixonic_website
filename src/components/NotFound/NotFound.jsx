import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { Home, ArrowLeft, LifeBuoy } from "lucide-react";
import SEO from "../SEO/SEO";
import notFoundVideo from "../../assets/hero/404_Not_Found.mp4"; 

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#050505] text-white flex items-center justify-center px-4">
      <SEO
        title="Page Not Found | Clixonic Media"
        description="The page you are looking for does not exist."
        noIndex={true}
      />
      <div className="flex flex-col items-center gap-6 text-center max-w-xl">

        {/* 🔥 404 Heading Above Video */}
        <h1 className="text-7xl sm:text-8xl font-extrabold bg-gradient-to-r from-pink-500 to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
          404
        </h1>

        {/* Video Box */}
        <div className="rounded-3xl overflow-hidden shadow-[0_24px_60px_rgba(0,0,0,0.7)] bg-black/50">
          {/* 🔁 Video runs continuously */}
          <video
            src={notFoundVideo}
            autoPlay
            muted
            loop
            playsInline
            className="block w-[min(600px,90vw)] h-auto"
          />

        </div>

        {/* Subtitle Below */}
        <p className="text-gray-300 text-sm -mt-1">
          Page Not Found — Don't worry, you can go back or return home.
        </p>


        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 pt-2 justify-center">
          <button onClick={() => navigate("/")} className="btn-main flex cursor-pointer items-center gap-2">
            <Home size={18} /> Go Home
          </button>

          <button onClick={() => navigate(-1)} className="btn-outline cursor-pointer flex items-center gap-2">
            <ArrowLeft size={18} /> Go Back
          </button>

          <button
            onClick={() => (window.location.href = "mailto:support@example.com")}
            className="btn-secondary cursor-pointer flex items-center gap-2"
          >
            <LifeBuoy size={18} /> Support
          </button>
        </div>

      </div>
    </section>
  );
}
