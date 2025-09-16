// File: HealthBenefits.jsx
import React from "react";

export default function HealthBenefits() {
  const nutrients = [
    {
      title: "Anthoxanthin",
      subtitle: "Healthy Bone",
      desc: "Antioxidant properties beneficial for cancer treatment and heart health. Improves blood flow and reduces oxidative stress.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fcapsule.png&w=96&q=75",
      position: "left-top",
    },
    {
      title: "Carotenoids",
      subtitle: "Immunity Booster",
      desc: "Essential for vitamin A production supporting immune health. Reduces inflammation and promotes eye health while aiding hair growth.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fcarrot.png&w=96&q=75",
      position: "left-mid",
    },
    {
      title: "Anthocyanin",
      subtitle: "Healthy Brains",
      desc: "Lowers blood pressure and reduces the risk of heart disease. Protects brain function and may slow cancer growth.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fbrain.png&w=96&q=75",
      position: "bottom",
    },
    {
      title: "Chlorophyll",
      subtitle: "Healthy Lungs",
      desc: "Strengthens the immune system and helps block cancer-causing chemicals. Aids in weight loss and lowers cholesterol levels.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fleaf.png&w=96&q=75",
      position: "right-top",
    },
    {
      title: "Lycopene",
      subtitle: "Healthy Heart",
      desc: "Powerful antioxidant that reduces oxidative damage and inflammation. Protects against various cancers and supports heart health.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fheart.png&w=96&q=75",
      position: "right-mid",
    },
  ];

  return (
    <section className="relative py-20 bg-[#e6ebf0] flex justify-center overflow-hidden">
      {/* Curved top bg or curve shape could go here if you extract SVG from site */}

      <div className="relative z-10 bg-[#f5f7fa] border border-gray-200 rounded-2xl shadow-md p-10 max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-center mb-2">
          <span className="text-blue-900">Health</span>{" "}
          <span className="text-[#00c4a7]">Benefits</span>
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Discover the key nutrients and their powerful effects on your health
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
          {/* Left side nutrients */}
          <div className="space-y-10 text-right pr-6">
            {nutrients
              .filter((n) => n.position.startsWith("left"))
              .map((item, idx) => (
                <div key={idx} className="flex flex-col items-end">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 mb-2"
                  />
                  <h3 className="font-bold text-blue-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-semibold mb-1">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 max-w-xs">{item.desc}</p>
                </div>
              ))}
          </div>

          {/* Center circle with lungs image from site */}
          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              {/* Outer ring or background circle */}
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner"></div>
              {/* Inner white-ish ring */}
              <div className="absolute w-64 h-64 rounded-full bg-white shadow-md"></div>
              {/* Lungs image from site */}
              <img
                src="https://www.empireblue.in/_next/image?url=%2Flung.png&w=128&q=75"
                alt="Lungs"
                className="relative w-24 h-24 z-10"
              />
            </div>
          </div>

          {/* Right side nutrients */}
          <div className="space-y-10 text-left pl-6">
            {nutrients
              .filter((n) => n.position.startsWith("right"))
              .map((item, idx) => (
                <div key={idx} className="flex flex-col items-start">
                  <img
                    src={item.icon}
                    alt={item.title}
                    className="w-8 h-8 mb-2"
                  />
                  <h3 className="font-bold text-blue-800">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-semibold mb-1">
                    {item.subtitle}
                  </p>
                  <p className="text-sm text-gray-600 max-w-xs">{item.desc}</p>
                </div>
              ))}
          </div>
        </div>

        {/* Bottom nutrient */}
        <div className="text-center mt-10">
          {nutrients
            .filter((n) => n.position === "bottom")
            .map((item, idx) => (
              <div key={idx}>
                <img
                  src={item.icon}
                  alt={item.title}
                  className="w-10 h-10 mx-auto mb-2"
                />
                <h3 className="font-bold text-blue-800">{item.title}</h3>
                <p className="text-sm text-gray-600 font-semibold mb-1">
                  {item.subtitle}
                </p>
                <p className="text-sm text-gray-600 max-w-lg mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}
