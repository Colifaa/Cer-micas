import React, { useEffect, useState } from 'react';
import { Box, Text, Select } from '@chakra-ui/react';
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
    <Box mb={4} display="flex" alignItems="center">
      <Text mr={2}>Ordenar por:</Text>
      <Select  onChange={handleOrdenPrecioChange}>
      <option value="Todos los productos">Todos los productos</option>
        <option value="menor-mayor">Menor precio</option>
        <option value="mayor-menor">Mayor precio</option>
      </Select>
    </Box>
  );
}

export default FilterPrecio;
