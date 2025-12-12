// src/context/CookieContext.jsx
import React, { createContext, useContext, useEffect, useState } from "react";
import { getJsonCookie, setJsonCookie, removeCookie } from "../utils/cookies";

const CookieContext = createContext();

export function CookieProvider({ children }) {
  const [consent, setConsent] = useState(() => {
    // default consent object
    return getJsonCookie("site_cookie_consent") ?? { analytics: false, preferences: false, marketing: false, seen: false };
  });

  useEffect(() => {
    // ensure cookie persists whenever consent changes
    if (consent) {
      setJsonCookie("site_cookie_consent", { ...consent, seen: true }, { expires: 365 });
    }
  }, [consent]);

  const acceptAll = () => {
    const acceptance = { analytics: true, preferences: true, marketing: true, seen: true };
    setConsent(acceptance);
    setJsonCookie("site_cookie_consent", acceptance, { expires: 365 });
  };

  const rejectAll = () => {
    const rejection = { analytics: false, preferences: false, marketing: false, seen: true };
    setConsent(rejection);
    setJsonCookie("site_cookie_consent", rejection, { expires: 365 });

    // remove known non-essential cookies (list adjust for your analytics/marketing cookies)
    const nonEssential = ["_ga", "_gid", "_gat", "marketing_cookie1", "marketing_cookie2"];
    nonEssential.forEach((c) => removeCookie(c));
  };

  const updateCategory = (cat, value) => {
    const next = { ...consent, [cat]: value, seen: true };
    setConsent(next);
    setJsonCookie("site_cookie_consent", next, { expires: 365 });
    // if turning off analytics remove GA cookies
    if (cat === "analytics" && !value) {
      ["_ga", "_gid", "_gat"].forEach((c) => removeCookie(c));
    }
  };

  return (
    <CookieContext.Provider value={{ consent, setConsent, acceptAll, rejectAll, updateCategory }}>
      {children}
    </CookieContext.Provider>
  );
}

export const useCookies = () => useContext(CookieContext);
