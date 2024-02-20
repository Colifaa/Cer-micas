import React, { useEffect, useState } from 'react'; // Importa useEffect y useState de una sola vez
import Card from '../components/Card/Card'; // Si tienes un componente para mostrar cada producto
import { createClient } from '@supabase/supabase-js';
import Navbar from '@/components/NavBar/Navbar';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_ANON_KEY;

const supabase = createClient(supabaseUrl, supabaseKey);

const AllProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {

      const { data, error } = await supabase.from('products').select('*');
      if (error) {
        console.error('Error fetching products:', error.message);
      } else {
        setProducts(data);
      }
    };

    fetchProducts();
  }, []);

  // Función para filtrar productos
  const filterProducts = () => {
    // Lógica para aplicar filtros
    // Puedes utilizar métodos de filtrado de arrays como filter()
    // Ejemplo:
    // const filteredProducts = products.filter(product => product.type === filters.type && product.price <= parseInt(filters.priceRange));

    // Por ahora, devolvemos todos los productos sin filtrar
    return products;
  };

  return (
    <div>
        <Navbar/>
      {/* Aquí irían los filtros y otros componentes de la interfaz de usuario */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filterProducts().map(product => (
          <Card key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default AllProducts;