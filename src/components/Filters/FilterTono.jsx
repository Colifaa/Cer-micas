import React, { useEffect, useState } from 'react';
import { Text, Box,Container, Checkbox, SimpleGrid, CheckboxGroup } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterTono({ selectedTono, onChangeTono }) {
  const [TonoOptions, setTonoOptions] = useState([]); // Inicializar con un array vacío

  useEffect(() => {
    const fetchTonoOptions = async () => {
      try {
        const { data: productData, error: productError } = await supabase.from('products').select('tono');

        if (productError) {
          console.error('Error fetching tono options:', productError);
          return;
        }

        // Obtener todas las opciones de "tono" disponibles de los productos y eliminar duplicados
        const tono = productData.flatMap(product => product.tono);
        const uniqueTono = Array.from(new Set(tono));
        setTonoOptions(uniqueTono); // Actualizar el estado con las opciones de "tono"
      } catch (error) {
        console.error('Error fetching tono options:', error.message);
      }
    };

    fetchTonoOptions();
  }, []);

  const handleCheckboxChange = (options) => {
    // Llamar a la función onChangeTono pasando las opciones seleccionadas
    onChangeTono(options);
  };

  return (
  
        <Box mb={{ base: 4, md: 0 }} position="relative">
       
       <SimpleGrid gap={{ base: 2, md: 1 }} p={{ base: 2, md: 2 }} columns={4}>
          <CheckboxGroup value={selectedTono} onChange={handleCheckboxChange}>
            {TonoOptions.map((option) => (
              <Checkbox key={option} value={option}>
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </SimpleGrid>
      </Box>
  
  );
};

export default FilterTono;
