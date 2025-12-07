// src/App.js
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Services from "./pages/Services/Services";
import Contact from "./pages/Contact/Contact";

import { Routes, Route } from "react-router-dom";
import FloatingButtons from "./components/FloatingButton/FloatingButton";
import Pages from "./pages/Pages/Pages";
import ScrollToTop from "./utils/ScrollToTopComponent";
import NotFound from "./components/NotFound/NotFound";
import RefreshPopup from "./components/RefreshPopup/RefreshPopup";

function App() {
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
          <Route path="*" element={<NotFound />} />

        </Routes>
      </main>
      <RefreshPopup />
      <FloatingButtons />
      <Footer />

    </div>
  );
}

export default App;
