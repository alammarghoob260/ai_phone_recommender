import React from "react";
import { ChevronDown } from "lucide-react";
import "./Hero.css";

export default function Hero({ darkMode, scrollToForm }) {
  return (
    <section className={`hero ${darkMode ? "dark" : "light"}`}>
      <div className="hero-container">
        <div className="hero-grid">
          <div className="hero-left">
            <h1 className="hero-title">
              Find Your Perfect{" "}
              <span className="gradient-text">Smartphone</span>, Instantly.
            </h1>
            <p className="hero-desc">
              AI analyzes your needs, budget, and lifestyle — and finds the best
              phones and deals for you.
            </p>
            <button className="hero-button" onClick={scrollToForm}>
              Start Now <ChevronDown className="hero-button-icon" />
            </button>
          </div>

          <div className="hero-right">
            <div className="hero-glow"></div>
            <div className="hero-emoji">📱</div>
          </div>
        </div>
      </div>
    </section>
  );
}
