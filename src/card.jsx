import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import image1 from './assets/final carousel/image_1.jpg';
import image2 from './assets/final carousel/image_2.jpg';
import image3 from './assets/final carousel/image_3.jpg';
import './card.css';

const ImageCarousel = () => {
  const images = [
    { id: 1, src: image1, alt: 'Image 1' },
    { id: 2, src: image2, alt: 'Image 2' },
    { id: 3, src: image3, alt: 'Image 3' },
  ];

  return (
    <div className="carousel-container">
      <h2>Featured Collections</h2>
      <Carousel
        showArrows={true} // Show navigation arrows
        showThumbs={false} // Hide thumbnail navigation
        showStatus={false} // Hide status bar
        infiniteLoop={false} // Disable infinite looping
        emulateTouch={true} // Enable touch gestures
        stopOnHover={true} // Pause on hover
      >
        {images.map((image) => (
          <div key={image.id}>
            <img src={image.src} alt={image.alt} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ImageCarousel;