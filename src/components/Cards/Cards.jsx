import React from 'react';

function Cards() {
  const cardData = [
    { title: 'UNIQUE DECO', description: 'Aplicado en espacios interiores, y combinado con superficies neutras, te posibilitará un sinfín de opciones para darle diseño y creatividad a tu entorno.', imageUrl: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/CSL-UNIQUE-DECO-IMAGEN.jpg.webp' },
    { title: 'VOLTA MIX', description: 'Combinado con superficies neutras, te posibilitará un sinfín de opciones para darle diseño y creatividad a tu entorno.', imageUrl: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2023/11/Ceramica-San-Lorenzo-Volta-Mix-453x453-1.jpg.webp' },
    { title: 'CALEB ROBLE', description: 'A partir de su terminación, realismo y su color roble, Caleb Roble es solicitado para ser instalado en todo tipo de ambientes.', imageUrl: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2023/11/Ceramica-San-Lorenzo-Caleb-Roble-453x453-1.jpg' },
    { title: 'Flower Black', description: 'Flower Black ofrece muchas opciones creativas para tu hogar. Aplicado en espacios interiores, y combinado con superficies neutras.', imageUrl: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/CSL-FLOWERS-BLACK-IMAGEN.jpg.webp' },
    // ... Agrega más datos de tarjetas según sea necesario
  ];

  return (
    <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-black sm:text-4xl lg:text-5xl">
          aqui! <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-orange-500 lg:inline">PRODUCTOS DESTACADOS</span> 
        </h2>
        <p className="mb-20 text-lg text-gray-900"></p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <a key={index} href="#" className="shadow-2xl relative">
              <div className="h-full relative shadow-2xl shadow-orange-900 overflow-hidden group">
                <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-orange-900 transition-all ease-in-out duration-500">
                  <div className="w-full h-full p-5 relative">
                    <div className="absolute bottom-0 group-hover:bottom-24 text-white text-left transition-all ease-in-out duration-500">
                      <h2 className="text-2xl font-bold text-white mb-0 pb-1">{card.title}</h2>
                      <p className="text-lg font-light text-white">{card.description}</p>
                    </div>
                  </div>
                </div>
                <img src={card.imageUrl} className="w-full z-0 h-full object-fill example" alt={`Card ${index}`} />
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cards;
