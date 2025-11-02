import React from "react";
import { TrendingUp } from "lucide-react";
import PhoneCard from "../PhoneCard";
import "./ResultsSection.css";

export default function ResultsSection({
  recommendations,
  darkMode,
  compareMode,
  compared,
  toggleCompare,
}) {
  return (
    <section id="results-section" className="results-section">
      <div className="results-container">
        <div className="results-header">
          <h2 className="results-title">
            <TrendingUp className="results-icon" />
            Top AI-Recommended Phones
          </h2>
        </div>

        <div className="results-grid">
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
      </div>
    </section>
  );
}
