import React from 'react'
import Hero from './components/Hero'
import ServicesSection from './components/ServicesSection'
import HeroSection from './components/Hero'
import HowItWorksSection from './components/HowItWorksSection'
import TestimonialsSection from './components/TestimonialsSection '
import ClientLayout from './ClientLayout'
const page = () => {
  return (
    <ClientLayout>
    <Hero/>
    <ServicesSection/>
    <HowItWorksSection/>
    <TestimonialsSection/>
    </ClientLayout>
  )
}

export default page