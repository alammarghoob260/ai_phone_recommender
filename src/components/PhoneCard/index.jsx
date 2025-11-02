import React from "react";

export default function PhoneCard({
  phone,
  darkMode,
  compareMode,
  compared,
  toggleCompare,
}) {
  return (
    <div
      className={`group rounded-2xl p-5 transition-all duration-300 hover:scale-105 hover:shadow-2xl ${
        darkMode
          ? "bg-gray-900 border border-gray-800"
          : "bg-white border border-gray-200"
      } ${compared.includes(phone.id) ? "ring-4 ring-violet-600" : ""}`}
    >
      <div className="text-5xl text-center mb-3 transform group-hover:scale-110 transition-transform">
        {phone.image}
      </div>
      <h3 className="text-lg font-bold mb-1">{phone.name}</h3>
      <p className="text-xl font-bold text-violet-600 mb-3">
        ₹{phone.price.toLocaleString()}
      </p>

      <div className="space-y-1 mb-3">
        {phone.highlights.map((h, i) => (
          <div
            key={i}
            className={`text-xs ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            • {h}
          </div>
        ))}
      </div>

      <div
        className={`p-2.5 rounded-lg mb-3 ${
          darkMode ? "bg-violet-900/30" : "bg-violet-100"
        }`}
      >
        <p
          className={`text-xs italic ${
            darkMode ? "text-gray-200" : "text-gray-800"
          }`}
        >
          <strong>Why this phone?</strong> {phone.reasoning}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 mb-3">
        <a
          href={phone.amazon}
          className={`px-3 py-1.5 rounded-lg text-center text-xs font-semibold transition-colors ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Amazon
        </a>
        <a
          href={phone.flipkart}
          className={`px-3 py-1.5 rounded-lg text-center text-xs font-semibold transition-colors ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          Flipkart
        </a>
        <a
          href={phone.gsmarena}
          className={`px-3 py-1.5 rounded-lg text-center text-xs font-semibold transition-colors ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          GSMArena
        </a>
        <a
          href={phone.youtube}
          className={`px-3 py-1.5 rounded-lg text-center text-xs font-semibold transition-colors ${
            darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          YouTube
        </a>
      </div>

      {compareMode && (
        <button
          onClick={() => toggleCompare(phone.id)}
          className={`w-full py-1.5 rounded-lg text-sm font-semibold transition-colors ${
            compared.includes(phone.id)
              ? "bg-violet-600 text-white"
              : darkMode
              ? "bg-gray-800 hover:bg-gray-700"
              : "bg-gray-100 hover:bg-gray-200"
          }`}
        >
          {compared.includes(phone.id) ? "Selected" : "Compare"}
        </button>
      )}
    </div>
  );
}
