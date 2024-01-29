import React, { useEffect, useState } from 'react';
import NavBar from '@/components/NavBar';
import { supabase } from '../../lib/supabaseClient'; // Ajusta la ruta según tu estructura de directorios

const fetchDataFromSupabase = async () => {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Error al obtener datos de Supabase:', error);
    return [];
  } else {
    console.log('Datos de Supabase:', data);
    return data;
  }
};

function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchDataFromSupabase();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
    <div>
      <NavBar />

      <h1>Productos</h1>

      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>ID: {product.id}</p>
            <img src={product.img} alt={product.name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
