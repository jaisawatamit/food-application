import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa'; // Import React Icons

function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-white py-6 sm:py-8 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center md:text-left mb-4 md:mb-0">
            FoodApp
          </h2>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-500 transition"
            >
              <FaFacebookF size={20} />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-400 transition"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-pink-500 transition"
            >
              <FaInstagram size={20} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-blue-600 transition"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Middle Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-center md:text-left">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">About Us</h3>
            <p className="text-sm sm:text-base text-gray-400">
              FoodApp is your go-to platform for discovering delicious recipes,
              ordering food, and connecting with food enthusiasts.
            </p>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="/about"
                  className="text-gray-400 hover:text-white transition"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-gray-400 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="text-gray-400 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg sm:text-xl font-semibold mb-3">Contact Us</h3>
            <p className="text-sm sm:text-base text-gray-400">
              Email: support@foodapp.com
            </p>
            <p className="text-sm sm:text-base text-gray-400">Phone: +1 234 567 890</p>
            <p className="text-sm sm:text-base text-gray-400">
              Address: 123 Food Street, Flavor Town
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 sm:mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-xs sm:text-sm text-gray-400">
            © {new Date().getFullYear()} FoodApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;