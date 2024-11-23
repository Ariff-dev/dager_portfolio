import React, { useState, useEffect } from 'react'
import { ArrowRight, MenuScale, Xmark } from 'iconoir-react'
import Logo from '../assets/logo.png'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Array de objetos para las secciones
  const navLinks = [
    { id: 'about', label: 'Sobre Mi' },
    { id: 'portfolio', label: 'Portafolio' },
    { id: 'experience', label: 'Carrera' },

    { id: 'gallery', label: 'Galeria' },

    { id: 'contact', label: 'Contacto' },
  ]

  // Maneja el bloqueo del scroll en el body cuando el menú está abierto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden' // Bloquea el scroll
    } else {
      document.body.style.overflow = '' // Restaura el scroll
    }

    return () => {
      document.body.style.overflow = '' // Asegura que el scroll esté habilitado cuando se desmonte el componente
    }
  }, [isMenuOpen])

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  return (
    <nav className='flex justify-between xl:static p-4 container'>
      <div className='flex flex-col gap-2'>
        <img src={Logo} alt='logo' width={32} height={32} className='lg:w-10' />
      </div>
      <div className='lg:hidden'>
        {/* Icono de menú */}
        <MenuScale
          fontSize={24}
          className={`text-white ${isMenuOpen ? 'hidden' : ''}`}
          onClick={handleMenuToggle}
        />
      </div>

      {/* Fondo y menú cuando está abierto */}
      {isMenuOpen && (
        <>
          <div
            className='fixed inset-0 bg-complementary-radial opacity-90 z-10'
            onClick={handleMenuToggle}
          ></div>
          <div className='fixed top-0 right-0 w-1/2 h-full bg-black z-20 flex flex-col items-center justify-center'>
            <Xmark
              fontSize={32}
              className='text-white absolute top-4 left-4 cursor-pointer'
              onClick={handleMenuToggle}
            />
            <ul className='flex flex-col items-center gap-6'>
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    className='text-white text-lg md:text-xl lg:text-2xl font-bold hover:text-custom-purple-text-gradient transition'
                    onClick={handleMenuToggle}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}

      {/* Menú de navegación en pantallas grandes */}
      <div className={`lg:flex ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className='flex flex-col lg:flex-row gap-6'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                href={`#${link.id}`}
                className='text-white text-sm lg:text-xl xl:text-2xl font-bold hover:text-custom-purple-text-gradient transition'
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
