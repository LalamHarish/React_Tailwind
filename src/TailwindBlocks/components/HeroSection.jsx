import React from 'react';

const HeroSection = () => {
  return (
    <section id="hero" className="text-gray-600 body-font bg-BgColor text-TextColor">
      <div className="container px-5 py-24 mx-auto flex flex-col md:flex-row items-center">
        {/* Left content column */}
        <div className="md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center md:items-start text-center md:text-left mb-16 md:mb-0">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-TextColor">
            Before they sold out
            <br className="hidden lg:inline-block" /> readymade gluten
          </h1>
          <p className="mb-8 leading-relaxed">
            Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag.
            Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.
          </p>
          <div className="flex justify-center md:justify-start">
            <button className="inline-flex text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Primary Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Secondary Button
            </button>
          </div>
        </div>
        
        {/* Right image column */}
        <div className="md:w-1/2">
          <img className="object-cover object-center rounded-lg" src="/assets/child.png" alt="child" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
