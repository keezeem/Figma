import React from 'react'
import Nav from './Nav'
import HeroSection from './heroSection'
import Avater from './Avater'
import About from './About'
import PowerfullySimple from './PowerfullySimple'
import HowItsWork from './HowItsWork'
import Faq from './Faq'
import Footer from './Footer'

const LandingPage = () => {
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

export default LandingPage
