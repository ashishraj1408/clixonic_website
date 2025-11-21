import React from "react";
import "./About.css";

import heroTeam from "../../assets/hero/employee_images.webp";
import { Lightbulb } from "lucide-react";

export default function About() {
    return (
        <div className="bg-[#0b0b0b] min-h-screen text-white font-sans">
            <div className="max-w-7xl mx-auto px-6 py-10">

                {/* Top logos row */}
                <div className="flex items-center justify-between py-6">
                    <div className="flex gap-4 items-center">
                        <div className="logo-placeholder text-white font-bold text-lg border p-2 shadow-md rounded-full">Logoipsum</div>
                        <div className="logo-placeholder text-white font-bold text-lg border p-2 shadow-md rounded-full">Logoipsum</div>
                        <div className="logo-placeholder text-white font-bold text-lg border p-2 shadow-md rounded-full">Logoipsum</div>
                        <div className="logo-placeholder text-white font-bold text-lg border p-2 shadow-md rounded-full">Logoipsum</div>
                        <div className="logo-placeholder text-white font-bold text-lg border p-2 shadow-md rounded-full">Logoipsum</div>
                    </div>
                </div>

                {/* Hero area: left text / right image */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* left content */}
                    <div className="lg:col-span-6">
                        <div className="mb-4 flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-brand-green inline-block" />
                            <span className="text-brand-pinks text-md">About Us</span>
                        </div>

                        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight mb-6">
                            Transforming Businesses with <br />
                            Strategic Marketing
                        </h1>

                        <p className="text-gray-300 mb-6 max-w-xl">
                            Massa habitant accumsan at hendrerit blandit tellus litora euismod justo. Pretium praesent pellentesque enim rhoncus laoreet natoque etiam pharetra. Purus primis pharetra maecenas a nunc feugiat accumsan.
                        </p>

                        <button className="inline-block bg-brand-green transition px-6 py-3 rounded-full text-black font-semibold">
                            Learn More
                        </button>
                    </div>

                    {/* right content */}
                    <div className="lg:col-span-6 relative">
                        <div className="relative mx-auto max-w-[720px] rounded-2xl overflow-hidden">
                            <img
                                src={heroTeam}
                                alt="team"
                                className="w-full h-[420px] object-cover rounded-2xl"
                            />

                        </div>
                    </div>
                </div>

                {/* three cards row */}
                <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="feature-card">
                        <div className="flex items-start gap-4">
                            <div className=" p-2 rounded-full bg-brand-green flex items-center justify-center">
                                <Lightbulb />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Our Philosophy</h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="flex items-start gap-4">
                            <div className=" p-2 rounded-full bg-brand-green flex items-center justify-center">
                                <Lightbulb />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Our Vision</h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="feature-card">
                        <div className="flex items-start gap-4">
                            <div className=" p-2 rounded-full bg-brand-green flex items-center justify-center">
                                <Lightbulb />
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold">Our Mission</h3>
                                <p className="text-gray-300 text-sm mt-2">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
}
