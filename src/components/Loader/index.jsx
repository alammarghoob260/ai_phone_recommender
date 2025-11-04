import React from "react";
import "./Loader.css";

export default function Loader({
  message = "Generating recommendations...",
  darkMode,
}) {
  return (
    <div className={`loader-overlay ${darkMode ? "dark" : "light"}`}>
      <div className="loader-container">
        <div className="spinner"></div>
        <p className="loader-message">{message}</p>
      </div>
    </div>
  );
}
