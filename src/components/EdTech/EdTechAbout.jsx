import React, { useRef, useState, useCallback, useEffect } from "react";
import {
  BookOpen,
  Target,
  Search,
  Settings,
  TrendingUp,
  Gem,
  FileText,
  Link2,
  Zap,
  FileSearch,
  BarChart3,
  Gauge,
  Wrench,
  Lightbulb,
  CheckCircle,
  Globe,
  Shield,
  Map,
  Rocket,
  Users,
  MessageSquare,
  Monitor,
} from "lucide-react";
import "./EdTechCommon.css";

const tocData = [
  {
    title: "SEO Fundamentals",
    icon: BookOpen,
    items: [
      { id: "seo101", label: "SEO ", badge: "Intro", icon: Target },
      { id: "what-is-seo", label: "What is SEO?", badge: "Core", icon: Search },
      { id: "how-works", label: "How It Works", badge: "Process", icon: Settings },
      { id: "why-matters", label: "Why It Matters", badge: "Impact", icon: TrendingUp },
    ],
  },
  {
    title: "SEO Strategy",
    icon: Rocket,
    items: [
      { id: "benefits", label: "Key Benefits", badge: "Value", icon: Gem },
      { id: "on-page", label: "On-page SEO", badge: "Content", icon: FileText },
      { id: "off-page", label: "Off-page SEO", badge: "Authority", icon: Link2 },
      { id: "technical", label: "Technical SEO", badge: "Speed", icon: Zap },
    ],
  },
  {
    title: "Advanced Topics",
    icon: BarChart3,
    items: [
      { id: "keywords", label: "Keyword Research", badge: "Research", icon: FileSearch },
      { id: "content", label: "Content Strategy", badge: "Planning", icon: Gauge },
      { id: "analytics", label: "Analytics", badge: "Data", icon: BarChart3 },
      { id: "tools", label: "Essential Tools", badge: "Resources", icon: Wrench },
    ],
  },
];

