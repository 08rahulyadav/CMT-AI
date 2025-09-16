// File: FeatureCards.jsx
import React from "react";

export default function FeatureCards() {
  const features = [
    {
      icon: "https://www.empireblue.in/icons/excellence.svg",
      title: "Revolutionary Technology",
      desc: "Groundbreaking invention that eliminates the expiration date on bottled water",
    },
    {
      icon: "https://www.empireblue.in/icons/pure.svg",
      title: "Safe & Pure",
      desc: "Ensuring lifelong freshness and health through advanced purification",
    },
    {
      icon: "https://www.empireblue.in/icons/eco.svg",
      title: "Sustainable Solution",
      desc: "Eco-friendly approach to water preservation and distribution",
    },
  ];

  return (
    <section className="py-12 bg-[#e6ebf0]">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-[#f8fafc] border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-12 h-12 flex items-center justify-center bg-blue-50 rounded-full mb-4">
                <img src={feature.icon} alt={feature.title} className="w-6 h-6" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-blue-800 mb-2">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-700 text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
