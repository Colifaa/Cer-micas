import React, { useState, useEffect } from 'react';
import { Select } from '@chakra-ui/react';
import supabase from "../../../lib/supabaseClient";
import CartAlertCorrect from '../Cart/CartAlertCorrect';
import CartAlertAdd from '../Cart/CartAlertAdd';

function SellCart({ product, user, loadCart ,addToCart }) {
  const [selectedCajas, setSelectedCajas] = useState(0); // Estado para la cantidad de cajas seleccionadas
  const [selectedPiezas, setSelectedPiezas] = useState(0); // Estado para el total de piezas
  const [piezasPorCaja, setPiezasPorCaja] = useState(0); // Estado para almacenar la cantidad de piezas por caja
console.log(piezasPorCaja);
  const [cartItem, setCartItem] = useState(null); // Estado para el elemento del carrito que contiene el producto actual
  const [showAlert3, setShowAlert3] = useState(null); // Estado para mostrar el alert
  const [showAlert2, setShowAlert2] = useState(false); // Estado para mostrar el alert si el usuario no ha iniciado sesión

  const handleCloseAlert3 = () => {
    // Manejador para cerrar el alert
    setShowAlert3(false);
  };

  const handleCloseAlert2 = () => {
    setShowAlert2(false);
  };

 

  
  // Función para manejar el cambio en la cantidad de cajas seleccionadas
  const handleCajasChange = (event) => {
    const cajas = parseInt(event.target.value);
    setSelectedCajas(cajas);
    // Calcular el total de piezas correctamente multiplicando las cajas por la cantidad de piezas por caja
    const totalPiezas = cajas * piezasPorCaja;
    setSelectedPiezas(totalPiezas);
  };

  // Función para obtener la cantidad de piezas por caja desde la base de datos usando Supabase
  const getPiezasPorCaja = async () => {
    const { data, error } = await supabase
      .from('products')
      .select('cantCajas,piezas')
      .eq('id', product.id);

    if (error) {
      console.error('Error fetching piezas por caja:', error.message);
      return;
    }

    if (data.length > 0) {
      setPiezasPorCaja(data[0].piezas);
    }
  };

  // Función para cargar el carrito y buscar si el producto ya está en él
  const buscarProductoEnCarrito = async () => {
    const { data, error } = await supabase
      .from('cart')
      .select('*')
      .eq('product_id', product.id)
      .eq('user_id', user?.data?.user?.id);

    if (error) {
      console.error('Error fetching cart items:', error.message);
      return;
    }

    if (data.length > 0) {
      setCartItem(data[0]);
      setSelectedCajas(data[0].cantCajas);
      setSelectedPiezas(data[0].piezas);
    }
  };

  // Función para confirmar la compra
  const confirmarCompra = async () => {
    if (!user.data?.user?.id) {
      // Mostrar el alert si el usuario no ha iniciado sesión
      setShowAlert2(true);
      return;
    }
  
    if (cartItem) {
      // Si el producto ya está en el carrito, actualizar la cantidad de cajas y piezas
      const { error } = await supabase
        .from('cart')
        .update({ cantCajas: selectedCajas, piezas: selectedPiezas })
        .eq('id', cartItem.id);
  
      if (error) {
        console.error('Error updating cart item:', error.message);
        return;
      }
    } else {
      // Si el producto no está en el carrito, insertarlo
      const { error } = await supabase.from('cart').insert([
        { product_id: product.id, user_id: user?.data?.user?.id, cantCajas: selectedCajas, piezas: selectedPiezas }
      ]);
  
      if (error) {
        console.error('Error adding to cart:', error.message);
        return;
      }
    }
  
    // Mostrar el alerta si la compra se realiza con éxito
    setShowAlert3(true);
  
    await loadCart();
  };
  // Cargar la cantidad de piezas por caja y buscar el producto en el carrito cuando el componente se monta
  useEffect(() => {
    getPiezasPorCaja();
    buscarProductoEnCarrito();
  }, []);

  return (
    

    <div className="flex flex-col lg:flex-row lg:items-center ml-auto mr-2">
      
      <div className="flex items-center mb-2 lg:mb-0">
        <h2 className="mr-2">Cajas:</h2>
        <Select placeholder="cantidad de cajas" value={selectedCajas} onChange={handleCajasChange} className="mr-4">
  {[...Array(20)].map((_, index) => (
    <option key={index} value={index + 1}>{index + 1}</option>
  ))}
</Select>
        <span className="ml-2 text-gray-600"> {selectedCajas * piezasPorCaja} Piezas</span>
      </div>
 
      <button
      onClick={confirmarCompra}
      className="btn btn-outline btn-success text-white font-bold mt-2 lg:mt-0 ml-auto lg:ml-20 rounded"
      style={{ marginTop: '8px', marginBottom: '8px' }}
      disabled={selectedCajas === 0}
    >
      Agregar al carrito
    </button>
      
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


    </div>

    
  );
}

export default SellCart;
