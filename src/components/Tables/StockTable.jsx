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
    <Box overflowX="auto"  bgImage="linear-gradient(306deg, rgba(54, 54, 54, 0.05) 0%, rgba(54, 54, 54, 0.05) 33.333%,rgba(85, 85, 85, 0.05) 33.333%, rgba(85, 85, 85, 0.05) 66.666%,rgba(255, 255, 255, 0.05) 66.666%, rgba(255, 255, 255, 0.05) 99.999%),linear-gradient(353deg, rgba(81, 81, 81, 0.05) 0%, rgba(81, 81, 81, 0.05) 33.333%,rgba(238, 238, 238, 0.05) 33.333%, rgba(238, 238, 238, 0.05) 66.666%,rgba(32, 32, 32, 0.05) 66.666%, rgba(32, 32, 32, 0.05) 99.999%),linear-gradient(140deg, rgba(192, 192, 192, 0.05) 0%, rgba(192, 192, 192, 0.05) 33.333%,rgba(109, 109, 109, 0.05) 33.333%, rgba(109, 109, 109, 0.05) 66.666%,rgba(30, 30, 30, 0.05) 66.666%, rgba(30, 30, 30, 0.05) 99.999%),linear-gradient(189deg, rgba(77, 77, 77, 0.05) 0%, rgba(77, 77, 77, 0.05) 33.333%,rgba(55, 55, 55, 0.05) 33.333%, rgba(55, 55, 55, 0.05) 66.666%,rgba(145, 145, 145, 0.05) 66.666%, rgba(145, 145, 145, 0.05) 99.999%),linear-gradient(90deg, rgb(9, 201, 186),rgb(18, 131, 221))">
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
              <Td  fontSize="0.9rem"
    fontWeight="bold">{product.name}</Td>
              <Td >
                <Text fontSize="0.9rem"
    fontWeight="bold">{product.detail}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.piezas}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.cantCajas}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.material}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.uso}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.medidas}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.tono}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.ambientacion}</Text>
              </Td>
              <Td>
                <Text  fontSize="0.9rem"
    fontWeight="bold">{product.calidad}</Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
