import React, { useEffect, useState } from 'react';
import { Box, Select } from '@chakra-ui/react';
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
    <Box mb={4}>
      <Select value={selectedFilter} onChange={(e) => onChange(e.target.value)}>
        {options.map((option) => (
          <option key={option} value={option}>{option}</option>
        ))}
      </Select>
    </Box>
  );
};

export default FilterAmbiente;