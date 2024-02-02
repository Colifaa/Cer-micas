import React from 'react';

function Cards() {
  const cardData = [
    { title: 'Standard Color', description: 'Lorem ipsum dolor sit amet, #brands.', imageUrl: 'https://source.unsplash.com/random/400x400' },
  ];

  return (
    <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
      <div className="container mx-auto">
        <h2 className="text-3xl font-light text-black sm:text-4xl lg:text-5xl">
          it's <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-green-500 to-green-500 lg:inline">Services</span> in one single line.
        </h2>
        <p className="mb-20 text-lg text-gray-900">Comes directly from the desk of engineers, creators and managers at Skcript.</p>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
          {cardData.map((card, index) => (
            <a key={index} href="#" className="shadow-2xl relative">
              <div className="h-full relative shadow-2xl shadow-green-900 overflow-hidden group">
                <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-green-900 transition-all ease-in-out duration-500">
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
