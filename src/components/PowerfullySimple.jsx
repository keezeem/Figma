import React from "react";
import frame2 from "../assets/frame2.png";
import frame3 from "../assets/frame3.png";
import frame4 from "../assets/frame4.png";
import frame5 from "../assets/frame5.png";
import frame6 from "../assets/frame6.png";

const PowerfullySimple = () => {
  return (
    <div
      className="flex flex-col items-center py-10 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${frame2})` }}
    >
          {/* Top Section with Frame6 */}
          <div className="w-full max-w-[1300px] relative">
      {/* Background Image */}
      <img
        src={frame6}
        alt="Frame 6"
        className="w-full h-auto rounded-lg"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-20 text-cyan-800">
        <h1 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4">
          THE TRADING CYCLE EXPLAINED <br /> (BRONZE STORE)
        </h1>
        <h3 className="text-sm sm:text-base lg:text-lg mt-5 leading-relaxed">
          Customer makes ₦30,000 new retail purchase of one (70g Indomie <br /> carton)
          from SOLiD MART as Take Home Product.
        </h3>
      </div>
    </div>


      {/* Two Images Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-8 w-full max-w-[1300px] mt-10">
        {/* Left Image with Frame4 */}
        <div className="relative w-full lg:w-1/2">
        {/* Image */}
        <img
          src={frame4}
          alt="Frame 4"
          className="w-full h-[450px] rounded-lg"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-20 text-white rounded-lg">
          <h2 className="text-sm sm:text-lg lg:text-xl font-semibold mt-[-280px] leading-relaxed">
            After purchasing at wholesale section, Customer puts the 2 cartons (70g
            Indomie) in His store and instructs the company to sell for Him.
          </h2>
        </div>
      </div>


        {/* Right Image with Frame5 */}
        <div className="relative w-full lg:w-1/2">
        {/* Image */}
        <img
          src={frame5}
          alt="Frame 5"
          className="w-full h-[450px] rounded-lg"
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex flex-col items-start justify-center mt-[-245px] px-6 sm:px-12 lg:px-20 text-white ">
          <h1 className="text-sm sm:text-lg lg:text-xl font-bold">
            THE TRADING CYCLE EXPLAINED <br /> (BRONZE STORE)
          </h1>
          <h3 className="mt-4 text-sm sm:text-base text-slate-300 lg:text-lg leading-relaxed">
            Customer makes Wholesale purchase of (2 x 70g Indomie carton) at ₦10,000 each from SOLiD MART For Resale.
          </h3>
        </div>
      </div>


      </div>
            {/* Top Section with Frame6 */}
      <div className="w-full max-w-[1300px] relative">
      {/* Background Image */}
      <img
        src={frame3}
        alt="Frame 3"
        className="w-full h-auto rounded-lg"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col items-start justify-center px-6 sm:px-12 lg:px-20 text-cyan-800">
        <h1 className="text-lg sm:text-2xl lg:text-4xl font-bold mb-4">
          <span className="block mb-2">ONLINE SOLiD</span>
          <span className="block mb-2">MART SIZES</span>
          <span className="block">AND PRICES</span>
        </h1>
      </div>


    </div>
    </div>
  );
};

export default PowerfullySimple;
