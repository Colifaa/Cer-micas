import React, { useState, useEffect } from 'react';
import  supabase  from '../../lib/supabaseClient'; // Suponiendo que tienes una instancia de Supabase configurada en 'supabaseClient.js'
import CreateProduct from '@/components/CreateProduct/CreateProduct';
import Head from 'next/head'
function create() {
    const [user, setUser] = useState(null);

   
  
    useEffect(() => {
      // Función asincrónica para obtener los datos del usuario
      const fetchUserData = async () => {
        try {
          // Obtiene los datos del usuario actual
          const { data: userData, error } = await supabase.auth.getUser();
  
          if (error) {
            throw error;
          }
  
          // Actualiza el estado con los datos del usuario
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      };
  
      // Llama a la función para obtener los datos del usuario al montar el componente
      fetchUserData();
    }, []); // Se ejecutará solo una vez al montar el componente
  
    return (
        <div>
                <Head>
        <title>Creador - Ceramicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
        {user ? (
      <CreateProduct/>
        ) : (
          <p>Cargando...</p>
        )}
      </div>
    );
  }
  
  export default create;
