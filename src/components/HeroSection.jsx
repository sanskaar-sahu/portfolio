import { ArrowDown } from 'lucide-react'
import React from 'react'
import About from './About'

const HeroSection = () => {
  return (
    <section 
    id="hero"
    className='relative min-h-screen flex flex-col items-center justify-center px-4'
    >
     <div className='container max-w-4xl mx-auto text-center z-10'>
        <div className="space-y-6">
            <h1 className='text-4xl md:text-6xl font-bold tracking-tight'>
                <span className='opacity-0 animate-fade-in'>Hi , I'm</span>
                <span className='text-primary opacity-0 animate-fade-in-delay-1' > {" "}Sanskar</span>
                <span className='text-gradient ml-2 opacity-0 animate-fade-in-delay-2' >{" "}Sahu</span>
            </h1>
            <p className='text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3'>
                Hey there! I’m Sanskar Sahu — a curious mind and code crafter who loves bringing ideas to life through sleek, interactive web experiences. Whether it’s building with React, styling with Tailwind, or diving into full-stack magic with Node and MongoDB, I’m all about turning imagination into innovation. I believe great apps aren’t just functional — they feel good to use.
            </p>

            <div children='pt-4 opacity-0 animate-fade-in-delay-4'>
                <a href="#projects" className='cosmic-button'>View My Work</a>
            </div>
        </div>

     </div>

     <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
     <span className='text-sm text-muted-foreground mb-2 '>Scroll</span>
     <ArrowDown className='h-5 w-5 text-primary' />
     </div>
    </section>
  )
}

export default HeroSection
