import AddCart from '@/components/Cart/AddCart'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'
import Head from 'next/head'
function carrito() {
  return (
    <div>
            <Head>
        <title>Carrito - Ceramicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
      <Navbar/>
      <AddCart/>
      <Footer/>
    </div>
  )
}

export default carrito
