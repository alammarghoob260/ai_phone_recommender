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

        {/* Desktop links */}
        <div className="header-links-desktop">
          <button
            className="header-link knowledge-hub"
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
        </div>

        {/* Mobile + Desktop theme toggle + hamburger */}
        <div className="header-right">
          <button
            className="theme-toggle icon-wrapper"
            onClick={() => setDarkMode(!darkMode)}
          >
            {darkMode ? (
              <Sun className="theme-icon" />
            ) : (
              <Moon className="theme-icon" />
            )}
          </button>
          <button
            className="header-hamburger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className={`header-mobile ${darkMode ? "dark" : "light"}`}>
          <button
            className="mobile-link knowledge-hub"
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
        </div>
      )}
    </nav>
  );
}
