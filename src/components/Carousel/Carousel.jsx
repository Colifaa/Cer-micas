import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

const Carousel = ({ images1, autoSlide = false, autoSlideInterval = 5000 }) => {
    const [curr, setCurr] = useState(0);
    const [width, setWidth] = useState(0);
    const carouselRef = useRef(null);

    useEffect(() => {
        setWidth(carouselRef.current.clientWidth);
        const handleWindowSizeChange = () => {
            setWidth(carouselRef.current.clientWidth);
        };
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        };
    }, []);

    const prev = () => setCurr((curr) => (curr === 0 ? images1.length - 1 : curr - 1));

    const next = () => setCurr((curr) => (curr + 1) % images1.length);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    const slideStyle = {
        transform: `translateX(-${curr * (width / images1.length)}px)`,
        transition: 'transform ease-out 0.5s',
        display: 'flex',
        width: `${images1.length * 100}%`,
    };

    const slideItemStyle = {
        flex: `0 0 ${100 / images1.length}%`,
        maxWidth: '100%',
    };

    return (
        <div className='overflow-hidden relative' style={{ width: '100%' }}>
            <div className='flex' style={slideStyle} ref={carouselRef}>
                {images1.map((image, index) => (
                    <div key={index} className='w-full flex-shrink-0' style={slideItemStyle}>
                        <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">


            </div>

        </div>
    );
};

export default Carousel;
