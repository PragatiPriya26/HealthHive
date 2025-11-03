import React from "react";

const Hero = () => {
  return (
    <section id="hero" className="py-24 bg-blue-50 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600">
        Personalized Health & Fitness Plans
      </h1>
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto">
        Analyze your lifestyle, track your fitness goals, and stay motivated with smart wearable integration.
      </p>
      <button className="mt-6 px-6 py-3 bg-blue-600 text-white font-semibold rounded hover:bg-blue-700 transition">
        Get Started
      </button>
    </section>
  );
};

export default Hero;
