import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './Latest.css';
import image1 from './assets/Trendy.jpg';
import image2 from './assets/oversized.webp';
import image3 from './assets/shorts.webp';

const LatestCollections = () => {
  const carouselItems = [
    { id: 1, image: image1, alt: 'Trendy Collection' },
    { id: 2, image: image2, alt: 'Plus Size Collection' },
    { id: 3, image: image3, alt: 'Overseed Shirts' },
  ];

  return (
    <div className="latest-collections">
      {/* Carousel on the Left */}
      <div className="carousel-container">
        <Carousel
          showArrows={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          autoPlay={true}
          interval={1500}
        >
          {carouselItems.map((item) => (
            <div key={item.id}>
              <img src={item.image} alt={item.alt} />
            </div>
          ))}
        </Carousel>
      </div>

      {/* Text Content on the Right */}
      <div className="text-content">
        <h1>Latest Collections</h1>
        <div className="collection-item">
          <h2>TRENDY</h2>
          <h3>PLUS SIZE</h3>
          <p>T-SHIRTS</p>
        </div>
        <div className="collection-item">
          <h2>OVERSEED SHIRTS</h2>
          <h3>THE ULTIMATE</h3>
          <p>CHEL FIT</p>
        </div>
        <div className="collection-item">
          <h2>MUST-HAVE ALERT</h2>
          <h3>TREND</h3>
        </div>
        <div className="collection-item">
          <h2>SHORTS</h2>
          <p>MAKE FOR SUN & FUN</p>
        </div>
      </div>
    </div>
  );
};

export default LatestCollections;