// src/utils/cookies.js
import Cookies from "js-cookie";

const DEFAULT_OPTIONS = {
  expires: 365, // days
  sameSite: "Lax",
  secure: typeof window !== "undefined" && window.location.protocol === "https:",
  path: "/",
};

export function setCookie(name, value, opts = {}) {
  return Cookies.set(name, value, { ...DEFAULT_OPTIONS, ...opts });
}

export function getCookie(name) {
  return Cookies.get(name);
}

export function removeCookie(name, opts = {}) {
  return Cookies.remove(name, { ...DEFAULT_OPTIONS, ...opts });
}

export function setJsonCookie(name, obj, opts = {}) {
  return Cookies.set(name, JSON.stringify(obj), { ...DEFAULT_OPTIONS, ...opts });
}

export function getJsonCookie(name) {
  const v = Cookies.get(name);
  try {
    return v ? JSON.parse(v) : undefined;
  } catch (e) {
    return undefined;
  }
}
