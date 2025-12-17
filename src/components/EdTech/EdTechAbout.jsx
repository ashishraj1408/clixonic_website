import React, { useRef, useState, useCallback, useEffect } from "react";

const tocData = [
  {
    title: "SEO Fundamentals",
    icon: "📚",
    items: [
      { id: "seo101", label: "SEO 101", badge: "Intro", icon: "🎯" },
      { id: "what-is-seo", label: "What is SEO?", badge: "Core", icon: "🔍" },
      { id: "how-works", label: "How It Works", badge: "Process", icon: "⚙️" },
      { id: "why-matters", label: "Why It Matters", badge: "Impact", icon: "📈" },
    ],
  },
  {
    title: "SEO Strategy",
    icon: "🎨",
    items: [
      { id: "benefits", label: "Key Benefits", badge: "Value", icon: "💎" },
      { id: "on-page", label: "On-page SEO", badge: "Content", icon: "📝" },
      { id: "off-page", label: "Off-page SEO", badge: "Authority", icon: "🔗" },
      { id: "technical", label: "Technical SEO", badge: "Speed", icon: "⚡" },
    ],
  },
  {
    title: "Advanced Topics",
    icon: "🚀",
    items: [
      { id: "keywords", label: "Keyword Research", badge: "Research", icon: "🔎" },
      { id: "content", label: "Content Strategy", badge: "Planning", icon: "📊" },
      { id: "analytics", label: "Analytics", badge: "Data", icon: "📉" },
      { id: "tools", label: "Essential Tools", badge: "Resources", icon: "🛠️" },
    ],
  },
];

