

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import ScrollingMenu from '@/components/ScrollingMenu/ScrollingMenu'
import React from 'react'
import Head from 'next/head'

export default function Ambientes() {
  return (
    <div> 
      <Head>
        <title>Ambientaciones - Ceramicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos </title>
      </Head>
      <Navbar/>
      <ScrollingMenu/>
      <Footer/>

  </div>
  )
}
