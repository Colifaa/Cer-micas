import Baño from '@/components/Ambiente/Baño'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'
import Head from 'next/head'
function baño() {
  return (
    <div>
      <Head>
        <title>Baño - Ambientaciones - Cerámicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
        <Navbar/>
      <Baño/>
      <Footer/>
    </div>
  )
}

export default baño
