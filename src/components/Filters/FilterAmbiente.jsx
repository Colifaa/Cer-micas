import React, { useEffect, useState } from 'react';
import { Box,Container, Select,SimpleGrid,Text} from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

const FilterAmbiente = ({ selectedFilter, onChange }) => {
  const [options, setOptions] = useState(['all']); // Inicializar con 'all' como opción predeterminada

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const { data, error } = await supabase.from('products').select('ambientacion');

        if (error) {
          console.error('Error fetching ambientaciones:', error.message);
          return;
        }

        // Obtener todas las ambientaciones disponibles y eliminar duplicados
        const uniqueOptions = Array.from(new Set(data.map(product => product.ambientacion).filter(Boolean)));
        setOptions(['all', ...uniqueOptions]); // Agregar 'all' como opción predeterminada y actualizar el estado
      } catch (error) {
        console.error('Error fetching ambientaciones:', error.message);
      }
    };

    fetchOptions();
  }, []);

  return (
    <Box mb={{ base: 4, md: 0 }} display="flex" alignItems="center">
      <SimpleGrid gap={{ base: 1, md: 2 }} p={1}>
      <Text mr={{ base: 0, md: 2 }}>Ordenar por Ambiente:</Text>
        <Select value={selectedFilter} onChange={(e) => onChange(e.target.value)}>
          {options.map((option) => (
            <option key={option} value={option}>{option}</option>
          ))}
        </Select>
      </SimpleGrid>
    </Box>
  );
};

export default FilterAmbiente;