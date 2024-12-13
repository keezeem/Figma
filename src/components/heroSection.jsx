import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import woman from "../assets/woman.png"; // Replace with the actual path to your image
import hero from "../assets/hero.png"; // Replace with your background image path

const HeroSection = () => {
  return (
    <div
      className="w-full max-w-[1300px] h-auto sm:h-[500px] bg-cover bg-center bg-no-repeat rounded-lg shadow-lg flex flex-col sm:flex-row overflow-hidden mx-auto"
      style={{ backgroundImage: `url(${hero})` }}
    >
      {/* Left Section */}
      <div className="flex-1 p-6 flex flex-col justify-center rounded-lg">
        <h1 className="text-xl sm:text-xl lg:text-3xl font-bold px-10 text-green-200 mb-2">
          Empowering You for <br /> a Brighter Tomorrow
        </h1>
        <h3 className="text-sm sm:text-base lg:text-lg px-10 text-white mb-4">
          Empowering the people for a brighter future, <br />
          illuminating the path to global transformation...
        </h3>
        {/* Buttons */}
        <div className="flex gap-4 px-10 mt-10">
          <button className="py-2 px-4 sm:px-6 text-white text-sm ring-2 ring-white font-medium rounded-full shadow hover:bg-green-600 transition">
            Read More
          </button>
          <Link
            to="/registration" // Use the 'to' prop to specify the Registration path
            className="py-2 px-4 sm:px-6 text-white text-sm ring-2 ring-white font-medium rounded-full shadow hover:bg-gray-300 transition text-center"
          >
            Sign Up
          </Link>
        </div>
      </div>

      {/* Right Section */}
      <div className="sm:w-1/2 h-[350px] sm:h-auto">
        <img
          src={woman}
          alt="Woman"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default HeroSection;
