// File: CurrentSituationCard.jsx
import React from "react";

export default function CurrentSituationCard() {
  return (
    <section className="py-12 bg-[#e6ebf0]">
      <div className="container mx-auto px-4 lg:px-12">
        {/* Card */}
        <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl flex flex-col lg:flex-row items-center justify-between p-8 gap-6">
          
          {/* Left: Current Situation */}
          <div className="lg:w-1/3 text-left">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Current Situation
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              Approximately 2.2 billion people do not have access to safe
              drinking water and 3.5 billion people do not have access to clean
              drinking water. This problem is increasing due to the rapidly
              increasing population. Poor water management has further
              aggravated the crisis.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              The top countries facing severe water crisis include Lebanon,
              Pakistan, Afghanistan, Syria, Yemen, and Ethiopia.
            </p>
          </div>

          {/* Center Image with Circle BG */}
          <div className="lg:w-1/3 flex justify-center">
            <div className="relative flex items-center justify-center w-40 h-40">
              {/* Background Circle */}
              <div className="absolute w-36 h-36 bg-blue-100 rounded-full"></div>

              {/* Water Drop Icon */}
              <img
                src="https://cdn-icons-png.flaticon.com/512/2913/2913465.png"
                alt="Water Drop"
                className="w-20 h-20 relative z-10"
              />
            </div>
          </div>

          {/* Right: Health Impact */}
          <div className="lg:w-1/3 text-left">
            <h3 className="text-xl font-bold text-blue-800 mb-3">
              Health Impact of contaminated water
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed mb-2">
              Every 33 seconds a person dies from heart disease across the
              worldwide and around 26,300 people die from cancer every day.
            </p>
            <p className="text-gray-700 text-sm leading-relaxed">
              Contaminated water releases harmful bacteria and micro plastics
              which lead to health problems like cancer and also cause high
              blood pressure and heart problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
