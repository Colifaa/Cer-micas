import React, { useEffect, useState } from 'react';
import { Box, SimpleGrid, Select, Text } from '@chakra-ui/react';
import supabase from '../../../lib/supabaseClient';

const FilterAmbiente = ({ selectedFilter, onChange }) => {
  const [options, setOptions] = useState(['all']);

  useEffect(() => {
    const fetchOptions = async () => {
      try {
        const { data, error } = await supabase.from('products').select('ambientacion');

        if (error) {
          console.error('Error fetching ambientaciones:', error.message);
          return;
        }

        const uniqueOptions = Array.from(new Set(data.map(product => product.ambientacion).filter(Boolean)));
        setOptions(['all', ...uniqueOptions]);
      } catch (error) {
        console.error('Error fetching ambientaciones:', error.message);
      }
    };

    fetchOptions();
  }, []);

  const handleSelectChange = (value) => {
    // Si se selecciona "all", no hacer nada
    if (value === 'all') {
      return;
    }
    // Emitir el valor seleccionado
    onChange(value);
  };

  return (
    <Box mb={{ base: 4, md: 0 }} display="flex" alignItems="center" justifyContent="center">
      <SimpleGrid gap={{ base: 1, md: 2 }} p={1}>

        <Select
          borderColor="orange"
          value={selectedFilter}
          onChange={(e) => handleSelectChange(e.target.value)}
        >
          {options.map((option) => (
            <option key={option} value={option} disabled={option === 'all'}>
              {option === 'all' ? 'Ordenar por Ambiente:' : option}
            </option>
          ))}
        </Select>
      </SimpleGrid>
    </Box>
  );
};

export default FilterAmbiente;