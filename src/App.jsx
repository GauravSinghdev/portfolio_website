// import { useState } from 'react'

import Navbar from './components/Navbar'
import Banner from './components/Banner'
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skill'
import Contact from './components/Contact'
import GoToTop from './components/GoToTop'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {

  return (
    <>
      <Navbar/>
      <Banner/>
      <About/>
      <Project/>
      <Skills/>
      <Contact/>
      <GoToTop/>
      {/* <div className='h-10 text-whit'>
      asdas
      </div> */}
      
    </>
  )
}

export default App
