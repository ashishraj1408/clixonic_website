import React, { memo, useMemo } from "react";
import { TrendingUp, Target, BarChart3, Sparkles, FileText, Search, Megaphone, Link, MapPin } from "lucide-react";
import RefreshPopup from "../RefreshPopup/RefreshPopup";

const FEATURES = [
  {
    icon: TrendingUp,
    title: "IT'S NOT A COST, IT'S AN INVESTMENT",
    desc: "Our proven track record and growing list of client success stories demonstrate our ability to support businesses of all sizes.",
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    borderHover: "hover:border-blue-500/50",
    textHover: "group-hover:text-blue-400",
  },
  {
    icon: Target,
    title: "SHINING THE SPOTLIGHT ON YOU",
    desc: "Our mission is to make search engine optimization simple and stress-free, helping you navigate the complexities with ease.",
    gradient: "from-purple-500 via-purple-600 to-pink-600",
    borderHover: "hover:border-purple-500/50",
    textHover: "group-hover:text-purple-400",
  },
  {
    icon: BarChart3,
    title: "MORE THAN JUST SEO-FRIENDLY",
    desc: "Our detailed reports include Google Analytics data, providing a clear and comprehensive view of your website's SEO performance.",
    gradient: "from-pink-500 via-pink-600 to-rose-600",
    borderHover: "hover:border-pink-500/50",
    textHover: "group-hover:text-pink-400",
  }
];

const SEO_PROCESS = [
  { icon: FileText, title: "On-Page Optimization", desc: "Optimize meta tags, headings, content structure, and internal linking for better search visibility.", color: "from-blue-500 to-cyan-500", shadow: "shadow-blue-500/50", position: "left" },
  { icon: Search, title: "Keyword Research", desc: "Identify high-value keywords and search terms your target audience is actively using.", color: "from-cyan-500 to-teal-500", shadow: "shadow-cyan-500/50", position: "right" },
  { icon: Megaphone, title: "Content Marketing", desc: "Create engaging, SEO-optimized content that attracts and converts your ideal customers.", color: "from-teal-500 to-emerald-500", shadow: "shadow-teal-500/50", position: "left" },
  { icon: Link, title: "Link Building Work", desc: "Build high-quality backlinks from authoritative websites to boost domain authority.", color: "from-emerald-500 to-green-500", shadow: "shadow-emerald-500/50", position: "right" },
  { icon: MapPin, title: "Local SEO", desc: "Optimize your online presence to attract more customers from relevant local searches.", color: "from-green-500 to-lime-500", shadow: "shadow-green-500/50", position: "left" }
];

const EDTECH_STRATEGIES = [
  { title: "Localized Keyword Research", desc: "Identify keywords that are relevant to the Indian market, including regional languages and dialects.", gradient: "from-blue-500/20 to-cyan-500/20" },
  { title: "Content Localization", desc: "Create content that resonates with the Indian audience by incorporating local examples and cultural references.", gradient: "from-cyan-500/20 to-teal-500/20" },
  { title: "Mobile Optimization", desc: "Ensure your EdTech platform is mobile-friendly and offers a seamless user experience.", gradient: "from-teal-500/20 to-emerald-500/20" },
  { title: "Backlink Building", desc: "Collaborate with Indian educational institutions and influencers to build high-quality backlinks.", gradient: "from-emerald-500/20 to-green-500/20" },
  { title: "Technical SEO", desc: "Optimize site speed, implement structured data, and ensure proper indexing.", gradient: "from-purple-500/20 to-pink-500/20" }
];

