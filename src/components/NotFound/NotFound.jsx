import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotFound.css";
import { Home, ArrowLeft, LifeBuoy } from "lucide-react";
import SEO from "../SEO/SEO";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <section className="min-h-screen bg-[#0b0b0b] text-white flex items-center justify-center px-6">
      <SEO
        title="Page Not Found | Clixonic Media"
        description="The page you are looking for does not exist."
        noIndex={true}
      />
      <div className="relative text-center max-w-lg">

        {/* Floating 404 */}
        <h1 className="floating-404 text-8xl font-extrabold bg-gradient-to-r from-pink-500 to-green-400 bg-clip-text text-transparent drop-shadow-lg">
          404
        </h1>

        {/* Subtitle */}
        <p className="text-gray-300 mt-4 text-lg">
          Oops! The page you're looking for doesn't exist.
        </p>

        {/* Glass card */}
        <div className="glass-card px-8 py-6 mt-8 rounded-2xl mx-auto shadow-2xl">
          <p className="text-gray-300 text-sm leading-relaxed">
            The page may be moved, deleted, or maybe the URL was mistyped.
          </p>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          {/* Go Home */}
          <button
            onClick={() => navigate("/")}
            className="btn-main flex items-center gap-2"
          >
            <Home size={18} />
            Go Home
          </button>

          {/* Go Back */}
          <button
            onClick={() => navigate(-1)}
            className="btn-outline flex items-center gap-2"
          >
            <ArrowLeft size={18} />
            Go Back
          </button>

          {/* Contact Support */}
          <button
            onClick={() => window.location.href = 'mailto:support@example.com'}
            className="btn-secondary flex items-center gap-2"
          >
            <LifeBuoy size={18} />
            Support
          </button>
        </div>

      </div>
    </section>
  );
}
