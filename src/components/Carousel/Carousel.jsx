
 import React, { useEffect, useRef } from 'react';

const Carousel = () => {
  const sliderRef = useRef(null);

  useEffect(() => {
    const slider = sliderRef.current;

    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (slider.scrollLeft + left >= max) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        slider.scrollBy({ left, behavior: 'smooth' });
      }

      setTimeout(moveSlide, 3000);
    };

    setTimeout(moveSlide, 3000);

    return () => {
      // Limpiar cualquier suscripción o recurso cuando el componente se desmonte
    };
  }, []); // El segundo argumento del useEffect está vacío para que se ejecute solo una vez al montar el componente

  return (
    <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider" ref={sliderRef}>
      <div className="text-white space-y-4 flex-none w-full flex flex-col items-center justify-center" style={{backgroundImage: "url('/images/3.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2 className="text-4xl max-w-md"></h2>
        <p className="max-w-md"></p>
      </div>
      <div className="text-white space-y-4 flex-none w-full flex flex-col items-center justify-center" style={{backgroundImage: "url('/images/4.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2 className="text-4xl max-w-md"></h2>
        <p className="max-w-md"></p>
      </div>
      <div className="text-white space-y-4 flex-none w-full flex flex-col items-center justify-center" style={{backgroundImage: "url('/images/carro1.png')", backgroundRepeat: 'no-repeat', backgroundSize: 'cover'}}>
        <h2 className="text-4xl max-w-md"></h2>
        <p className="max-w-md"></p>
      </div>
    </div>
  );
};

export default Carousel;