const EdTechSeoIndia = memo(() => {
  const features = useMemo(() => FEATURES, []);
  const seoSteps = useMemo(() => SEO_PROCESS, []);
  const strategies = useMemo(() => EDTECH_STRATEGIES, []);

  return (
    <div className="bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(168,85,247,0.1),transparent_50%)]"></div>
        </div>
        <div className="relative max-w-7xl mx-auto px-4 py-10 sm:py-12">
          <div className="text-center space-y-4">
            <div className="inline-block animate-pulse">
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-sm font-semibold backdrop-blur-sm">
                <Sparkles className="w-4 h-4" />
                Clixonic Media Agency
              </span>
            </div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black bg-gradient-to-r from-blue-400 via-cyan-300 to-purple-400 bg-clip-text text-transparent tracking-tight">
              WHY SEO SOLUTIONS IN INDIA?
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto font-medium leading-relaxed">
              We Help Brands Optimize Their Digital Marketing Efforts
            </p>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div className="space-y-6">
            {features.map((f, idx) => (
              <div key={idx} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-r rounded-3xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500" style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }}></div>
                <div className={`relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-7 ${f.borderHover} transition-all duration-500`}>
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${f.gradient} flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-lg shadow-blue-500/30`}>
                        <f.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-xl font-bold text-white mb-3 ${f.textHover} transition-colors fontfamily-title`}>{f.title}</h3>
                      <p className="text-gray-400 leading-relaxed text-base fontfamily-content">{f.desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column - Form */}
          <div className="relative w-full">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/30 to-purple-600/30 rounded-[3rem] blur-3xl"></div>
            <div className="relative w-full rounded-[3rem] overflow-hidden shadow-2xl shadow-blue-500/20 border border-slate-800 bg-slate-900/50 backdrop-blur-xl flex items-center justify-center p-8">
              <RefreshPopup inline className="w-full" />
            </div>
          </div>
        </div>
      </div>

      {/* SEO Process Section */}
      <div className="relative py-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-blue-950/30 to-slate-950"></div>
        <div className="relative max-w-6xl mx-auto px-6">
          <div className="text-center space-y-4 mb-20">
            <h2 className="text-xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              SEO PROCESS
            </h2>
            <p className="text-lg sm:text-xl lg:text-xl text-gray-300 max-w-4xl mx-auto font-medium leading-relaxed">
              Our proven SEO process will get your website to the 1st page results to boost its traffic, increase its conversions & grow your sales.
            </p>
          </div>
          <div className="relative">
            <div className="space-y-16">
              {seoSteps.map((item, idx) => (
                <div key={idx} className="relative">
                  {idx < 4 && (
                    <div className="absolute left-1/2 top-full w-0.5 h-16 -translate-x-1/2">
                      <div className="w-full h-full bg-gradient-to-b from-blue-500 via-cyan-500 to-teal-500 opacity-50"></div>
                      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-cyan-500 rounded-full shadow-lg shadow-cyan-500/50 animate-pulse"></div>
                    </div>
                  )}
                  <div className={`flex items-center gap-8 ${item.position === 'right' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className="relative flex-shrink-0">
                      <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-2xl border-2 border-[rgba(255,255,255,0.31)] relative z-10">
                        {idx + 1}
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse"></div>
                    </div>
                    <div className="flex-1 group">
                      <div className="relative bg-slate-900/90 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-500 hover:scale-[1.02]">
                        <div className={`flex items-center gap-6 ${item.position === 'right' ? 'flex-row-reverse text-right' : 'flex-row'}`}>
                          <div className={`relative w-20 h-20 rounded-2xl bg-gradient-to-br ${item.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 ${item.shadow} shadow-lg flex-shrink-0`}>
                            <item.icon className="w-10 h-10 text-white" strokeWidth={2.5} />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-bold text-white text-xl mb-2 group-hover:text-blue-400 transition-colors fontfamily-title">{item.title}</h3>
                            <p className="text-gray-400 text-sm leading-relaxed fontfamily-content">{item.desc}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* EdTech Section */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="relative bg-gradient-to-br from-slate-900/90 to-blue-950/50 backdrop-blur-xl border border-slate-800 rounded-[3rem] p-10 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="relative space-y-10">
            <div className="text-center space-y-4">
              <h2 className="text-2xl lg:text-4xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                SEO for EdTech in India
              </h2>
              <p className="text-lg sm:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed font-light">
                In the rapidly evolving EdTech landscape of India, SEO plays a crucial role in helping educational technology companies increase their online visibility and attract more users. With a vast and diverse population seeking digital learning solutions, effective SEO strategies can significantly enhance an EdTech platform's reach and engagement.
              </p>
            </div>
            <div className="space-y-8">
              <h3 className="text-3xl font-bold text-white text-center fontfamily-title">Key SEO Strategies for EdTech in India</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {strategies.map((strategy, idx) => (
                  <div key={idx} className="group relative">
                    <div className={`absolute inset-0 bg-gradient-to-br ${strategy.gradient} rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                    <div className="relative bg-slate-900/60 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 hover:border-blue-500/50 transition-all duration-300">
                      <h4 className="font-bold text-blue-400 mb-3 text-lg fontfamily-title">{strategy.title}</h4>
                      <p className="text-sm text-gray-400 leading-relaxed fontfamily-content">{strategy.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-blue-500/30 rounded-3xl p-8 backdrop-blur-sm">
              <h3 className="text-3xl font-bold text-white mb-5 fontfamily-title">Benefits of SEO for EdTech in India</h3>
              <p className="text-gray-200 leading-relaxed text-lg fontfamily-content">
                Implementing effective SEO strategies can lead to increased organic traffic, higher conversion rates, and improved brand credibility for EdTech companies in India. By targeting the right audience with relevant content, EdTech platforms can foster long-term growth and establish themselves as leaders in the competitive Indian market.
              </p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
});

export default EdTechSeoIndia;
