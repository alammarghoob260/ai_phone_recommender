import React, { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import KnowledgeHub from "./components/KnowledgeHub";
import PhoneForm from "./components/PhoneForm";
import ResultsSection from "./components/Results";
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
  const [additionalQuery, setAdditionalQuery] = useState("");
  const [recommendations, setRecommendations] = useState(null); // string or array
  const [compareMode, setCompareMode] = useState(false);
  const [compared, setCompared] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

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

  const generateRecommendations = async () => {
    setIsLoading(true);
    setApiError(null);
    setRecommendations(null);

    try {
      // Build input payload
      const userInput = {
        budget,
        usageType,
        ageGroup,
        additionalQuery,
      };

      // TODO: Replace below with actual GPT API call via your proxy
      await new Promise((resolve) => setTimeout(resolve, 1500)); // simulate delay

      // Dummy AI response (string)
      const aiResponse = `Based on your budget of ₹${budget}, usage type "${usageType}", age group "${ageGroup}", and additional notes "${additionalQuery}", here are my recommendations:\n\n1. Phone X - Great for gaming\n2. Phone Y - Excellent camera\n3. Phone Z - Long battery life`;

      setRecommendations(aiResponse);
    } catch (error) {
      console.error("Error generating recommendations:", error);
      setApiError("Failed to fetch recommendations. Please try again.");
    } finally {
      setIsLoading(false);
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

      <KnowledgeHub
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
        additionalQuery={additionalQuery}
        setAdditionalQuery={setAdditionalQuery}
        generateRecommendations={generateRecommendations}
      />

      <ResultsSection
        recommendations={recommendations}
        darkMode={darkMode}
        compareMode={compareMode}
        compared={compared}
        toggleCompare={toggleCompare}
        isLoading={isLoading}
        apiError={apiError}
      />

      <BackToTop />

      <Footer darkMode={darkMode} />
    </div>
  );
}
