import Cart from '@/components/Cart/Cart'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import Head from 'next/head'
import React from 'react'

function allProducts() {
  return (
    <div>
      <Head>
    <title>Todos los productos: Ceramicas, Porcelanatos ...</title>
  </Head>
      <Navbar/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default allProducts
