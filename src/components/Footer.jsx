// File: Footer.jsx
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-700 py-16">
      <div className="container mx-auto px-6 lg:px-16 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* Logo + Description + Social Media */}
        <div>
          <img
            src="https://www.empireblue.in/_next/image?url=%2Flogo1.png&w=1920&q=75"
            alt="Empire Blue Logo"
            className="w-32 mb-4"
          />
          <p className="text-gray-600 mb-4">
            Providing clean and safe water solutions for a healthier tomorrow. Our commitment to quality and innovation makes us the trusted choice in water treatment.
          </p>

          {/* Social Media under description */}
          <div className="flex gap-3 mt-2">
            <a href="#" className="border border-gray-400 text-gray-600 p-2 rounded-full hover:border-blue-700 hover:text-blue-700 transition">
              <FaFacebookF />
            </a>
            <a href="#" className="border border-gray-400 text-gray-600 p-2 rounded-full hover:border-blue-700 hover:text-blue-700 transition">
              <FaInstagram />
            </a>
            <a href="#" className="border border-gray-400 text-gray-600 p-2 rounded-full hover:border-blue-700 hover:text-blue-700 transition">
              <FaLinkedinIn />
            </a>
            <a href="#" className="border border-gray-400 text-gray-600 p-2 rounded-full hover:border-blue-700 hover:text-blue-700 transition">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-700">About Us</a></li>
            <li><a href="#" className="hover:text-blue-700">Our Services</a></li>
            <li><a href="#" className="hover:text-blue-700">Latest News</a></li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Our Services</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-700">Water Testing</a></li>
            <li><a href="#" className="hover:text-blue-700">Water Purification</a></li>
            <li><a href="#" className="hover:text-blue-700">Water Treatment</a></li>
            <li><a href="#" className="hover:text-blue-700">Expert Consultation</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <p>Empire Blue Pvt. Ltd.</p>
          <p>Chhindwara, Madhya Pradesh</p>
          <p>India</p>
          <p className="mt-2">+91 8867268719</p>
          <p>info@empireblue.in</p>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-300 mt-10 pt-6 text-center text-gray-500 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p>© 2025 Empire Blue. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#" className="hover:text-blue-700">Privacy Policy</a>
          <a href="#" className="hover:text-blue-700">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
}
