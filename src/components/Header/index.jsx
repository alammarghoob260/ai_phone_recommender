import React from "react";
import { Moon, Sun, Menu, X, Smartphone } from "lucide-react";

export default function Header({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  showKnowledgeHub,
  setShowKnowledgeHub,
}) {
  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        darkMode ? "bg-gray-900/80" : "bg-white/80"
      } backdrop-blur-xl border-b ${
        darkMode ? "border-gray-800" : "border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-2xl ${
                darkMode
                  ? "bg-gradient-to-br from-violet-600 to-blue-600"
                  : "bg-gradient-to-br from-violet-500 to-blue-500"
              } flex items-center justify-center shadow-lg`}
            >
              <Smartphone className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
              VisiPhone AI
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => setShowKnowledgeHub(!showKnowledgeHub)}
              className={`hover:text-violet-600 transition-colors font-medium ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Knowledge Hub
            </button>
            <a
              href="#about"
              className={`hover:text-violet-600 transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              About
            </a>
            <a
              href="#contact"
              className={`hover:text-violet-600 transition-colors ${
                darkMode ? "text-gray-300" : "text-gray-700"
              }`}
            >
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`p-2.5 rounded-xl transition-all duration-300 ${
                darkMode
                  ? "bg-gray-800 hover:bg-gray-700"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </button>
          </div>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-xl"
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div
          className={`md:hidden ${
            darkMode ? "bg-gray-900" : "bg-white"
          } border-t ${darkMode ? "border-gray-800" : "border-gray-200"}`}
        >
          <div className="px-4 py-4 space-y-3">
            <button
              onClick={() => {
                setShowKnowledgeHub(!showKnowledgeHub);
                setMobileMenuOpen(false);
              }}
              className="block w-full text-left py-2"
            >
              Knowledge Hub
            </button>
            <a href="#about" className="block py-2">
              About
            </a>
            <a href="#contact" className="block py-2">
              Contact
            </a>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="w-full flex items-center justify-between py-2"
            >
              <span>Theme</span>
              {darkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
