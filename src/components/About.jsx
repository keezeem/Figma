import React from 'react';
import man from '../assets/man.png'; // Replace with the correct path to your image

const About = () => {
  return (
    <div className="flex justify-center py-10 px-6 sm:px-10 lg:px-16">
      <section className="w-full max-w-[1300px] flex flex-col sm:flex-row items-center gap-8 sm:gap-16">
        {/* Text Section (Left Side) */}
        <div className="flex-1 text-cyan-800">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold mb-4 text-center sm:text-left">
            About Us
          </h1>
          <h3 className="text-base sm:text-lg lg:text-xl font-medium leading-relaxed text-cyan-700 mb-4">
            Over the years, we have discovered according to the word of God in the Bible that, darkness will cover the earth, even gross darkness the people according to Isaiah 60:2, which is what we are experiencing globally, especially in this part of the world, I mean the African continent.
            <br />
            <br />
            But the word of God has also commanded that we do exploits and deliver the people from darkness, for those who have been confused, frustrated and snared in holes of life, still according to Isaiah 42:22.
            <br />
            <br />
            This is the main reason for the emergence of Spring Of Light Divine Global Ltd (SOLiD).
            <br />
            <br />
            Our primary reason for existence is to bring succor and rest for as many that are willing to embrace this new innovation and are ready to move on this train. This is a call to everyone finding it difficult in this economy to feed well and still help families and friends, and the society at large.
          </h3>
        </div>

        {/* Image Section (Right Side) */}
        <div className="flex-shrink-0 w-full sm:w-[500px] lg:w-[600px]">
          <img
            src={man}
            alt="Frame"
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
      </section>
    </div>
  );
};

export default About;
