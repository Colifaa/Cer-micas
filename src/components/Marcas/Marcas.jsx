import React from 'react';

function Marcas() {
  // Array con las rutas de las imágenes
  const images = [
    '/images/ferrum.png',
    '/images/oblak.png',
    '/images/sl.png',
    '/images/weber.png',
    '/images/holcim.png'
    // Agrega aquí las rutas de las imágenes adicionales que desees
  ];

  // Duplica las imágenes al principio y al final del conjunto de imágenes
  const duplicatedImages = [...images, ...images, ...images];

  return (
    <div className="w-full overflow-hidden"> {/* Cambio en la clase: overflow-x-auto a overflow-hidden */}
      <ul className="flex items-center justify-center md:justify-start mx-4 md:mx-0 animate-infinite-scroll">
        {duplicatedImages.map((image, index) => (
          <li key={index} className="mx-2 md:mx-8">
            <img src={image} alt={`Image ${index}`} className="max-w-none" />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Marcas;