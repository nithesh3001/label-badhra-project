import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './assets/joggers.png';
import image2 from './assets/mania.jpg';
import image3 from './assets/mania1.jpg';
import image4 from './assets/festive.jpg';
import image5 from './assets/cargo.jpg';
import image6 from './assets/holi.webp';
import './home.css';

const CarouselSection = () => {
  const items = [
    { id: 1, image: image1 },
    { id: 2, image: image2 },
    { id: 3, image: image3 },
    { id: 4, image: image4 },
    { id: 5, image: image5 },
    { id: 6, image: image6 }
  ];

  return (
    <div className="carousel-section">
      <h2>Featured Collections</h2>
      <Carousel
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={1500}
      >
        {items.map((item) => (
          <div key={item.id} className="carousel-item">
            <h3>{item.text}</h3>
            {item.image && <img src={item.image} alt={item.text} />}
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselSection;