
import Exterior from '@/components/Ambiente/Exterior'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'
import Head from 'next/head'
function exterior() {
  return (
    <div>
                  <Head>
        <title>Exterior - Ambientaciones - Cerámicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
        <Navbar/>
      <Exterior/>
      <Footer/>
    </div>
  )
}

export default exterior
