import React from "react";

export default function Footer({ darkMode }) {
  return (
    <footer
      className={`py-12 px-4 border-t ${
        darkMode ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto text-center">
        <p className={`mb-4 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
          Powered by OpenAI & Visily AI
        </p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-violet-600 transition-colors">
            Terms
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            Privacy
          </a>
          <a href="#" className="hover:text-violet-600 transition-colors">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
