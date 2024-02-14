import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MarcasCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000, // Velocidad de cambio en milisegundos
    slidesToShow: 4, // Número de marcas visibles a la vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  return (
    <Slider {...settings}>
      <div className="text-center">
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src="/images/sl.jpg" alt="Marca 1" className="mx-auto mb-4 h-59" />
          <p className="text-lg font-semibold">SAN LORENZO</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src="/images/ferrum.jpg" alt="Marca 2" className="mx-auto mb-4 h-59" />
          <p className="text-lg font-semibold">FERRUM</p>
        </div>
      </div>
      <div className="text-center">
        <div className="bg-gray-200 p-4 rounded-lg">
          <img src="/images/weber.png" alt="Marca 3" className="mx-auto mb-4 h-410" />
          <p className="text-lg font-semibold">WEBER</p>
        </div>
      </div>
      {/* Agrega más imágenes de marcas según sea necesario */}
    </Slider>
  );
};

export default MarcasCarousel;
