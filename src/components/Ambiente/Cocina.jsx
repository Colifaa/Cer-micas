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

const Cocina = () => {
  const products = [
    { id: 1, title: 'PERLA BLANCO BRILLANTE', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/CSL-PERLA-33X45-FULL.jpg.webp', description: 'Ceramica', image2: 'https://www.mundilite.com/wp-content/uploads/2018/05/fijo-pekin-abisagrado-ba%C3%B1o-peque%C3%B1o.jpg', bgColor: 'blue-200' },
    { id: 2, title: 'POSITANO CHIARO', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-POSITANO-CHIARO-FULL.jpg', description: 'Ceramica', image2: 'https://www.elmueble.com/medio/2023/07/03/cocina-con-muebles-blancos-y-azulejos-artesanales-00553729_e36d58f8_230703175704_900x900.jpg', bgColor: 'green-200' },
    { id: 3, title: 'BAUHAUS GREY', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/CSL-BAUHAUS-GREY-58X58-FULL.jpg.webp', description: 'Porcelanato', image2: 'https://blog.pamesa.com/wp-content/uploads/2023/03/AMB-SONOMA-NORDIC-225X180-CR-ARTICO-15X605_rrss-scaled.jpg', bgColor: 'yellow-200' },
    { id: 4, title: 'ABETO MARFIL', image1: 'https://images.cerymatlaplata.com.ar/products/60a412623e66d1621365346.png', description: 'Ceramica', image2: '/images/carro1.png', bgColor: 'red-200' },
    { id: 5, title: 'WALL CENIZA', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/01/CSL-WALL-CENIZA-FULL.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/05/CSL-COCINA-WALL-CENIZA.jpg', bgColor: 'purple-200' },
  ];

  return (
    <div>
      {products.map(product => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default Cocina;
