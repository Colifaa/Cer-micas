import React, { useState, useEffect } from 'react';
import supabase from '../../../lib/supabaseClient';
import CardsDetail from '../CardsDetail/CardsDetail';

const Dormitorio = () => {
  const [ambientesDormitorio, setAmbientesDormitorio] = useState([]);

  useEffect(() => {
    async function fetchAmbientesDormitorio() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('ambientacion', 'Dormitorio');

        if (error) {
          throw error;
        }

        setAmbientesDormitorio(data || []);
      } catch (error) {
        console.error('Error al obtener los ambientes de dormitorio:', error.message);
      }
    }

    fetchAmbientesDormitorio();
  }, []);

  return (
    <div>
      {ambientesDormitorio.map(ambiente => (
        <div key={ambiente.id} className={`mb-8 md:flex md:items-center bg-${ambiente.bgColor} p-4 rounded-lg shadow-md`} style={{ marginLeft: '10px', backgroundImage: `url(${ambiente.img2})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
          <img src={ambiente.img} alt="Product" className="w-20 h-20 md:w-40 md:h-40 mr-4 md:mr-8" />
          <div className="md:flex md:flex-col md:justify-between md:items-center md:flex-grow">
            <h2 className="text-orange-1 text-xl md:text-2xl font-bold mb-4">{ambiente.name}</h2>
            <p className="text-white border border-gray-900 text-lg md:text-xl font-bold mb-4" style={{ backgroundColor: 'rgba(245, 160, 130, 0.5)', padding: '10px' }}>{ambiente.material}</p>
            <CardsDetail product={ambiente} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default Dormitorio;
