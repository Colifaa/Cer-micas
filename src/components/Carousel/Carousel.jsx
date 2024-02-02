// Carousel.js
import React, { useEffect, useRef } from 'react';

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === slider.scrollLeft) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }

      setTimeout(moveSlide, 2000);
    };

    setTimeout(moveSlide, 2000);

    return () => {
      // Limpiar cualquier suscripción o recurso cuando el componente se desmonte
    };
  }, []); // El segundo argumento del useEffect está vacío para que se ejecute solo una vez al montar el componente

  return (
    <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider" ref={sliderRef}>
      <div className="bg-blue-600 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">Your Big Ideia</h2>
        <p className="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
      </div>
      <div className="bg-pink-400 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">Tailwind CSS works by scanning all of your HTML</h2>
        <p className="max-w-md">It's fast, flexible, and reliable — with zero-runtime.</p>
      </div>
      <div className="bg-teal-500 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl max-w-md">React, Vue, and HTML</h2>
        <p className="max-w-md">Accessible, interactive examples for React and Vue powered by Headless UI, plus vanilla HTML if you’d rather write any necessary JS yourself.</p>
      </div>
    </div>
  );
};

export default Carousel;
