import Cart from '@/components/Cart/Cart'
import Footer from '@/components/Footer/Footer'
import Navbar from '@/components/NavBar/Navbar'

import React from 'react'

function allProducts() {
  return (
    <div>
      <Navbar/>
      <Cart/>
      <Footer/>
    </div>
  )
}

export default allProducts
