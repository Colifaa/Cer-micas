import { Box, Table, Thead, Tbody, Tr, Th, Td, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import supabase from "../../../lib/supabaseClient"; // Importa la instancia de Supabase

export default function StockTable() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        // Realiza la consulta a la tabla "products" de Supabase
        const { data, error } = await supabase.from('products').select('*');
        if (error) {
          throw error;
        }
        setProducts(data); // Actualiza el estado con los datos obtenidos
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    }
    fetchProducts();
  }, []);

  return (
    <Box overflowX="auto">
      <Table w="full" colorScheme="blue">
        <Thead>
          <Tr>
            <Th>Imagen</Th>
            <Th>Producto</Th>
            <Th>Descripción</Th>
            <Th>Piezas</Th>
            <Th>Cantidad Cajas</Th>
            <Th>Material</Th>
            <Th>Uso</Th>
            <Th>Medidas</Th>
            <Th>Tono</Th>
            <Th>Ambientacion</Th>
            <Th>Calidad</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index} _hover={{ bg: "blue.600" }}>
              <Td>
                <Image 
                  src={product.img} 
                  alt={product.name} 
               w={350}
               h={100}
                  fallbackSrc="https://via.placeholder.com/150" 
                />
              </Td>
              <Td>{product.name}</Td>
              <Td>
                <Text>{product.detail}</Text>
              </Td>
              <Td>
                <Text>{product.piezas}</Text>
              </Td>
              <Td>
                <Text>{product.cantCajas}</Text>
              </Td>
              <Td>
                <Text>{product.material}</Text>
              </Td>
              <Td>
                <Text>{product.uso}</Text>
              </Td>
              <Td>
                <Text>{product.medidas}</Text>
              </Td>
              <Td>
                <Text>{product.tono}</Text>
              </Td>
              <Td>
                <Text>{product.ambientacion}</Text>
              </Td>
              <Td>
                <Text>{product.calidad}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
