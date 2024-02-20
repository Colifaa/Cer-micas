import { Box, Table, Thead, Tbody, Tr, Th, Td, Image, Text } from "@chakra-ui/react";
import { useState, useEffect } from "react";
import  supabase  from "../../../lib/supabaseClient"; // Importa la instancia de Supabase

export default function StockTable() {
  const [products, setProducts] = useState([]);
  console.log("products", products);

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
            <Th fontSize={{ base: "md", md: "xl" }}>Imagen</Th>
            <Th fontSize={{ base: "md", md: "xl" }}>Producto</Th>
            <Th fontSize={{ base: "md", md: "xl" }}>Descripción</Th>
            <Th fontSize={{ base: "md", md: "xl" }}>Stock</Th>
          </Tr>
        </Thead>
        <Tbody>
          {products.map((product, index) => (
            <Tr key={index} _hover={{ bg: "blue.600" }}>
              <Td>
                <Image 
                  src={product.img} 
                  alt={product.name} 
                  boxSize={{ base: "70px", md: "100px" }} 
                  fallbackSrc="https://via.placeholder.com/150" // Aquí puedes agregar una imagen de respaldo en caso de que la URL sea inválida
                />
              </Td>
              <Td>{product.name}</Td>
              <Td>
                <Text 
                  fontSize={{ base: "xs", md: "sm" }} 
                  maxWidth={{ base: "auto", md: "300px" }} // Establece el ancho máximo del texto
                >
                  {product.detail}
                </Text>
              </Td>
              <Td>  
                <Text textAlign={{ base: 'left', md: 'right' }} boxSize={{ base: "70px", md: "50px" }}>
                  {product.stock}
                </Text>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
}
