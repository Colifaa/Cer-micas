import React, { useEffect, useState } from 'react';
import { Box, Container, Checkbox, CheckboxGroup, SimpleGrid } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterMaterial({ selectedMaterial, onChangeMaterial }) {
  const [materialOptions, setMaterialOptions] = useState([]); // Inicializar con un array vacío

  useEffect(() => {
    const fetchMaterialOptions = async () => {
      try {
        const { data: materialData, error: materialError } = await supabase.from('products').select('material');

        if (materialError) {
          console.error('Error fetching material:', materialError);
          return;
        }

        // Obtener todas las material disponibles y eliminar duplicados
        const uniqueMaterial = Array.from(new Set(materialData.map(product => product.material).filter(Boolean)));
        setMaterialOptions(uniqueMaterial); // Actualizar el estado con las opciones de material
      } catch (error) {
        console.error('Error fetching material:', error.message);
      }
    };

    fetchMaterialOptions();
  }, []);

  const handleCheckboxChange = (option) => {
    // Llamar a la función onChangeMaterial pasando la opción seleccionada
    onChangeMaterial(option);
  };

  return (
    <Container maxW="container.xl" centerContent>
      <Box position="relative" textAlign="center">
      <h1 id="material" className="text-lg text-center bg-gray-500 bg-opacity-50">Material</h1>
        <SimpleGrid gap={{ base: 2, md: 5 }} p={{ base: 2, md: 5 }} columns={2}>
          <CheckboxGroup value={selectedMaterial} onChange={handleCheckboxChange}>
            {materialOptions.map((option) => (
              <Checkbox key={option} value={option}>
                {option}
              </Checkbox>
            ))}
          </CheckboxGroup>
        </SimpleGrid>
      </Box>
    </Container>
  );
}

export default FilterMaterial;
