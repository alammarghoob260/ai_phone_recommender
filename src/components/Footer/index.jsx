import React from "react";
import "./Footer.css";

export default function Footer({ darkMode }) {
  return (
    <footer className={`footer ${darkMode ? "dark" : "light"}`}>
      <div className="footer-container">
        <p className="footer-text">Powered by OpenAI & Visily AI</p>
        <div className="footer-links">
          <a href="#">Terms</a>
          <a href="#">Privacy</a>
          <a href="#">GitHub</a>
        </div>
      </div>
    </footer>
  );
}
