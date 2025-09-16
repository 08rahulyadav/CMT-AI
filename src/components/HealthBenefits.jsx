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
      <div className="relative z-10 bg-[#f5f7fa] border border-gray-200 rounded-2xl shadow-md p-10 max-w-5xl w-full">
        <h2 className="text-2xl font-bold text-center mb-2">
          <span className="text-blue-900">Health</span>{" "}
          <span className="text-[#00c4a7]">Benefits</span>
        </h2>
        <p className="text-gray-600 text-center mb-10">
          Discover the key nutrients and their powerful effects on your health
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 items-center">
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

          <div className="flex justify-center">
            <div className="relative flex items-center justify-center">
              <div className="absolute w-80 h-80 rounded-full bg-gradient-to-b from-gray-200 to-gray-100 shadow-inner"></div>
              <div className="absolute w-64 h-64 rounded-full bg-white shadow-md"></div>
              <img
                src="data:image/jpeg;base64,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"
                alt="Lungs"
                className="relative w-24 h-24 z-10"
              />
            </div>
          </div>

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
