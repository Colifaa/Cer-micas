import React, { useState, useEffect } from 'react';
import supabase from '../../../lib/supabaseClient';
import CardsDetail from '../CardsDetail/CardsDetail';

const Comedor = () => {
  const [ambientesComedor, setAmbientesComedor] = useState([]);

  useEffect(() => {
    async function fetchAmbientesComedor() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('ambientacion', 'Comedor');

        if (error) {
          throw error;
        }

        setAmbientesComedor(data || []);
      } catch (error) {
        console.error('Error al obtener los ambientes de comedor:', error.message);
      }
    }

    fetchAmbientesComedor();
  }, []);

  return (
    <div>
      {ambientesComedor.map(ambiente => (
        <div key={ambiente.id} className={`mb-8 md:flex md:items-center bg-${ambiente.bgColor} p-4 rounded-lg shadow-md`} style={{ marginLeft: '10px', backgroundImage: `url(${ambiente.img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src={ambiente.img} alt="Product" className="w-20 h-20 md:w-40 md:h-40 mr-4 md:mr-8" />
          <div className="md:flex md:flex-col md:justify-between md:items-center md:flex-grow">
            <h2 className="text-orange-1 text-xl md:text-2xl font-bold mb-4">{ambiente.name}</h2>
            <p className="text-white border border-gray-900 text-lg md:text-xl font-bold mb-4" style={{ backgroundColor: 'rgba(149, 151, 154, 0.7)', padding: '10px', border: '2px solid black', borderRadius: '30px' }}>{ambiente.material}</p>
            <CardsDetail product={ambiente} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Comedor;
