import React, { useMemo, useState, useEffect } from "react";
import { Search } from "lucide-react";

/* -------------------- CONSTANTS -------------------- */

const TABS = [
  "All",
  "SEO",
  "PPC",
  "Social Media",
  "Web Design",
  "Marketing Tips",
];

const BLOGS = [
  {
    id: 1,
    title: "SEO Trends to Watch in 2025",
    category: "SEO",
    author: "John Doe",
    date: "11/01/2025",
    desc:
      "Stay ahead of the curve with emerging SEO strategies that will dominate search rankings.",
    image:
      "https://images.unsplash.com/photo-1507206130118-b5907f817163?q=80&w=1200",
  },
  {
    id: 2,
    title: "Maximizing ROI with Google Ads",
    category: "PPC",
    author: "Jane Smith",
    date: "11/08/2025",
    desc:
      "Learn proven strategies to reduce cost per click while increasing conversions.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200",
  },
  {
    id: 3,
    title: "Social Media Marketing Guide for 2025",
    category: "Social Media",
    author: "Mike Johnson",
    date: "11/15/2025",
    desc:
      "Master social media marketing with a complete step-by-step growth guide.",
    image:
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?q=80&w=1200",
  },
];

/* -------------------- DEBOUNCE HOOK -------------------- */

function useDebounce(value, delay = 300) {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
}

/* -------------------- BLOG COMPONENT -------------------- */

export default function Blog() {
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState("");

  const debouncedQuery = useDebounce(query);

  const filteredBlogs = useMemo(() => {
    return BLOGS.filter((blog) => {
      const searchableText = `
        ${blog.title}
        ${blog.desc}
        ${blog.category}
        ${blog.author}
      `.toLowerCase();

      const matchTab =
        activeTab === "All" || blog.category === activeTab;

      const matchSearch =
        searchableText.includes(debouncedQuery.toLowerCase());

      return matchTab && matchSearch;
    });
  }, [activeTab, debouncedQuery]);

  return (
    <section className="bg-white py-14">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-[#1e3a5f] mb-3">
            Insights & Guides
          </h1>
          <p className="text-gray-600">
            Stay ahead with the latest digital marketing strategies and tips.
          </p>
        </div>

        {/* SEARCH */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search
            className="absolute left-4 top-3.5 text-gray-400"
            size={18}
          />

          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-12 pr-12 py-3 rounded-lg text-black border-1 border-[#b9b9b94d] 
                       focus:outline-none focus:ring-2
                       focus:ring-[#00a896]"
          />

          {query && (
            <button
              onClick={() => setQuery("")}
              className="absolute right-4 top-3 text-sm text-gray-400"
            >
              Clear
            </button>
          )}
        </div>

        {/* TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-14">
          {TABS.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition
                ${
                  activeTab === tab
                    ? "bg-[#00a896] text-white"
                    : "border text-gray-600 hover:bg-gray-100"
                }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* BLOG GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredBlogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-xl overflow-hidden border-1 border-[#b9b9b94d] shadow-xs
                         hover:shadow-lg transition bg-white"
            >
              <img
                src={blog.image}
                alt={blog.title}
                className="h-48 w-full object-cover"
              />

              <div className="p-6">
                <span className="inline-block text-xs font-semibold
                                 text-[#ff6b35] mb-2">
                  {blog.category}
                </span>

                <h3 className="text-lg font-bold text-[#1e3a5f] mb-2">
                  {blog.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {blog.desc}
                </p>

                <div className="flex justify-between text-xs text-gray-500">
                  <span>{blog.author}</span>
                  <span>{blog.date}</span>
                </div>

                <button
                  className="mt-4 text-sm font-semibold
                             text-[#00a896] hover:underline"
                >
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* EMPTY STATE */}
        {filteredBlogs.length === 0 && (
          <p className="text-center text-gray-500 mt-20">
            No articles found.
          </p>
        )}
      </div>
    </section>
  );
}
