// src/pages/CookiePolicy/CookiePolicy.jsx
import React from "react";

export default function CookiePolicy() {
  return (
    <div className="max-w-4xl mx-auto p-6 text-smokey">
      <h1 className="fontfamily-title text-2xl mb-4 text-white">Cookie Policy</h1>
      <p className="mb-4">Last updated: {new Date().toLocaleDateString()}</p>

      <h2 className="mt-4 fontfamily-title text-white">What are cookies?</h2>
      <p className="mt-2">Cookies are small text files placed on your device to improve functionality and analytics.</p>

      <h2 className="mt-4 fontfamily-title text-white">How we use cookies</h2>
      <ul className="list-disc ml-6 mt-2 text-smokey">
        <li><strong>Essential:</strong> Required for website functionality (cannot be disabled).</li>
        <li><strong>Preferences:</strong> Remember theme and language.</li>
        <li><strong>Analytics:</strong> Performance and usage analytics (e.g. Google Analytics).</li>
        <li><strong>Marketing:</strong> Ads and personalization with partners.</li>
      </ul>

      <h2 className="mt-4 fontfamily-title text-white">Your choices</h2>
      <p className="mt-2 text-smokey">
        Use our cookie banner to accept or reject non-essential cookies. You may also control cookies through your browser settings.
      </p>

      <h2 className="mt-4 fontfamily-title text-white">Contact</h2>
      <p className="mt-2 text-smokey">For questions: privacy@clixonicmedia.example</p>
    </div>
  );
}
