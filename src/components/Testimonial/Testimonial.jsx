import React from "react";
import { Star } from "lucide-react";
import "./Testimonial.css";
import ServicesLogo from "../../assets/team/services-logo.png";


/* =======================
   TESTIMONIAL DATA
======================= */
const TESTIMONIALS = [
  {
    name: "Sarah Johnson",
    role: "CEO, TechStart Inc",
    review:
      "Clixonic Media transformed our online presence. Our organic traffic increased by 300% in just 6 months!",
  },
  {
    name: "Michael Chen",
    role: "Marketing Director, GrowthHub",
    review:
      "Best ROI we've ever seen from a marketing agency. Their PPC campaigns are incredibly efficient.",
  },
  {
    name: "Emily Rodriguez",
    role: "Founder, Bloom Boutique",
    review:
      "Professional, transparent, and results-driven. They truly care about our success.",
  },
];

/* =======================
   BRAND LOGOS
======================= */
const BRANDS = [
  ServicesLogo,
  ServicesLogo,
  ServicesLogo,
  ServicesLogo,
  ServicesLogo,
  ServicesLogo,
  ServicesLogo,
  ServicesLogo,
];


const Testimonial = () => {
  return (
    <section className="testimonial-section-light">
      <div className="container">

        {/* HEADER */}
        <div className="testimonial-header">
          <h2>What Our Clients Say</h2>
          <p>Real results from real businesses.</p>
        </div>

        {/* TESTIMONIAL CARDS */}
        <div className="testimonial-grid-light">
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card-light">
              <div className="stars">
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    size={18}
                    className="star-icon"
                  />
                ))}
              </div>

              <p className="review">“{t.review}”</p>

              <div className="client">
                <p className="name">{t.name}</p>
                <p className="role">{t.role}</p>
              </div>
            </div>
          ))}
        </div>

        {/* TRUSTED BY BRANDS */}
        <div className="brands-section">
          <h3>Trusted By Leading Brands</h3>

          <div className="brand-marquee">
            <div className="brand-track">
              {[...BRANDS, ...BRANDS].map((logo, i) => (
                <div className="brand-item" key={i}>
                  <img
                    src={logo}
                    alt={`Brand ${i + 1}`}
                    className="brand-logo"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Testimonial;
