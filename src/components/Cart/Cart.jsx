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
import SearchBar from '../SearchBar/SearchBar';
import { Text,Box,Container,Flex, Select } from '@chakra-ui/react';
import Navbar from '../NavBar/Navbar';
import CardsDetail from '../CardsDetail/CardsDetail';
import SellCart from '../SellCart/SellCart';


const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const [showDetail, setShowDetail] = useState(false); // Estado para controlar la visibilidad del detalle del producto

  const toggleDetail = () => {
    setShowDetail(!showDetail);
  };
  const [showAlert, setShowAlert] = useState(null); // Estado para mostrar el alert

  

  const [user, setUser] = useState(false); // Estado para almacenar la información del usuario

  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para almacenar los productos filtrados
  console.log(filteredProducts,"filteredProducts");


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




  const filterProducts = async (ambientacionFilter, medidasFilter, tonoFilter, materialFilter, preciosFilter, searchData) => {
    let filteredData = searchData ? [...searchData] : [...products]; // Usar los datos filtrados si hay una búsqueda, de lo contrario, usar todos los productos
  
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



  const handleSearch = async (searchTerm) => {
  if (searchTerm === '') {
    setFilteredProducts(products);
    return;
  }
  
  const searchTermLower = searchTerm.toLowerCase();
  
  // Filtrar los productos que contienen la secuencia de letras ingresada en cualquier parte del nombre
const filteredData = filteredProducts.filter(product => {
    const productNameLower = product.name.toLowerCase();
    return productNameLower.includes(searchTermLower);
  });
  
  setFilteredProducts(filteredData);
};
  
return (
  
<Flex direction="row" align="flex-start" justify="center" >
  {/* Filtros y productos */}
  <Flex direction={{ base: "column", md: "row" }} align={{ base: "flex-start", md: "center" }} justify="center" w="100%" style={{ alignItems: filteredProducts.length < 4 ? "flex-start" : "center" }}>
    {/* Filtros */}
    <Flex bgColor='white' direction="column" align="flex-start" justify="flex-start" width={{ base: "100%", md: "30%" }} padding="20px" mb={{ base: "300px", md: "250" }} mt={{ base: "20px", md: "0" }} >
        <SearchBar onSearch={handleSearch} />
        <Box mb={4} minHeight="200px">
          <FilterPrecio selectedPrecios={selectedPrecios} onChangePrecios={handleFilterPrecios} />
          <FilterAmbiente selectedFilter={selectedFilter} onChange={handleFilterChange} />
        </Box>
        <Box mb={4} minHeight="200px">
        
          <FilterMedidas selectedMedidas={selectedMedidas} onChangeMedidas={handleFilterMedidas} />
        </Box>
        <Box mb={4} minHeight="200px">
        
          <FilterTono selectedTono={selectedTono} onChangeTono={handleFilterTono} />
        </Box>
        <Box mb={4} minHeight="200px">
          
          <FilterMaterial selectedMaterial={selectedMaterial} onChangeMaterial={handleFilterMaterial} />
        </Box>
      </Flex>
      {/* Productos */}
      <Flex direction="column" align="center" justify="center" width={{ base: "100%", md: "70%" }} padding="20px" border= "3px solid gray" bgGradient="linear-gradient(45deg, rgb(47, 38, 96) 0%, rgb(47, 38, 96) 1%,rgb(80, 63, 103) 1%, rgb(80, 63, 103) 53%,rgb(113, 87, 110) 53%, rgb(113, 87, 110) 57%,rgb(146, 112, 116) 57%, rgb(146, 112, 116) 69%,rgb(179, 136, 123) 69%, rgb(179, 136, 123) 75%,rgb(212, 161, 130) 75%, rgb(212, 161, 130) 100%)">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-8 gap-4">
          {/* Iterar sobre los productos */}
          {filteredProducts.map((product) => (
            <Box bgImage={`radial-gradient(circle at 29% 55%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 4%,transparent 4%, transparent 44%,transparent 44%, transparent 100%),radial-gradient(circle at 85% 89%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 51%,transparent 51%, transparent 52%,transparent 52%, transparent 100%),radial-gradient(circle at 6% 90%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 53%,transparent 53%, transparent 64%,transparent 64%, transparent 100%),radial-gradient(circle at 35% 75%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 6%,transparent 6%, transparent 98%,transparent 98%, transparent 100%),radial-gradient(circle at 56% 75%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 16%,transparent 16%, transparent 23%,transparent 23%, transparent 100%),radial-gradient(circle at 42% 0%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 3%,transparent 3%, transparent 26%,transparent 26%, transparent 100%),radial-gradient(circle at 29% 28%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 51%,transparent 51%, transparent 75%,transparent 75%, transparent 100%),radial-gradient(circle at 77% 21%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 35%,transparent 35%, transparent 55%,transparent 55%, transparent 100%),radial-gradient(circle at 65% 91%, hsla(329,0%,99%,0.05) 0%, hsla(329,0%,99%,0.05) 46%,transparent 46%, transparent 76%,transparent 76%, transparent 100%),linear-gradient(45deg, rgb(83, 91, 235),rgb(76, 11, 174))`} bgSize="100% 100%" className="card shadow-xl w-50" key={product.id}>
              <figure>
                <img src={product.img} alt={product.name} style={{ width: '100%', height: 'auto' }} />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="text-gray-600">Price: ${product.precio}</p>
                <div className="card-actions justify-end">
                  <Button mt="4" variant="unstyled" border="none" height="2em" borderRadius="3em" display="flex" justifyContent="center" alignItems="center" gap="12px" bg="#1C1A1C" color="#AAAAAA" fontWeight="600" fontSize="medium" cursor="pointer" w="full" transition="background 450ms ease-in-out"
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
                    onClick={toggleDetail}>
                    <CardsDetail product={product} />
                  </Button>
                </div>
              </div>
            </Box>
          ))}
        </div>
      </Flex>
    </Flex>
  </Flex>
);
};

export default Cart;