import React, { useState, useEffect } from 'react';
import { Button, Image, Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton, useDisclosure, Box, SimpleGrid, Card } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";
import CartAlertRemove from '../Cart/CartAlertRemove';

function AddCart() {
 

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [cart, setCart] = useState([]);


  const [showAlert, setShowAlert] = useState(null); // Estado para mostrar el alert


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
   setShowAlert(true)
   setTimeout(() => {
    window.location.reload(); // Recargar la página para actualizar el carrito
  }, 2000); // 1000 milisegundos = 1 segundo
};

  useEffect(() => {
    const getUserInfo = async () => {
      const user = await supabase.auth.getUser(); // Obtener el usuario autenticado
      if (user) {
        await loadCart(user?.data?.user?.id); // Cargar el carrito asociado al usuario autenticado
      }
    };
    getUserInfo(); // Llamar a la función para obtener el usuario y cargar el carrito
  }, []);


  const handleCloseAlert = () => {
    // Manejador para cerrar el alert
    setShowAlert(false);
  };

  const enviarPedidoWhatsapp = () => {
    const total = cart.reduce((acc, item) => acc + (item.product.precio * item.cantCajas), 0);
    let mensaje = `🛒¡Hola! Quisiera realizar la siguiente compra.\n\n El total es de $${total}. \n\n Detalles del carrito:\n\n`;
  
    cart.forEach(item => {
      // Concatenamos el nombre del producto, sus medidas y el resto de la información del carrito sin separadores adicionales
      mensaje += `Nombre: ${item.product.name}\nMedidas: ${item.product.medidas}\n Cajas: ${item.cantCajas}\n Piezas: ${item.piezas} \n\n`;
    });
  
    const numeroDestino = '2604224940'; // Reemplaza con el número de WhatsApp del dueño de la empresa
    const urlWhatsapp = `https://wa.me/${numeroDestino}?text=${encodeURIComponent(mensaje)}`;
  
    window.open(urlWhatsapp, '_blank');
  };
  


    return (
  
          <SimpleGrid columns={{ sm: 1, md: 3, lg: 3, xl: 3 }} spacing={10}>
  
     
      {cart.map((cartItem) => (
        <div className="card bg-base-100 shadow-xl w-full sm:w-10 xs:w-10  md:w-10 lg:w-10 xl:w-72">
       
       <h2 className="card-title">{cartItem.product.name}</h2>
       <div className="card-body items-center text-center">Precio: ${cartItem.product.precio * cartItem.cantCajas}</div>
       <div className="card-body items-center text-center">Cajas: {cartItem.cantCajas}</div>
       <div className="card-body items-center text-center">Piezas: {cartItem.piezas}</div>
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
       
          </div>
          
        </div>
      ))}
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
                         onClick={enviarPedidoWhatsapp}
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
                           
                         }}
                         >Comprar</Button>
  <CartAlertRemove
        isOpen={showAlert}
        onClose={handleCloseAlert}
        title="Alerta"
        message="Producto eliminado Correctamente."
      />

    </SimpleGrid>
  
  
  
    
  );
}

export default AddCart;
