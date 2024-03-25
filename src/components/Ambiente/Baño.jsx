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
        <h2 className=" text-white text-xl md:text-2xl font-bold mb-4">{title}</h2>
        <p className="text-white text-lg md:text-xl font-bold mb-4">{description}</p>
      </div>
    </div>
  );
};

const Baño = () => {
  const products = [
    { id: 1, title: 'WALL PETROLEO', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/01/CSL-WALL-PETROLEO-FULL.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/01/CSL-WALL-PETROLEO-RENDER.jpg', bgColor: 'blue-200' },
    { id: 2, title: 'AQUA BLUE', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-SCOP-AQUA-BLUE-FULL.jpeg', description: 'Ceramica', image2: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/Ceramica-Scop-AQUA-BLUE.jpg', bgColor: 'green-200' },
    { id: 3, title: 'MARMOL HABITAT', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2023/04/Ceramica-Scop-Marmol-Habitat-Imagen.jpg', description: 'Ceramica', image2: '/images/prueba.jpg', bgColor: 'yellow-200' },
    { id: 4, title: 'AMBER GRIS', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/33X43.5-AMBER-GRIS-CLOSEUP-CERAMICA-SAN-LORENZO.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/Ceramica-San-Lorenzo-Amber-Gris.jpg.webp', bgColor: 'red-200' },
    { id: 5, title: 'TUIL BRILLANTE', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-TUIL-BLANCO-BRILLANTE-FULL.jpg', description: 'Ceramica', image2: 'https://images.homify.com/v1438367033/p/photo/image/788840/IMG_5496.jpg', bgColor: 'purple-200' },
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Baño;
