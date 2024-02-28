import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import Landing from '@/components/Landing/Landing';

import Carousel from '../components/Carousel/Carousel';
import Navbar from '@/components/NavBar/Navbar';
import Footer from '@/components/Footer/Footer';
import Cards from '@/components/Cards/Cards';
import Marcas from '@/components/Marcas/Marcas';

import Loader from '@/components/Loader/Loader';
import ScrollingMenu from '@/components/ScrollingMenu/ScrollingMenu';
import Carousel2 from '@/components/Carousel2/Carousel2'
const inter = Inter({ subsets: ['latin'] });

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
    <div>
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <Carousel2></Carousel2>
          <Landing />
          <Carousel />
          <Cards />
          <ScrollingMenu/>
          <Footer />
        </>
      )}
    </div>
  );
}
