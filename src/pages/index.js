import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '@/components/Landing/Landing'
import Prueba from '@/components/Prueba/Prueba'
import Carousel from '../components/Carousel/Carousel'
import Navbar from '@/components/NavBar/Navbar'
import Footer from '@/components/Footer/Footer'
import Cards from '@/components/Cards/Cards'
import Marcas from '@/components/Marcas/Marcas'
import CarroMarcas from '@/components/CarroMarcas'





const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
  
<Navbar/>

<Landing/>
<Carousel/>
<Cards/>
<CarroMarcas/>
<Marcas/>


<Footer/>
  </div>
  )
}