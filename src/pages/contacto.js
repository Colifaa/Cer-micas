import { Inter } from 'next/font/google'
import Landing from '@/components/Landing/Landing'
import Navbar from '@/components/NavBar/Navbar'
import About from '@/components/About/About'
import Nuevo from '@/components/Nuevo/Nuevo'
const inter = Inter({ subsets: ['latin'] })

export default function Contacto() {
  return (
    <div> 
      <Navbar/>

      <About/>
  </div>
  )
}
