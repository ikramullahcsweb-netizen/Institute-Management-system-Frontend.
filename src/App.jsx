import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/home/Hero'
import About from './components/about/About'
import Services from './components/serves/Services'
import Footer from './components/footer/Footer'
import Testimonials from './components/testimonials/Testimonials'
import Vision from './components/our-vesion/Vesion'
import Mentors from './components/professional-mentor/Mentors'

import Milestones from './components/milestone/Milestones'

import Contacts from './components/contact/Contacts'



const App = () => {
  return (
    <div>
      <Navbar/>
    <Hero/>
    <About/>
    <Services/>
    <Vision/>
    <Mentors/>
    <Testimonials/>
    <Milestones/>
    <Contacts/>
    <Footer/>
    </div>
  )
}

export default App
