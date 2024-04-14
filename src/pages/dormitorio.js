import Dormitorio from '@/components/Ambiente/Dormitorio'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'
import Head from 'next/head'
function dormitorio() {
  return (
    <div>
                  <Head>
        <title>Panel de Control - Ceramicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
        <Navbar/>
      <Dormitorio/>
      <Footer/>
    </div>
  )
}

export default dormitorio
