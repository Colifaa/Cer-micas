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
    "/images/1.png",
    "/images/2.png",   
  ];

  const images1 = [
    "/images/3.png",
    "/images/4.png",  
  ];

  return (
    <>
      <Navbar />
      <CarouselPri images={images} autoSlide={true} autoSlideInterval={5000} />
      <Landing />
      <Carousel images1={images1} autoSlide={true} autoSlideInterval={5000} />
      <Cards />
      <Layout />
      <Marcas />
      <Footer />
      <a
        href="https://wa.me/542604531120"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="whatsapp-icon"></div>
      </a>
      <style jsx>{`
        .whatsapp-float {
          position: fixed;
          width: 60px;
          height: 60px;
          bottom: 40px;
          right: 40px;
          border-radius: 50%;
        
          box-shadow: 2px 2px 3px #999; /* Sombra */
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .whatsapp-icon {
          width: 50px;
          height: 50px;
          background: url('/images/whatsapp.png') center center no-repeat; /* Imagen del botón */
          background-size: cover;
          border-radius: 50%;
        }
      `}</style>
    </>
  );
}