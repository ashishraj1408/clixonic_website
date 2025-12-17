import React from "react";
import { Play } from "lucide-react";
import "./EdTech.css";
import EdTechAbout from "../../components/EdTech/EdTechAbout";

const EdTech = () => {
    return (
        <>
            <section className="edtech-hero">
                <div className="edtech-container">
                    {/* Left Content */}
                    <div className="edtech-content">
                        <p className="breadcrumb">
                            HOME <span>›</span> INDUSTRIES <span>›</span> EDUCATION <span>›</span>{" "}
                            EDTECH
                        </p>

                        <h1>
                            SEO for <span>EdTech</span> — Definition, Strategies, and Examples
                        </h1>

                        <p className="subtitle">
                            A complete mini-guide explaining how SEO works for EdTech brands,
                            how it drives qualified leads, and how you can scale visibility
                            organically.
                        </p>

                        <div className="experience-box">
                            <span>⭐</span>
                            <p>
                                INSIGHTS FROM <strong>61,900+</strong> HOURS OF TECHNOLOGY
                                MARKETING EXPERIENCE
                            </p>
                        </div>

                        <button className="edtech-service-btn">
                            View Our Services →
                        </button>
                    </div>

                    {/* Right Media */}
                    <div className="edtech-media">
                        <div className="video-card">
                            <button className="play-btn">
                                <Play size={28} />
                            </button>
                        </div>
                    </div>
                </div>
            </section>
            <EdTechAbout />
        </>
    );
};

export default EdTech;
