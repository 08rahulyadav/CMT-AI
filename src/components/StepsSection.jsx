import React from "react";

export default function StepsSection() {
  const steps = [
    {
      title: "Bacteria free",
      desc: "Ensure that never release microplastic or harmful bacteria, keeping the water clean and perfectly safe for everyone, anywhere, with consistent purity at every single sip.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fright1.png&w=96&q=75",
    },
    {
      title: "Technology",
      desc: "Utilization of cutting edge - ultra purification and preservation methods to maintain water qualities, offering unmatched performance and innovation in safe hydration.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fsetting1.png&w=96&q=75",
    },
    {
      title: "Preservation",
      desc: "With no expiry date consumers can store the product indefinitely without the risk of contamination or quality degradation reducing frequent repurcusing cost.",
      icon: "https://www.empireblue.in/_next/image?url=%2Fbeaker1.png&w=96&q=75",
    },
  ];

  return (
    <section className="bg-[#d9e3ec] py-12">
      <div className="max-w-6xl mx-auto">
        {/* Number line */}
        <div className="flex justify-between items-center mb-12 pl-6">
          {[1, 2, 3, 4, 5, 6].map((num, index, arr) => (
            <div key={num} className="flex items-center w-full">
              {/* Circle */}
              <div
                className="flex items-center justify-center w-10 h-10 rounded-full font-bold z-10 bg-white"
                style={{
                  border: "2px solid #1d4ed8", // same blue as HealthBenefits
                  color: "#1d4ed8",
                }}
              >
                {num}
              </div>
              {/* Line (except last one) */}
              {index < arr.length - 1 && (
                <div
                  className="flex-1 h-[2px] ml-2 mr-2"
                  style={{ background: "#1d4ed8" }}
                ></div>
              )}
            </div>
          ))}
        </div>

        {/* 3 Steps Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center">
          {steps.map((step, i) => (
            <div key={i} className="px-6">
              <img src={step.icon} alt={step.title} className="mx-auto mb-3" />
              <h3 className="font-bold text-[#1d4ed8] text-lg">{step.title}</h3>
              <p className="text-sm text-gray-800">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
