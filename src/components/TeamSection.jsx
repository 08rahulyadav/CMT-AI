import React from "react";
import { FaLinkedin, FaFacebook } from "react-icons/fa";

const founder = {
  name: "Dr. Gagan Mahalwanshi",
  role: "Founder & CEO",
  img: "https://www.empireblue.in/_next/image?url=%2Fimages%2Fgagan.jpeg&w=640&q=75",
  desc: "With over 15 years of experience in the water industry, Dr. Gagan Mahalwanshi has pioneered revolutionary water purification technologies. His vision for Newtro-X is to create water solutions that are both sustainable and beneficial for health.",
  socials: [
    { icon: <FaLinkedin />, link: "#" },
    { icon: <FaFacebook />, link: "#" },
  ],
};

const leadership = [
  {
    name: "Sandhya Mahalwanshi",
    role: "Managing Director",
    img: "https://www.empireblue.in/_next/image?url=%2Fimages%2Fsandhya.jpeg&w=256&q=75",
  },
  {
    name: "U. S. Khobariya",
    role: "Sub-Director",
    img: "https://www.empireblue.in/_next/image?url=%2Fimages%2F1.jpeg&w=256&q=75",
  },
  {
    name: "Mukesh Dixit",
    role: "CEO",
    img: "https://www.empireblue.in/_next/image?url=%2Fimages%2F2.jpeg&w=256&q=75",
  },
];

export default function TeamSection() {
  return (
    <section className="bg-white py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-12">
        <span className="text-blue-900">Meet Our </span>
        <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Expert
        </span>{" "}
        <span className="text-blue-900">Team</span>
      </h2>

      <div className="flex flex-col md:flex-row items-center justify-center gap-12 mb-16 max-w-6xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-4 w-72">
          <img
            src={founder.img}
            alt={founder.name}
            className="rounded-xl w-full h-auto"
          />
          <div className="mt-3">
            <h3 className="font-bold text-blue-900">{founder.name}</h3>
            <p className="text-gray-600 text-sm">{founder.role}</p>
          </div>
        </div>

        <div className="max-w-lg text-left">
          <h3 className="font-semibold text-lg text-blue-900 mb-2">
            About the Founder
          </h3>
          <p className="text-gray-600 mb-4">{founder.desc}</p>
          <div className="flex gap-4">
            {founder.socials.map((s, idx) => (
              <a
                key={idx}
                href={s.link}
                className="text-blue-600 hover:text-blue-800 text-xl"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-semibold text-blue-900 mb-8">
        Leadership Team
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {leadership.map((person, idx) => (
          <div
            key={idx}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl transition p-4"
          >
            <img
              src={person.img}
              alt={person.name}
              className="rounded-xl mx-auto w-40 h-40 object-cover"
            />
            <h4 className="mt-3 font-bold text-gray-900">{person.name}</h4>
            <p className="text-gray-600 text-sm">{person.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
