import React from "react";
import "./WhyChooseUs.css";

import { Globe, Lightbulb, Users, Headphones } from "lucide-react";
import { motion } from "framer-motion";

// import polygonBg from "../../assets/hero/card_background.jpeg";
import teamImg from "../../assets/hero/employee_images.webp";
import ctaBg from "../../assets/hero/main-background.png";

export default function WhyChooseUs() {
  const features = [
    {
      title: "Proven Expertise",
      icon: <Globe className="w-8 h-8 text-brand-pink" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      line: true,
    },
    {
      title: "Innovation and Adaptability",
      icon: <Lightbulb className="w-8 h-8 text-brand-pink" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      line: true,
    },
    {
      title: "Comprehensive Services",
      icon: <Users className="w-8 h-8 text-brand-pink" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      line: true,
    },
    {
      title: "Dedicated Support",
      icon: <Headphones className="w-8 h-8 text-brand-pink" />,
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
    },
  ];

  /* Animation Variants */
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
    show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  const slideLeft = {
    hidden: { opacity: 0, x: -120 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  const slideRight = {
    hidden: { opacity: 0, x: 120 },
    show: { opacity: 1, x: 0, transition: { duration: 0.9, ease: "easeOut" } },
  };

  // const popUp = {
  //   hidden: { opacity: 0, scale: 0.85, y: 30 },
  //   show: {
  //     opacity: 1,
  //     scale: 1,
  //     y: 0,
  //     transition: { duration: 0.9, ease: "easeOut", delay: 0.2 },
  //   },
  // };

  return (
    <>
      {/* MAIN SECTION */}
      <section className="bg-[#0b0b0b] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">

          {/* LEFT SIDE IMAGE */}
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="relative lg:col-span-5"
          >
            <img
              src={teamImg}
              alt="Team"
              className="rounded-2xl w-full h-[500px] object-cover"
            />

            {/* RATING CARD */}
            {/* <motion.div
              variants={popUp}
              initial="hidden"
              whileInView="show"
              viewport={{ once: false, amount: 0.3 }}
              className="rating-card absolute -bottom-24 -left-30 rounded-xl overflow-hidden shadow-xl"
            >
              <div
                className="p-6 text-center"
                style={{
                  backgroundImage: `url(${polygonBg})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              >
                <div className="text-4xl font-bold mb-1">4.9</div>
                <div className="text-brand-pink text-lg">★★★★★</div>

                <div className="mt-3 font-semibold text-white text-sm fontfamily-content">
                  Client Ratings
                </div>
                <p className="text-gray-300 text-sm mt-2 leading-relaxed max-w-[180px] mx-auto fontfamily-content">
                  Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                </p>
              </div>
            </motion.div> */}
          </motion.div>

          {/* RIGHT SIDE CONTENT */}
          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0.3 }}
            className="lg:col-span-7 lg:pl-10 mt-14 lg:mt-0"
          >
            <span className="inline-flex items-center gap-2 text-2xl text-brand-pink fontfamily-content">
              <span className="w-2 h-2 rounded-full bg-pink-500 block "></span>
              Why Choose Us
            </span>

            <h2 className="text-4xl font-extrabold mt-3 mb-6 leading-tight fontfamily-content">
              Empowering Your Business to<br />Thrive
            </h2>

            <p className="text-gray-300 max-w-xl mb-10 fontfamily-content">
              Scelerisque placerat fames aliquam tortor augue interdum quisque proin.
              Justo ornare commodo cursus; sodales magnis nam.
            </p>

            {/* FEATURES */}
            {features.map((f, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false, amount: 0.3 }}
                className="mb-8"
              >
                <div className="flex items-start gap-4">
                  <div>{f.icon}</div>

                  <div>
                    <h4 className="font-semibold text-lg fontfamily-content">{f.title}</h4>
                    <p className="text-gray-300 text-sm mt-1 max-w-lg fontfamily-content">
                      {f.desc}
                    </p>
                  </div>
                </div>

                {f.line && (
                  <div className="h-[1px] bg-[rgba(255,255,255,0.1)] mt-6"></div>
                )}
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* CTA BOTTOM SECTION */}
      <motion.section
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.3 }}
        className="bg-[#0b0b0b] py-4 text-white"
      >
        <div
          className="max-w-6xl max-h-[400px] mx-auto rounded-3xl overflow-hidden relative px-6 py-10 flex justify-center items-center"
          style={{
            backgroundImage: `url(${ctaBg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-[rgba(0,0,0,0.25)] backdrop-blur-md rounded-3xl px-10 py-12 text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 ">
              Unlock Your Potential, Reach Out <br /> and Transform Your Business!
            </h2>

            <p className="text-gray-100 mb-8 text-sm md:text-[15px] fontfamily-content">
              Commodo facilisis egestas maximus volutpat iaculis maecenas augue tortor aptent.
              Efficitur interdum laoreet ullamcorper dis velit purus praesent conubia magna.
            </p>

            <button className="bg-black text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-gray-100 transition fontfamily-content">
              Contact Us
            </button>
          </div>
        </div>
      </motion.section>
    </>
  );
}
