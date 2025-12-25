import React from 'react'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import HeroSection from './components/Hero'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection '
import ClientLayout from './ClientLayout'
import Offers from './components/Offers'
import Banks from './components/Banks'
const page = () => {
  return (
    <ClientLayout>
    <Hero/>
    <ServicesSection/>
    <Banks/>
    <HowItWorksSection/>
    <Offers/>
    <TestimonialsSection/>
    </ClientLayout>
  )
}

export default page