import Image from 'next/image'
import { Inter } from 'next/font/google'
import Landing from '@/components/Landing/Landing'
import Prueba from '@/components/Prueba/Prueba'
import Carousel from '../components/Carousel/Carousel'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div> 
  

  <Landing/>
  <Carousel/>

 

  </div>
  )
}
