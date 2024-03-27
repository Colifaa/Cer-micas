import React, { useEffect, useState } from 'react';
import supabase from "../../../lib/supabaseClient";
import { Heading } from "@chakra-ui/react";
import { useRouter } from 'next/router';
import FilterAmbiente from '../Filters/FilterAmbiente';
import FilterMedidas from '../Filters/FilterMedidas';
import FilterTono from '../Filters/FilterTono';
import FilterMaterial from '../Filters/FilterMaterial';
import FilterPrecio from '../Filters/FilterPrecio';
import SearchBar from '../SearchBar/SearchBar';
import CardsDetail from '../CardsDetail/CardsDetail';
import { Button } from '@chakra-ui/react';
import FilterUso from '../Filters/FilterUso';

const Cart = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [showDetail, setShowDetail] = useState(false);
  const [showAlert, setShowAlert] = useState(null);
  const [user, setUser] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedAmbiente, setSelectedAmbiente] = useState('all');
  const [selectedMedidas, setSelectedMedidas] = useState([]);
  const [selectedTono, setSelectedTono] = useState([]);
  const [selectedMaterial, setSelectedMaterial] = useState([]);
  const [selectedPrecios, setSelectedPrecios] = useState([]);
  const [sortedProducts, setSortedProducts] = useState(true);

  const loadProducts = async () => {
    const { data, error } = await supabase.from('products').select('*').order('id');
    if (error) {
      console.error('Error fetching products:', error.message);
      return;
    }
    setProducts(data);
    setFilteredProducts(data);
  };

  useEffect(() => {
    loadProducts();
  }, []);

  const handleShowAllProducts = () => {
    setFilteredProducts(products);
    setSelectedAmbiente('all');
    setSelectedMedidas([]);
    setSelectedTono([]);
    setSelectedMaterial([]);
    setSelectedPrecios([]);
    setSortedProducts(true);
  };

  const filterProducts = () => {
    let filteredData = [...products];

    if (selectedAmbiente !== 'all') {
      filteredData = filteredData.filter(product => product.ambientacion === selectedAmbiente);
    }
    if (selectedMedidas.length > 0) {
      filteredData = filteredData.filter(product => selectedMedidas.some(medida => product.medidas.includes(medida)));
    }
    if (selectedTono.length > 0) {
      filteredData = filteredData.filter(product => selectedTono.includes(product.tono));
    }
    if (selectedMaterial.length > 0) {
      filteredData = filteredData.filter(product => selectedMaterial.includes(product.material));
    }
    if (selectedPrecios === 'menor-mayor') {
      filteredData.sort((a, b) => a.precio - b.precio);
      setSortedProducts(false);
    } else if (selectedPrecios === 'mayor-menor') {
      filteredData.sort((a, b) => b.precio - a.precio);
      setSortedProducts(false);
    } else if (sortedProducts === false) {
      filteredData.sort((a, b) => a.id - b.id);
      setSortedProducts(true);
    }

    setFilteredProducts(filteredData);
  };

  useEffect(() => {
    filterProducts();
  }, [selectedAmbiente, selectedMedidas, selectedTono, selectedMaterial, selectedPrecios]);

  const handleSearch = async (searchTerm) => {
    if (searchTerm === '') {
      setFilteredProducts(products);
      return;
    }

    const searchTermLower = searchTerm.toLowerCase();
    const filteredData = products.filter(product => {
      const productNameLower = product.name.toLowerCase();
      return productNameLower.includes(searchTermLower);
    });
    setFilteredProducts(filteredData);
  };

  return (
    <Heading className='league-spartan-font'>
      <div className="flex justify-center">
        <div className="flex flex-col md:flex-row w-full">
          <div className="bg-gradient-to-br from-orange-1 via-white to-white flex flex-col w-full md:w-1/3 p-4 md:mb-20 md:mt-4 min-h-screen">
            <SearchBar onSearch={handleSearch} />
            <div className='mb-4 min-h-200 flex justify-center mt-5'>
              <Button onClick={handleShowAllProducts}>Reiniciar Filtros</Button>
            </div>
            <div className="mb-4 min-h-200">
              <FilterPrecio selectedPrecios={selectedPrecios} onChangePrecios={setSelectedPrecios} setSortedProducts={setSortedProducts} />
              <FilterAmbiente selectedAmbiente={selectedAmbiente} onChange={setSelectedAmbiente} />
            </div>
            <div className="mb-4 min-h-200">
              <FilterMedidas selectedMedidas={selectedMedidas} onChangeMedidas={setSelectedMedidas} />
            </div>
            <div className="mb-4 min-h-200">
              <FilterTono selectedTono={selectedTono} onChangeTono={setSelectedTono} />
            </div>
            <div className="mb-4 min-h-200">
              <FilterMaterial selectedMaterial={selectedMaterial} onChangeMaterial={setSelectedMaterial} />
            </div>
          </div>
          <div className={`flex flex-col items-center w-full md:w-2/3 p-4 border-3 border-gray-300 bg-gradient-to-br from-white via-white to-orange-1 min-h-screen`}>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {filteredProducts.map((product) => (
                <div
                  className={`bg-white bg-cover shadow-xl rounded-lg overflow-hidden border border-gray-300 w-full`}
                  key={product.id}
                  onClick={() => setShowDetail(product.id)}
                  onMouseEnter={(e) => {
                    e.currentTarget.classList.add('transform', 'scale-105');
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.classList.remove('transform', 'scale-105');
                  }}
                >
                  <figure>
                    <img src={product.img} alt={product.name} className="w-full h-auto" />
                  </figure>
                  <div className="card-body p-4">
                    <h2 className="text-lg  text-center">{product.name}</h2>
                    <p className="text-sm text-gray-600 text-center">{product.medidas}</p>
                    <div className="card-actions justify-end">
                      {showDetail === product.id && <CardsDetail product={product} />}
                    </div>
                  </div>
                </div>
          ))}
          </div>
        </div>
      </div>
    </div>
  </Heading>
);
};

export default Cart;