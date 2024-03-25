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
        <h2 className="text-xl md:text-2xl font-bold mb-4">{title}</h2>
        <p className="text-lg md:text-xl font-bold mb-4">{description}</p>
      </div>
    </div>
  );
};

const Dormitorio = () => {
  const products = [
    { id: 1, title: 'VERBENA', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/06/CSL-VERBENA-FULL.jpg', description: 'Description for Product 1', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/06/CSL-VERBENA-MIX-RENDER.jpg', bgColor: 'blue-200' },
    { id: 2, title: 'Product 2', image1: '/images/product2.jpg', description: 'Description for Product 2', image2: '/product2-2.jpg', bgColor: 'green-200' },
    { id: 3, title: 'Product 3', image1: '/images/product3.jpg', description: 'Description for Product 3', image2: '/product3-2.jpg', bgColor: 'yellow-200' },
    { id: 4, title: 'Product 4', image1: '/images/product4.jpg', description: 'Description for Product 4', image2: '/product4-2.jpg', bgColor: 'red-200' },
    { id: 5, title: 'Product 5', image1: '/images/product5.jpg', description: 'Description for Product 5', image2: '/product5-2.jpg', bgColor: 'purple-200' },
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Dormitorio;
