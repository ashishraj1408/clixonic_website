import React from "react";
import { Play, Star } from "lucide-react";
import "./EdTech.css";
import EdTechAbout from "../../components/EdTech/EdTechAbout";
import SEO from "../../components/SEO/SEO";
import EdTechSeoIndia from "../../components/EdTech/EdTechSeoIndia";

const EdTech = () => {
    return (
        <>
            <SEO
                title="SEO for EdTech | EdTech Marketing Strategies"
                description="Learn how SEO helps EdTech increase visibility, drive qualified leads, and scale organic growth with proven strategies and examples."
                keywords="edtech seo, seo for edtech, education seo, edtech marketing, saas seo"
            />

            <section className="edtech-hero">
                <div className="edtech-container">
                    {/* Left Content */}
                    <div className="edtech-content">
                        <p className="breadcrumb">
                            HOME <span>›</span> INDUSTRIES <span>›</span> EDUCATION <span>›</span> EDTECH
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
                            <span>
                                <Star size={20} className="star-icon" /> 
                            </span>
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
            <EdTechSeoIndia   />
        </>
    );
};

export default EdTech;
