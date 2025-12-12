// src/context/CookieContext.jsx
import React, { createContext, useContext, useState } from "react";
import { getJsonCookie, setJsonCookie, removeCookie } from "../utils/cookies";

const CookieContext = createContext();

function isValidPersisted(p) {
  if (!p || typeof p !== "object") return false;
  const keys = ["analytics", "preferences", "marketing", "seen"];
  return keys.every((k) => Object.prototype.hasOwnProperty.call(p, k));
}

export function CookieProvider({ children }) {
  const persisted = getJsonCookie("site_cookie_consent");

  const initial = isValidPersisted(persisted)
    ? persisted
    : { analytics: false, preferences: false, marketing: false, seen: false };

  const [consent, setConsent] = useState(initial);

  const acceptAll = () => {
    const next = { analytics: true, preferences: true, marketing: true, seen: true };
    setConsent(next);
    setJsonCookie("site_cookie_consent", next);
  };

  const rejectAll = () => {
    const next = { analytics: false, preferences: false, marketing: false, seen: true };
    setConsent(next);
    setJsonCookie("site_cookie_consent", next);

    ["_ga", "_gid", "_gat"].forEach((c) => removeCookie(c));
  };

  const savePreferences = (prefs) => {
    const next = { ...prefs, seen: true };
    setConsent(next);
    setJsonCookie("site_cookie_consent", next);

    if (!next.analytics) {
      ["_ga", "_gid", "_gat"].forEach((c) => removeCookie(c));
    }
  };

  const updateCategory = (cat, value) => {
    const next = { ...consent, [cat]: value };
    setConsent(next);
    setJsonCookie("site_cookie_consent", next);

    if (cat === "analytics" && !value) {
      ["_ga", "_gid", "_gat"].forEach((c) => removeCookie(c));
    }
  };

  const closeBanner = () => {
    const next = { ...consent, seen: true };
    setConsent(next);
    setJsonCookie("site_cookie_consent", next);
  };

  return (
    <CookieContext.Provider value={{ consent, acceptAll, rejectAll, savePreferences, updateCategory, closeBanner }}>
      {children}
    </CookieContext.Provider>
  );
}

export const useCookies = () => useContext(CookieContext);
