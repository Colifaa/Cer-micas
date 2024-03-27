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

const Dormitorio = () => {
  const products = [
    { id: 1, title: 'VERBENA', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/06/CSL-VERBENA-FULL.jpg', description: 'Ceramica', image2: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2021/06/CSL-VERBENA-MIX-RENDER.jpg', bgColor: 'blue-200' },
    { id: 2, title: 'TARACEA NATURAL', image1: 'https://ceramicasanlorenzo.com.ar/wp-content/uploads/2020/11/18.7X18.7-TARACEA-NATURAL-CLOSEUP.jpg.webp', description: 'Ceramica', image2: 'https://granoutletgrifine.com/wp-content/uploads/2021/11/CSL108-CERAMICA-PISO-MADERA-CAOBILLA-60X60-WEB.jpg', bgColor: 'green-200' },
    { id: 3, title: 'MARA CARRARA', image1: 'https://ceramicascop.com.ar/wp-content/uploads/2021/03/CERAMICA-MARA-CARRARA-FULL.jpg', description: 'Ceramica', image2: 'https://www.azulejospena.es/wp-content/uploads/2019/12/OSLO-BEIGE-23X120-madera-ceramica.jpg', bgColor: 'yellow-200' },
    { id: 4, title: 'RUST GRIS', image1: 'https://tienda.hiperceramico.com/2278-large_default/sl-porcrust-gris-28x58-rect1ra-x-130-mrusrc315oi.jpg', description: 'Ceramica', image2: 'https://image.architonic.com/pfm3-3/20174309/rust-ambienterust-01-fam-g-arcit18.jpg', bgColor: 'red-200' },

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
