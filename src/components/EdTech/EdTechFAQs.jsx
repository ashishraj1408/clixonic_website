import React, { useState, useCallback, useMemo, memo } from "react";
import { Plus, MessageSquare, Minus } from "lucide-react";
import "./EdTechCommon.css";

const faqData = [
    {
        id: 1,
        question: "What are education SEO services?",
        answer:
            "Education SEO services are specialized optimization strategies designed for schools, universities, online courses, and EdTech platforms. We improve your website's visibility in search engines so prospective students can easily find your institution when searching for programs, courses, or educational solutions.",
    },
    {
        id: 2,
        question: "How long does it take to see SEO results for educational institutions?",
        answer:
            "SEO is a long-term strategy. Most educational institutions start seeing meaningful improvements in organic traffic within 3-6 months, with significant ranking gains and enrollment impact typically visible in 6-12 months. Academic cycles and competition influence timelines.",
    },
    {
        id: 3,
        question: "Why is it important to do SEO for academic websites and institutions?",
        answer:
            "SEO increases online visibility, helping institutions reach prospective students, improve enrollment rates, and enhance their digital reputation. With 93% of student journeys starting with a search engine, being visible on Google is crucial for staying competitive in education.",
    },
    {
        id: 4,
        question: "Can SEO help attract international students?",
        answer:
            "Absolutely. We optimize for location-specific and program-specific keywords in multiple languages and countries. This helps your institution appear when international students search for study opportunities abroad, scholarships, or specific courses.",
    },
    {
        id: 5,
        question: "Does education SEO include local optimization?",
        answer:
            "Yes. For schools, colleges, and local training centers, we implement local SEO strategies including Google Business Profile optimization, location pages, citation building, and 'near me' search optimization to attract students from your surrounding area.",
    },
    {
        id: 6,
        question: "What is the difference between education SEO and regular SEO?",
        answer:
            "Education SEO focuses on academic cycles, student behavior patterns, program-specific keywords, and enrollment funnels. It requires understanding of application deadlines, course searches, scholarship queries, and competition analysis specific to educational institutions.",
    },
    {
        id: 7,
        question: "How do you measure SEO success for educational institutions?",
        answer:
            "We track organic traffic growth, keyword rankings for target programs, application form submissions, website engagement metrics, local search visibility, and ultimately enrollment conversions. Custom dashboards provide real-time insights into campaign performance.",
    },
    {
        id: 8,
        question: "Do you provide SEO services for online courses and e-learning platforms?",
        answer:
            "Yes, we specialize in SEO for online education platforms, MOOCs, course marketplaces, and e-learning websites. Our strategies focus on course discovery, instructor visibility, student reviews, and competitive positioning in the digital learning space.",
    },
    {
        id: 9,
        question: "Can SEO help with student enrollment and admissions?",
        answer:
            "Absolutely. Strategic SEO increases qualified traffic from prospective students actively searching for programs. By optimizing for enrollment-intent keywords and creating compelling content, we help institutions attract and convert more applications.",
    },
    {
        id: 10,
        question: "What is technical SEO for educational websites?",
        answer:
            "Technical SEO involves optimizing website speed, mobile responsiveness, site architecture, schema markup for courses and reviews, XML sitemaps, crawlability, and ensuring all technical elements meet search engine requirements for optimal performance.",
    },
    {
        id: 11,
        question: "Do you offer content marketing for educational institutions?",
        answer:
            "Yes, our content marketing services include blog writing, program pages optimization, student success stories, educational resources, infographics, video content, and comprehensive content strategies aligned with SEO goals and student journey mapping.",
    },
    {
        id: 12,
        question: "How much does education SEO cost?",
        answer:
            "Investment varies based on institution size, competition level, target markets, and scope of work. We offer customized packages starting from basic local optimization to comprehensive international campaigns. Contact us for a tailored proposal and pricing.",
    },
];

