// src/main.jsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";
import "./index.css";

import { CookieProvider } from "./context/CookieContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <CookieProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </CookieProvider>
    </HelmetProvider>
  </React.StrictMode>
);
