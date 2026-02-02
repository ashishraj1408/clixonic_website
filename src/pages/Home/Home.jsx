import React from 'react';
import Hero from '../../components/Hero/Hero';
import About from '../About/About';
import Services from '../Services/Services';
// import OurProcess from '../../components/OurProcess/OurProcess';
// import WhyChooseUs from '../../components/WhyChooseUs/WhyChooseUs';
// import Testimonial from '../../components/Testimonial/Testimonial';
import Insights from '../../components/Insights/Insights';
import SEO from '../../components/SEO/SEO';

function Home() {
  return (
    <div>
      <SEO
        title="Clixonic Media | Digital Marketing & Web Development for UK & US Brands"
        description="We help startups & businesses in the UK & US with SEO, Web Development, Social Media Marketing & Branding."
        keywords="digital marketing agency uk, seo agency usa, web development company, clixonic media"
        type="website"
        schema={{
          "@context": "https://schema.org",
          "@type": "Organization",
          "name": "Clixonic Media",
          "url": "https://clixonicmedia.com",
          "logo": "https://clixonicmedia.com/logo.png",
          "description": "Digital marketing, SEO, web development & social media services for global brands.",
        }}
      />
      <Hero />
      <About showHero={false} showTeam={false} />

      <Services showHero={false} />

      {/* <OurProcess /> */}
      {/* <Testimonial /> */}
      <Insights />  
      {/* <WhyChooseUs /> */}
    </div>
  );
}

export default Home;
