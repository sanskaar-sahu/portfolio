import { ArrowDown } from 'lucide-react';
import React from 'react';

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4 sm:px-6 lg:px-8"
    >
      {/* Hero Content */}
      <div className="w-full max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center gap-10">
        {/* Profile Image */}
        <div className="w-full md:w-1/3 flex justify-center md:justify-start mt-16 md:mt-0">
          <div className="rounded-full overflow-hidden shadow-lg w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-2/3 text-center md:text-left space-y-6 mt-6 md:mt-0">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold tracking-tight leading-tight text-center md:text-left">
            {/* "Hi, I'm" */}
            <span className="block md:inline opacity-0 animate-fade-in">
              Hi, I&apos;m{" "}
            </span>

            {/* "Sanskar" */}
            <span className="block md:inline text-primary opacity-0 animate-fade-in-delay-1">
              Sanskar{" "}
            </span>

            {/* "Sahu" */}
            <span className="block md:inline text-gradient opacity-0 animate-fade-in-delay-2">
              Sahu
            </span>
          </h1>


          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 opacity-0 animate-fade-in-delay-3">
            A curious mind and code crafter who loves bringing ideas to life through sleek, interactive web experiences. Whether it’s building with React, styling with Tailwind, or diving into full-stack magic with Node and MongoDB, I’m all about turning imagination into innovation.
          </p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-10 opacity-0 animate-fade-in-delay-4">
        <a href="#projects" className="cosmic-button text-sm sm:text-base px-6 py-2">
          View My Work
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-xs sm:text-sm text-muted-foreground mb-1 sm:mb-2">Scroll</span>
        <ArrowDown className="h-4 w-4 sm:h-5 sm:w-5 text-primary" />
      </div>
    </section>
  );
};

export default HeroSection;
