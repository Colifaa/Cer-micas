import React from 'react';

const ProductCard = ({ title, image1, description, image2, bgColor }) => {
  const cardStyle = {
    backgroundImage: `url(${image2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '50px', // Ajusta el padding para aumentar el tamaño del producto
    borderRadius: '10px', // Añade bordes redondeados para un mejor aspecto
  };

  return (
    <div className={`mb-8 md:flex md:items-center bg-${bgColor} p-4 rounded-lg shadow-md`} style={{ marginLeft: '10px', ...cardStyle }}>
      <img src={image1} alt="Product" className="w-20 h-20 md:w-40 md:h-40 mr-4 md:mr-8" />
      <div className="md:flex md:flex-col md:justify-between md:items-center md:flex-grow">
        <h2 className="text-orange-1 text-xl md:text-2xl font-bold mb-4">{title}</h2>
        <p className="text-black border border-gray-900 text-lg md:text-xl font-bold mb-4">{description}</p>
      </div>
    </div>
  );
};

const Comedor = () => {
  const products = [
    { id: 1, title: 'CANELILLO MARFIL', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-CANELILLO-MARFIL-FULL.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/09/Ceramica-San-Lorenzo-Madre-Selva.jpg', bgColor: 'blue-200' },
    { id: 2, title: 'CALEB ROBLE', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2023/11/Ceramica-San-Lorenzo-Caleb-Roble-453x453-Full.jpg', description: 'Ceramica', image2: 'https://sanlorenzo.com.co/wp-content/uploads/2021/05/SL-CO-MADERAS-DESTACADAS-1.jpg', bgColor: 'green-200' },
    { id: 3, title: 'ADOQUIN GRIS', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-SCOP-ADOQUEIN-GRIS-FULL.jpg', description: 'Ceramica', image2: 'https://cordillera.cl/wp-content/uploads/2020/09/CORDILLERA-ADOQUIN-GRIS-RENDER-ambientacion.jpg', bgColor: 'yellow-200' },
    { id: 4, title: 'QUADRAT', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/45.3X45.3-QUADRAT.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/45.3X45.3-QUADRAT-IMAGEN.jpg', bgColor: 'red-200' },
    { id: 5, title: 'MEDITERRANEO', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/05/CSL-MEDITERRANI-DECO-FULL.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/05/CSL-MEDITERRANI-DECO-RENDER-1.jpg', bgColor: 'purple-200' },
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Comedor;
