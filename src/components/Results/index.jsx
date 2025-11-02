import React from "react";
import { TrendingUp } from "lucide-react";
import PhoneCard from "./PhoneCard";

export default function ResultsSection({
  recommendations,
  darkMode,
  compareMode,
  compared,
  toggleCompare,
}) {
  return (
    <section
      id="results-section"
      className="py-20 px-4 sm:px-6 lg:px-8 animate-fade-in"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            <TrendingUp className="inline-block mr-3 w-8 h-8 text-violet-600" />
            Top AI-Recommended Phones
          </h2>
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
      </div>
    </section>
  );
}