const EdTechAbout = () => {
  const contentRef = useRef(null);
  const sectionRefs = useRef({});
  const [openIndex, setOpenIndex] = useState(0);
  const [activeId, setActiveId] = useState("seo101");
  const [scrollProgress, setScrollProgress] = useState(0);

  const scrollToSection = useCallback((id) => {
    const container = contentRef.current;
    const section = sectionRefs.current[id];
    if (!container || !section) return;
    container.scrollTo({
      top: section.offsetTop - container.offsetTop - 16,
      behavior: "smooth",
    });
    setActiveId(id);
  }, []);

  useEffect(() => {
    const container = contentRef.current;
    if (!container) return;
    const handleScroll = () => {
      const scrollTop = container.scrollTop;
      const scrollHeight = container.scrollHeight - container.clientHeight;
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);
      const sections = Object.entries(sectionRefs.current);
      for (let i = sections.length - 1; i >= 0; i--) {
        const [id, element] = sections[i];
        if (element && element.offsetTop - container.offsetTop <= scrollTop + 100) {
          setActiveId(id);
          break;
        }
      }
    };
    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {width: 8px;}
        .custom-scrollbar::-webkit-scrollbar-track {background: #1e293b;}
        .custom-scrollbar::-webkit-scrollbar-thumb {background: linear-gradient(to bottom, #14b8a6, #10b981); border-radius: 4px;}
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {background: linear-gradient(to bottom, #0d9488, #059669);}
      `}</style>


      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[320px_1fr] gap-8">
          
          <aside className="lg:sticky lg:top-32 h-fit">
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-6 shadow-2xl border border-slate-700/50">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center">
                  <span className="text-xl">📑</span>
                </div>
                <h3 className="text-lg font-bold text-slate-100">Contents</h3>
              </div>

              {tocData.map((group, index) => (
                <div className="mb-4" key={group.title}>
                  <button
                    className="w-full flex items-center justify-between px-4 py-3 rounded-xl bg-slate-800/50 hover:bg-slate-700/50 transition-all duration-300"
                    onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-lg">{group.icon}</span>
                      <span className="font-semibold text-sm text-slate-200">{group.title}</span>
                    </div>
                    <span className={`text-teal-400 text-sm transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`}>▼</span>
                  </button>

                  <div className={`overflow-hidden transition-all duration-500 ${openIndex === index ? 'max-h-96 mt-2' : 'max-h-0'}`}>
                    <ul className="space-y-1">
                      {group.items.map((item) => (
                        <li
                          key={item.id}
                          className={`px-4 py-2.5 rounded-lg cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                            activeId === item.id
                              ? 'bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-l-4 border-teal-400'
                              : 'hover:bg-slate-800/30 border-l-4 border-transparent'
                          }`}
                          onClick={() => scrollToSection(item.id)}
                        >
                          <span className={`text-sm ${activeId === item.id ? 'scale-110' : 'opacity-50'}`}>{item.icon}</span>
                          <div className="flex-1 min-w-0">
                            <div className={`text-sm font-medium truncate ${activeId === item.id ? 'text-teal-300' : 'text-slate-300'}`}>
                              {item.label}
                            </div>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full font-medium ${
                            activeId === item.id ? 'bg-teal-500/30 text-teal-300' : 'bg-slate-700/50 text-slate-400'
                          }`}>
                            {item.badge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}

              <div className="mt-6 pt-6 border-t border-slate-700/50">
                <div className="text-xs text-slate-400 mb-3 font-semibold uppercase tracking-wider">Stats</div>
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

          <div className="bg-gradient-to-br from-slate-900/50 to-slate-800/50 rounded-2xl shadow-2xl border border-slate-700/50 overflow-hidden">
            <div ref={contentRef} className="h-[800px] overflow-y-auto p-8 space-y-8 custom-scrollbar">
              
              <section ref={(el) => (sectionRefs.current.seo101 = el)} className="scroll-mt-8">
                <div className="bg-gradient-to-br from-teal-500/10 to-emerald-500/10 rounded-2xl p-8 border border-teal-500/20">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center text-2xl shadow-lg">🎯</div>
                    <h2 className="text-3xl font-bold text-slate-100">SEO 101</h2>
                  </div>
                  <p className="text-lg text-slate-300 leading-relaxed mb-6">
                    SEO is the foundation of scalable growth for EdTech platforms. It transforms how students, educators, and institutions discover your platform organically.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {[
                      { metric: "↓ 60%", title: "Lower CAC", desc: "Reduce acquisition costs" },
                      { metric: "↑ 300%", title: "Trust", desc: "Build credibility" },
                      { metric: "∞", title: "Growth", desc: "Long-term traffic" }
                    ].map((stat, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/50 hover:border-teal-500/50 transition-all duration-300 group">
                        <div className="text-3xl font-bold text-teal-400 mb-2 group-hover:scale-110 transition-transform">{stat.metric}</div>
                        <div className="text-slate-300 font-semibold mb-1">{stat.title}</div>
                        <div className="text-sm text-slate-400">{stat.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current["what-is-seo"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔍</span>
                    <h2 className="text-2xl font-bold text-slate-100">What is SEO for EdTech?</h2>
                  </div>
                  <p className="text-slate-300 leading-relaxed mb-6">
                    SEO for EdTech focuses on helping students, institutions, and educators discover platforms organically through search engines. It's about creating pathways that match learning intent with educational solutions.
                  </p>
                  <div className="bg-gradient-to-r from-teal-500/20 to-emerald-500/20 border-l-4 border-teal-400 rounded-r-xl p-6">
                    <div className="flex items-start gap-3">
                      <span className="text-2xl">💡</span>
                      <div>
                        <div className="font-bold text-teal-300 mb-2">Key Insight</div>
                        <p className="text-slate-300">EdTech SEO is not about traffic — it's about attracting <span className="text-teal-400 font-semibold">qualified learners</span>.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current["how-works"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">⚙️</span>
                    <h2 className="text-2xl font-bold text-slate-100">How SEO Works</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Search engines use complex algorithms to rank content. Understanding these pillars is crucial:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { icon: "🎯", title: "Search Intent", desc: "Match user queries with answers" },
                      { icon: "📐", title: "Content Structure", desc: "Clear hierarchy & readability" },
                      { icon: "🔗", title: "Authority", desc: "Quality backlinks & trust" },
                      { icon: "⚡", title: "Performance", desc: "Speed & mobile optimization" }
                    ].map((item, i) => (
                      <div key={i} className="flex items-start gap-4 bg-slate-800/50 p-5 rounded-xl border border-slate-700/30 hover:border-teal-500/30 transition-all">
                        <div className="text-3xl">{item.icon}</div>
                        <div>
                          <div className="font-semibold text-slate-200 mb-1">{item.title}</div>
                          <div className="text-sm text-slate-400">{item.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current["why-matters"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📈</span>
                    <h2 className="text-2xl font-bold text-slate-100">Why SEO Matters</h2>
                  </div>
                  <p className="text-slate-300 mb-6">In a competitive landscape, organic visibility is your advantage. Users trust search results more than ads.</p>
                  <div className="space-y-3">
                    {[
                      "93% of experiences begin with search",
                      "Organic drives 10x more traffic than social",
                      "75% never scroll past page one",
                      "Educational content has longer cycles"
                    ].map((stat, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-300">
                        <div className="w-6 h-6 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-sm font-bold">✓</div>
                        <span>{stat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current.benefits = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">💎</span>
                    <h2 className="text-2xl font-bold text-slate-100">Key Benefits</h2>
                  </div>
                  <p className="text-slate-300 mb-6">SEO creates a predictable pipeline while reducing reliance on paid ads.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { title: "Cost Efficiency", metric: "5x ROI", color: "from-green-400 to-emerald-500" },
                      { title: "Authority", metric: "↑ 200%", color: "from-blue-400 to-cyan-500" },
                      { title: "Conversion", metric: "14.6%", color: "from-purple-400 to-pink-500" },
                      { title: "Market Share", metric: "+35%", color: "from-orange-400 to-red-500" }
                    ].map((benefit, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/30 hover:border-slate-600 transition-all group">
                        <div className="text-sm text-slate-400 mb-2">{benefit.title}</div>
                        <div className={`text-2xl font-bold bg-gradient-to-r ${benefit.color} bg-clip-text text-transparent`}>{benefit.metric}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current["on-page"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📝</span>
                    <h2 className="text-2xl font-bold text-slate-100">On-page SEO</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Optimize elements within your control: content, structure, metadata, and UX signals.</p>
                  <div className="space-y-4">
                    {[
                      { title: "Content Optimization", desc: "Keywords, readability, E-A-T, coverage", color: "teal" },
                      { title: "Technical Elements", desc: "Title tags, meta, headers, schema", color: "emerald" },
                      { title: "User Experience", desc: "Speed, mobile, internal links, nav", color: "blue" }
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-5 border border-slate-700/30">
                        <div className={`font-semibold text-${item.color}-400 mb-2`}>✓ {item.title}</div>
                        <p className="text-sm text-slate-400">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current["off-page"] = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔗</span>
                    <h2 className="text-2xl font-bold text-slate-100">Off-page SEO</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Build authority through external signals. Show that others value your content.</p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center bg-slate-800/30 rounded-xl p-6">
                    {[
                      { icon: "🎓", title: "Quality Backlinks", desc: "From .edu sites" },
                      { icon: "🤝", title: "Partnerships", desc: "With institutions" },
                      { icon: "💬", title: "Brand Mentions", desc: "Unlinked citations" }
                    ].map((item, i) => (
                      <div key={i}>
                        <div className="text-2xl mb-2">{item.icon}</div>
                        <div className="font-semibold text-slate-200 mb-1">{item.title}</div>
                        <div className="text-sm text-slate-400">{item.desc}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current.technical = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">⚡</span>
                    <h2 className="text-2xl font-bold text-slate-100">Technical SEO</h2>
                  </div>
                  <p className="text-slate-300 mb-6">The foundation that makes content discoverable. Without it, great content won't rank.</p>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { icon: "🚀", label: "Page Speed", value: "<2s" },
                      { icon: "📱", label: "Mobile", value: "95+" },
                      { icon: "🔒", label: "HTTPS", value: "Secure" },
                      { icon: "🗺️", label: "Sitemap", value: "XML" }
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-4 text-center border border-slate-700/30 hover:border-teal-500/30 transition-all">
                        <div className="text-3xl mb-2">{item.icon}</div>
                        <div className="text-sm text-slate-400 mb-1">{item.label}</div>
                        <div className="font-bold text-teal-400">{item.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current.keywords = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🔎</span>
                    <h2 className="text-2xl font-bold text-slate-100">Keyword Research</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Identify what learners search for and the competitive landscape around those terms.</p>
                  <div className="space-y-3">
                    {[
                      { num: "1", title: "Seed keywords", desc: "Core topics in your niche", color: "teal" },
                      { num: "2", title: "Search intent", desc: "Informational vs transactional", color: "emerald" },
                      { num: "3", title: "Competition", desc: "Find low-difficulty opportunities", color: "blue" }
                    ].map((step) => (
                      <div key={step.num} className="flex items-center gap-3 bg-slate-800/50 p-4 rounded-xl border border-slate-700/30">
                        <div className={`w-8 h-8 rounded-lg bg-${step.color}-500/20 flex items-center justify-center text-${step.color}-400 font-bold`}>{step.num}</div>
                        <div className="flex-1">
                          <div className="font-semibold text-slate-200">{step.title}</div>
                          <div className="text-sm text-slate-400">{step.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current.content = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📊</span>
                    <h2 className="text-2xl font-bold text-slate-100">Content Strategy</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Balance search demand with your unique value. Create content that educates and converts.</p>
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

              <section ref={(el) => (sectionRefs.current.analytics = el)} className="scroll-mt-8">
                <div className="bg-slate-800/30 rounded-2xl p-8 border border-slate-700/30">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">📉</span>
                    <h2 className="text-2xl font-bold text-slate-100">Analytics & Tracking</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Measure what matters. Track rankings, traffic, conversions, and user behavior.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { metric: "Organic Traffic", tool: "Google Analytics" },
                      { metric: "Keyword Rankings", tool: "Search Console" },
                      { metric: "Conversions", tool: "Goal Tracking" },
                      { metric: "User Behavior", tool: "Heatmaps" }
                    ].map((item, i) => (
                      <div key={i} className="bg-slate-800/50 rounded-xl p-4 border border-slate-700/30">
                        <div className="text-slate-200 font-semibold mb-1">{item.metric}</div>
                        <div className="text-sm text-teal-400">{item.tool}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              <section ref={(el) => (sectionRefs.current.tools = el)} className="scroll-mt-8">
                <div className="bg-gradient-to-br from-slate-800/50 to-slate-700/30 rounded-2xl p-8 border border-slate-700/50">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-3xl">🛠️</span>
                    <h2 className="text-2xl font-bold text-slate-100">Essential Tools</h2>
                  </div>
                  <p className="text-slate-300 mb-6">Recommended tools for EdTech SEO success.</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { name: "Google Search Console", use: "Performance tracking", icon: "📊" },
                      { name: "Ahrefs", use: "Backlink analysis", icon: "🔗" },
                      { name: "Semrush", use: "Keyword research", icon: "🔍" },
                      { name: "Screaming Frog", use: "Technical audits", icon: "🕷️" }
                    ].map((tool, i) => (
                      <div key={i} className="flex items-center gap-4 bg-slate-800/50 p-5 rounded-xl border border-slate-700/30 hover:border-teal-500/30 transition-all">
                        <div className="text-3xl">{tool.icon}</div>
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