import React from "react";
import rectangle from "../assets/rectangle.png";

const PowerfullySimple = () => {
  return (
    <div className="w-full max-w-[1300px] h-auto sm:h-[500px] bg-cover bg-center bg-no-repeat rounded-3xl shadow-lg flex flex-col sm:flex-row overflow-hidden mx-auto relative" style={{ backgroundImage: `url(${rectangle})` }}>
      {/* Overlay for better text visibility */}  
      {/* <div className="absolute inset-0 bg-black/50"></div> */}

      {/* Content Section */}
      <div className="relative z-10 w-full px-6 sm:px-12 lg:px-16 py-8 sm:py-0 flex flex-col justify-center text-white">
        {/* Header (Centered at the top) */}
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 text-center sm:text-left">
          WHY YOU SHOULD PARTNER WITH US
        </h1>

        {/* Description Section */}
        <div className="text-sm sm:text-base lg:text-lg leading-relaxed space-y-4">
          <p>1. SOLiD Mart is not an investment platform.</p>
          <p>2. SOLiD Mart is not a bank.</p>
          <p>3. SOLiD Mart is not a money laundry company.</p>
          <p>4. SOLiD Mart is an e-commerce trading company.</p>
          <p>5. SOLiD Mart runs a buying and selling concept.</p>
          <p>6. You must buy from the company (Physical products) before the company helps you to sell your physical products by your instruction.</p>
          <p>7. SOLiD Mart sources and supplies all the products traded on the e-commerce platform locally.</p>
          <p>8. SOLiD Mart does not trade for anyone, you must buy and instruct us to sell on your behalf by initiating a HELP ME SELL BUTTON before the company can sell for you.</p>
          <p>9. In SOLiD Mart, you will be charged ANNUAL maintenance charges of 5% for your store, which will be charged from your wallet at the end of the first quarter of activation and operation of your store and business.</p>
        </div>
      </div>
    </div>
  );
};

export default PowerfullySimple;

