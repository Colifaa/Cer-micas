
import React from 'react'
import About from '@/components/About/About'
import Nuevo from '@/components/Nuevo/Nuevo'
import Navbar from '@/components/NavBar/Navbar'
import Footer from '@/components/Footer/Footer'
import Head from 'next/head'

export default function Nosotros() {
  return (
    <div> 
                  <Head>
        <title>Nuestra empresa - Cerámicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
      <Navbar/>
      <About/>
      <Footer/>
  </div>
  )
}
