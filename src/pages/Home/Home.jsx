import React from 'react'
import Hero from '../../components/Hero/Hero'
import About from '../About/About'
import Services from '../Services/Services'
import OurProcess from '../../components/OurProcess/OurProcess'
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs'
import Testimonial from '../../components/Testimonial/Testimonial'

function Home() {
  return (
    <div>
        <Hero/>
        <About/>
        <Services/>
        <OurProcess />
        <WhyChooseUs />
        <Testimonial />
    </div>
  )
}

export default Home