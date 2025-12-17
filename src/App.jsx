import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";
import CookiePolicy from "./pages/CookiePolicy/CookiePolicy";

import { Routes, Route } from "react-router-dom";
import FloatingButtons from "./components/FloatingButton/FloatingButton";
import Pages from "./pages/Pages/Pages";
import ScrollToTop from "./utils/ScrollToTopComponent";
import NotFound from "./components/NotFound/NotFound";
import RefreshPopup from "./components/RefreshPopup/RefreshPopup";

import CookieBanner from "./components/CookieBanner/CookieBanner";
import useAnalyticsLoader from "./hooks/useAnalyticsLoader";
import { CookieProvider } from "./context/CookieContext";
import Terms from "./components/PrivacyPage/Terms";
import Privacy from "./components/PrivacyPage/Privacy";
import EdTech from "./pages/EdTech/EdTech";


function App() {
  return (
    <CookieProvider>
      <InnerApp />
    </CookieProvider>
  );
}

function InnerApp() {
  useAnalyticsLoader();
  return (
    <div className="min-h-screen flex flex-col bg-[#0b0b0b] text-white">
      <Header />
      <ScrollToTop />
      <main className="flex-grow pt-[90px]">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pages" element={<Pages />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<Privacy />} />
          <Route path="/edTech-seo" element={<EdTech />} />

          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <RefreshPopup />
      <FloatingButtons />
      <Footer />

      <CookieBanner />
    </div>
  );
}

export default App;
