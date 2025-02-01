import { Instagram } from 'lucide-react';
import { Facebook } from 'lucide-react';
import Link from "next/link";

const Footer = () => {
  return (
    <footer className='bg-navbar '>
      <div className="container py-5">
        <div className="flex justify-between items-center">
          <div className="py-2.5">
            <p className="text-white text-sm">Anime Online <span className='text-link'>- Ningún vídeo se encuentra alojado en nuestros servidores.</span></p>
            <nav className="px-2 font-bold leading-6 text-xs bg-inputDark text-white rounded-3xl inline-block">
              <Link href="/condiciones-de-uso" className="hover:underline mx-1.5 px-0.5">Términos y Condiciones</Link>
              <Link href="/politica-de-privacidad" className="hover:underline mx-1.5 px-0.5">Política de Privacidad</Link>
              <Link href="/sobre-animeflv" className="hover:underline mx-1.5 px-0.5">Sobre AnimeFLV</Link>
            </nav>
          </div>
          <ul className="flex gap-x-6">
            <li>
              <a href="#">
                <div className="bg-input hover:bg-inputDark p-3 rounded-full transition-colors">
                  <Instagram size={20} className='text-white' />
                </div>
              </a>
            </li>
            <li>
              <a href="#">
                <div className="bg-input hover:bg-inputDark p-3 rounded-full">
                  <Facebook size={20} className='text-white' />
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  )
}

export default Footer