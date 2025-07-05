import { ArrowDown } from 'lucide-react'
import React from 'react'

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center px-4"
    >
      {/* Main Hero Content */}
      <div className="container max-w-6xl mx-auto z-10 flex flex-col md:flex-row items-center gap-8">
        {/* Image Section (1/3) */}
        <div className="w-full md:w-1/3 flex justify-center">
          <div className="rounded-full overflow-hidden shadow-lg w-64 h-64">
            <img
              src="/profile.jpg"
              alt="Profile"
              className="object-cover object-[30%] transform scale-140 w-full h-full"
            />
          </div>
        </div>

        {/* Text Section (2/3) */}
        <div className="w-full md:w-2/3 space-y-6 text-center md:text-left">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in">Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}Sanskar
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}Sahu
            </span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl opacity-0 animate-fade-in-delay-3">
            A curious mind and code crafter who loves bringing ideas to life through sleek, interactive web experiences. Whether it’s building with React, styling with Tailwind, or diving into full-stack magic with Node and MongoDB, I’m all about turning imagination into innovation. I believe great apps aren’t just functional — they feel good to use.
          </p>
        </div>
      </div>

      {/* View My Work Button - Centered Below Text & Image */}
      <div className="mt-8 opacity-0 animate-fade-in-delay-4">
        <a href="#projects" className="cosmic-button">
          View My Work
        </a>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
        <span className="text-sm text-muted-foreground mb-2">Scroll</span>
        <ArrowDown className="h-5 w-5 text-primary" />
      </div>
    </section>
  )
}

export default HeroSection;
