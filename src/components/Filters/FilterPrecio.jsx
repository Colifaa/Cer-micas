import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Select, Text } from '@chakra-ui/react';
import supabase from '../../../lib/supabaseClient';

const FilterPrecio = ({ selectedPrecios, onChangePrecios }) => {
  const [ordenPrecio, setOrdenPrecio] = useState('menor-mayor'); // Estado para almacenar la opción de orden de precio
  const [selectedOption, setSelectedOption] = useState('Todos los productos'); // Estado para almacenar la opción seleccionada en el Select

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
    setSelectedOption(selectedValue); // Actualizar el estado cuando se cambia la opción seleccionada
    onChangePrecios(selectedValue);
  };

  const handleShowAllProducts = () => {
    setSelectedOption('Todos los productos'); // Actualizar el estado cuando se presiona el botón de "Todos los productos"
    // Aquí puedes agregar cualquier otra lógica necesaria al presionar el botón de "Todos los productos"
  };

  return (
    <Box mb={{ base: 4, md: 0 }} display="flex" alignItems="center" justifyContent="center">
      <SimpleGrid gap={{ base: 1, md: 2 }} p={1}>
        <h1 id="ambiente" style={{backgroundColor: "rgba(128, 128, 128, 0.5)"}}>Ordenar por Precio:</h1>
        <Select value={selectedOption} onChange={handleOrdenPrecioChange}>
          <option value="Todos los productos" disabled>Todos los productos</option>
          <option value="menor-mayor">Menor precio</option>
          <option value="mayor-menor">Mayor precio</option>
        </Select>
      </SimpleGrid>
    </Box>
  );
};

export default FilterPrecio;
