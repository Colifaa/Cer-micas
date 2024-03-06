import React, { useState, useEffect } from 'react';
import Landing from '@/components/Landing/Landing';
import Carousel from '../components/Carousel/Carousel';
import Navbar from '@/components/NavBar/Navbar';
import Footer from '@/components/Footer/Footer';
import Cards from '@/components/Cards/Cards';
import LayoutGridDemo from '../components/Layout/Layout';

import Carousel2 from '@/components/Carousel2/Carousel2'


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
          <Navbar />
          <Carousel2/>
          <Landing />
          <Carousel />
          <Cards />
          
          <LayoutGridDemo/>
          


          <Footer />
        </>
      )}

