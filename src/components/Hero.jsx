import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center">
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('https://source.unsplash.com/random/1600x900?abstract,technology')" }}>
        <div className="absolute inset-0 bg-black/60"></div>
      </div>
      <div className="relative z-10 text-center px-6">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
          Elevate Your Business with SaaSy
        </h1>
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
          The all-in-one solution to streamline your workflow, boost productivity, and drive success. Modern, intuitive, and powerful.
        </p>
        <div className="flex justify-center space-x-4">
          <a href="#pricing" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-lg text-lg transition-transform transform hover:scale-105 duration-300">
            Get Started
          </a>
          <a href="#contact" className="bg-transparent border-2 border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-8 rounded-lg text-lg transition-colors duration-300">
            Contact Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;