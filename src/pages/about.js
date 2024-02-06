import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '@/components/Landing/Landing'
import Cards from '@/components/Cards/Cards'
import NavBar from '@/components/NavBar/Navbar'
import Prueba from '@/components/Prueba/Prueba'

const inter = Inter({ subsets: ['latin'] })

export default function About() {
  return (
    <div> 
   
   <Prueba/>
  
  <Landing/>
  

  <Cards/>
  </div>
  )
}
