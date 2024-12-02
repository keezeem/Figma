import React from "react";

const Faq = () => {
  const faqs = [
    " SOLiD Mart is not an investment platform",
    "SOLiD Mart is not a bank",
    "SOLiD Mart is not a money laundry company",
    "SOLiD Mart is an e-commerce trading compan",
    "SOLiD Mart runs a buying and selling concept through revolutionary ideology called  NEW RETAIL",
    "You must buy from the company (Physical products) before the company helps you to  sell your physical products by your instruction",
    "SOLiD Mart sources and supplies all the products traded on the e-commerce platform",
    "SOLiD Mart does not trade for anyone, you must buy and contract us to sell on your  behalf by initiating a HELP ME SELL BUTTON before the company can sell for you",
    " In SOLiD Mart, you will be charged ANNUAL maintenance charges of 5% for your store,  which will be charged from your wallet at the end of the first quarter of activation and  operation of your store and business",
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-10">
      {/* Title */}
      <h1 className="text-center text-green-500 text-3xl sm:text-4xl lg:text-5xl font-bold mb-12">
        FACTS ABOUT US
      </h1>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto space-y-6">
        {faqs.map((text, index) => (
          <div
            key={index}
            className="bg-white rounded-lg shadow-md p-6 hover:bg-green-50 transition-colors duration-300"
          >
            <p className="text-sm sm:text-base lg:text-lg text-cyan-800 font-medium">
              {text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
