import React from "react";

export default function Navbar() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img
            src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=640&q=75"
            alt="Empire Blue Logo"
            className="w-36"
          />
        </div>

        {/* Menu */}
        <nav className="hidden md:flex gap-8 font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-700">Home</a>
          <a href="/Blog" className="hover:text-blue-700">Blog</a>
          <a href="#services" className="hover:text-blue-700">Service</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>

        {/* Button */}
        <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full shadow-lg transition">
          Book Now →
        </button>
      </div>
    </header>
  );
}
