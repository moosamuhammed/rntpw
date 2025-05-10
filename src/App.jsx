import { useState } from 'react'
import './App.css'
import Navbar from './layout/Navbar'
import Carousel from './componens/Carousal'
import FeatureSection from './componens/Features'
import About from './componens/About'
import Blog from './componens/Blog'
import Footer from './layout/Footer'
import TestimonialSection from './componens/Testimonial'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home'
import Aboutpage from './pages/Aboutpage'
import WorkoutsPage from './pages/Workoutpage'
import Events from './pages/Eventspage'
import TestimonialPage from './pages/Testimonialpage'
import BlogSection from './pages/Blogpage'
import ContactPage from './pages/contactpage'
import Info from './layout/Info'
import ScrollToTop from './componens/Scrolltop'


function App() {


  return (
    <>
      <div>
        <Info />
        <Navbar />
        <ScrollToTop />
      <Routes>
      
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<Aboutpage />} />
        <Route path="/blog" element={<BlogSection />} />
        <Route path="/workouts" element={<WorkoutsPage />} />
        <Route path="/events" element={<Events />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />

      </Routes>
 
<Footer />

      </div>
    </>
  )
}

export default App
