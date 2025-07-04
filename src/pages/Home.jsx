import React from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import{ Skills} from '../components/Skills'

const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      {/* Theme tooggle */}
      <ThemeToggle />

       {/* Background Effects */}
       <StarBackground  />

        {/* Navbar */}
        <Navbar/>

        {/* Main Content */}
        <main>
          <HeroSection/>
          <About/>
          <Skills/>
        </main>


        {/* Footer */}

        
    </div>
  )
}

export default Home
