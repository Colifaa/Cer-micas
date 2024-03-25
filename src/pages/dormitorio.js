import Dormitorio from '@/components/Ambiente/Dormitorio'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'

function dormitorio() {
  return (
    <div>
        <Navbar/>
      <Dormitorio/>
      <Footer/>
    </div>
  )
}

export default dormitorio
