import React from "react";
import id1 from "../assets/id1.png"; // Replace with actual image paths
import id2 from "../assets/id2.png";
import id3 from "../assets/id3.png";
import id4 from "../assets/id4.png";
import id5 from "../assets/id5.png";
import id6 from "../assets/id6.png";
import id7 from "../assets/id7.png";
import id8 from "../assets/id8.png";

const HowItsWork = () => {
  const itemsLeft = [
    { id: 1, src: id1, title: "In SOLiD Mart", text: "Discover how our first feature can transform your experience." },
    { id: 2, src: id2, title: "In SOLiD Mart", text: "Experience smooth integration with our robust tools." },
    { id: 3, src: id3, title: "In SOLiD Mart", text: "Leverage the latest advancements in technology." },
    { id: 4, src: id4, title: "In SOLiD Mart", text: "We are here to assist you every step of the way." },
  ];

  const itemsRight = [
    { id: 5, src: id5, title: "In SOLiD Mart", text: "Access our services from anywhere in the world." },
    { id: 6, src: id6, title: "In SOLiD Mart", text: "Enjoy an intuitive and engaging user interface." },
    { id: 7, src: id7, title: "In SOLiD Mart", text: "Tailor our offerings to suit your unique needs." },
    { id: 8, src: id8, title: "In SOLiD Mart", text: "Trust in our robust and reliable security measures." },
  ];

  return (
    <div className="px-4 sm:px-10 py-12">
      {/* Title */}
      <h1 className="text-center text-green-500 text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        FACTS ABOUT US
      </h1>

      <div className="flex items-center justify-center min-h-screen bg-gray-50">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            {itemsLeft.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.src}
                  alt={`ID ${item.id}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform duration-300 transform hover:scale-105"
                />
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-2xl hover:text-green-500 font-bold text-gray-400">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg hover:text-green-500 font-medium text-gray-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {itemsRight.map((item) => (
              <div
                key={item.id}
                className="flex items-center space-x-4 p-4 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
              >
                <img
                  src={item.src}
                  alt={`ID ${item.id}`}
                  className="w-16 h-16 sm:w-20 sm:h-20 rounded-full transition-transform duration-300 transform hover:scale-105"
                />
                <div>
                  <h1 className="text-lg sm:text-xl lg:text-2xl hover:text-green-500 font-bold text-gray-400">
                    {item.title}
                  </h1>
                  <p className="text-sm sm:text-base lg:text-lg hover:text-green-500 font-medium text-gray-400">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItsWork;
