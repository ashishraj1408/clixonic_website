import React, { useMemo } from "react";
import { Star, Quote } from "lucide-react";
import { motion } from "framer-motion";
import "./Testimonial.css";
import avatarUrl from "../../assets/team/Team4.webp";

const DATA = [
  { id: "t-01", name: "Sarah Johnson", role: "Marketing Director", image: avatarUrl, rating: 5, review: "Their strategy grew our organic traffic threefold within months — highly recommended!" },
  { id: "t-02", name: "Michael Smith", role: "Founder", image: avatarUrl, rating: 5, review: "Hands-on, data-driven and reliable. Delivered ahead of schedule every time." },
  { id: "t-03", name: "Emily Davis", role: "CEO", image: avatarUrl, rating: 4, review: "Clear communication and measurable improvements. Solid partnership overall." },
  { id: "t-04", name: "Daniel Roberts", role: "Product Lead", image: avatarUrl, rating: 5, review: "Innovative ideas, fast execution and excellent reporting structure. Loved working with them." },
  { id: "t-05", name: "Priya Patel", role: "Operations Head", image: avatarUrl, rating: 5, review: "Professional team with deep industry understanding. They optimized our funnels perfectly." },
  { id: "t-06", name: "Lucas Martin", role: "Head of Growth", image: avatarUrl, rating: 5, review: "Creative and data-backed. Their dashboards saved us weeks of manual work." },
  { id: "t-07", name: "Anna Lee", role: "E-commerce Manager", image: avatarUrl, rating: 4, review: "Supportive team and good campaign performance. Would work again!" },
  { id: "t-08", name: "Omar Farouk", role: "CTO", image: avatarUrl, rating: 5, review: "Great synergy with our engineering team. Seamless integration and strong analytics." },
  { id: "t-09", name: "Sofia Alvarez", role: "Brand Manager", image: avatarUrl, rating: 5, review: "Boosted our brand visibility massively. Strong creative direction." }
];

function shuffleArray(arr) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function Testimonial() {
  const testimonials = useMemo(() => shuffleArray(DATA), []);

  const leftVariant = { hidden: { opacity: 0, x: -80, y: 40, scale: 0.96 }, show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } };
  const rightVariant = { hidden: { opacity: 0, x: 80, y: -40, scale: 0.96 }, show: { opacity: 1, x: 0, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } };
  const upVariant = { hidden: { opacity: 0, y: 80, scale: 0.96 }, show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.7, ease: "easeOut" } } };

  return (
    <section className="testimonial-section bg-[#0b0b0b] text-white py-10">
      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <span className="inline-flex items-center text-2xl gap-2 fontfamily-content text-brand-pink">
            <span className="w-2 h-2 rounded-full bg-pink-500 block"></span>
            Testimonials
          </span>

          <h2 className="text-4xl font-extrabold mt-3 fontfamily-content">What Clients Say About Us</h2>

          <p className="text-gray-300 mt-3 max-w-xl mx-auto text-sm fontfamily-content">Smooth animated zig-zag testimonial layout.</p>
        </div>

        <div className="smoke-bg" aria-hidden />

        <div className="testimonial-grid">
          {testimonials.map((t, i) => {
            let variant = upVariant;
            if (i % 3 === 0) variant = leftVariant;
            if (i % 3 === 1) variant = rightVariant;
            if (i % 3 === 2) variant = upVariant;

            return (
              <motion.article
                key={t.id}
                variants={variant}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, amount: 0.22 }}
                className="testimonial-card"
              >
                <Quote className="quote-icon" />

                <div className="flex items-center gap-4 mb-4">
                  <img src={t.image} alt={t.name} className="avatar" loading="lazy" />
                  <div>
                    <div className="text-lg font-semibold fontfamily-content">{t.name}</div>
                    <div className="text-brand-pink text-sm fontfamily-content">{t.role}</div>
                  </div>
                </div>

                <div className="flex gap-1 mb-3">
                  {Array.from({ length: t.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-brand-pink fontfamily-content fill-pink-400" />
                  ))}
                </div>

                <p className="text-gray-300 text-sm fontfamily-content leading-relaxed">{t.review}</p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default React.memo(Testimonial);
