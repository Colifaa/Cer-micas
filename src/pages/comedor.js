import Comedor from '@/components/Ambiente/Comedor'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'
import Head from 'next/head'
function comedor() {
  return (
    <div>
            <Head>
        <title>Baño - Ambientaciones - Ceramicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
        <Navbar/>
      <Comedor/>
      <Footer/>
    </div>
  )
}

export default comedor
