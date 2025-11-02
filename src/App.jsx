import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KnowledgeHub from "./components/KnowledgeHub";
import PhoneForm from "./components/PhoneForm";
import ResultsSection from "./components/Results";
import RecommendationSection from "./components/RecommendationSection";
import BackToTop from "./components/BackToTop";
import Footer from "./components/Footer";

import "./App.css";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showKnowledgeHub, setShowKnowledgeHub] = useState(false);
  const [budget, setBudget] = useState(30000);
  const [usageType, setUsageType] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [compareMode, setCompareMode] = useState(false);
  const [compared, setCompared] = useState([]);

  const generateRecommendations = () => {
    // Dummy data for testing
    setRecommendations([
      {
        id: 1,
        name: "Phone A",
        price: 45000,
        image: "📱",
        highlights: ["Fast CPU", "Good Camera"],
        reasoning: "Best for gaming",
        amazon: "#",
        flipkart: "#",
        gsmarena: "#",
        youtube: "#",
      },
      {
        id: 2,
        name: "Phone B",
        price: 60000,
        image: "📱",
        highlights: ["Long Battery", "AMOLED Display"],
        reasoning: "Great for multimedia",
        amazon: "#",
        flipkart: "#",
        gsmarena: "#",
        youtube: "#",
      },
    ]);
  };

  const toggleCompare = (id) => {
    if (compared.includes(id)) {
      setCompared(compared.filter((x) => x !== id));
    } else {
      setCompared([...compared, id]);
    }
  };

  const scrollToForm = () => {
    const formSection = document.getElementById("form-section");
    if (formSection) {
      formSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        showKnowledgeHub={showKnowledgeHub}
        setShowKnowledgeHub={setShowKnowledgeHub}
      />

      <Hero darkMode={darkMode} scrollToForm={scrollToForm} />

      {/* <KnowledgeHub
        darkMode={darkMode}
        showKnowledgeHub={showKnowledgeHub}
        setShowKnowledgeHub={setShowKnowledgeHub}
      />

      <PhoneForm
        darkMode={darkMode}
        budget={budget}
        setBudget={setBudget}
        usageType={usageType}
        setUsageType={setUsageType}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        generateRecommendations={generateRecommendations}
      />

      {recommendations.length > 0 && (
        <ResultsSection
          recommendations={recommendations}
          darkMode={darkMode}
          compareMode={compareMode}
          compared={compared}
          toggleCompare={toggleCompare}
        />
      )}

      <BackToTop />

      <Footer darkMode={darkMode} /> */}
    </div>
  );
}
