import React from "react";

export default function InnovationSection() {
  return (
    <section className="bg-[#d9e3ec] py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 px-6">
        <div>
          <span className="inline-block bg-[#cfd8e3] text-[#1d4ed8] text-sm font-medium px-4 py-1 rounded-full mb-4">
            ● Water Innovation
          </span>

          <h2 className="text-4xl font-bold leading-snug text-[#0a0a82] mb-4">
            Revolutionizing{" "}
            <span className="text-[#1d4ed8] relative">
              Water
              <span className="absolute left-0 bottom-0 w-full h-2 bg-[#cfd8e3] -z-10"></span>
            </span>{" "}
            Technology
          </h2>

          <p className="text-gray-700 mb-8 max-w-lg">
            We're pioneering the future of water technology with our groundbreaking
            innovation that eliminates expiration dates from bottled water,
            ensuring pure and safe drinking water for generations to come.
          </p>

          <div className="flex gap-4">
            <button className="bg-[#0a0a82] text-white px-6 py-3 rounded-md font-medium shadow hover:bg-[#1d4ed8] transition">
              Explore Technology
            </button>
            <button className="border-2 border-[#0a0a82] text-[#0a0a82] px-6 py-3 rounded-md font-medium hover:bg-[#e0e7ff] transition">
              Learn More
            </button>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="bg-white shadow-lg rounded-2xl p-6">
            <img
              src="https://www.empireblue.in/_next/image?url=%2Finnovation.png&w=1920&q=75"
              alt="Innovation"
              className="w-[300px] h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
