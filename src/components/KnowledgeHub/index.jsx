// src/components/KnowledgeHub/KnowledgeHub.jsx
import React from "react";
import { X } from "lucide-react";
import KnowledgeHubItem from "./KnowledgeHubItem";
import { knowledgeItems } from "./Data/KnowledgeData";
import "./KnowledgeHub.css";

export default function KnowledgeHub({
  darkMode,
  showKnowledgeHub,
  setShowKnowledgeHub,
}) {
  if (!showKnowledgeHub) return null;

  return (
    <div className={`knowledge-hub-overlay ${darkMode ? "dark" : "light"}`}>
      <div className="knowledge-hub-container">
        <div className="knowledge-hub-header">
          <h2 className="knowledge-hub-title">
            What Makes Your Phone Powerful?
          </h2>
          <button
            onClick={() => setShowKnowledgeHub(false)}
            className="knowledge-hub-close"
          >
            <X className="close-icon" />
          </button>
        </div>

        <div className="knowledge-hub-items">
          {knowledgeItems.map((item) => (
            <KnowledgeHubItem
              key={item.id}
              icon={item.icon}
              title={item.title}
              description={item.description}
              darkMode={darkMode}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
