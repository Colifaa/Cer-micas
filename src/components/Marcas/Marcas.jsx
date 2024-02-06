// components/MarcasComponent.js

import React from 'react';
import styles from './Marcas.module.css'; // Importa tus estilos CSS aquí

const MarcasComponent = () => {
  return (
    <div className="p-4">
      {/* Agrega el estilo de fuente y color al título */}
      <div className="grid grid-cols-4 gap-4 mt-4">
        {/* Marca 1 */}
        <div className="brand">
          <img src="/images/sl.jpg" alt="San Lorenzo" />
          <p className="text-[#black] font-black">San Lorenzo</p>
        </div>
        {/* Marca 2 */}
        <div className="brand">
          <img src="/images/ferrum.jpg" alt="Ferrum" />
          <p className="text-[#black] font-black">Ferrum</p>
        </div>
        {/* Marca 3 */}
        <div className="brand">
          <img src="/images/weber.png" alt="Weber" />
          <p className="text-[#black] font-black">Weber</p>
        </div>
        {/* Marca 4 */}
        <div className="brand">
          <img src="/images/oblak.jpg" alt="Oblak" />
          <p className="text-[#black] font-black">Oblak</p>
        </div>
        {/* Repite este bloque para cada marca */}
      </div>
      <div className="mt-8">
        {/* Aclaración de los servicios */}
        <h3 className="text-lg font-bold">Nuestros Servicios</h3>
        <img className="services" src="/images/services.png" alt="Weber" />
      </div>
    </div>
  );
};

export default MarcasComponent;
