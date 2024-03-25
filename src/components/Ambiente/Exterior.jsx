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

const Exterior = () => {
  const products = [
    { id: 1, title: 'JAMA CENIZA', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-JAMA-CENIZA-FULL.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2022/06/Ceramica-San-Lorenzo-Valdiviana-Roble-Ambiente.jpg', bgColor: 'blue-200' },
    { id: 2, title: 'ARUSHA ARENA', image1: 'https://www.victorgullo.com/media/catalog/product/cache/1/thumbnail/500x500/9df78eab33525d08d6e5fb8d27136e95/0/0/0019138_2023-12-20_12_33_27.3_.png', description: 'Ceramica', image2: 'https://sodimac.scene7.com/is/image/SodimacPeru/4032675_01?wid=1500&hei=1500&qlt=70', bgColor: 'green-200' },
    { id: 3, title: 'BERTA MIXTURA', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/BERTA-MIXTURA-45x45-FULL-1.jpg.webp', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/Ceramica-San-Lorenzo-Berta-Mixtura-Ambiente.jpg', bgColor: 'yellow-200' },
    { id: 4, title: 'ARDESIA GRIS', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2023/11/Ceramica-San-Lorenzo-Ardesia-Gris-453-453.jpg.webp', description: 'Ceramica', image2: '/images/CARRO2.PNG', bgColor: 'red-200' },
    { id: 5, title: 'RIPIO LADRILLO', image1: 'https://www.victorgullo.com/media/catalog/product/cache/1/thumbnail/500x500/9df78eab33525d08d6e5fb8d27136e95/0/0/0019144_2023-12-20_12_34_27.967_.png', description: 'Ceramica', image2: 'https://easycl.vtexassets.com/arquivos/ids/709570-1200-auto?width=1200&height=auto&aspect=true', bgColor: 'purple-200' },
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Exterior;
