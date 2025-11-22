import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
import OurProcess from '../../components/OurProcess/OurProcess';
import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
import Testimonial from '../../components/Testimonial/Testimonial';
import Insights from '../../components/Insights/Insights';

function Home() {
  return (
    <div>
      <Hero />
      <About showHero={false} showTeam={false} />

      <Services showHero={false} />

      {/* <OurProcess /> */}
      <Testimonial />
      <Insights />  
      {/* <WhyChooseUs /> */}
    </div>
  );
}

export default Home;
