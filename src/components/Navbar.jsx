import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Blog", path: "/blog" },
    { name: "Service", path: "#services" },
    { name: "Contact", path: "#contact" },
  ];

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-16">
        <img
          src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=640&q=75"
          alt="Logo"
          className="w-44"
        />

        {/* Desktop Nav */}
        <nav className="hidden lg:flex gap-8 font-medium text-gray-700">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Book Now Button */}
        <button className="hidden lg:block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full shadow-lg transition">
          Book Now →
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-gray-700 lg:hidden"
        >
          {menuOpen ? <HiOutlineX size={28} /> : <HiOutlineMenu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-white shadow-md px-6 pb-6 overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="flex flex-col gap-4 font-medium text-gray-700">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.path}
              onClick={() => setMenuOpen(false)}
              className="relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 after:bg-blue-700 after:transition-all after:duration-300 hover:after:w-full"
            >
              {link.name}
            </Link>
          ))}
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full mt-2">
            Book Now →
          </button>
        </nav>
      </div>
    </header>
  );
}
