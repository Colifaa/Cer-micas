import React, { useEffect, useState } from 'react';
import { Text, Box, Container, Checkbox, CheckboxGroup, SimpleGrid } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function FilterUso({ selectedUso, onChangeUso }) {
  const [usoOptions, setUsoOptions] = useState([]);

  useEffect(() => {
    const fetchUsoOptions = async () => {
      try {
        const { data: usoData, error: usoError } = await supabase.from('products').select('uso');

        if (usoError) {
          console.error('Error fetching uso:', usoError);
          return;
        }

        const uniqueUsos = Array.from(new Set(usoData.map(product => product.uso).filter(Boolean)));
        setUsoOptions(uniqueUsos);
      } catch (error) {
        console.error('Error fetching uso:', error.message);
      }
    };

    fetchUsoOptions();
  }, []);

  const handleCheckboxChange = (option) => {
    onChangeUso(option);
  };

  return (
    <Container maxW="container.xl" centerContent>
      <Box mb={{ base: 4, md: 0 }} position="relative" textAlign="center">
        <h1 id="uso" className="text-lg text-center bg-blue-1 bg-opacity-50">Uso</h1>
        <SimpleGrid gap={{ base: 2, md: 1 }} p={{ base: 2, md: 2 }} columns={4} justifyItems="center">
          <CheckboxGroup value={selectedUso} onChange={handleCheckboxChange}>
            {usoOptions.map((option) => (
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

export default FilterUso;