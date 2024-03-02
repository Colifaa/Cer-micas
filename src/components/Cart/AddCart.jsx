import React, { useState, useEffect } from 'react';
import { Button, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Box, SimpleGrid, Card } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";

function AddCart() {
 

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState([]);

  const loadCart = async (userId) => {
    const { data, error } = await supabase
      .from('cart')
      .select('*, product:products(*)')
      .eq('user_id', userId);

    if (error) {
      console.error('Error fetching cart:', error.message);
      return;
    }

    setCart(data);
  };

  const removeFromCart = async (cartItemId) => {
    const { error } = await supabase.from('cart').delete().eq('id', cartItemId);
    if (error) {
      console.error('Error removing from cart:', error.message);
      return;
    }
    await loadCart(); // Cargar el carrito después de eliminar un elemento
  };

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await supabase.auth.getUser(); // Obtener el usuario autenticado
      if (user) {
        await loadCart(user.data.user.id); // Cargar el carrito asociado al usuario autenticado
      }
    };
    getUserInfo(); // Llamar a la función para obtener el usuario y cargar el carrito
  }, []);


    return (
  
  
          <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 3 }} spacing={10}>
      {cart.map((cartItem) => (
        <div className="card bg-base-100 shadow-xl w-full sm:w-10 xs:w-10  md:w-10 lg:w-10 xl:w-72">
       
       <h2 className="card-title">{cartItem.product.name}</h2>
       <div className="card-body items-center text-center">Precio: ${cartItem.product.precio}</div>
          <figure className="px-10 pt-10">
          <Image
            src={cartItem.product.img}
            objectFit="cover"
            alt={cartItem.product.name}
            maxW="200px"
            maxH="200px" // Aquí ajusta el tamaño máximo de la altura según tu preferencia
          />
            </figure>
          <div className="flex justify-between items-center mt-2">
          <Button
                        mt="8"
                         variant="unstyled"
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
                         w="full"
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
                         }} onClick={() => removeFromCart(cartItem.id)}>Eliminar</Button>
         <Button
                        mt="8"
                         variant="unstyled"
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
                         w="full"
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
                         }}>Comprar</Button>
          </div>
        </div>
      ))}
    </SimpleGrid>
  
  
  
    
  );
}

export default AddCart;
