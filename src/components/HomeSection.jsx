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
  const [open, setOpen] = useState(false);

  return (
    <section className="relative bg-gray-100 py-24 overflow-hidden">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Main Hero Card */}
        <div className="bg-gray-200 rounded-3xl flex flex-col md:flex-row items-center justify-between p-12 md:p-20 relative">
          {/* Left - Product Image */}
          <div className="flex-1 flex justify-center mb-8 md:mb-0">
            <img
              src="https://www.empireblue.in/_next/image?url=%2Fcan1.png&w=1920&q=75"
              alt="Empire Blue Can"
              className="w-80 md:w-[28rem]" // no bluish overlay or shadow
            />
          </div>

          {/* Right - Content */}
          <div className="flex-1 text-center md:text-left">
            <img
              src="https://www.empireblue.in/_next/image?url=%2Fimage.png&w=1920&q=75"
              alt="Empire Blue Decorative"
              className="mx-auto md:mx-0 mb-6 w-72 md:w-80"
            />
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-snug">
              World's{" "}
              <span className="text-blue-700">
                First Non-Expiry Water
              </span>
            </h1>
            <p className="mt-6 text-gray-700 leading-relaxed text-lg max-w-lg mx-auto md:mx-0">
              Empire Blue Pvt. Ltd. prioritizes{" "}
              <span className="font-semibold text-blue-700">
                health, innovation, and sustainability
              </span>. We are committed to delivering a safe, reliable, and beneficial hydration solution worldwide, ensuring better living for everyone.
            </p>
            <button className="mt-10 bg-blue-700 hover:bg-blue-800 text-white px-10 py-4 rounded-full font-medium shadow-lg transition-all duration-300 flex items-center gap-2 mx-auto md:mx-0">
              Contact Us →
            </button>
          </div>
        </div>
      </div>

      {/* Floating Social Buttons */}
      <div className="fixed bottom-6 right-6 z-50">
        {open ? (
          <div className="flex flex-col gap-3 items-end animate-fadeIn">
            <a
              href="#"
              className="bg-blue-600 text-white p-4 rounded-full shadow-md transition"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="bg-gradient-to-r from-pink-500 to-orange-400 text-white p-4 rounded-full shadow-md transition"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="tel:+919999999999"
              className="bg-blue-500 text-white p-4 rounded-full shadow-md transition"
            >
              <FaPhoneAlt size={24} />
            </a>
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 text-white p-4 rounded-full shadow-md transition"
            >
              <FaWhatsapp size={24} />
            </a>
            <button
              onClick={() => setOpen(false)}
              className="bg-gray-800 text-white p-4 rounded-full shadow-md transition"
            >
              <FaTimes size={24} />
            </button>
          </div>
        ) : (
          <button
            onClick={() => setOpen(true)}
            className="relative bg-indigo-900 text-white p-5 rounded-full shadow-md transition"
          >
            <FaCommentDots size={26} />
            <span className="absolute top-1 right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></span>
          </button>
        )}
      </div>
    </section>
  );
}
