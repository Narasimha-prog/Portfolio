import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBaground } from '../components/StarBaground'
import { NavBar } from '../components/NavBar'
import { HeroSection } from '../components/HeroSection'
import {  AboutSection } from '../components/AboutMe'

export const Home = () => {
  return (
    <div>
      {/* theme toggle */}
      <ThemeToggle/>
      {/* background effect */}
       <StarBaground/>
      {/* NavBar */}
      <NavBar/>
     {/* main content */}
     <main>
      <HeroSection/>
      <AboutSection/>
     </main>
     {/* footer */}
      </div>
  )
}

