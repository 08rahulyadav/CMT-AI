// File: DuraSection.jsx
import React from "react";

export default function DuraSection() {
  return (
    <section className="py-12 bg-[#e6ebf0]">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="bg-[#f8fafc] border border-gray-200 rounded-2xl flex flex-col lg:flex-row items-center justify-between p-8 gap-6">
          
          {/* Left: Water Illustration */}
          <div className="lg:w-1/2 flex justify-center">
            <img
              src="https://www.empireblue.in/_next/image?url=%2Fdetail.png&w=640&q=75"
              alt="Water Illustration"
              className="w-80 h-auto"
            />
          </div>

          {/* Right: Text Section */}
          <div className="lg:w-1/2 text-left">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">
              Empire Blue Pvt. Ltd.
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">
              Our revolutionary water technology is a groundbreaking invention
              that eliminates the expiration date on bottled water. By using a
              unique combination of innovative ingredients, we prevent reactions
              in bottled water—especially when exposed to sunlight—that produce
              microplastics and harmful bacteria.
              <br /><br />
              This addresses major health risks associated with bottled water,
              including diseases like cancer and heart disease. Our innovation
              not only maintains water purity and freshness for life, but also
              provides health benefits such as cancer prevention, heart attack
              protection, and boosted immunity. With a global reach, we aim to
              transform the water industry and provide safe drinking water to
              the billions of people who currently lack access.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
