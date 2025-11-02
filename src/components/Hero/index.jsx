import React from "react";
import { ChevronDown } from "lucide-react";

export default function Hero({ darkMode, scrollToForm }) {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
              Find Your Perfect{" "}
              <span className="bg-gradient-to-r from-violet-600 to-blue-600 bg-clip-text text-transparent">
                Smartphone
              </span>
              , Instantly.
            </h1>
            <p
              className={`text-lg sm:text-xl ${
                darkMode ? "text-gray-400" : "text-gray-600"
              } leading-relaxed`}
            >
              AI analyzes your needs, budget, and lifestyle — and finds the best
              phones and deals for you.
            </p>
            <button
              onClick={scrollToForm}
              className="group relative px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 rounded-2xl text-white font-semibold text-lg shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              Start Now
              <ChevronDown className="inline-block ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>

          <div className="relative">
            <div
              className={`absolute inset-0 bg-gradient-to-r from-violet-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse`}
            ></div>
            <div className="relative text-9xl text-center transform hover:scale-110 transition-transform duration-500">
              📱
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
