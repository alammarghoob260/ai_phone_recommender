import React from "react";
import { X } from "lucide-react";
import KnowledgeItem from "./KnowledgeItem";
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
          <KnowledgeItem
            icon="Cpu"
            title="Processor (CPU) - The Brain"
            darkMode={darkMode}
          >
            The processor is your phone's brain...
          </KnowledgeItem>
          <KnowledgeItem
            icon="HardDrive"
            title="RAM - Memory Power"
            darkMode={darkMode}
          >
            RAM is temporary memory...
          </KnowledgeItem>
          <KnowledgeItem
            icon="Battery"
            title="Battery - All-Day Life"
            darkMode={darkMode}
          >
            Battery capacity is measured...
          </KnowledgeItem>
          <KnowledgeItem
            icon="Monitor"
            title="Display - Visual Experience"
            darkMode={darkMode}
          >
            AMOLED displays offer...
          </KnowledgeItem>
          <KnowledgeItem
            icon="Camera"
            title="Camera - Capturing Memories"
            darkMode={darkMode}
          >
            Megapixels matter less...
          </KnowledgeItem>
          <KnowledgeItem
            icon="Wifi"
            title="Connectivity - Stay Connected"
            darkMode={darkMode}
          >
            5G support is essential...
          </KnowledgeItem>
          <KnowledgeItem
            icon="RefreshCw"
            title="Software Updates - Long-term Security"
            darkMode={darkMode}
          >
            Regular software updates...
          </KnowledgeItem>
        </div>
      </div>
    </div>
  );
}
