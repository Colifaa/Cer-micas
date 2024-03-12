import React, { useState, useEffect } from 'react';
import Landing from '@/components/Landing/Landing';

import Footer from '@/components/Footer/Footer';
import Cards from '@/components/Cards/Cards';
import Layout from '@/components/Layout/Layout';
import Carousel from '@/components/Carousel/Carousel';
import Navbar from '@/components/NavBar/Navbar';
import CarouselPri from '@/components/CarouselPri/CarouselPri';
import Marcas from '@/components/Marcas/Marcas';






export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulación de carga (elimina esto y establece setLoading(false) cuando hayas terminado de cargar tus datos)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Simula una carga de 3 segundos, ajusta según necesites

    return () => clearTimeout(timer);
  }, []);
  const images = [
    "/images/carro1.png",
    "/images/carro2.png",
    "/images/carro1.png",
   
  ]

  return (

        <>
       
          <Navbar/>
          <CarouselPri images={images} autoSlide={true} autoSlideInterval={3000} />
          <Landing />
          <Carousel/>
          <Cards />
          <Layout/>
          <Marcas/>
          <Footer />
        </>
      )}

