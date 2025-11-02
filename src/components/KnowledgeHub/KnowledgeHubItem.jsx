import React from "react";

export default function KnowledgeItem({
  icon: Icon,
  title,
  children,
  darkMode,
}) {
  return (
    <div
      className={`p-6 rounded-2xl ${
        darkMode ? "bg-gray-800/50" : "bg-gray-50"
      }`}
    >
      <div className="flex items-center space-x-3 mb-3">
        <Icon className="w-8 h-8 text-violet-600" />
        <h3 className="text-xl font-bold">{title}</h3>
      </div>
      <p
        className={`${
          darkMode ? "text-gray-300" : "text-gray-700"
        } leading-relaxed`}
      >
        {children}
      </p>
    </div>
  );
}
