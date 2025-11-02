import React from "react";
import { ChevronDown } from "lucide-react";

export default function PhoneForm({
  darkMode,
  budget,
  setBudget,
  usageType,
  setUsageType,
  ageGroup,
  setAgeGroup,
  generateRecommendations,
}) {
  return (
    <section id="form-section" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div
          className={`rounded-3xl p-8 sm:p-12 shadow-2xl backdrop-blur-xl ${
            darkMode
              ? "bg-gray-900/50 border border-gray-800"
              : "bg-white/50 border border-gray-200"
          }`}
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-bold mb-3">
              Tell Us What You Need
            </h2>
            <p className={`${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              AI tailors phone picks just for you
            </p>
          </div>

          <div className="space-y-6">
            {/* Budget */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Budget (₹)
              </label>
              <div className="flex items-center space-x-4">
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="1000"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="flex-1 h-2 rounded-full appearance-none cursor-pointer"
                  style={{
                    background: `linear-gradient(to right, rgb(124 58 237) 0%, rgb(37 99 235) ${
                      ((budget - 10000) / 90000) * 100
                    }%, ${darkMode ? "rgb(55 65 81)" : "rgb(229 231 235)"} ${
                      ((budget - 10000) / 90000) * 100
                    }%, ${
                      darkMode ? "rgb(55 65 81)" : "rgb(229 231 235)"
                    } 100%)`,
                  }}
                />
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className={`w-32 px-4 py-2 rounded-xl ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-gray-100 border-gray-200"
                  } border-2 focus:border-violet-600 outline-none transition-colors`}
                />
              </div>
            </div>

            {/* Usage Type */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Usage Type
              </label>
              <div className="relative">
                <select
                  value={usageType}
                  onChange={(e) => setUsageType(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl appearance-none cursor-pointer ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-gray-100 border-gray-200"
                  } border-2 focus:border-violet-600 outline-none transition-colors`}
                >
                  <option value="">Select usage type</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Camera">Camera</option>
                  <option value="Work">Work</option>
                  <option value="Student">Student</option>
                  <option value="Casual">Casual</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Age Group */}
            <div>
              <label className="block text-sm font-semibold mb-3">
                Age Group
              </label>
              <div className="relative">
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                  className={`w-full px-4 py-3 rounded-xl appearance-none cursor-pointer ${
                    darkMode
                      ? "bg-gray-800 border-gray-700"
                      : "bg-gray-100 border-gray-200"
                  } border-2 focus:border-violet-600 outline-none transition-colors`}
                >
                  <option value="">Select age group</option>
                  <option value="Teens">Teens</option>
                  <option value="20s">20s</option>
                  <option value="30s">30s</option>
                  <option value="40+">40+</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            <button
              onClick={generateRecommendations}
              disabled={!usageType || !ageGroup}
              className="w-full py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              Get My Recommendations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
