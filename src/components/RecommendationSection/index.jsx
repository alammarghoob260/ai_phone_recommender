import React from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import { TrendingUp } from "lucide-react";
import "./RecommendationSection.css";

export default function RecommendationSection({
  recommendations,
  darkMode,
  compareMode,
  toggleCompareMode,
  compared,
  toggleCompare,
}) {
  return (
    <section id="results-section" className="recommendation-section">
      <div className="recommendation-container">
        <div className="recommendation-header">
          <h2 className="recommendation-title">
            <TrendingUp className="recommendation-icon" />
            Top AI-Recommended Phones
          </h2>

          <label className="recommendation-compare-label">
            <input
              type="checkbox"
              checked={compareMode}
              onChange={(e) => toggleCompareMode(e.target.checked)}
              className="recommendation-checkbox"
            />
            <span className={darkMode ? "dark-text" : "light-text"}>
              Compare Mode
            </span>
          </label>
        </div>

        <div className="recommendation-grid">
          {recommendations.map((phone) => (
            <PhoneCard
              key={phone.id}
              phone={phone}
              darkMode={darkMode}
              compareMode={compareMode}
              compared={compared}
              toggleCompare={toggleCompare}
            />
          ))}
        </div>

        <div className={`recommendation-info ${darkMode ? "dark" : "light"}`}>
          <h3>Important Information</h3>
          <p>
            Everyone deserves to own a great smartphone! Whether you are a
            student, professional, or shopping for family, our AI understands
            your needs and budget to suggest the perfect match. No hidden
            charges, no biased recommendations - just honest advice tailored for
            you.
          </p>
          <p className="disclaimer">
            <strong>Disclaimer:</strong> Prices and availability may vary by
            retailer and region. Please verify current prices, offers, and
            specifications on respective retailer websites before making a
            purchase. Our AI recommendations are based on general usage patterns
            and technical specifications. Individual preferences may vary. We
            are not affiliated with any smartphone manufacturer or retailer.
          </p>
        </div>
      </div>
    </section>
  );
}
