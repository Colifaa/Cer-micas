
import Living from '@/components/Ambiente/Living'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'
import Head from 'next/head'
function living() {
  return (
    <div>
                  <Head>
        <title>Living - Ambientaciones - Cerámicas San Rafael Mendoza Argentina - Porcelanato, pisos y revestimientos</title>
      </Head>
        <Navbar/>
      <Living/>
      <Footer/>
    </div>
  )
}

export default living