// Memoized Question Item Component
const QuestionItem = memo(({ faq, isActive, onClick }) => {
    return (
        <button
            onClick={onClick}
            className={`w-full text-left p-5 rounded-xl transition-all duration-200 ${isActive
                    ? "bg-gradient-to-br from-orange-500/20 to-orange-600/10 border-2 border-orange-500 shadow-lg shadow-orange-500/20"
                    : "bg-slate-800/50 border border-slate-700 hover:bg-slate-800/70 hover:border-slate-600 hover:shadow-md"
                }`}
        >
            <div className="flex items-center justify-between gap-4">
                <p className={`font-semibold text-sm md:text-base ${isActive ? "text-white" : "text-slate-300"}`}>
                    {faq.question}
                </p>
                {isActive ? (
                    <Minus
                        size={20}
                        className="transition-transform duration-200 flex-shrink-0 text-orange-400"
                    />
                ) : (
                    <Plus
                        size={20}
                        className="transition-transform duration-200 flex-shrink-0 text-slate-500"
                    />
                )}
            </div>
        </button>
    );
});

QuestionItem.displayName = "QuestionItem";

// Memoized Answer Display Component
const AnswerDisplay = memo(({ answer, onContact }) => {
    return (
        <div className="bg-gradient-to-br from-slate-800 to-slate-900 border border-slate-700 rounded-2xl shadow-2xl p-6 md:p-8 w-full">
            <div className="flex items-center gap-2 mb-6">
                <div className="w-1 h-8 bg-gradient-to-b from-orange-500 to-orange-600 rounded-full"></div>
                <h3 className="text-xl md:text-2xl font-bold text-white">Answer</h3>
            </div>
            <p className="text-slate-300 leading-relaxed mb-8 text-sm md:text-base">{answer}</p>
            <button
                onClick={() => window.dispatchEvent(new Event("open-refresh-popup"))}
                className="bg-gradient-to-r from-orange-500 to-orange-600 cursor-pointer hover:from-orange-600 hover:to-orange-700 text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 shadow-lg shadow-orange-500/30 hover:shadow-orange-500/40 w-full md:w-auto"
            >
                Contact Us
            </button>
        </div>
    );
});

AnswerDisplay.displayName = "AnswerDisplay";

// Memoized Empty State Component
const EmptyState = memo(() => {
    return (
        <div className="bg-slate-800/30 border-2 border-dashed border-slate-700 rounded-2xl w-full h-64 md:h-96 flex items-center justify-center">
            <div className="text-center px-4">
                <MessageSquare size={48} className="text-slate-600 mx-auto mb-3" />
                <p className="text-slate-500 text-sm md:text-base">Select a question to view the answer</p>
            </div>
        </div>
    );
});

EmptyState.displayName = "EmptyState";

const FAQs = () => {
    const [activeIndex, setActiveIndex] = useState(2);

    const handleClick = useCallback((index) => {
        setActiveIndex((prev) => (prev === index ? null : index));
    }, []);

    const handleContact = useCallback(() => {
        // Add your contact logic here
    }, []);

    const activeAnswer = useMemo(() => {
        return activeIndex !== null ? faqData[activeIndex].answer : null;
    }, [activeIndex]);

    return (
        <div className="bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 py-6 md:py-10">
            <div className="max-w-7xl mx-auto px-4 md:px-6">
                {/* Header */}
                <header className="text-center mb-12 md:mb-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent mb-3">
                        Frequently Asked Questions
                    </h2>
                    <p className="text-base md:text-lg text-slate-400 px-4">
                        Everything you need to know about our education SEO services
                    </p>
                </header>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                    {/* Left: Questions List with Scrollbar */}
                    <div className="space-y-3 h-[500px] md:h-[600px] overflow-y-scroll faq-scrollbar pr-2 md:pr-3">
                        {faqData.map((faq, index) => (
                            <QuestionItem
                                key={faq.id}
                                faq={faq}
                                isActive={activeIndex === index}
                                onClick={() => handleClick(index)}
                            />
                        ))}
                    </div>

                    {/* Right: Answer Display - Fixed Container */}
                    <div className="lg:sticky lg:top-8 h-fit">
                        {activeAnswer !== null ? (
                            <AnswerDisplay answer={activeAnswer} onContact={handleContact} />
                        ) : (
                            <EmptyState />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQs;