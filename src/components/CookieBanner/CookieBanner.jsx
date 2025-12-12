// src/components/CookieBanner/CookieBanner.jsx
import React from "react";
import { useCookies } from "../../context/CookieContext";

export default function CookieBanner() {
  const { consent, acceptAll, rejectAll, updateCategory } = useCookies();

  // Hide the banner if the user already saw/consented
  if (consent?.seen) return null;

  return (
    <div className="fixed bottom-4 left-4 right-4 z-50 max-w-4xl mx-auto rounded-2xl p-4 shadow-lg bg-[#0b0b0b] text-white border border-[#1a1a1a]">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
        <div className="flex-1">
          <h3 className="fontfamily-title text-lg">We use cookies</h3>
          <p className="text-sm text-smokey mt-1">
            We use essential cookies to make the site work. With your permission we (and our partners) may use analytics
            and marketing cookies to improve and personalize your experience. You can change preferences any time.
          </p>
          <a href="/cookie-policy" className="text-sm text-brand-pink underline inline-block mt-2">Read our Cookie Policy</a>
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-2">
          <button
            onClick={acceptAll}
            className="px-4 py-2 rounded-xl font-semibold bg-brand-gradient text-white shadow-md hover:opacity-90"
          >
            Accept all
          </button>

          <button
            onClick={rejectAll}
            className="px-4 py-2 rounded-xl border border-[#2b2b2b] text-smokey hover:bg-[#111] transition"
          >
            Reject 
          </button>

          <details className="text-left">
            <summary className="cursor-pointer text-sm text-smokey underline ml-1">Manage preferences</summary>
            <div className="mt-2">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={!!consent?.analytics}
                  onChange={(e) => updateCategory("analytics", e.target.checked)}
                />
                <span className="text-sm text-smokey">Analytics cookies</span>
              </label>
              <label className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={!!consent?.preferences}
                  onChange={(e) => updateCategory("preferences", e.target.checked)}
                />
                <span className="text-sm text-smokey">Preferences (theme, language)</span>
              </label>
              <label className="flex items-center gap-2 mt-1">
                <input
                  type="checkbox"
                  checked={!!consent?.marketing}
                  onChange={(e) => updateCategory("marketing", e.target.checked)}
                />
                <span className="text-sm text-smokey">Marketing cookies</span>
              </label>
            </div>
          </details>
        </div>
      </div>
    </div>
  );
}
