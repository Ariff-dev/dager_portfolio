import React from 'react'

// Array de enlaces
const links = [
  { id: 'about', label: 'Sobre Mi' },
  { id: 'portfolio', label: 'Portafolio' },
  { id: 'experience', label: 'Carrera' },
  { id: 'gallery', label: 'Galeria' },
  { id: 'contact', label: 'Contacto' },
]

// Redes sociales
const socialLinks = [
  { href: 'https://twitter.com/DotDager', label: 'Twitter' },
  { href: 'https://www.instagram.com/DotDager', label: 'Instagram' },
  { href: 'https://github.com/DotDager', label: 'GitHub' },
]

const Footer = () => {
  return (
    <footer className='bg-complementary-radial text-white py-8'>
      <div className='container mx-auto text-center'>
        {/* Título o nombre */}
        <h3 className='text-2xl font-bold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary'>
          Dot Dager
        </h3>

        {/* Enlaces de navegación */}
        <div className='mb-6'>
          <ul className='flex justify-center gap-6'>
            {links.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className='hover:text-custom-purple-text-gradient transition'
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Redes sociales */}
        <div className='mb-6'>
          <ul className='flex justify-center gap-6'>
            {socialLinks.map((social) => (
              <li key={social.href}>
                <a
                  href={social.href}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='hover:text-custom-purple-text-gradient transition'
                >
                  {social.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Mensaje final */}
        <p className='text-sm text-gray-200'>
          &copy; {new Date().getFullYear()} Dot Dager. Todos los derechos
          reservados.
        </p>
      </div>
    </footer>
  )
}

export default Footer
