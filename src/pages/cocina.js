import Cocina from '@/components/Ambiente/Cocina'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'
import Head from 'next/head'
function cocina() {
  return (
    <div>
            <Head>
        <title>Cocina - Ambientaciones - Ceramicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
        <Navbar/>
      <Cocina/>
      <Footer/>
    </div>
  )
}

export default cocina
