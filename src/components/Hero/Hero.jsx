import React from "react";
import { Avatar } from "antd";
import { Twitter, Linkedin, Facebook, Instagram, Youtube } from "lucide-react";
import heroBg from "../../assets/hero/main-background.png";
import ImgAvatar from "../../assets/hero/Team4.webp";

function Hero() {
    return (
        <section className="w-full bg-[#0b0b0b] text-white pt-20 pb-16">
            <div className="max-w-7xl mx-auto px-6">

                {/* TITLE */}
                <div className="text-center">
                    <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                        Transform Your{" "}
                        <span className="text-brand-pink">
                            Online Business
                        </span>
                        <br />
                        With <span className="text-brand-pink">ClixonicMedia</span>
                    </h1>

                    <p className="mt-6 max-w-3xl mx-auto text-lg text-smokey">
                        Viverra vitae congue eu consequat ac. Tortor condimentum lacinia quis vel eros donec.
                        Faucibus interdum posuere lorem ipsum. Lacus sed turpis tincidunt id aliquet risus.
                    </p>
                </div>

                {/* AVATAR GROUP */}
                <div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
                    <div className="flex items-center -space-x-4">
                        <Avatar size={56} className="ring-4 ring-brand-green">
                            <img src={ImgAvatar} alt="Team Member" />
                        </Avatar>
                        <Avatar size={56} className="ring-4 ring-brand-green">
                            <img src={ImgAvatar} alt="Team Member" />
                        </Avatar>
                        <Avatar size={56} className="ring-4 ring-brand-green">
                            <img src={ImgAvatar} alt="Team Member" />
                        </Avatar>
                        <Avatar size={56} className="ring-4 ring-brand-green">
                            <img src={ImgAvatar} alt="Team Member" />
                        </Avatar>
                    </div>

                    <div>
                        <h3 className="text-3xl font-bold">1500+</h3>
                        <p className="text-smokey text-sm">Trusted Clients</p>
                    </div>
                </div>

                {/* GREEN BACKGROUND BOX */}
                <div
                    className="mt-14 rounded-3xl p-8 md:p-10 relative overflow-hidden"
                    style={{
                        backgroundImage: `url(${heroBg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                    }}
                >
                    <div className="relative z-10">
                        <div className="flex flex-wrap gap-3 justify-start">
                            {[
                                "On-Page SEO",
                                "Digital Marketing",
                                "Off-Page SEO",
                                "Social Media Marketing",
                                "Analytic and Reporting",
                                "Influencer Marketing",
                            ].map((item) => (
                                <span
                                    key={item}
                                    className="px-5 py-2 rounded-full text-sm font-medium bg-black text-smokey"
                                >
                                    {item}
                                </span>
                            ))}
                        </div>

                        {/* Button */}
                        <div className="mt-10">
                            <button className="px-8 py-3 bg-white text-black rounded-full font-semibold shadow hover:shadow-lg transition">
                                View Portfolio
                            </button>
                        </div>

                        {/* Play Button */}
                        <button
                            className="absolute bottom-8 right-8 w-14 h-14 rounded-full bg-brand-gradient flex items-center justify-center shadow-xl"
                            aria-label="Play"
                        >
                            <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
                                <path d="M9 6l10 6-10 6V6z" />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* SOCIAL + BOTTOM FEATURES */}
                <div className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6">
                    {/* Social icons */}
                    <nav aria-label="Hero social links" className="flex items-center gap-3">
                        <a
                            href="https://twitter.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Twitter"
                            className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                        >
                            <Twitter size={18} />
                        </a>

                        <a
                            href="https://linkedin.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                            className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                        >
                            <Linkedin size={18} />
                        </a>

                        <a
                            href="https://facebook.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Facebook"
                            className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                        >
                            <Facebook size={18} />
                        </a>

                        <a
                            href="https://instagram.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="Instagram"
                            className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                        >
                            <Instagram size={18} />
                        </a>

                        <a
                            href="https://youtube.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="YouTube"
                            className="w-10 h-10 rounded-full bg-[#081017] gradient-border flex items-center justify-center text-brand-solid-pink hover:brightness-110 transition"
                        >
                            <Youtube size={18} />
                        </a>
                    </nav>

                    {/* Bottom features */}
                    <div className="mt-4 md:mt-0 flex items-center justify-center gap-6 text-smokey text-sm flex-wrap">
                        <span>Proven Result</span>
                        <span>Experienced Team</span>
                        <span>Affordable Pricing</span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
