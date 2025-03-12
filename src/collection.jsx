import React from 'react';
import './collection.css';
import image1 from './assets/image/image_1.jpg';
import image2 from './assets/image/image_2.jpg';
import image3 from './assets/image/image_3.jpg';
import image4 from './assets/image/image_4.jpg';
import image5 from './assets/image/image_5.jpg';
import image6 from './assets/image/image_6.jpg';

const FestiveSection = () => {
    const items = [
        {
            id: 1,
            title: 'Holika Dahan Puja',
            description:
                'If you are looking to not only enhance your festive mood but also give a glam-up to your wardrobe, then this maroon embroidered silk blend straight suit has to be your top choice as one of your Holi party dress ideas. This lively outfit can be your go-to for an exciting Holika Dahan Puja celebration with friends and family! The intricate embroidery adds a touch of elegance and makes it the perfect option for you to wear on occasions like Holi. The attire comes with a matching dupatta and has been designed with the use of a luxurious silk blend. The best part is that it ticks comfort, style, and occasion to perfection.',
            image: image1,
            price: 'Rs. 1,999',
            buttonText: 'SHOP NOW',
        },
        {
            id: 2,
            title: 'Festive Flavours at Lunch',
            description:
                'This pink-printed cotton blend straight kurta is a delightful addition to your Holi outfit collection. Featuring playful prints that embody the spirit of the festival, this kurta is both stylish and comfortable. The breathable fabric ensures you stay cool while enjoying the festivities. Pairing it with colourful leggings or palazzos makes it one of the stylish party wear kurta sets for a vibrant look that celebrates the joy of Holi. The attire comes with a matching dupatta and has been designed with the use of a luxurious silk blend. The best part is that it ticks comfort, style, and occasion to perfection.',
            image: image2,
            price: 'Rs. 1,999',
            buttonText: 'SHOP NOW',
        }, {
            id: 3,
            title: 'Festive Flavours at Lunch',
            description:
                'This pink-printed cotton blend straight kurta is a delightful addition to your Holi outfit collection. Featuring playful prints that embody the spirit of the festival, this kurta is both stylish and comfortable. The breathable fabric ensures you stay cool while enjoying the festivities. Pairing it with colourful leggings or palazzos makes it one of the stylish party wear kurta sets for a vibrant look that celebrates the joy of Holi. The attire comes with a matching dupatta and has been designed with the use of a luxurious silk blend. The best part is that it ticks comfort, style, and occasion to perfection.',
            image: image3,
            price: 'Rs. 1,999',
            buttonText: 'SHOP NOW',
        },
        {
            id: 4,
            title: 'Festive Flavours at Lunch',
            description:
                'This pink-printed cotton blend straight kurta is a delightful addition to your Holi outfit collection. Featuring playful prints that embody the spirit of the festival, this kurta is both stylish and comfortable. The breathable fabric ensures you stay cool while enjoying the festivities. Pairing it with colourful leggings or palazzos makes it one of the stylish party wear kurta sets for a vibrant look that celebrates the joy of Holi. The attire comes with a matching dupatta and has been designed with the use of a luxurious silk blend. The best part is that it ticks comfort, style, and occasion to perfection.',
            image: image4,
            price: 'Rs. 1,999',
            buttonText: 'SHOP NOW',
        },
        {
            id: 5,
            title: 'Festive Flavours at Lunch',
            description:
                'This pink-printed cotton blend straight kurta is a delightful addition to your Holi outfit collection. Featuring playful prints that embody the spirit of the festival, this kurta is both stylish and comfortable. The breathable fabric ensures you stay cool while enjoying the festivities. Pairing it with colourful leggings or palazzos makes it one of the stylish party wear kurta sets for a vibrant look that celebrates the joy of Holi. The attire comes with a matching dupatta and has been designed with the use of a luxurious silk blend. The best part is that it ticks comfort, style, and occasion to perfection.',
            image: image5,
            price: 'Rs. 1,999',
            buttonText: 'SHOP NOW',
        },
        {
            id: 6,
            title: 'Festive Flavours at Lunch',
            description:
                'This pink-printed cotton blend straight kurta is a delightful addition to your Holi outfit collection. Featuring playful prints that embody the spirit of the festival, this kurta is both stylish and comfortable. The breathable fabric ensures you stay cool while enjoying the festivities. Pairing it with colourful leggings or palazzos makes it one of the stylish party wear kurta sets for a vibrant look that celebrates the joy of Holi. The attire comes with a matching dupatta and has been designed with the use of a luxurious silk blend. The best part is that it ticks comfort, style, and occasion to perfection.',
            image: image6,
            price: 'Rs. 1,999',
            buttonText: 'SHOP NOW',
        }
    ];

    return (
        <>
        <div className="festive-section">
            <h1 className='best'>BEST SELLER</h1>
            {items.map((item, index) => (
                <div
                    key={item.id}
                    className={`festive-card ${index % 2 === 1 ? 'reverse' : ''}`}
                >
                    <img src={item.image} alt={item.title} className="festive-image" />
                    <div className="festive-content">
                        <h2>{item.title}</h2>
                        <p>{item.description}</p>
                        <p>{item.price}</p>
                        <button className="shop-button">{item.buttonText}</button>
                    </div>
                </div>
            ))}
        </div>
        </>
    );
};

export default FestiveSection;