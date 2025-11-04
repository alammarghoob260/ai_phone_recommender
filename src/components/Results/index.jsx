import React from "react";
import { TrendingUp, RefreshCw } from "lucide-react";
import PhoneCard from "../PhoneCard";
import Loader from "../Loader"; // Loader component import
import "./ResultsSection.css";

export default function ResultsSection({
  recommendations,
  darkMode,
  compareMode,
  compared,
  toggleCompare,
  isLoading,
  apiError,
  retryCallback, // generateRecommendations pass karo yahan
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

        {/* Loading state */}
        {isLoading && (
          <div className="loading">
            <Loader />
            <p>Generating recommendations...</p>
          </div>
        )}

        {/* Error state */}
        {apiError && !isLoading && (
          <div className="error">
            <p>{apiError}</p>
            <button className="retry-btn" onClick={retryCallback}>
              <RefreshCw /> Retry
            </button>
          </div>
        )}

        {/* Recommendations as string */}
        {recommendations &&
          typeof recommendations === "string" &&
          !isLoading &&
          !apiError && (
            <div className="ai-results">
              <pre>{recommendations}</pre>
            </div>
          )}

        {/* Recommendations as structured cards */}
        {Array.isArray(recommendations) &&
          recommendations.length > 0 &&
          !isLoading &&
          !apiError && (
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
          )}
      </div>
    </section>
  );
}
