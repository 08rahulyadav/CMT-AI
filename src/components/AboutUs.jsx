import React from "react";

export default function AboutSection() {
  return (
    <section className="relative py-20 bg-gray-100">
      {/* Top curve matching EmpireBlue */}
      <div className="absolute top-0 left-0 w-full overflow-hidden -z-10">
        <svg
          className="w-full h-40"
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <path
            fill="#3b82f6"
            fillOpacity="1"
            d="M0,128L48,122.7C96,117,192,107,288,101.3C384,96,480,96,576,106.7C672,117,768,139,864,160C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12 relative z-10">
        {/* Left: Text */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            About <span className="text-blue-500">EmpireBlue</span>
          </h2>
          <p className="text-gray-700 mb-4">
            EmpireBlue is committed to delivering excellence, purity, and eco-friendly solutions for a sustainable future. Our team focuses on innovative approaches to make a positive impact on society and the environment.
          </p>
          <p className="text-gray-700 mb-6">
            We combine state-of-the-art technology with ethical practices to provide products and services that meet the highest standards of quality and safety.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
            Learn More
          </button>
        </div>

        {/* Right: Image */}
        <div className="lg:w-1/2">
          <img
            src="https://www.empireblue.in/_next/image?url=%2Fabout.jpeg&w=1920&q=75"
            alt="About EmpireBlue"
            className="rounded-lg shadow-lg w-full max-w-md mx-auto object-cover"
          />
        </div>
      </div>
    </section>
  );
}
