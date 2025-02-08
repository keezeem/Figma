import React from 'react'
import Nav from './Nav'
import HeroSection from './heroSection'
import Avater from './Avater'
import About from './About'
import PowerfullySimple from './PowerfullySimple'
import Footer from './Footer'
// import ImageSlider from './ImageSlider'
import Exploring from './Exploring'
import Pricing from './Pricing'

const LandingPage = () => {
  return (
    <div className='bg-gray-50'>
      <Nav/>
      <HeroSection />
      <Avater />
      {/* <ImageSlider /> */}
      <Pricing/>
      <About/>
      <PowerfullySimple/>
      <Exploring />
      {/* <HowItsWork /> */}
      {/* <Faq/> */}
      <Footer/> 
    </div>
  )
}

export default LandingPage
