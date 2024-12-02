import React from 'react';
import logo from '../assets/logo.png'; // Update with your logo path
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
  return (
    <section>
      <footer className="bg-white text-gray-600 py-8">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-start">
          {/* Left Section */}
          <div className="flex flex-col items-start space-y-4">
            {/* Logo */}
            <img src={logo} alt="Logo" className="w-[300px] h-[100px] object-contain" />

            {/* Description */}
            <p className="text-sm max-w-md">
              Elevate your influencer marketing, <br /> you have a home that can help you swipeabove.
            </p>

            {/* Social Media Links */}
            <div className="flex space-x-4 mt-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition-colors"
                aria-label="Facebook"
              >
                <FaFacebook size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-400 transition-colors"
                aria-label="Twitter"
              >
                <FaTwitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-pink-500 transition-colors"
                aria-label="Instagram"
              >
                <FaInstagram size={24} />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-600 transition-colors"
                aria-label="LinkedIn"
              >
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>

          {/* Right Section */}
          <div className="flex flex-row gap-x-12 mt-8 md:mt-0">
            {/* ABOUT SWIPEA SOLiD */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">ABOUT SWIPEA SOLiD</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    What we do 
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Career
                  </a>
                </li>
              </ul>
            </div>

            {/* CUSTOMER SUPPORT */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">CUSTOMER SUPPORT</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Email support
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms and conditions
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy policy
                  </a>
                </li>
              </ul>
            </div>

            {/* LEGAL & POLICIES */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800">LEGAL & POLICIES</h3>
              <ul className="mt-2 space-y-1">
                <li>
                  <a href="#" className="hover:underline">
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Privacy Policies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Cookie Notices
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider Line */}
        <hr className="mt-8 border-gray-300" />

        {/* Footer Bottom */}
        <div className="mt-4 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} SOLiD - Spring Of Light Divine Global Limited - All rights reserved.
        </div>
      </footer>
    </section>
  );
};

export default Footer;
