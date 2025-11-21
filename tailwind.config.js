/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-pink": "#ff007a",
        "brand-purple": "#7a00ff",
        "brand-green": "#3df41c",
        "brand-blue": "#0077ff",
        "brand-border": "#2b11e4",
        "brand-text": "#c100ff"
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(90deg,#ff007a,#00d4ff)"
      }
    }
  },
  plugins: []
};
