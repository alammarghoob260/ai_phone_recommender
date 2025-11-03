import React from "react";
import "./PhoneCard.css";

export default function PhoneCard({
  phone,
  darkMode,
  compareMode,
  compared,
  toggleCompare,
}) {
  const isCompared = compared.includes(phone.id);

  return (
    <div
      className={`phone-card ${darkMode ? "dark" : "light"} ${
        isCompared ? "compared" : ""
      }`}
    >
      <div className="phone-card-image">
        <img src={phone.image} alt={phone.name} className="phone-card-img" />
      </div>

      <h3 className="phone-card-name">{phone.name}</h3>
      <p className="phone-card-price">₹{phone.price.toLocaleString()}</p>

      <div className="phone-card-highlights">
        {phone.highlights.map((h, i) => (
          <div key={i} className="phone-card-highlight">
            • {h}
          </div>
        ))}
      </div>

      <div className="phone-card-reason">
        <p>
          <strong>Why this phone?</strong> {phone.reasoning}
        </p>
      </div>

      <div className="phone-card-links">
        <a href={phone.amazon} target="_blank" rel="noopener noreferrer">
          Amazon
        </a>
        <a href={phone.flipkart} target="_blank" rel="noopener noreferrer">
          Flipkart
        </a>
        <a href={phone.gsmarena} target="_blank" rel="noopener noreferrer">
          GSMArena
        </a>
        <a href={phone.youtube} target="_blank" rel="noopener noreferrer">
          YouTube
        </a>
      </div>

      {compareMode && (
        <button
          onClick={() => toggleCompare(phone.id)}
          className="phone-card-compare-btn"
        >
          {isCompared ? "Selected" : "Compare"}
        </button>
      )}
    </div>
  );
}
