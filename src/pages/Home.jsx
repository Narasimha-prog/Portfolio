import React from 'react'
import { ThemeToggle } from '../components/ThemeToggle'
import { StarBaground } from '../components/StarBaground'
import { NavBar } from '../components/NavBar'
import { HeroSection } from '../components/HeroSection'
import {  AboutSection } from '../components/AboutMe'
import { SkillSection } from '../components/SkillSection'
import { ProjectsSection } from '../components/ProjectsSection'
import { ContactSection } from '../components/ContactSection'
import { Footer } from '../components/Footer'

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
      <SkillSection/>
      <ProjectsSection/>
      <ContactSection/>
     </main>
     {/* footer */}
     <Footer/>
      </div>
  )
}

