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
        <h2 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h2>
        <p className="text-white text-lg md:text-xl font-bold mb-4">{description}</p>
      </div>
    </div>
  );
};

const Living = () => {
  const products = [
    { id: 1, title: 'LISTON RUSTICO', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/45.3X45.3-LISTON-RUSTICO-CLOSEUP.jpg', description: 'Ceramica', image2: 'https://content.revistainteriores.es/medio/2023/11/29/descubre-los-10-mandamientos-para-decorar-una-casa-rustica_455c3605_231129111202_1280x794.jpg', bgColor: 'blue-200' },
    { id: 2, title: 'FLOWER WHITE', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/CSL-FLOWERS-WHITE-FULL-100x100.jpg.webp', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/CSL-FLOWER-BW-RENDER.jpg', bgColor: 'green-200' },
    { id: 3, title: 'TARACEA MIX', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/18.7X18.7-TARACEA-MIX-CLOSEUP.jpg', description: 'Ceramica', image2: 'https://sanlorenzo.com.co/wp-content/uploads/2021/05/SL-CO-MADERAS-DESTACADAS-1.jpg', bgColor: 'yellow-200' },
    { id: 4, title: 'SEVILLA MARRON', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-SEVILLA-MARRON-FULL.jpg', description: 'Ceramica', image2: 'https://syriaceramicos.com.ar/wp-content/uploads/2022/08/Captura-de-pantalla-2022-08-16-a-las-16.40.54.png', bgColor: 'red-200' },
    { id: 5, title: 'ABETO GRIS', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-SCOP-ABETO-CEMENTO-FULL-1.jpg', description: 'Ceramica', image2: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-SCOP-ABETO-GRIS-RENDER.jpg', bgColor: 'purple-200' },
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Living;
