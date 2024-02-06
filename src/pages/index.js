import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '@/components/Landing/Landing'
import Cards from '@/components/Cards/Cards'
import NavBar from '@/components/NavBar/Navbar'
import Prueba from '@/components/Prueba/Prueba'
import Carousel from '../components/Carousel/Carousel'
import Footer from '@/components/Footer/Footer'
import Marcas from '@/components/Marcas/Marcas'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
  
  <NavBar/>
  <Landing/>
  <Carousel/>
  <Cards/>
  <Marcas/>
  <Footer/>
  </div>
  )
}
