import React from "react";
import { FaUsers, FaTruck, FaBox, FaChartLine, FaAward } from "react-icons/fa";

const stats = [
  {
    icon: <FaUsers className="text-white text-2xl" />,
    value: "50,000+",
    label: "Happy Customers",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: <FaTruck className="text-white text-2xl" />,
    value: "100,000+",
    label: "Orders Delivered",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <FaBox className="text-white text-2xl" />,
    value: "15+",
    label: "Products Launched",
    color: "from-green-400 to-green-600",
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    value: "98%",
    label: "Satisfaction Rate",
    color: "from-pink-400 to-purple-500",
  },
  {
    icon: <FaAward className="text-white text-2xl" />,
    value: "25+",
    label: "Industry Awards",
    color: "from-red-400 to-pink-500",
  },
];

export default function SuccessStory() {
  return (
    <section className="bg-[#dce6ef] py-16 px-6 text-center">
      <h2 className="text-4xl font-bold mb-4">
        <span className="text-blue-900">Our </span>
        <span className="bg-gradient-to-r from-blue-600 to-green-500 bg-clip-text text-transparent">
          Success
        </span>{" "}
        <span className="text-blue-900">Story</span>
      </h2>
      <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
        Trusted by thousands of customers across India, delivering pure and
        healthy water solutions
      </p>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-6 max-w-6xl mx-auto">
        {stats.map((item, idx) => (
          <div
            key={idx}
            className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition transform hover:-translate-y-1"
          >
            <div
              className={`w-12 h-12 mx-auto flex items-center justify-center rounded-xl bg-gradient-to-r ${item.color}`}
            >
              {item.icon}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mt-4">
              {item.value}
            </h3>
            <p className="text-gray-600 mb-4">{item.label}</p>
            <div
              className={`h-1 w-0 mx-auto bg-gradient-to-r ${item.color} rounded-full transition-all duration-500 group-hover:w-16`}
            ></div>
          </div>
        ))}
      </div>
    </section>
  );
}
