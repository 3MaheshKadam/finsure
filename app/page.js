import React from 'react'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import HeroSection from './components/Hero'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection '

const page = () => {
  return (
    <>
    <Hero/>
    <ServicesSection/>
    <HowItWorksSection/>
    <TestimonialsSection/>
    </>
  )
}

export default page