import { useState } from 'react'
import './App.css'
import Header from './componets/header'
import Hero from './componets/hero'
import Aboutme from './componets/aboutMe'
import Project from './componets/project'
import Overlay from './componets/try'
import Resume from './componets/resume'
import Contact from './componets/contact'
import Footer from './componets/footer'

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
