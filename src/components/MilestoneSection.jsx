import React from "react";
import { FaTrophy } from "react-icons/fa";

export default function MilestoneSection() {
  return (
    <section className="bg-[#dce6ef] py-16 px-6">
      <div className="mb-10">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <FaTrophy className="text-yellow-500" />
          <span className="text-blue-900">Our</span>{" "}
          <span className="text-green-500">Milestone</span>
        </h2>
      </div>

      <div className="flex justify-between max-w-5xl mx-auto mb-12">
        <div className="w-1/2 pr-6">
          <h3 className="text-blue-900 font-bold">
            Black Plum <span className="font-normal">Premium Segment</span>
          </h3>
          <p className="text-gray-700">
            Launch of Colin, Dish Wash, Toilet Cleaner, and Floor Cleaner.
          </p>
        </div>
        <div className="w-1/2 pl-6">
          <h3 className="text-blue-900 font-bold">
            Black Plum <span className="font-normal">Premium Segment</span>
          </h3>
          <p className="text-gray-700">
            Launch of our premium brand with enhanced minerals and benefits.
            <br />
            Premium glass bottle packaging, professional branding.
          </p>
        </div>
      </div>

      <div className="flex justify-center items-center gap-6 mb-12">
        <img src="https://www.empireblue.in/_next/image?url=%2F2026.png&w=128&q=75" alt="2026" className="w-20" />
        <img src="https://www.empireblue.in/_next/image?url=%2Farrow.png&w=48&q=75" alt="arrow" className="w-6" />
        <img src="https://www.empireblue.in/_next/image?url=%2F2027.png&w=128&q=75" alt="2027" className="w-20" />
        <img src="https://www.empireblue.in/_next/image?url=%2Farrow.png&w=48&q=75" alt="arrow" className="w-6" />
        <img src="https://www.empireblue.in/_next/image?url=%2F2028.png&w=128&q=75" alt="2028" className="w-20" />
        <img src="https://www.empireblue.in/_next/image?url=%2Farrow.png&w=48&q=75" alt="arrow" className="w-6" />
        <img src="https://www.empireblue.in/_next/image?url=%2F2029.png&w=128&q=75" alt="2029" className="w-20" />
        <img src="https://www.empireblue.in/_next/image?url=%2Farrow.png&w=48&q=75" alt="arrow" className="w-6" />
        <img src="https://www.empireblue.in/_next/image?url=%2F2030.png&w=128&q=75" alt="2030" className="w-20" />
      </div>

      <div className="flex justify-between max-w-6xl mx-auto">
        <div className="w-1/3 pr-4 text-left">
          <h3 className="text-blue-900 font-bold">
            Newtro-X <span className="font-normal">Project Kickoff</span>
          </h3>
          <p className="text-gray-700">
            Launch of Newtro-X, our base segment brand.
            <br />
            Introducing the world's first non-expiry water bottle.
          </p>
        </div>
        <div className="w-1/3 px-4 text-center">
          <h3 className="text-blue-900 font-bold">
            Our Vehicle Care <span className="font-normal">Segment Launch</span>
          </h3>
          <p className="text-gray-700">
            Introduction of DM Water (battery), Coolant, and DEF Water.
          </p>
        </div>
        <div className="w-1/3 pl-4 text-right">
          <h3 className="text-blue-900 font-bold">
            Java-X <span className="font-normal">Major Achievement</span>
          </h3>
          <p className="text-gray-700">
            Launch of our highest premium segment brand with top enhancements.
            <br />
            Super premium glass bottle, elite branding.
          </p>
        </div>
      </div>
    </section>
  );
}
