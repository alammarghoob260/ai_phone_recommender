// src/components/KnowledgeHub/KnowledgeHubItem.jsx
import React from "react";
import "./KnowledgeHubItem.css";

export default function KnowledgeHubItem({ icon: Icon, title, description, darkMode }) {
  return (
    <div className={`knowledge-item ${darkMode ? "dark" : "light"}`}>
      <div className="knowledge-item-header">
        {Icon && <Icon className="knowledge-item-icon" />}
        <h3 className="knowledge-item-title">{title}</h3>
      </div>
      <p className="knowledge-item-text">{description}</p>
    </div>
  );
}
