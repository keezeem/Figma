import React from 'react';
const About = () => {
  return (
    <div className="flex flex-col items-center py-10 px-6 sm:px-10 lg:px-16 min-h-screen">
      {/* Header (Centered at the top) */}
      <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-8 text-center  text-green-600">
        WHY YOU SHOULD PARTNER WITH US
      </h1>

      {/* Content Section (Flex container for left-aligned content) */}
      <section className="w-full max-w-[1300px] flex items-start gap-8 sm:gap-16">
        {/* Text Section (Left Side) */}
        <div className="flex-1 text-left">
          <h3 className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-black mb-4">
            1. You own an online store, and become a boss of your own <br />
            2. You spend less than 10 minutes to execute every trade, it is very easy to operate<br />
            3. You get food stuffs every month<br />
            4. The company helps you sell your products at the end of Trade Cycle (30days)<br />
            5. You make profit every 30days from the company<br />
            6. Partners can have multiple shops, and earn profits in all of it, which means, more shops, more profits<br />
            7. No special skill is required, all you need to do this business is a smart phone with internet data<br />
            8. You can withdraw your trading capital ONLY anytime the trade circle is completed<br />
            9. You can CHOOSE to sponsor or refer people ABSOLUTELY OPTIONAL<br />
            10. You earn more residual income when you refer people up to your 2nd generation...WOW!!<br />
            11. There is time freedom<br />
            12. There is financial stability and power of leverage<br />
            13. We help each other succeed<br />
            14. No age barriers
          </h3>
        </div>
      </section>
    </div>
  );
};

export default About;
