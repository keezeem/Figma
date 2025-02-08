import { useState } from "react";
import logo from "../assets/logo.png";

const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-white">
      <nav className="mx-px mb-2 p-4 lg:p-2 flex items-center justify-between relative">
        {/* Left: Logo */}
        <div className="flex items-start px-10">
          <a href="/" aria-label="Go to homepage">
            <img
              src={logo}
              alt="Company Logo"
              className="w-32 sm:w-40 md:w-48 lg:w-56 px-4"
            />
          </a>
        </div>

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
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Middle: Menu Items */}
        <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } lg:flex flex-col lg:flex-row items-center justify-center absolute lg:relative top-full left-0 lg:top-auto lg:left-auto w-full lg:w-auto bg-white lg:bg-transparent shadow-lg lg:shadow-none p-4 lg:p-0 z-50`}
        >
          <a
            href="/"
            className="block text-lg font-medium text-black hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            HOME
          </a>
          <a
            href="/"
            className="block text-lg font-medium text-black hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            ABOUT US
          </a>
          <a
            href="/"
            className="block text-lg font-medium text-black hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            OUR PACKAGES
          </a>
          <a
            href="/"
            className="block text-lg font-medium text-black hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            HOW IT WORKS
          </a>
          <a
            href="/"
            className="block text-lg font-medium text-black hover:text-green-500 transition-colors mb-4 lg:mb-0 lg:mx-2"
          >
            CONTACT
          </a>

          {/* Login and Register inside Menu for Small Screens */}
          <a
            href="/login"
            className="block text-lg font-medium text-black bg-lime-400 py-2 px-4 rounded-full shadow hover:shadow-md transition mb-4 lg:hidden"
          >
            Log in
          </a>
          <a
            href="/registration"
            className="block text-lg font-medium text-white bg-lime-500 py-2 px-4 rounded-full shadow hover:shadow-md transition lg:hidden"
          >
            Register
          </a>
        </div>

        {/* Right: Login and Register for Large Screens */}
        <div className="hidden lg:flex flex-row items-end gap-4 px-10">
          <a
            href="/login"
            className="py-2 px-4 text-center bg-lime-400 text-black font-semibold rounded-full shadow hover:shadow-md transition"
          >
            Log in
          </a>
          <a
            href="/registration"
            className="py-2 px-4 text-center bg-lime-400 text-black font-semibold rounded-full shadow hover:shadow-md transition"
          >
            Register
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
