import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router";
import Index from "./index";
import "./index.css";
import "./locale";
import { AccessibilityProvider } from "./context/AccessibilityContext";

if ("scrollRestoration" in history) {
  history.scrollRestoration = "manual";
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AccessibilityProvider>
        <Index />
      </AccessibilityProvider>
    </BrowserRouter>
  </React.StrictMode>,
);
