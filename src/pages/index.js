import React, { useState, useEffect } from 'react';
import Landing from '@/components/Landing/Landing';

import Footer from '@/components/Footer/Footer';
import Cards from '@/components/Cards/Cards';
import Layout from '@/components/Layout/Layout';
import Navbar from '@/components/NavBar/Navbar'





export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga (elimina esto y establece setLoading(false) cuando hayas terminado de cargar tus datos)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula una carga de 3 segundos, ajusta según necesites

    return () => clearTimeout(timer);
  }, []);

  return (

        <>
       
          <Navbar/>
          <Landing />
      
          <Cards />
          
          <Layout/>
          


          <Footer />
        </>
      )}

