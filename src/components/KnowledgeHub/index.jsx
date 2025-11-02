import React from "react";
import {
  X,
  Cpu,
  HardDrive,
  Battery,
  Monitor,
  Camera,
  Wifi,
  RefreshCw,
} from "lucide-react";
import KnowledgeItem from "./KnowledgeItem";

export default function KnowledgeHub({
  darkMode,
  showKnowledgeHub,
  setShowKnowledgeHub,
}) {
  if (!showKnowledgeHub) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
      <div
        className={`max-w-5xl w-full max-h-[90vh] overflow-y-auto rounded-3xl p-8 ${
          darkMode ? "bg-gray-900" : "bg-white"
        } shadow-2xl`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
            What Makes Your Phone Powerful?
          </h2>
          <button
            onClick={() => setShowKnowledgeHub(false)}
            className={`p-2 rounded-xl ${
              darkMode ? "hover:bg-gray-800" : "hover:bg-gray-100"
            } transition-colors`}
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <div className="space-y-6">
          <KnowledgeItem
            icon={Cpu}
            title="Processor (CPU) - The Brain"
            darkMode={darkMode}
          >
            The processor is your phone's brain...
          </KnowledgeItem>
          <KnowledgeItem
            icon={HardDrive}
            title="RAM - Memory Power"
            darkMode={darkMode}
          >
            RAM is temporary memory...
          </KnowledgeItem>
          <KnowledgeItem
            icon={Battery}
            title="Battery - All-Day Life"
            darkMode={darkMode}
          >
            Battery capacity is measured...
          </KnowledgeItem>
          <KnowledgeItem
            icon={Monitor}
            title="Display - Visual Experience"
            darkMode={darkMode}
          >
            AMOLED displays offer...
          </KnowledgeItem>
          <KnowledgeItem
            icon={Camera}
            title="Camera - Capturing Memories"
            darkMode={darkMode}
          >
            Megapixels matter less...
          </KnowledgeItem>
          <KnowledgeItem
            icon={Wifi}
            title="Connectivity - Stay Connected"
            darkMode={darkMode}
          >
            5G support is essential...
          </KnowledgeItem>
          <KnowledgeItem
            icon={RefreshCw}
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
