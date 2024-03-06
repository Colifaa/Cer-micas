import React, { useState, useEffect } from 'react';
import Landing from '@/components/Landing/Landing';
import Carousel from '../components/Carousel/Carousel';

import Footer from '@/components/Footer/Footer';
import Cards from '@/components/Cards/Cards';


import Carousel2 from '@/components/Carousel2/Carousel2'


export default function Home() {

  return (

        <>
     
          <Carousel2/>
          <Landing />
          <Carousel />
          <Cards />
          
      
          


          <Footer />
        </>
      )}

