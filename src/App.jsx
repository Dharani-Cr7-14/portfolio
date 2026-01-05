import { useState } from 'react'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Aboutme from './components/aboutMe'
import Project from './components/project'
import Overlay from './components/try'
import Resume from './components/resume'
import Contact from './components/contact'
import Footer from './components/footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Hero/>
    <Aboutme/>
    <Project/>
    <Resume/>
    <Contact/>
    <Footer/>
    
    </>
  )
}

export default App
