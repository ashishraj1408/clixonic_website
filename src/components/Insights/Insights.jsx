import React from "react";
import { Clock, MessageCircle, ArrowUpRight } from "lucide-react";

import AfricaAmerican from "../../assets/team/african-american.webp";
import BusinessWorking from "../../assets/team/business-working.webp";
import KingChess from "../../assets/team/king-chess.webp";

export default function Insights() {
  const blogs = [
    {
      id: 1,
      title: "Creating Content That Actually Converts",
      date: "August 11, 2024",
      img: AfricaAmerican,
      desc:
        "Learn how to craft high-value content that captures attention, builds trust, and turns casual visitors into loyal customers.",
    },
    {
      id: 2,
      title: "How to Get Started with Google Ads in 2024",
      date: "August 11, 2024",
      img: BusinessWorking,
      desc:
        "A beginner-friendly guide to launching profitable Google Ads campaigns without wasting budget or targeting the wrong audience.",
    },
    {
      id: 3,
      title: "Why Influencer Marketing Is Dominating 2024",
      date: "August 11, 2024",
      img: KingChess,
      desc:
        "Influencers now shape buying decisions more than ever. Here’s how brands can leverage creators to grow faster and smarter.",
    },
  ];

  return (
    <section className="bg-[#f9f9f9] py-14">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#1e3a5f] mb-4">
            Latest Insights & Articles
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Actionable insights, strategies, and trends to help your business grow smarter.
          </p>
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="bg-white border border-gray-200 rounded-xl
                         overflow-hidden shadow-sm hover:shadow-md
                         transition"
            >
              {/* IMAGE */}
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-[220px] object-cover"
              />

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-xl font-semibold text-[#1e3a5f] mb-3">
                  {blog.title}
                </h3>

                {/* DATE */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <Clock size={14} />
                  {blog.date}
                </div>

                {/* DESCRIPTION */}
                <p className="text-sm text-gray-600 mb-6">
                  {blog.desc}
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="inline-flex items-center gap-2
                               text-[#00a896] font-semibold text-sm
                               hover:gap-3 transition-all"
                  >
                    Read More <ArrowUpRight size={16} />
                  </a>

                  <div className="flex items-center gap-1 text-gray-400 text-sm">
                    <MessageCircle size={16} />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
