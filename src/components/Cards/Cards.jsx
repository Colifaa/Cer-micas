import React, { useState, useEffect } from 'react';
import supabase from '../../../lib/supabaseClient';
import CardsDetail from '../CardsDetail/CardsDetail';
import { Box, Heading } from "@chakra-ui/react";

function Cards({ product }) {
  const [productosDestacados, setProductosDestacados] = useState([]);
  const [showDetail, setShowDetail] = useState(null);

  useEffect(() => {
    async function fetchProductosDestacados() {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('*')
          .eq('destacados', true);

        if (error) {
          throw error;
        }

        setProductosDestacados(data || []);
      } catch (error) {
        console.error('Error al obtener los productos destacados:', error.message);
      }
    }

    fetchProductosDestacados();
  }, []);

  const handleToggleDetail = (productId) => {
    setShowDetail(showDetail === productId ? null : productId);
  };

  return (
    <Heading className='league-spartan-font' size="xl">
      <section className="py-10 bg-w sm:py-16 lg:py-24 z-40 relative">
        <div className="container mx-auto">
          <h2 className="text-3xl font-light text-blue-1 sm:text-4xl lg:text-5xl ">
            aquí! <span className="block w-full font-light text-transparent bg-clip-text bg-gradient-to-r from-orange-1 to-black lg:inline">PRODUCTOS DESTACADOS</span>
          </h2>
          <p className="mb-20 text-lg text-gray-900"></p>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-4">
            {productosDestacados.map((producto, index) => (
              <div key={index} className="shadow-2xl relative">
                <div className="h-full relative shadow-2xl shadow-orange-1 overflow-hidden group" onClick={() => handleToggleDetail(producto.id)}>
                  <div className="absolute -bottom-10 group-hover:top-0 left-0 w-full h-full group-hover:bg-orange-1 transition-all ease-in-out duration-500">
                    <div className="w-full h-full p-5 relative">

                      <div className="absolute bottom-0 group-hover:bottom-24 text-gray-1 text-left transition-all ease-in-out duration-500">
                        <h2 className="text-2xl font-bold text-orange-2 mb-0 pb-1">{producto.name}</h2>
                        <p className="text-lg font-light text-black">{producto.minidetail}</p>
                        <CardsDetail product={producto} />
                      </div>
                    </div>
                  </div>
                  <img src={producto.img} className="w-full z-0 h-full object-fill example" alt={`Card ${index}`} />
                </div>

              </div>
            ))}
          </div>
        </div>
      </section>
    </Heading>
  );
}

export default Cards;
