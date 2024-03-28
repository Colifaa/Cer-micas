import React, { useEffect, useState } from 'react';
import { Text, Box, Container, Checkbox, SimpleGrid, CheckboxGroup } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterTono({ selectedTono, onChangeTono }) {
  const [TonoOptions, setTonoOptions] = useState([]); // Inicializar con un array vacío
  const colores = ["#ccac83", "#484ba1", "#f0ead8", "#ffffff", "#b8b8b8", "#932f2f", "#fffff2", "#965c1d", "#cfd8dc", "#362f3d", "#d4ba7d", "#a55e15",];

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
        const filteredTono = tono.filter(option => !option.includes('0')); // Filtrar tonos que contienen 'a'
        const uniqueTono = Array.from(new Set(filteredTono)).sort(); // Ordenar alfabéticamente
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
      <h1 id="color" className="text-lg text-center  bg-blue-1 bg-opacity-50">Color</h1>
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
