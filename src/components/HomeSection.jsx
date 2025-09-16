import React, { useState } from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaWhatsapp,
  FaTimes,
  FaCommentDots,
} from "react-icons/fa";

export default function HomeSection() {
  const [open, setOpen] = useState(true);

  return (
    <section
      id="home"
      className="relative bg-gradient-to-b from-gray-100 to-gray-200 py-16"
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="bg-gray-100 rounded-3xl shadow-xl flex flex-col md:flex-row items-center justify-between p-10 md:p-16 relative">
          
          {/* Left Image (Can) */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              src="https://www.empireblue.in/_next/image?url=%2Fcan1.png&w=1920&q=75"
              alt="Empire Blue Can"
              className="w-72 md:w-96 drop-shadow-xl"
            />
          </div>

          {/* Right Content */}
          <div className="flex-1 text-center md:text-left">
            {/* Decorative Logo */}
            <img
              src="https://www.empireblue.in/_next/image?url=%2Fimage.png&w=1920&q=75"
              alt="Empire Blue Decorative"
              className="mx-auto md:mx-0 mb-4 w-60"
            />

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 leading-snug">
              World's{" "}
              <span className="text-blue-700">First Non-Expiry Water</span>
            </h1>
            <p className="mt-4 text-gray-700 leading-relaxed">
              Empire Blue Pvt. Ltd. prioritizes health, innovation, and
              sustainability. We are committed to setting new industry standards
              and providing a safe, reliable, and beneficial hydration solution
              for people worldwide.
            </p>
            <button className="mt-6 bg-blue-700 hover:bg-blue-800 text-white px-6 py-3 rounded-full font-medium shadow-lg transition flex items-center gap-2 mx-auto md:mx-0">
              Contact Us →
            </button>
          </div>
        </div>
      </div>

      {/* Floating Sidebar (Bottom Right) */}
      <div className="fixed bottom-6 right-6 z-50">
        {open ? (
          // Expanded Sidebar
          <div className="flex flex-col gap-3 items-end">
            <a
              href="#"
              className="bg-blue-600 text-white p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="tel:+919999999999"
              className="bg-blue-500 text-white p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaPhoneAlt size={20} />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaWhatsapp size={20} />
            </a>
            <button
              onClick={() => setOpen(false)}
              className="bg-indigo-900 text-white p-3 rounded-full shadow-md hover:scale-110 transition"
            >
              <FaTimes size={20} />
            </button>
          </div>
        ) : (
          // Collapsed Button
          <button
            onClick={() => setOpen(true)}
            className="relative bg-indigo-900 text-white p-4 rounded-full shadow-md hover:scale-110 transition"
          >
            <FaCommentDots size={22} />
            {/* Green dot */}
            <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </button>
        )}
      </div>

      {/* Bottom Curve */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          className="w-full h-24"
        >
          <path
            d="M-13.62,70.55 C149.99,150.00 271.65,-49.98 503.67,78.19 L500.00,0.00 L0.00,0.00 Z"
            className="fill-gray-200"
          ></path>
        </svg>
      </div>
    </section>
  );
}
