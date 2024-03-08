import React, { useEffect, useState } from 'react';
import supabase from "../../../lib/supabaseClient";
import ModalCart from './AddCart';

import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);


  const [user, setUser] = useState(null); // Estado para almacenar la información del usuario
  

  // Función para cargar productos disponibles
  const loadProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error.message);
      return;
    }
    setProducts(data);
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

  // Función para obtener información del usuario después de iniciar sesión
  const getUserInfo = async () => {
    const user = await supabase.auth.getUser(); // Espera a que la promesa se resuelva
    setUser(user);
  };

  // Función para agregar producto al carrito
  const addToCart = async (productId) => {
    if (!user) {
      console.error('User not logged in');
      return;
    }
    const { error } = await supabase.from('cart').insert({ product_id: productId, user_id: user.data.user.id });
    if (error) {
      console.error('Error adding to cart:', error.message);
      return;
    }
    await loadCart();
  };


  // Cargar productos disponibles y productos en el carrito cuando el componente se monta
  useEffect(() => {
    loadProducts();
    loadCart();
    getUserInfo(); // Obtener información del usuario al cargar el componente
  }, []);

  const router = useRouter();

  const handleClick = () => {
    router.push('/carrito');
  };
  return (
<div className="relative flex min-h-screen flex-col">
    <h2 className="font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase">
        Todos los Productos
    </h2>



    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"> 
 
     
         
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
                         }}     onClick={handleClick} >Carrito</Button>
      {products.map((product) => (
        <div className="card bg-base-100 shadow-xl w-96" key={product.id}>
          <figure>
            <img src={product.img} alt={product.name} style={{ width: '100%', height: 'auto' }} />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{product.name}</h2>
            <p className="text-gray-600">Price: ${product.precio}</p>
            <div className="card-actions justify-end">
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
                         }}onClick={() => addToCart(product.id)}>Agregar al carrito</Button>
            </div>
          </div>
      
        </div>
      ))}
  
  </div>
    </div>
  );
};

export default Cart;