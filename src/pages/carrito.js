import AddCart from '@/components/Cart/AddCart'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'
import React from 'react'

function carrito() {
  return (
    <div>
      <Navbar/>
      <AddCart/>
      <Footer/>
    </div>
  )
}

export default carrito
