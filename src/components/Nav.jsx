import React, { useState } from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="container mx-auto p-4 lg:p-2 flex items-center justify-between">
        {/* Logo */}
        <a href="/" aria-label="Go to homepage">
          <img
            src={logo}
            alt="Company Logo"
            className="w-32 sm:w-40 md:w-48 lg:w-56"
          />
        </a>

        {/* Hamburger Menu Button */}
        <button
          className="lg:hidden focus:outline-none focus:ring-2 ring-cyan-700 rounded-md"
          aria-expanded={menuOpen}
          aria-label="Toggle Menu"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        {/* Menu Items */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } flex-col lg:flex lg:flex-row lg:items-center w-full lg:w-auto bg-white lg:bg-transparent absolute lg:static top-16 left-0 lg:top-auto shadow-lg lg:shadow-none p-4 lg:p-0 z-50`}
        >
          <a
            href="/"
            className="block text-lg font-medium text-cyan-700 hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            About Us
          </a>
          <a
            href="/"
            className="block text-lg font-medium text-cyan-700 hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            Benefits
          </a>
          <a
            href="/"
            className="block text-lg font-medium text-cyan-700 hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            What We Do
          </a>
          <a
            href="/"
            className="block text-lg font-medium text-cyan-700 hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            Pricing
          </a>

          {/* Login and Get Started */}
          <div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:ml-4">
            <a
              href="/"
              className="block lg:inline py-2 px-4 text-center bg-green-100 text-black font-semibold rounded-full shadow hover:shadow-md transition"
            >
              Login
            </a>
            <a
              href="/"
              className="block lg:inline py-2 px-4 text-center bg-green-500 text-white font-semibold rounded-full shadow hover:shadow-md transition"
            >
              Get Started ↗
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
