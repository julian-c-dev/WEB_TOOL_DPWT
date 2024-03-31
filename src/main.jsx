//! Main.jsx

//? React Imports
import React from "react";
import ReactDOM from "react-dom/client";

//?  Component Imports
import App from "./App.jsx";

//?  Styling Imports
import "./index.css";

//?  Resource Imports
import "./i18n.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <React.Suspense fallback="Loading">
      <App />
    </React.Suspense>
  </React.StrictMode>
);
