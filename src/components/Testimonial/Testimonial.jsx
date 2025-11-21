import React, { useEffect, useState } from "react";
import { Star, Quote } from "lucide-react";
import "./Testimonial.css";

/* Use your uploaded image */
const avatarUrl = "/mnt/data/Team4.webp";

export default function Testimonial() {
  const data = [
    {
      name: "Sarah Johnson",
      role: "Marketing Director",
      image: avatarUrl,
      rating: 5,
      review:
        "Their strategy grew our organic traffic threefold within months — highly recommended!",
    },
    {
      name: "Michael Smith",
      role: "Founder",
      image: avatarUrl,
      rating: 5,
      review:
        "Hands-on, data-driven and reliable. Delivered ahead of schedule every time.",
    },
    {
      name: "Emily Davis",
      role: "CEO",
      image: avatarUrl,
      rating: 4,
      review:
        "Clear communication and measurable improvements. Solid partnership overall.",
    },
    {
      name: "Daniel Roberts",
      role: "Product Lead",
      image: avatarUrl,
      rating: 5,
      review:
        "Innovative ideas, fast execution and excellent reporting structure. Loved working with them.",
    },
    {
      name: "Priya Patel",
      role: "Operations Head",
      image: avatarUrl,
      rating: 5,
      review:
        "Professional team with deep industry understanding. They optimized our funnels perfectly.",
    },
    {
      name: "Lucas Martin",
      role: "Head of Growth",
      image: avatarUrl,
      rating: 5,
      review:
        "Creative and data-backed. Their dashboards saved us weeks of manual work.",
    },
    {
      name: "Anna Lee",
      role: "E-commerce Manager",
      image: avatarUrl,
      rating: 4,
      review:
        "Supportive team and good campaign performance. Would work again!",
    },
    {
      name: "Omar Farouk",
      role: "CTO",
      image: avatarUrl,
      rating: 5,
      review:
        "Great synergy with our engineering team. Seamless integration and strong analytics.",
    },
    {
      name: "Sofia Alvarez",
      role: "Brand Manager",
      image: avatarUrl,
      rating: 5,
      review:
        "Boosted our brand visibility massively. Strong creative direction.",
    },
  ];

  const [testimonials, setTestimonials] = useState([]);

  // 🔥 Safe shuffle - no Math.random inside render
  useEffect(() => {
    const arr = [...data];

    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }

    setTestimonials(arr);
  }, []);

  return (
    <section className="testimonial-section bg-[#0b0b0b] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 relative">

        <div className="text-center mb-12">
          <span className="inline-flex items-center gap-2 text-sm text-brand-pinks">
            <span className="w-2 h-2 rounded-full bg-brand-gradient block"></span>
            Testimonials
          </span>

          <h2 className="text-4xl font-extrabold mt-3">
            What Clients Say About Us
          </h2>

          <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm">
            Every reload gives a fresh random order for natural variety.
          </p>
        </div>

        {/* Smokey background */}
        <div className="smoke-bg" aria-hidden />

        {/* Masonry layout */}
        <div className="testimonial-grid">
          {testimonials.map((t, i) => {
            const offsetClass =
              i % 3 === 0
                ? "offset-up"
                : i % 3 === 1
                ? "offset-down"
                : "offset-middle";

            return (
              <article key={i} className={`testimonial-card ${offsetClass}`}>
                <Quote className="quote-icon" />

                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="avatar" />
                  <div>
                    <div className="text-lg font-semibold">{t.name}</div>
                    <div className="text-brand-pinks text-sm">{t.role}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-brand-pinks fill-pink-400"
                    />
                  ))}
                </div>

                <p className="text-gray-300 text-sm leading-relaxed">
                  {t.review}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
