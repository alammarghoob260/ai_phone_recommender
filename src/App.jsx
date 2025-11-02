import React, { useState, useEffect } from "react";

// Components
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import KnowledgeHub from "./components/KnowledgeHub/KnowledgeHub";
import PhoneForm from "./components/PhoneForm/PhoneForm";
import RecommendationSection from "./components/RecommendationSection/RecommendationSection";
import BackToTop from "./components/BackToTop/BackToTop";
import Footer from "./components/Footer/Footer";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showKnowledgeHub, setShowKnowledgeHub] = useState(false);
  const [budget, setBudget] = useState(25000);
  const [usageType, setUsageType] = useState("");
  const [ageGroup, setAgeGroup] = useState("");
  const [recommendations, setRecommendations] = useState([]);
  const [showResults, setShowResults] = useState(false);
  const [compareMode, setCompareMode] = useState(false);
  const [compared, setCompared] = useState([]);
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Scroll handler for BackToTop
  useEffect(() => {
    const handleScroll = () => setShowBackToTop(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToForm = () => {
    document
      .getElementById("form-section")
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const toggleCompare = (phoneId) => {
    setCompared((prev) =>
      prev.includes(phoneId)
        ? prev.filter((id) => id !== phoneId)
        : [...prev, phoneId]
    );
  };

  const generateRecommendations = () => {
    const allPhones = [
      {
        id: 1,
        name: "Nothing Phone (2a)",
        price: 23999,
        image: "📱",
        highlights: [
          "Glyph Interface",
          "MediaTek Dimensity 7200 Pro",
          "50MP Dual Camera",
          "5000mAh Battery",
        ],
        reasoning:
          "Perfect blend of unique design and performance. The Glyph Interface makes notifications intuitive, while the processor handles multitasking smoothly for daily tasks.",
        amazon: "https://amazon.in",
        flipkart: "https://flipkart.com",
        gsmarena: "https://gsmarena.com",
        youtube: "https://youtube.com",
      },
      {
        id: 2,
        name: "Google Pixel 8a",
        price: 52999,
        image: "📱",
        highlights: [
          "Google Tensor G3",
          "AI Photography",
          "120Hz Display",
          "7 Years Updates",
        ],
        reasoning:
          "Industry-leading AI features and longest software support. Perfect for those who value camera quality and want their phone to stay secure for years.",
        amazon: "https://amazon.in",
        flipkart: "https://flipkart.com",
        gsmarena: "https://gsmarena.com",
        youtube: "https://youtube.com",
      },
      {
        id: 3,
        name: "OnePlus 12R",
        price: 39999,
        image: "📱",
        highlights: [
          "Snapdragon 8 Gen 2",
          "5500mAh Battery",
          "100W Charging",
          "120Hz Display",
        ],
        reasoning:
          "Exceptional performance and battery life. The 100W charging gets you from 0-100% in just 26 minutes - perfect for power users who are always on the go.",
        amazon: "https://amazon.in",
        flipkart: "https://flipkart.com",
        gsmarena: "https://gsmarena.com",
        youtube: "https://youtube.com",
      },
      {
        id: 4,
        name: "Realme GT 6T",
        price: 30999,
        image: "📱",
        highlights: [
          "Snapdragon 7+ Gen 3",
          "5500mAh Battery",
          "120W Fast Charging",
          "AMOLED 120Hz",
        ],
        reasoning:
          "Best value for money in mid-range. Gaming-focused features with flagship-level charging speed at an affordable price point makes it a smart choice.",
        amazon: "https://amazon.in",
        flipkart: "https://flipkart.com",
        gsmarena: "https://gsmarena.com",
        youtube: "https://youtube.com",
      },
    ];

    let filtered = allPhones.filter((p) => p.price <= budget * 1.15);

    if (filtered.length < 3) filtered = allPhones.slice(0, 3);
    else if (filtered.length > 4) filtered = filtered.slice(0, 4);

    setRecommendations(filtered);
    setShowResults(true);
    setTimeout(() => {
      document
        .getElementById("results-section")
        ?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
    <div
      className={`min-h-screen transition-colors duration-500 ${
        darkMode ? "bg-gray-950 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <Header
        darkMode={darkMode}
        setDarkMode={setDarkMode}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
        showKnowledgeHub={showKnowledgeHub}
        setShowKnowledgeHub={setShowKnowledgeHub}
      />
      <Hero scrollToForm={scrollToForm} darkMode={darkMode} />
      {showKnowledgeHub && (
        <KnowledgeHub
          darkMode={darkMode}
          setShowKnowledgeHub={setShowKnowledgeHub}
        />
      )}
      <PhoneForm
        budget={budget}
        setBudget={setBudget}
        usageType={usageType}
        setUsageType={setUsageType}
        ageGroup={ageGroup}
        setAgeGroup={setAgeGroup}
        generateRecommendations={generateRecommendations}
        darkMode={darkMode}
      />
      {showResults && (
        <RecommendationSection
          recommendations={recommendations}
          darkMode={darkMode}
          compareMode={compareMode}
          compared={compared}
          toggleCompare={toggleCompare}
        />
      )}
      {showBackToTop && <BackToTop scrollToTop={scrollToTop} />}
      <Footer darkMode={darkMode} />
    </div>
  );
}