const EdTechAbout = () => {
  const contentRef = useRef(null);
  const sectionRefs = useRef({});
  const [openIndex, setOpenIndex] = useState(0);
  const [activeId, setActiveId] = useState("seo101");

  const scrollToSection = useCallback((id) => {
    const container = contentRef.current;
    const section = sectionRefs.current[id];
    if (!container || !section) return;

    const offsetTop = section.offsetTop - container.offsetTop - 32;

    container.scrollTo({
      top: offsetTop,
      behavior: "smooth",
    });

  }, []);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;

    let ticking = false;

    const handleScroll = () => {
      if (ticking) return;
      ticking = true;

      requestAnimationFrame(() => {
        const scrollTop = container.scrollTop;
        const threshold = 150;

        let closestId = "seo101"; 
        let minDistance = Infinity;

        Object.entries(sectionRefs.current).forEach(([id, el]) => {
          if (!el) return;
          const elementTop = el.offsetTop - container.offsetTop;
          const distance = Math.abs(elementTop - scrollTop);

          if (elementTop <= scrollTop + threshold && distance < minDistance) {
            minDistance = distance;
            closestId = id;
          }
        });

        // Only update if changed — prevents unnecessary re-renders
        setActiveId(prev => prev !== closestId ? closestId : prev);

        ticking = false;
      });
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll(); 

    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="edtech-about-section bg-gradient-to-br from-slate-900 to-slate-800 ">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          {/* Sidebar - Table of Contents */}
          <aside className="lg:sticky lg:top-32 h-fit">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                  <BookOpen size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-bold text-slate-100">Contents</h3>
              </div>

              {tocData.map((group, index) => {
                const GroupIcon = group.icon;
                return (
                  <div className="mb-4" key={group.title}>
                    <button
                      className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
                      onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                    >
                      <div className="flex items-center gap-2">
                        <GroupIcon size={20} className="text-teal-400" />
                        <span className="font-semibold text-sm text-slate-200">{group.title}</span>
                      </div>
                      <span
                        className={`text-teal-400 text-sm transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                          }`}
                      >
                        ▼
                      </span>
                    </button>

                    <div
                      className={`overflow-hidden transition-all duration-500 ${openIndex === index ? "max-h-96 mt-2" : "max-h-0"
                        }`}
                    >
                      <ul className="space-y-1">
                        {group.items.map((item) => {
                          const ItemIcon = item.icon;
                          return (
                            <li
                              key={item.id}
                              className={`px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3 ${activeId === item.id
                                ? "bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-l-4 border-teal-400"
                                : "hover:bg-slate-800/30 border-l-4 border-transparent"
                                }`}
                              onClick={() => scrollToSection(item.id)}
                            >
                              <ItemIcon
                                size={16}
                                className={`transition-all ${activeId === item.id
                                  ? "text-teal-400 scale-110"
                                  : "text-slate-500 opacity-60"
                                  }`}
                              />
                              <div className="flex-1 min-w-0">
                                <div
                                  className={`text-sm font-medium truncate ${activeId === item.id ? "text-teal-300" : "text-slate-300"
                                    }`}
                                >
                                  {item.label}
                                </div>
                              </div>
                              <span
                                className={`text-xs px-2 py-0.5 rounded-full font-medium ${activeId === item.id
                                  ? "bg-teal-500/30 text-teal-300"
                                  : "bg-slate-700/50 text-slate-400"
                                  }`}
                              >
                                {item.badge}
                              </span>
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  </div>
                );
              })}

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">
                  Stats
                </div>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Sections</span>
                    <span className="font-bold text-teal-400">12</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-400">Read Time</span>
                    <span className="font-bold text-emerald-400">15 min</span>
                  </div>
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
            <div
              ref={contentRef}
              className="h-[800px] overflow-y-auto p-4 space-y-12 custom-scrollbar"
            >
              {/* SEO 101 */}
              <section ref={(el) => (sectionRefs.current.seo101 = el)} className="scroll-mt-8">
                <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-2xl p-8 border border-teal-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center shadow-lg">
                      <Target size={32} className="text-white" />
                    </div>
                    <h2 className="text-3xl font-bold text-slate-100">SEO </h2>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    SEO is the foundation of scalable growth for EdTech platforms. It transforms how students, educators, and institutions discover your platform organically.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { metric: "↓ 60%", title: "Lower CAC", desc: "Reduce acquisition costs" },
                      { metric: "↑ 300%", title: "Trust", desc: "Build credibility" },
                      { metric: "∞", title: "Growth", desc: "Long-term traffic" },
                    ].map((stat, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group"
                      >
                        <div className="text-3xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">
                          {stat.metric}
                        </div>
                        <div className="text-slate-300 font-semibold mb-1">{stat.title}</div>
                        <div className="text-sm text-slate-400">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* What is SEO? */}
              <section ref={(el) => (sectionRefs.current["what-is-seo"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Search size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">What is SEO for EdTech?</h2>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    SEO for EdTech focuses on helping students, institutions, and educators discover platforms organically through search engines. It's about creating pathways that match learning intent with educational solutions.
                  </p>
                  <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-l-4 border-teal-400 rounded-r-xl p-6">
                    <div className="flex items-start gap-3">
                      <Lightbulb size={28} className="text-teal-400 mt-1" />
                      <div>
                        <div className="font-bold text-teal-300 mb-2">Key Insight</div>
                        <p className="text-slate-300">
                          EdTech SEO is not about traffic — it's about attracting{" "}
                          <span className="text-teal-400 font-semibold">qualified learners</span>.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* How SEO Works */}
              <section ref={(el) => (sectionRefs.current["how-works"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Settings size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">How SEO Works</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Search engines use complex algorithms to rank content. Understanding these pillars is crucial:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: Target, title: "Search Intent", desc: "Match user queries with answers" },
                      { icon: FileText, title: "Content Structure", desc: "Clear hierarchy & readability" },
                      { icon: Link2, title: "Authority", desc: "Quality backlinks & trust" },
                      { icon: Zap, title: "Performance", desc: "Speed & mobile optimization" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="flex items-start gap-4 bg-slate-800/50 p-5 rounded-xl border border-slate-700/30 hover:border-teal-500/30 transition-all"
                      >
                        <item.icon size={32} className="text-teal-400 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-200 mb-1">{item.title}</div>
                          <div className="text-sm text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Why SEO Matters */}
              <section ref={(el) => (sectionRefs.current["why-matters"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <TrendingUp size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Why SEO Matters</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    In a competitive landscape, organic visibility is your advantage. Users trust search results more than ads.
                  </p>
                  <div className="space-y-3">
                    {[
                      "93% of experiences begin with search",
                      "Organic drives 10x more traffic than social",
                      "75% never scroll past page one",
                      "Educational content has longer cycles",
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <CheckCircle size={20} className="text-teal-400 flex-shrink-0" />
                        <span>{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Key Benefits */}
              <section ref={(el) => (sectionRefs.current.benefits = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Gem size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Key Benefits</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    SEO creates a predictable pipeline while reducing reliance on paid ads.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: "Cost Efficiency", metric: "5x ROI", color: "from-green-400 to-emerald-500" },
                      { title: "Authority", metric: "↑ 200%", color: "from-blue-400 to-cyan-500" },
                      { title: "Conversion", metric: "14.6%", color: "from-purple-400 to-pink-500" },
                      { title: "Market Share", metric: "+35%", color: "from-orange-400 to-red-500" },
                    ].map((benefit, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/30 hover:border-slate-600 transition-all group"
                      >
                        <div className="text-sm text-slate-400 mb-2">{benefit.title}</div>
                        <div
                          className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}
                        >
                          {benefit.metric}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* On-page SEO */}
              <section ref={(el) => (sectionRefs.current["on-page"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">On-page SEO</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Optimize elements within your control: content, structure, metadata, and UX signals.
                  </p>
                  <div className="space-y-4">
                    {[
                      { title: "Content Optimization", desc: "Keywords, readability, E-A-T, coverage", color: "teal" },
                      { title: "Technical Elements", desc: "Title tags, meta, headers, schema", color: "emerald" },
                      { title: "User Experience", desc: "Speed, mobile, internal links, nav", color: "blue" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/30"
                      >
                        <div className={`font-semibold text-${item.color}-400 mb-2`}>
                          <CheckCircle size={18} className="inline mr-2" />
                          {item.title}
                        </div>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Off-page SEO */}
              <section ref={(el) => (sectionRefs.current["off-page"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Link2 size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Off-page SEO</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Build authority through external signals. Show that others value your content.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-slate-800/30 rounded-xl p-6">
                    {[
                      { icon: Users, title: "Quality Backlinks", desc: "From .edu sites" },
                      { icon: MessageSquare, title: "Partnerships", desc: "With institutions" },
                      { icon: Globe, title: "Brand Mentions", desc: "Unlinked citations" },
                    ].map((item, i) => (
                      <div key={i}>
                        <item.icon size={32} className="text-teal-400 mx-auto mb-2" />
                        <div className="font-semibold text-slate-200 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-400">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Technical SEO */}
              <section ref={(el) => (sectionRefs.current.technical = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Zap size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Technical SEO</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    The foundation that makes content discoverable. Without it, great content won't rank.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: Rocket, label: "Page Speed", value: "<2s" },
                      { icon: Monitor, label: "Mobile", value: "95+" },
                      { icon: Shield, label: "HTTPS", value: "Secure" },
                      { icon: Map, label: "Sitemap", value: "XML" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/30 hover:border-teal-500/30 transition-all"
                      >
                        <item.icon size={32} className="text-teal-400 mx-auto mb-2" />
                        <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                        <div className="font-bold text-teal-400">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Keyword Research */}
              <section ref={(el) => (sectionRefs.current.keywords = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <FileSearch size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Keyword Research</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Identify what learners search for and the competitive landscape around those terms.
                  </p>
                  <div className="space-y-3">
                    {[
                      { num: "1", title: "Seed keywords", desc: "Core topics in your niche", color: "teal" },
                      { num: "2", title: "Search intent", desc: "Informational vs transactional", color: "emerald" },
                      { num: "3", title: "Competition", desc: "Find low-difficulty opportunities", color: "blue" },
                    ].map((step) => (
                      <div
                        key={step.num}
                        className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/30"
                      >
                        <div
                          className={`w-8 h-8 rounded-lg bg-${step.color}-500/20 flex items-center justify-center text-${step.color}-400 font-bold`}
                        >
                          {step.num}
                        </div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-200">{step.title}</div>
                          <div className="text-sm text-slate-400">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Content Strategy */}
              <section ref={(el) => (sectionRefs.current.content = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <Gauge size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Content Strategy</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Balance search demand with your unique value. Create content that educates and converts.
                  </p>
                  <div className="bg-gradient-to-br from-teal-500/10 to-blue-500/10 rounded-xl p-6 border border-teal-500/20">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-teal-300 mb-3">Content Types</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                          <li>• How-to guides</li>
                          <li>• Comparison articles</li>
                          <li>• Research reports</li>
                          <li>• Video tutorials</li>
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-blue-300 mb-3">Distribution</h4>
                        <ul className="space-y-2 text-sm text-slate-400">
                          <li>• Blog optimization</li>
                          <li>• Email sequences</li>
                          <li>• Social sharing</li>
                          <li>• Guest posts</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Analytics & Tracking */}
              <section ref={(el) => (sectionRefs.current.analytics = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <BarChart3 size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Analytics & Tracking</h2>
                  </div>
                  <p className="text-slate-300 mb-6">
                    Measure what matters. Track rankings, traffic, conversions, and user behavior.
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { metric: "Organic Traffic", tool: "Google Analytics" },
                      { metric: "Keyword Rankings", tool: "Search Console" },
                      { metric: "Conversions", tool: "Goal Tracking" },
                      { metric: "User Behavior", tool: "Heatmaps" },
                    ].map((item, i) => (
                      <div
                        key={i}
                        className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30"
                      >
                        <div className="text-slate-200 font-semibold mb-1">{item.metric}</div>
                        <div className="text-sm text-teal-400">{item.tool}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* Essential Tools */}
              <section ref={(el) => (sectionRefs.current.tools = el)} className="scroll-mt-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <Wrench size={36} className="text-teal-400" />
                    <h2 className="text-2xl font-bold text-slate-100">Essential Tools</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Recommended tools for EdTech SEO success.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Google Search Console", use: "Performance tracking", icon: BarChart3 },
                      { name: "Ahrefs", use: "Backlink analysis", icon: Link2 },
                      { name: "Semrush", use: "Keyword research", icon: Search },
                      { name: "Screaming Frog", use: "Technical audits", icon: FileSearch },
                    ].map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-xl border border-slate-700/30 hover:border-teal-500/30 transition-all"
                      >
                        <tool.icon size={32} className="text-teal-400 flex-shrink-0" />
                        <div>
                          <div className="font-semibold text-slate-200">{tool.name}</div>
                          <div className="text-sm text-slate-400">{tool.use}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EdTechAbout;