import React from "react";
import avatar1 from "../assets/avater1.png"; // Add file extension .png
import avatar2 from "../assets/avater2.png"; // Add file extension .png
import avatar3 from "../assets/avater3.png"; // Add file extension .png

const InfoSection = () => {
  return (
    <div className="w-full max-w-[1300px] mx-auto p-6">
      {/* Grid container */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* First Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
          <img
            src={avatar1}
            alt="Avatar 1"
            className="w-16 h-16 rounded-full mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Vision
          </h1>
          <p className="text-gray-600">
            Empowering the people for a brigther future, illuminating the path to global transformation...
          </p>
        </div>

        {/* Second Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
          <img
            src={avatar2}
            alt="Avatar 2"
            className="w-16 h-16 rounded-full mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Mission Statement
          </h1>
          <p className="text-gray-600">
            To inspire and empower individuals, communities, and nations to shine their lights for a brighter world, and transformation
          </p>
        </div>

        {/* Third Box */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-start">
          <img
            src={avatar3}
            alt="Avatar 3"
            className="w-16 h-16 rounded-full mb-4"
          />
          <h1 className="text-xl font-semibold text-gray-800 mb-2">
            Solo Travel Planning
          </h1>
          <p className="text-gray-600">
            Dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nun Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet rcus nunc. Duis egestas ac 
          </p>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
