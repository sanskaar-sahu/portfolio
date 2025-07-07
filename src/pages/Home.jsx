import {React , useEffect} from 'react'
import ThemeToggle from '../components/ThemeToggle'
import StarBackground from '../components/StarBackground'
import Navbar from '../components/Navbar'
import HeroSection from '../components/HeroSection'
import About from '../components/About'
import{ Skills} from '../components/Skills'
import ProjectSection from '../components/ProjectSection'
import Contact from '../components/Contact'
import { Toaster } from '../components/ui/Toaster'
import { Footer } from '../components/Footer'

const Home = () => {

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);
  
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
          <ProjectSection/>
          <Contact/>
        </main>


        {/* Footer */}
        <Footer/>

        
    </div>
  )
}

export default Home
