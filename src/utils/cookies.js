// src/utils/cookies.js
import Cookies from "js-cookie";

const DEFAULT_OPTIONS = {
  expires: 365,
  sameSite: "Lax",
  secure: typeof window !== "undefined" && window.location.protocol === "https:",
  path: "/",
};

const FALLBACK_PREFIX = "cb_fallback_";

function safeJSONParse(v) {
  try {
    return v ? JSON.parse(v) : undefined;
  } catch {
    return undefined;
  }
}

export function supportsCookies() {
  try {
    Cookies.set("__cookie_test", "1", { path: "/", secure: DEFAULT_OPTIONS.secure });
    const ok = Cookies.get("__cookie_test") === "1";
    Cookies.remove("__cookie_test", { path: "/" });
    return ok;
  } catch {
    return false;
  }
}

export function setCookie(name, value, opts = {}) {
  const options = { ...DEFAULT_OPTIONS, ...opts };
  try {
    Cookies.set(name, value, options);
    // verify
    if (Cookies.get(name) !== undefined) return true;
  } catch (e) {
    // ignore and fallback below
  }

  try {
    window.localStorage.setItem(FALLBACK_PREFIX + name, String(value));
    return true;
  } catch {
    return false;
  }
}

export function getCookie(name) {
  try {
    const v = Cookies.get(name);
    if (v !== undefined) return v;
  } catch {
    // ignore
  }
  try {
    return window.localStorage.getItem(FALLBACK_PREFIX + name) ?? undefined;
  } catch {
    return undefined;
  }
}

export function removeCookie(name, opts = {}) {
  try {
    Cookies.remove(name, { ...DEFAULT_OPTIONS, ...opts });
  } catch {
    // ignore
  }
  try {
    window.localStorage.removeItem(FALLBACK_PREFIX + name);
  } catch {
    // ignore
  }
}

export function setJsonCookie(name, obj, opts = {}) {
  const str = JSON.stringify(obj);
  const options = { ...DEFAULT_OPTIONS, ...opts };
  try {
    Cookies.set(name, str, options);
    if (Cookies.get(name) !== undefined) return true;
  } catch {
    // ignore
  }
  try {
    window.localStorage.setItem(FALLBACK_PREFIX + name, str);
    return true;
  } catch {
    return false;
  }
}

export function getJsonCookie(name) {
  try {
    const v = Cookies.get(name);
    if (v !== undefined) return safeJSONParse(v);
  } catch {
    // ignore
  }
  try {
    const key = FALLBACK_PREFIX + name;
    const v = window.localStorage.getItem(key);
    return safeJSONParse(v);
  } catch {
    return undefined;
  }
}
