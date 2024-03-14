import { useDisclosure, Button } from '@chakra-ui/react';
import { Modal, ModalOverlay, ModalContent, ModalHeader, ModalFooter, ModalBody, ModalCloseButton,Box } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";
import React ,{ useEffect, useState } from 'react';
import CartAlertCorrect from '../Cart/CartAlertCorrect';
import CartAlertAdd from '../Cart/CartAlertAdd';
import Navbar from '../NavBar/Navbar';
import CartAlert from '../Cart/CartAlert';


function CardsDetail({ product }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [user, setUser] = useState(false); // Estado para almacenar la información del usuario

  const [showAlert, setShowAlert] = useState(null); // Estado para mostrar el alert
  const [showAlert2, setShowAlert2] = useState(null); // Estado para mostrar el alert

  const [showAlert3, setShowAlert3] = useState(null); // Estado para mostrar el alert

  const [cart, setCart] = useState([]);

  const [overlay, setOverlay] = React.useState();

  const OverlayOne = () => (
    <ModalOverlay
      bg='blackAlpha.300'
      backdropFilter='blur(10px) hue-rotate(90deg)'
    />
  );

  
  const handleClick = () => {
    // Verificar si el usuario no ha iniciado sesión
    if (!user.user?.id) {
      console.log("user", user);
      // Mostrar el alert si el usuario no ha iniciado sesión
      setShowAlert(true);

    } else {
      // Redirigir al carrito si el usuario ha iniciado sesión
      router.push('/carrito');
    }
  };

  


 // Función para obtener información del usuario después de iniciar sesión
 const getUserInfo = async () => {
    const user = await supabase.auth.getUser(); // Espera a que la promesa se resuelva
    setUser(user);
  };


  // Función para cargar productos en el carrito
  const loadCart = async () => {
    const { data: cartData, error: cartError } = await supabase
      .from('cart')
      .select('*');

    if (cartError) {
      console.error('Error fetching cart:', cartError.message);
      return;
    }

    const cartWithProductDetails = await Promise.all(cartData.map(async (cartItem) => {
      const { data: productData, error: productError } = await supabase
        .from('products')
        .select('*')
        .eq('id', cartItem.product_id)
        .single();

      if (productError) {
        console.error('Error fetching product:', productError.message);
        return { ...cartItem, product: null };
      }

      return { ...cartItem, product: productData };
    }));

    setCart(cartWithProductDetails);
  };

  // Función para agregar producto al carrito
  const addToCart = async (productId) => {
    if (!user.data?.user?.id) {
      console.log("user", user);
      // Mostrar el alert si el usuario no ha iniciado sesión
      setShowAlert2(true);
    }
    const { error } = await supabase.from('cart').insert({ product_id: productId, user_id: user?.data?.user?.id });
    if (error) {
      console.error('Error adding to cart:', error.message);
      return;
    }
    setShowAlert3(true);
    await loadCart();
  };




 // Cargar productos disponibles y productos en el carrito cuando el componente se monta
 useEffect(() => {
    loadCart();
    getUserInfo(); // Obtener información del usuario al cargar el componente

  }, []);



  const handleCloseAlert = () => {
    // Manejador para cerrar el alert
    setShowAlert(false);
  };

  
  const handleCloseAlert3 = () => {
    // Manejador para cerrar el alert
    setShowAlert3(false);
  };

  const handleCloseAlert2 = () => {
    // Manejador para cerrar el alert
    setShowAlert2(false);
  };




  return (
    <>
    <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
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
        transition="background 450ms ease-in-out"
        _hover={{
          bgGradient: "linear(to-r, #A47CF3, #683FEA)",
          boxShadow: "inset 0px 1px 0px 0px rgba(255, 255, 255, 0.4), inset 0px -4px 0px 0px rgba(0, 0, 0, 0.2), 0px 0px 0px 4px rgba(255, 255, 255, 0.2), 0px 0px 180px 0px #9917FF",
          transform: "translateY(-2px)",
          "& .text": {
            color: "white",
          },
          "& .sparkle": {
            fill: "white",
            transform: "scale(1.2)",
          },
        }}
      >
        Detail
      </Button>
       
      <Modal size="full" isOpen={isOpen} onClose={onClose} isCentered motionPreset='slideInBottom'>
   
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{product && product.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
              <div className="container px-5 py-24 mx-auto">
                <div className="lg:w-4/5 mx-auto flex flex-wrap">
                  <img
                    src={product && product.img}
                    alt={product && product.name}
                    className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200"
                  />

                  <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                    <h2 className="text-sm title-font text-gray-500 tracking-widest">
                      <span className="title-font font-medium text-xl text-gray-900">
                        <p><strong className='mr-1'></strong> {product && product.uso}</p>
                      </span>
                    </h2>
                    <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                      {product && product.name}
                    </h1>
                    <div className="flex mb-4">
                      <span className="flex items-center">



                        <strong>Total de Cajas:</strong>
                        <span className="text-gray-600 ml-1">{product && product.cantCajas} |</span>
                        <strong>Piezas:</strong>
                        <span className="text-gray-600 ml-1"> {product && product.piezas} |</span>


                      </span>
                    </div>
                    <p className="leading-relaxed">
                      {product && product.detail}


                      <div className='mt-3'>
                        <strong>Tipo de material:</strong>
                        <span className="text-gray-600 ml-1"> {product && product.material}</span>
                      </div>
                      <div >
                        <strong >Ambientación:</strong>
                        <span className="text-gray-600 ml-1 mr-3"> {product && product.ambientacion}</span>
                      </div>
                    </p>
                    <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                      <div className="flex">

                        <strong className='mr-3 '>Tono:</strong>
                        <img
                          src={product && product.img}
                          alt={product && product.name}
                          strokeWidth="2"
                          className="w-6 h-"

                        />


                      </div>
                      <div className="flex ml-6 items-center">



                        <strong className='mr-3'>Medida:</strong>
                        <div className="relative">

                          <span className="rounded border appearance-none border-gray-400 py-2 focus:outline-none focus:border-red-500 text-base pl-3 pr-10">
                            {product && product.medidas}
                          </span>



                          <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex">

                      <span className="title-font font-medium text-2xl text-gray-900">
                      ${product && product.precio}
                      </span>


                      <button
    onClick={() => addToCart(product.id)}
    className="flex ml-auto mr-2 text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded"
  >
    Agregar al carrito
  </button>
                      <Button
  
    variant="unstyled"
    border="none"
    borderRadius="50%" // Para hacer el botón redondo
    display="flex"
    justifyContent="center"
    alignItems="center"
    width="1.5em" // Ajusta el tamaño del botón aquí
    height="1.5em" // Ajusta el tamaño del botón aquí
    bg="#f5a067"
    color="#AAAAAA"
    fontWeight="600"
    fontSize="2em" // Ajustar el tamaño del icono aquí
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
    }}
    onClick={handleClick}
  >
    🛒
  </Button>
              
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </ModalBody  >
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Cerrar
            </Button>
          
          </ModalFooter>
        </ModalContent>
      </Modal>

      <CartAlertCorrect
        isOpen={showAlert3}
        onClose={handleCloseAlert3}
        title="Alerta"
        message="Producto agregado al carrito."
      />

<CartAlertAdd
        isOpen={showAlert2}
        onClose={handleCloseAlert2}
        title="Alerta"
        message="Debes iniciar sesión para agregar productos al carrito."
      />
      <CartAlert   isOpen={showAlert}   onClose={handleCloseAlert}  title="Alerta"  message="Debes iniciar sesión para ver tu carrito de compras."/>

    </>
  );
}

export default CardsDetail;
