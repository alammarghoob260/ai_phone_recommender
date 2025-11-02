import React from "react";
import PhoneCard from "../PhoneCard/PhoneCard";
import { TrendingUp } from "lucide-react";

export default function RecommendationSection({
  recommendations,
  darkMode,
  compareMode,
  compared,
  toggleCompare,
}) {
  return (
    <section
      className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in"
      id="results-section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <TrendingUp className="inline-block mr-3 w-8 h-8 text-violet-600" />
            Top AI-Recommended Phones
          </h2>
          <label className="inline-flex items-center space-x-2 cursor-pointer">
            <input
              type="checkbox"
              checked={compareMode}
              onChange={(e) => toggleCompareMode(e.target.checked)}
              className="w-5 h-5 rounded accent-violet-600"
            />
            <span className={darkMode ? "text-gray-400" : "text-gray-600"}>
              Compare Mode
            </span>
          </label>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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

        <div
          className={`mt-12 p-6 rounded-2xl ${
            darkMode
              ? "bg-gradient-to-r from-violet-900/30 to-blue-900/30 border border-gray-800"
              : "bg-gradient-to-r from-violet-50 to-blue-50 border border-gray-200"
          }`}
        >
          <h3 className="text-xl font-bold mb-3 text-center">
            Important Information
          </h3>
          <p
            className={`text-center leading-relaxed mb-3 ${
              darkMode ? "text-gray-300" : "text-gray-700"
            }`}
          >
            Everyone deserves to own a great smartphone! Whether you are a
            student, professional, or shopping for family, our AI understands
            your needs and budget to suggest the perfect match. No hidden
            charges, no biased recommendations - just honest advice tailored for
            you.
          </p>
          <p
            className={`text-xs text-center ${
              darkMode ? "text-gray-500" : "text-gray-500"
            }`}
          >
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
