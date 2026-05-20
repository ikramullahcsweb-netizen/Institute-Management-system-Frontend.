import React from 'react';
import Hero from '../components/home/Hero';
import About from '../components/about/About';
import Services from '../components/services/Services';
import Vision from '../components/our-vesion/Vesion';
import Mentors from '../components/professional-mentor/Mentors';
import Testimonials from '../components/testimonials/Testimonials';
import Milestones from '../components/milestone/Milestones';
import Contacts from '../components/contact/Contacts';

const Home = () => {
  return (
    <>
      <Hero />
      <About />
      <Services />
      <Vision />
      <Mentors />
      <Testimonials />
      <Milestones />
      <Contacts />
    </>
  );
};

export default Home;