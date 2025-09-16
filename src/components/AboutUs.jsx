import React from "react";

export default function AboutSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-16 flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Text Content */}
        <div className="lg:w-1/2">
          <h2 className="text-4xl font-bold mb-6">About <span className="text-blue-500">EmpireBlue</span></h2>
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

        {/* Right: About Image */}
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
