// File: Navbar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiOutlineMenu, HiOutlineX } from "react-icons/hi";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6 lg:px-16">
        {/* Logo */}
        <img
          src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=640&q=75"
          alt="Logo"
          className="w-44"
        />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex gap-8 font-medium text-gray-700">
          <Link to="/" className="hover:text-blue-700">Home</Link>
          <Link to="/blog" className="hover:text-blue-700">Blog</Link>
          <a href="#services" className="hover:text-blue-700">Service</a>
          <a href="#contact" className="hover:text-blue-700">Contact</a>
        </nav>

        {/* Book Now Button */}
        <button className="hidden lg:block bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full shadow-lg transition">
          Book Now →
        </button>

        {/* Hamburger Button - shows when screen < lg */}
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
          <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link to="/blog" onClick={() => setMenuOpen(false)}>Blog</Link>
          <a href="#services" onClick={() => setMenuOpen(false)}>Service</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
          <button className="bg-blue-700 hover:bg-blue-800 text-white px-5 py-2 rounded-full mt-2">
            Book Now →
          </button>
        </nav>
      </div>
    </header>
  );
}
