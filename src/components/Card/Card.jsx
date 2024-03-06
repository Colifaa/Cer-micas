

import React from 'react';

const Card = ({ product }) => {
  return (
    <div className="border rounded-lg p-4">
        <img src={product.img} alt={product.name} className="mt-4" />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <p className="text-gray-600">Type: {product.detail}</p>
      <p className="text-gray-600">Price: ${product.precio}</p>
      
    </div>
  );
};

export default Card;
