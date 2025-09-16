// File: CompetitiveAdvantage.jsx
import React from "react";

export default function CompetitiveAdvantage() {
  const advantages = [
    {
      icon: "https://www.empireblue.in/_next/image?url=%2Fearth.png&w=96&q=75",
      title: "World’s first non-expiry water",
      desc: "Our revolutionary invention makes water expiry a thing of the past, ensuring safe, fresh water always without degradation.",
    },
    {
      icon: "https://www.empireblue.in/_next/image?url=%2Fheart.png&w=96&q=75",
      title: "Health benefits",
      desc: "Rich in antioxidants and essential nutrients, protecting against free radicals and supporting overall health and immunity.",
    },
    {
      icon: "https://www.empireblue.in/_next/image?url=%2Fstar1.png&w=96&q=75",
      title: "Premium mineral enrichment",
      desc: "Enhanced with essential minerals for superior hydration and wellbeing, supporting body and mind for daily life.",
    },
  ];

  return (
    <section className="py-16 bg-[#e6ebf0] text-center">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-900 mb-2">
          Competitive <span className="text-[#2e5ae8]">Advantage</span>{" "}
          <span className="text-blue-900">Beyond The Ordinary</span>
        </h2>

        {/* 3 Advantage Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
          {advantages.map((item, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Icon */}
              <img src={item.icon} alt={item.title} className="w-14 h-14 mb-4" />

              {/* Title */}
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed max-w-xs">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
