import React from "react";
import { hydrateRoot, createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const rootElement = document.getElementById("root");

if (rootElement) {
  if (rootElement.hasChildNodes()) {
    // Hydratace pro staticky vygenerované stránky
    hydrateRoot(rootElement, <App />);
  } else {
    // Standardní renderování pro development
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  }
}
