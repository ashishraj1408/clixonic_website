import React from "react";
import { Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import AfricaAmerican from "../../assets/team/african-american.webp";
import BusinessWorking from "../../assets/team/business-working.webp";
import KingChess from "../../assets/team/king-chess.webp";

export default function Insights() {
  const blogs = [
    {
      id: 1,
      title: "Creating Compelling Content That Convert",
      date: "August 11, 2024",
      img: AfricaAmerican, 
      desc: "Curabitur dictum dui nisi lacinia; facilisis iaculis. Ipsum tempor class eu integer ridiculus. Class himenaeos nullam lectus sodales purus nunc....",
    },
    {
      id: 2,
      title: "Getting Started with Google Ads",
      date: "August 11, 2024",
      img: BusinessWorking, 
      desc: "Curabitur dictum dui nisi lacinia; facilisis iaculis. Ipsum tempor class eu integer ridiculus. Class himenaeos nullam lectus sodales purus nunc....",
    },
    {
      id: 3,
      title: "The Power of Influencer Marketing in 2024",
      date: "August 11, 2024",
      img: KingChess, 
      desc: "Curabitur dictum dui nisi lacinia; facilisis iaculis. Ipsum tempor class eu integer ridiculus. Class himenaeos nullam lectus sodales purus nunc....",
    },
  ];

  return (
    <section className="bg-[#0b0b0b] text-white py-10 ">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-12">
          <p className="flex items-center justify-center gap-2 text-brand-pink text-lg">
            <span className="w-3 h-3 border-2 border-pink-400 rounded-full"></span>
            Insight
          </p>
          <h1 className="text-4xl md:text-5xl font-extrabold mt-2">
            Access Our Comprehensive Blog Archive
          </h1>
        </div>

        {/* Blog Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="relative rounded-3xl overflow-hidden shadow-lg bg-black/30 backdrop-blur-md group"
            >
              <img
                src={blog.img}
                alt={blog.title}
                className="w-full h-[380px] object-cover group-hover:scale-105 transition"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/90"></div>

              {/* Text Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-2xl font-bold mb-3 fontfamily-content">{blog.title}</h3>

                {/* Date */}
                <div className="flex items-center gap-2 text-sm mb-3 fontfamily-content opacity-80">
                  <Clock className="w-4 h-4 " />
                  {blog.date}
                </div>

                {/* Description */}
                <p className="text-sm text-gray-300 mb-4 fontfamily-content">{blog.desc}</p>

                {/* Bottom actions */}
                <div className="flex items-center justify-between text-sm">
                  <a
                    href="#"
                    className="flex fontfamily-content items-center gap-1 hover:underline text-white font-medium"
                  >
                    Read More <ArrowUpRight className="w-4 h-4" />
                  </a>

                  <div className="flex items-center gap-1 opacity-80">
                    <MessageCircle className="w-4 h-4" />
                    <span>0</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
