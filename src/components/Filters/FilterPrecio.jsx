import React, { useState, useEffect } from 'react';
import { Box, SimpleGrid, Select, Text } from '@chakra-ui/react';
import supabase from '../../../lib/supabaseClient';
const FilterPrecio = ({ selectedPrecios, onChangePrecios, setSortedProducts }) => {
  const [ordenPrecio, setOrdenPrecio] = useState('menor-mayor');
  const [selectedOption, setSelectedOption] = useState('Todos los productos');

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
    setSelectedOption(selectedValue);
    onChangePrecios(selectedValue);
    if (selectedValue !== 'Todos los productos') {
      setSortedProducts(false);
    }
  };

  const handleShowAllProducts = () => {
    setSelectedOption('Todos los productos');
  };

  return (
    <Box mb={{ base: 4, md: 0 }} display="flex" alignItems="center" justifyContent="center">
      <SimpleGrid gap={{ base: 1, md: 2 }} p={1}>
      <h1 id="precio" className="text-lg text-center bg-gray-500 bg-opacity-50"></h1>
        <Select value={selectedOption} onChange={handleOrdenPrecioChange}>
          <option value="Todos los productos" disabled>Ordenar por Precio:</option>
          <option value="menor-mayor">Menor precio</option>
          <option value="mayor-menor">Mayor precio</option>
        </Select>
      </SimpleGrid>
    </Box>
  );
};

export default FilterPrecio;