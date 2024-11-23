import React from 'react'

import GA1 from '../assets/images/ga-1.png'
import GA2 from '../assets/images/ga-2.jpg'
import GA3 from '../assets/images/ga-3.jpg'
import GA4 from '../assets/images/ga-4.jpg'
import GA5 from '../assets/images/ga-5.jpg'
import GA6 from '../assets/images/ga-6.jpg'
import GA7 from '../assets/images/ga-7.webp'

// URLs de las imágenes de pepinos
const cucumberImages = [
  'https://www.gob.mx/cms/uploads/article/main_image/103613/PEPINO.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTxSkwgLmuPlZe4qtywP6Du3-1YYa1dCEMzpQ&s',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXvQA_TjMjdVgX9i0CNFvsCf0T0dsyHEmm8g&s',
]

const FunSection = () => {
  // Combina las dos listas de imágenes de forma intercalada
  const images = []

  const minLength = Math.min(cucumberImages.length, 7)
  for (let i = 0; i < minLength; i++) {
    images.push(cucumberImages[i]) // Añade imagen de pepino
    images.push([GA1, GA2, GA3, GA4, GA5, GA6, GA7][i]) // Añade imagen GA*
  }

  // Si una lista es más larga, añadir el resto de las imágenes
  if (cucumberImages.length > 7) {
    images.push(...cucumberImages.slice(7))
  }
  if (7 > cucumberImages.length) {
    images.push(
      ...[GA1, GA2, GA3, GA4, GA5, GA6, GA7].slice(cucumberImages.length)
    )
  }

  return (
    <section className='bg-complementary-radial py-12'>
      <div className='container mx-auto px-4'>
        {/* Título con gradiente usando los colores del tema */}
        <h2 className='text-4xl lg:text-5xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary'>
          Aqui Tenemos Pepinos, Yo y el LumbreJack
        </h2>

        {/* Texto debajo del título, usando los colores de texto */}
        <p className='text-center px-4 text-lg lg:text-2xl mb-8 text-white'>
          Conocemé un poco más de mi,de manera visual sobre mi gusto desmedido
          sobre los pepinos, el Lol y al parecer tomar agua
        </p>

        {/* Contenedor principal con flexbox para que se acomode bien */}
        <div className='flex flex-col lg:flex-row gap-8'>
          {/* Galería con diseño dinámico */}
          <div className='flex-1'>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
              {images.map((image, index) => {
                // Alternamos el tamaño de las imágenes (2 de cada 4 son anchas)
                const isWide = index % 4 === 0 || index % 4 === 1 // Para 2 anchas y 2 normales

                return (
                  <div
                    key={index}
                    className={`overflow-hidden rounded-lg ${
                      isWide ? 'col-span-2' : ''
                    }`}
                  >
                    <img
                      className='w-full h-full object-cover hover:scale-105 transition-transform duration-300'
                      src={image}
                      alt={`Imagen de la Galería ${index + 1}`}
                    />
                  </div>
                )
              })}
            </div>
          </div>

          {/* Iframe del juego */}
          <div className='flex-1 flex flex-col items-center justify-center lg:justify-start'>
            <iframe
              title='Juego Lumber Jack'
              src='https://tbot.xyz/lumber/'
              className='w-full lg:w-11/12 h-full min-h-[500px] rounded-lg border-2 border-gray-200 shadow-lg'
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FunSection
