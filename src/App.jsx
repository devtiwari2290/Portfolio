import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Routes from './routes/Routess'

function App() {
  return (
    <>
    <Navbar/>
    <Routes/>
    </>
  )
}

export default App