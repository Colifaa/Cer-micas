import React, { useState, useEffect } from 'react';
import { Flex, useDisclosure } from "@chakra-ui/react";
import supabase from "../../../lib/supabaseClient";
import { Button, CardFooter, Box, Grid, GridItem, Image, Text, Heading, Card, CardBody } from '@chakra-ui/react';
import Link from 'next/link';
import CardDetailProduct from './ModalDetailProduct';
import ModalDetailProduct from './ModalDetailProduct';
import AlertDelete from '../AlertsAdmin/AlertDelete';
import SearchBar from '../SearchBar/SearchBar';
import Footer from '../Footer/Footer';

export default function CardsProducts() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  // Estado para almacenar los productos
  const [productos, setProductos] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isDeleteAlertOpen, setIsDeleteAlertOpen] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para almacenar los productos filtrados


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
        setFilteredProducts(productos); // Establece los productos filtrados inicialmente como todos los productos
      }
    } catch (error) {
      console.error('Error al cargar los productos:', error);
    }
  };

  useEffect(() => {
    getProductos();
  }, []);


  const handleOpenModal = (product) => {
    setSelectedProduct(product);
    onOpen(); // Abre el modal
  };

 

  const handleDeleteConfirm = async () => {
    try {
      const { data, error } = await supabase
        .from('products')
        .delete()
        .eq('id', selectedProduct.id);

      if (error) {
        console.error('Error al eliminar el producto:', error.message);
        return;
      }

      console.log('Producto eliminado exitosamente:', selectedProduct);
      setIsDeleteAlertOpen(false); // Cierra la alerta después de eliminar el producto
      setSelectedProduct(null); // Limpia el producto seleccionado
      window.location.reload(); // Recargar la página
    } catch (error) {
      console.error('Error al eliminar el producto:', error.message);
    }
  };

  const handleDeleteCancel = () => {
    setIsDeleteAlertOpen(false);
    setSelectedProduct(null); // Limpia el producto seleccionado
  };

  const handleDeleteProduct = (product) => {
    setSelectedProduct(product);
    setIsDeleteAlertOpen(true);
  };

  // Función para manejar la búsqueda de productos
  const handleSearch = (searchTerm) => {
    if (searchTerm === '') {
      setFilteredProducts(productos); // Si el término de búsqueda está vacío, mostrar todos los productos
    } else {
      // Filtrar productos según el término de búsqueda en el nombre
      const filtered = productos.filter(producto =>
        producto.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    }
  };

  return (
    
    <>
  

    <Flex  direction="column" align="center"     bg="repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212))">

      <SearchBar onSearch={handleSearch} />
      </Flex>
      <Grid
       bg="repeating-linear-gradient(45deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(90deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(0deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),repeating-linear-gradient(135deg, hsla(64,83%,54%,0.05) 0px, hsla(64,83%,54%,0.05) 1px,transparent 1px, transparent 11px,hsla(64,83%,54%,0.05) 11px, hsla(64,83%,54%,0.05) 12px,transparent 12px, transparent 32px),linear-gradient(90deg, rgb(41, 27, 158),rgb(249, 77, 212))"
        templateColumns={{ base: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }}
        gap={4}
        justifyContent="center"
        p={4}
      >
      
        {filteredProducts.map((producto, index) => (
          <GridItem key={index} display="flex" flexDirection="column" alignItems="center">
            <Card maxW="300px" mx="auto" bgColor="black" color="#FFFFFF" alignItems="center" fontFamily='Poppins, sans-serif' fontSize="20px">
              <CardBody>
                <Box>
                  <Image
                    objectFit="cover"
                    src={producto.img}
                    alt={`Imagen de ${producto.name}`}
                    borderRadius='full'
                    border="4px"
                    borderColor="blue.800"
                    boxSize="250px"
                    boxShadow="md"
                  />
                  <Text justifyContent="center" color="red" fontSize="xl"  mt="2"   overflow="hidden" >
                    {producto.name}
                  </Text>
                  <Text color="#FF5733" fontSize="xl" maxH="3em" overflow="hidden" textOverflow="ellipsis">
                    Medidas: {producto.medidas}
                  </Text>
                  <Box display="flex" justifyContent="center" justifyItems="center" mt="2">
                    <ModalDetailProduct product={producto} />
                  </Box>
                  <Box display="flex" justifyContent="center" justifyItems="center" marginTop="2">
                    <Button variant="unstyled"
                      border="none"
                      width="15em"
                      height="5em"
                      borderRadius="3em"
                      display="flex"
            justifyContent="center"
            alignItems="center"
            gap="12px"
            bg="#1C1A1C"
            color="#AAAAAA"
            fontWeight="600"
            fontSize="medium"
            cursor="pointer"
            transition="background 450ms ease-in-out"
            _hover={{
              bgGradient: "linear(to-r, #D9693B, #E0012F)",
              boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px red",
              transform: "translateY(-2px)",
              "& .text": {
                color: "white",
              },
              "& .sparkle": {
                fill: "white",
                transform: "scale(1.2)",
              },
            }} colorScheme="red" bgColor="red" onClick={() => handleDeleteProduct(producto)}>
              Eliminar
            </Button>
            <AlertDelete
              isOpen={isDeleteAlertOpen}
              onClose={handleDeleteCancel}
              onConfirm={handleDeleteConfirm}
              title="Confirmar Eliminación"
              message="¿Estás seguro de que quieres eliminar este producto?"
            />
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
  </GridItem>
))}
</Grid>
<Footer/>
</>
);
}