import React from 'react'
import About from './componens/About'
import FeatureSection from './componens/Features'
import Blog from './componens/Blog'
import TestimonialSection from './componens/Testimonial'
import Carousal from './componens/Carousal'



function Home() {
  return (
    <div>
     
    <Carousal />
    <About />
    <Blog />
    <FeatureSection />
   
    <TestimonialSection />
   
    </div>
  )
}

export default Home