import React from 'react'
import Nav from './components/Nav'
import HeroSection from './components/heroSection'
import Avater from './components/Avater'
import About from './components/About'
import PowerfullySimple from './components/PowerfullySimple'
import HowItsWork from './components/HowItsWork'
import Faq from './components/Faq'
import Footer from './components/Footer'


const App = () => {
  return (
    <div>
      <Nav/>
      <HeroSection />
      <Avater />
      <About/>
      <PowerfullySimple/>
      <HowItsWork />
      <Faq/>
      <Footer/> 
    </div>
  )
}

export default App
