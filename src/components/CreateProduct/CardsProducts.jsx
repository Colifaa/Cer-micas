import React, { useState, useEffect } from 'react';
import { useDisclosure } from "@chakra-ui/react";
import  supabase  from "../../../lib/supabaseClient";
import { Button, CardFooter, Box, Grid, GridItem, Image, Text, Heading, Card, CardBody } from '@chakra-ui/react';
import Link from 'next/link';

export default function CardsProducts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);
  console.log("productos", productos);

  // Función para cargar los productos desde la base de datos
  const getProductos = async () => {
    try {
      // Realiza la consulta para obtener todos los productos
      const { data: productos, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.error('Error al cargar los productos:', error);
      } else {
        setProductos(productos); // Actualiza el estado con los productos obtenidos
      }
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);

  return (
    <Grid templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }} gap={4} justifyContent="center" p={4}>
      {productos?.map((producto, index) => (
        <GridItem key={index} display="flex" flexDirection="column" alignItems="center">
          <Link href={`/category/${producto.category}`}>
            <Card maxW="300px"mx="auto" bgColor="#217dc1" color="#FFFFFF" alignItems="center" fontFamily='Poppins, sans-serif' fontSize="20px">
              <CardBody>
              <Box>
                <Image
                  objectFit="cover"
                  src={producto.img}
                  alt={`Imagen de ${producto.name}`}
                  borderRadius='full'
                  border="4px"
                  borderColor="blue.500"
                  boxSize="250px"
                  boxShadow="md"
                />
            
              <Text color="#FF5733" fontSize="xl" maxH="3em" overflow="hidden" textOverflow="ellipsis">
                ${producto.precio}
              </Text>
              <Text color="#FF5733" fontSize="xl" maxH="3em" overflow="hidden" textOverflow="ellipsis">
              Medidas:  {producto.medidas}
              </Text>
            
              <Box  display="flex" justifyContent="center" justifyItems="center" mt="2"> 
              <Button colorScheme="green" bgColor="#FF5733" onClick={() => openEditModal(producto)}>
                Editar
              </Button>
              </Box>
              <Box  display="flex" justifyContent="center" justifyItems="center" marginTop="2"> 
              <Button colorScheme="red" bgColor="#FF5733" onClick={() => handleDeleteProduct(producto)}>
                Eliminar
              </Button>
              </Box>
              </Box>
              </CardBody>
              <CardFooter
                justify='space-between'
                flexWrap='wrap'
                sx={{
                  '& > button': {
                    minW: '136px',
                  },
                }}
              >
                {producto.category}
              </CardFooter>
              
            </Card>
            
          </Link>
        </GridItem>
        
      ))}
    </Grid>
 
  );
}
