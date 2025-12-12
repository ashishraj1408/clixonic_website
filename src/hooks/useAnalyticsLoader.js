// src/hooks/useAnalyticsLoader.js
import { useEffect } from "react";
import { useCookies } from "../context/CookieContext";

export default function useAnalyticsLoader() {
  const { consent } = useCookies();

  useEffect(() => {
    if (consent?.analytics) {
      if (!window.gtag) {
        const s = document.createElement("script");
        s.src = "https://www.googletagmanager.com/gtag/js?id=G-XXXXXXX";
        s.async = true;
        document.head.appendChild(s);

        const inline = document.createElement("script");
        inline.innerHTML = `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-XXXXXXX');
        `;
        document.head.appendChild(inline);
      }
    }
  }, [consent?.analytics]);
}
