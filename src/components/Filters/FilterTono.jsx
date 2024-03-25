import React, { useEffect, useState } from 'react';
import { Text, Box, Container, Checkbox, SimpleGrid, CheckboxGroup } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterTono({ selectedTono, onChangeTono }) {
  const [TonoOptions, setTonoOptions] = useState([]); // Inicializar con un array vacío
  const colores = ["#FF0000", "#00FF00", "#0000FF", "#FFFF00", "#00FFFF", "#FF00FF", "#C0C0C0", "#808080", "#800000", "#808000", "#008000", "#800080", "#008080", "#000080"];

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
    <Container maxW="container.xl" centerContent>
      <Box mb={{ base: 4, md: 0 }} position="relative" textAlign="center">
        <h1>Color</h1>
        <SimpleGrid gap={{ base: 2, md: 1 }} p={{ base: 2, md: 2 }} columns={4}>
          {TonoOptions.map((option, index) => (
            <Box key={option}>
              <CheckboxGroup value={selectedTono} onChange={handleCheckboxChange}>
                <Checkbox value={option}>
                  <Box w="20px" h="20px" bg={colores[index]} border="1px solid black" borderRadius="md" marginRight="2" />
                  {option}
                </Checkbox>
              </CheckboxGroup>
            </Box>
          ))}
        </SimpleGrid>
      </Box>
    </Container>
  );
};

export default FilterTono;
