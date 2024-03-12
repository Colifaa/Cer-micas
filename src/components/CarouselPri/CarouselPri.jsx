import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from "react-feather";

const CarouselPri = ({ images, autoSlide = false, autoSlideInterval = 4000 }) => {
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

    const prev = () => setCurr((curr) => (curr === 0 ? images.length - 1 : curr - 1));

    const next = () => setCurr((curr) => (curr + 1) % images.length);

    useEffect(() => {
        if (!autoSlide) return;
        const slideInterval = setInterval(next, autoSlideInterval);
        return () => clearInterval(slideInterval);
    }, []);

    const slideStyle = {
        transform: `translateX(-${curr * (width / images.length)}px)`,
        transition: 'transform ease-out 0.5s',
        display: 'flex',
        width: `${images.length * 100}%`,
    };

    const slideItemStyle = {
        flex: `0 0 ${100 / images.length}%`,
        maxWidth: '100%',
    };

    return (
        <div className='overflow-hidden relative' style={{ width: '100%' }}>
            <div className='flex' style={slideStyle} ref={carouselRef}>
                {images.map((image, index) => (
                    <div key={index} className='w-full flex-shrink-0' style={slideItemStyle}>
                        <img src={image} alt={`Slide ${index}`} style={{ width: '100%', height: 'auto', maxWidth: '100%' }} />
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex items-center justify-between p-4">
                <button onClick={prev} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronLeft />
                </button>
                <button onClick={next} className='p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white'>
                    <ChevronRight />
                </button>
            </div>
            <div className='absolute bottom-4 right-0 left-0'>
                <div className='flex items-center justify-center gap-2'>
                    {images.map((image, i) => (
                        <div key={i} className={`transition-all w-1.5 h-1.5 bg-white rounded-full  ${curr === i ? "p-0.5" : "bg-opacity-50"}`} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CarouselPri;
