import React, { useEffect, useState } from 'react';
import supabase from "../../../lib/supabaseClient";
import ModalCart from './AddCart';
import CartAlert from '../Cart/CartAlert';
import CartAlertAdd from '../Cart/CartAlertAdd';
import CartAlertCorrect from '../Cart/CartAlertCorrect';
import { Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import FilterAmbiente from '../Filters/FilterAmbiente';
import FilterMedidas from '../Filters/FilterMedidas';
import FilterTono from '../Filters/FilterTono';
import FilterMaterial from '../Filters/FilterMaterial';
import FilterPrecio from '../Filters/FilterPrecio';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [showAlert, setShowAlert] = useState(null); // Estado para mostrar el alert

  const [showAlert2, setShowAlert2] = useState(null); // Estado para mostrar el alert

  const [showAlert3, setShowAlert3] = useState(null); // Estado para mostrar el alert

  const [user, setUser] = useState(false); // Estado para almacenar la información del usuario

  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para almacenar los productos filtrados


  const [selectedFilter, setSelectedFilter] = useState('all');





  const [selectedTono, setSelectedTono] = useState([])




  const [selectedMedidas, setSelectedMedidas] = useState([]);



  const [selectedMaterial, setSelectedMaterial] = useState();



  const [selectedPrecios, setSelectedPrecios] = useState([]); // Nuevo estado para manejar los filtros de precios 

  console.log("selectedPrecios", selectedPrecios);

  // Función para cargar productos disponibles
  const loadProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error.message);
      return;
    }
    setProducts(data);
    setFilteredProducts(data);
  };









  // Función para manejar el cambio de filtro
  const handleFilterChange = async (filter) => {
    setSelectedFilter(filter);
    filterProducts(filter, selectedMedidas);
  };

  const handleFilterMedidas = async (filter) => {
    setSelectedMedidas(filter);
    filterProducts(selectedFilter, filter);
  };


  const handleFilterTono = async (filter) => {
    setSelectedTono(filter);
    filterProducts(selectedFilter, selectedMedidas, filter);
  };


  const handleFilterMaterial = async (filter) => {
    setSelectedMaterial(filter);
    filterProducts(selectedFilter, selectedMedidas, selectedTono, filter);
  };

  const handleFilterPrecios = async (filter) => {
    setSelectedPrecios(filter);
    filterProducts(selectedFilter, selectedMedidas, selectedTono, selectedMaterial, filter); // Modificado para incluir el filtro de precios
  };




  const filterProducts = async (ambientacionFilter, medidasFilter, tonoFilter, materialFilter, preciosFilter) => {
    let filteredData = [...products];

    if (ambientacionFilter !== 'all') {
      filteredData = filteredData.filter(product => product.ambientacion === ambientacionFilter);
    }

    if (medidasFilter.length > 0) {
      filteredData = filteredData.filter(product => medidasFilter.some(medida => product.medidas.includes(medida)));
    }

    if (tonoFilter?.length > 0) {
      filteredData = filteredData.filter(product => tonoFilter.some(tono => product.tono === tono));
    }


    if (materialFilter?.length > 0) {
      filteredData = filteredData.filter(product => materialFilter.some(material => product.material === material));
    }


    if (preciosFilter === 'menor-mayor') {
      filteredData.sort((a, b) => a.precio - b.precio); // Ordenar de menor a mayor
    } else if (preciosFilter === 'mayor-menor') {
      filteredData.sort((a, b) => b.precio - a.precio); // Ordenar de mayor a menor
    }


    setFilteredProducts(filteredData);
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
    loadProducts();
    loadCart();
    getUserInfo(); // Obtener información del usuario al cargar el componente

  }, []);

  const router = useRouter();

  const handleClick = () => {
    // Verificar si el usuario no ha iniciado sesión
    if (!user.data?.user?.id) {
      console.log("user", user);
      // Mostrar el alert si el usuario no ha iniciado sesión
      setShowAlert(true);

    } else {
      // Redirigir al carrito si el usuario ha iniciado sesión
      router.push('/carrito');
    }
  };

  const handleCloseAlert = () => {
    // Manejador para cerrar el alert
    setShowAlert(false);
  };

  const handleCloseAlert2 = () => {
    // Manejador para cerrar el alert
    setShowAlert2(false);
  };


  const handleCloseAlert3 = () => {
    // Manejador para cerrar el alert
    setShowAlert3(false);
  };




  return (
    <div className="relative flex min-h-screen flex-col">
      <h2 className="font-black text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white uppercase">
        Todos los Productos
      </h2>

      {/* Componente de filtro */}
      <FilterAmbiente
        // Opciones de filtrado según las ambientaciones disponibles
        selectedFilter={selectedFilter}
        onChange={handleFilterChange}
      />

      <FilterMedidas
        selectedMedidas={selectedMedidas}
        onChangeMedidas={handleFilterMedidas}
      />

      <FilterMaterial selectedMaterial={selectedMaterial}
        onChangeMaterial={handleFilterMaterial} />

      <FilterTono

        selectedTono={selectedTono}
        onChangeTono={handleFilterTono} />


      <FilterPrecio selectedPrecios={selectedPrecios}
        onChangePrecios={handleFilterPrecios} />


      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredProducts.map((product) => (
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
                  }}
                  onClick={() => addToCart(product.id)}
                >
                  Agregar al carrito
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tus alertas */}
    

      <CartAlertAdd
        isOpen={showAlert2}
        onClose={handleCloseAlert2}
        title="Alerta"
        message="Debes iniciar sesión para agregar productos al carrito."
      />

      <CartAlertCorrect
        isOpen={showAlert3}
        onClose={handleCloseAlert3}
        title="Alerta"
        message="Producto agregado al carrito."
      />
    </div>
  );
}

export default Cart;