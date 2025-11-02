import React from "react";
import { ChevronDown } from "lucide-react";
import "./PhoneForm.css";

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
  const handleRangeChange = (e) => setBudget(Number(e.target.value));

  const rangeGradient = `linear-gradient(to right, rgb(124, 58, 237) 0%, rgb(37, 99, 235) ${
    ((budget - 10000) / 90000) * 100
  }%, ${darkMode ? "rgb(55, 65, 81)" : "rgb(229, 231, 235)"} ${
    ((budget - 10000) / 90000) * 100
  }%, ${darkMode ? "rgb(55, 65, 81)" : "rgb(229, 231, 235)"} 100%)`;

  return (
    <section id="form-section" className="phone-form-section">
      <div className="phone-form-container">
        <div className={`phone-form-card ${darkMode ? "dark" : "light"}`}>
          <div className="phone-form-header">
            <h2>Tell Us What You Need</h2>
            <p>AI tailors phone picks just for you</p>
          </div>

          <div className="phone-form-fields">
            {/* Budget */}
            <div className="phone-form-field">
              <label>Budget (₹)</label>
              <div className="phone-form-budget">
                <input
                  type="range"
                  min="10000"
                  max="100000"
                  step="1000"
                  value={budget}
                  onChange={handleRangeChange}
                  style={{ background: rangeGradient }}
                />
                <input
                  type="number"
                  value={budget}
                  onChange={(e) => setBudget(Number(e.target.value))}
                  className="phone-form-number"
                />
              </div>
            </div>

            {/* Usage Type */}
            <div className="phone-form-field">
              <label>Usage Type</label>
              <div className="phone-form-select-wrapper">
                <select
                  value={usageType}
                  onChange={(e) => setUsageType(e.target.value)}
                >
                  <option value="">Select usage type</option>
                  <option value="Gaming">Gaming</option>
                  <option value="Camera">Camera</option>
                  <option value="Work">Work</option>
                  <option value="Student">Student</option>
                  <option value="Casual">Casual</option>
                </select>
                <ChevronDown className="phone-form-select-icon" />
              </div>
            </div>

            {/* Age Group */}
            <div className="phone-form-field">
              <label>Age Group</label>
              <div className="phone-form-select-wrapper">
                <select
                  value={ageGroup}
                  onChange={(e) => setAgeGroup(e.target.value)}
                >
                  <option value="">Select age group</option>
                  <option value="Teens">Teens</option>
                  <option value="20s">20s</option>
                  <option value="30s">30s</option>
                  <option value="40+">40+</option>
                </select>
                <ChevronDown className="phone-form-select-icon" />
              </div>
            </div>

            <button
              onClick={generateRecommendations}
              disabled={!usageType || !ageGroup}
              className="phone-form-submit"
            >
              Get My Recommendations
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
