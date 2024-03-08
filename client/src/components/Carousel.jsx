import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import '/node_modules/pure-react-carousel/dist/react-carousel.es.css'
import Image1 from '/movie-night-by-pool-whole-family.jpg'
import Image2 from '/backyard-water-contemporary-architecture-sky.jpg'
import Image3 from '/movie-night-by-pool-whole-family1.jpg'
import Image4 from '/luxury-pool-villa-spectacular-contemporary-design-digital-art-real-estate-home-house-property-generative-ai-illustration.jpg'
import React, { Component, useEffect, useState } from 'react';
import '../styles/Carousel.css'; // Import css modules stylesheet as styles

export const Carousel = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {

            setCurrentSlide((prevSlide) => (prevSlide + 1) % 4);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>

            <CarouselProvider
                naturalSlideWidth={100}
                naturalSlideHeight={100}
                totalSlides={4}
                currentSlide={currentSlide}
            >
                <Slider>
                    <Slide index={0}><img className='imgCarousel' src={Image1} alt="" /></Slide>
                    <Slide index={1}><img className='imgCarousel' src={Image2} alt="" /></Slide>
                    <Slide index={2}><img className='imgCarousel' src={Image3} alt="" /></Slide>
                    <Slide index={3}><img className='imgCarousel' src={Image4} alt="" /></Slide>
                </Slider>
            </CarouselProvider>
        </>
    );
}
