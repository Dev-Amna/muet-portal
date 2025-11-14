import React from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom"; 
import { HelmetProvider } from "react-helmet-async";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <HelmetProvider>
    <HashRouter>
      <App />
    </HashRouter>
  </HelmetProvider>
);
