import React from 'react'
import Minihome from './MiniHome'
import About from './About'
import Skills from './Skills'
import Projects from './Projects'
import Contact from './Contact'

function Home() {
  return (
    <div>
      <Minihome />
      <About />
      <Skills />
      <Projects/>
      <Contact/>
    </div>
  )
}

export default Home