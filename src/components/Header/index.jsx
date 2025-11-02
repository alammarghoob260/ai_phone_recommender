import React from "react";
import { Moon, Sun, Menu, X, Smartphone } from "lucide-react";
import "./Header.css";

export default function Header({
  darkMode,
  setDarkMode,
  mobileMenuOpen,
  setMobileMenuOpen,
  showKnowledgeHub,
  setShowKnowledgeHub,
}) {
  return (
    <nav className={`header ${darkMode ? "dark" : "light"}`}>
      <div className="header-container">
        <div className="header-left">
          <div className={`logo-circle ${darkMode ? "dark" : "light"}`}>
            <Smartphone className="logo-icon" />
          </div>
          <span className="logo-text">VisiPhone AI</span>
        </div>

        <div className="header-links-desktop">
          <button
            className="header-link"
            onClick={() => setShowKnowledgeHub(!showKnowledgeHub)}
          >
            Knowledge Hub
          </button>
          <a href="#about" className="header-link">
            About
          </a>
          <a href="#contact" className="header-link">
            Contact
          </a>
          <button
            className="theme-toggle"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="theme-icon" />
            ) : (
              <Moon className="theme-icon" />
            )}
          </button>
        </div>

        <button
          className="header-hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className={`header-mobile ${darkMode ? "dark" : "light"}`}>
          <button
            className="mobile-link"
            onClick={() => {
              setShowKnowledgeHub(!showKnowledgeHub);
              setMobileMenuOpen(false);
            }}
          >
            Knowledge Hub
          </button>
          <a href="#about" className="mobile-link">
            About
          </a>
          <a href="#contact" className="mobile-link">
            Contact
          </a>
          <button
            className="mobile-link theme-toggle-mobile"
            onClick={() => setDarkMode(!darkMode)}
          >
            <span>Theme</span>
            {darkMode ? (
              <Sun className="theme-icon" />
            ) : (
              <Moon className="theme-icon" />
            )}
          </button>
        </div>
      )}
    </nav>
  );
}
