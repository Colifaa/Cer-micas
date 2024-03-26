import React, { useEffect, useState } from 'react';
import supabase from "../../../lib/supabaseClient";

import { useRouter } from 'next/router';
import FilterAmbiente from '../Filters/FilterAmbiente';
import FilterMedidas from '../Filters/FilterMedidas';
import FilterTono from '../Filters/FilterTono';
import FilterMaterial from '../Filters/FilterMaterial';
import FilterPrecio from '../Filters/FilterPrecio';
import SearchBar from '../SearchBar/SearchBar';

import CardsDetail from '../CardsDetail/CardsDetail'
import { Button } from '@chakra-ui/react';
const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [showAlert, setShowAlert] = useState(null);
  const [user, setUser] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [selectedTono, setSelectedTono] = useState([]);
  const [selectedMedidas, setSelectedMedidas] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedPrecios, setSelectedPrecios] = useState([]);

  const loadProducts = async () => {
    const { data, error } = await supabase.from('products').select('*');
    if (error) {
      console.error('Error fetching products:', error.message);
      return;
    }
    setProducts(data);
    setFilteredProducts(data);
  };



  const handleShowAllProducts = () => {
    setFilteredProducts(products);
    setSelectedFilter('all');
    setSelectedMedidas([]);
    setSelectedTono([]);
    setSelectedMaterial([]);
    setSelectedPrecios([]);
  };


 const handleFilterChange = async (filter) => {
  if (filter === 'all') {
    // Si se selecciona "todos los productos", restablecer los filtros
    setSelectedFilter('all');
    setSelectedMedidas([]);
    setSelectedTono([]);
    setSelectedMaterial(null);
    setSelectedPrecios(null);
    filterProducts(null, [], [], null, null, products); // Pasar todos los productos sin filtrar
  } else {
    setSelectedFilter(filter); // Actualizar el estado del filtro seleccionado
    filterProducts(filter, selectedMedidas, selectedTono, selectedMaterial, selectedPrecios, products); // Aplicar los filtros seleccionados
  }
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
    filterProducts(selectedFilter, selectedMedidas, selectedTono, selectedMaterial, filter);
  };
  
  const filterProducts = async (ambientacionFilter, medidasFilter, tonoFilter, materialFilter, preciosFilter, searchData) => {
    let filteredData = searchData ? [...searchData] : [...products];
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
      filteredData.sort((a, b) => a.precio - b.precio);
    } else if (preciosFilter === 'mayor-menor') {
      filteredData.sort((a, b) => b.precio - a.precio);
    }
    setFilteredProducts(filteredData);
  };

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

  const getUserInfo = async () => {
    const user = await supabase.auth.getUser();
    setUser(user);
  };

  useEffect(() => {
    loadProducts();
    loadCart();
    getUserInfo();
  }, []);

  const router = useRouter();

  const handleClick = () => {
    if (!user.data?.user?.id) {
      setShowAlert(true);
    } else {
      router.push('/carrito');
    }
  };

  const handleCloseAlert = () => {
    setShowAlert(false);
  };

  const handleSearch = async (searchTerm) => {
    if (searchTerm === '') {
      setFilteredProducts(products);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filteredData = filteredProducts.filter(product => {
      const productNameLower = product.name.toLowerCase();
      return productNameLower.includes(searchTermLower);
    });
    setFilteredProducts(filteredData);
  };


  return (
    <div className="flex justify-center">
      <div className="flex flex-col md:flex-row w-full">
        <div className="bg-white flex flex-col w-full md:w-1/3 p-4 md:mb-20 md:mt-4 min-h-screen">
          <SearchBar onSearch={handleSearch} />
          <div className="mb-4 min-h-200">
            <FilterPrecio selectedPrecios={selectedPrecios} onChangePrecios={handleFilterPrecios} />
            <FilterAmbiente selectedFilter={selectedFilter} onChange={handleFilterChange} />
          </div>
          <div className="mb-4 min-h-200">
            <FilterMedidas selectedMedidas={selectedMedidas} onChangeMedidas={handleFilterMedidas} />
          </div>
          <div className="mb-4 min-h-200">
            <FilterTono selectedTono={selectedTono} onChangeTono={handleFilterTono} />
          </div>
          <div className="mb-4 min-h-200">
            <FilterMaterial selectedMaterial={selectedMaterial} onChangeMaterial={handleFilterMaterial} />
            <Button onClick={handleShowAllProducts}>Todos los productos</Button>
          </div>
        </div>
        <div className="flex flex-col items-center w-full md:w-2/3 p-4 border-3 border-gray-300 bg-gradient-to-br from-orange-1 via-orange-1 to-orange-1 min-h-screen">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {filteredProducts.map((product) => (
              <div className="bg-white bg-cover shadow-xl w-50" key={product.id}>
                <figure>
                  <img src={product.img} alt={product.name} className="w-full h-auto" />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{product.name}</h2>
                  <p className="text-gray-600">{product.medidas}</p>
                  <div className="card-actions justify-end">
                    {/* Aquí renderizamos los detalles directamente */}
                    <CardsDetail product={product} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
