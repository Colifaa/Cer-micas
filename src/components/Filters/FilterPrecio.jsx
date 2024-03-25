import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Container, Text, Select } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterPrecio({ selectedPrecios, onChangePrecios }) {
  const [ordenPrecio, setOrdenPrecio] = useState('menor-mayor'); // Estado para almacenar la opción de orden de precio

  useEffect(() => {
    const fetchPrecioOptions = async () => {
      try {
        const { data: precioData, error: precioError } = await supabase.from('products').select('precio');

        if (precioError) {
          console.error('Error fetching precios:', precioError);
          return;
        }

        // Obtener todos los precios disponibles y eliminar duplicados
      
      } catch (error) {
        console.error('Error fetching precios:', error.message);
      }
    };

    fetchPrecioOptions();
  }, []);

  const handleOrdenPrecioChange = (event) => {
    const selectedValue = event.target.value;
    setOrdenPrecio(selectedValue);
    onChangePrecios(selectedValue);
  };

  return (
    <Box mb={{ base: 4, md: 0 }} display="flex" alignItems="center" justifyContent="center">
      <SimpleGrid gap={{ base: 1, md: 2 }} p={1}>
        <div className=".league-spartan-font text-1xl md:text-3xl lg:text-2xl leading-normal bg-slate-500 text-black-100 p-4 border border-gray-400">
          Ordenar por Precio:
        </div>
        <Select onChange={handleOrdenPrecioChange}>
          <option value="Todos los productos">Todos los productos</option>
          <option value="menor-mayor">Menor precio</option>
          <option value="mayor-menor">Mayor precio</option>
        </Select>
      </SimpleGrid>
    </Box>
  );
};

export default FilterPrecio;