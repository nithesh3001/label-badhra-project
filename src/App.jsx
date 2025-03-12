import React from 'react';
import Navbar from './Nav.jsx';
import CarouselSection from './home.jsx';
import LatestCollections from './latest.jsx';
import FestiveSection from './collection.jsx';
import ImageCarousel from './card.jsx';
import ContactForm from './contact.jsx';
import Footer from './footer.jsx';
import './App.css';

function App() {

  return (
    <>
      <Navbar/>
      <CarouselSection/>
      <LatestCollections/>
      <FestiveSection/>
      <ImageCarousel/>
      <ContactForm/>
      <Footer/>
    </>
  )
}

export default App
