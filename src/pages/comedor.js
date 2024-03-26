import Comedor from '@/components/Ambiente/Comedor'

import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'

function comedor() {
  return (
    <div>
        <Navbar/>
      <Comedor/>
      <Footer/>
    </div>
  )
}

export default comedor
