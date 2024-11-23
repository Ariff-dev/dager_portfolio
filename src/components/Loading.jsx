import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import imagen1 from '../assets/images/dager1.jpg'
import imagen2 from '../assets/images/dager2.jpg'
import imagen3 from '../assets/images/dager3.jpg'

const Loading = ({ setLoadingComplete }) => {
  const [currentImage, setCurrentImage] = useState(0)
  const [isVisible, setIsVisible] = useState(true) // Controla la visibilidad del componente
  const images = [imagen1, imagen2, imagen3]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length)
    }, 800) // Cambia la imagen cada 800ms

    return () => clearInterval(interval)
  }, [images.length])

  useEffect(() => {
    // Simula la finalización del loading después de 3 segundos
    const timer = setTimeout(() => {
      setIsVisible(false) // Activa la animación de salida
      setTimeout(() => {
        setLoadingComplete(true) // Marca el loading como completo después de la animación
      }, 1200) // Tiempo de la animación de salida
    }, 3000)
    return () => clearTimeout(timer)
  }, [setLoadingComplete])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1, scale: 1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{
            opacity: 0,
            scale: 0.9,
            backgroundImage:
              'radial-gradient(circle, rgba(21,12,34,1) 39%, rgba(35,20,54,1) 100%)',
          }} // Gradiente radial al salir
          transition={{ duration: 1.2, ease: 'easeInOut' }} // Animación suave
          className='fixed inset-0 bg-black flex flex-col items-center justify-center z-50'
          style={{
            backgroundImage:
              'radial-gradient(circle, rgba(0,0,0,1) 39%, rgba(35,20,54,1) 100%)',
          }}
        >
          {/* Imagen animada */}
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt={`Dager ${currentImage + 1}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.5 }}
            className='w-64 h-64 object-cover rounded-full shadow-lg border-4 border-[#5A189A]'
          />

          {/* Spinner */}
          <div role='status' className='mt-6'>
            <svg
              aria-hidden='true'
              className='w-10 h-10 text-gray-200 animate-spin dark:text-gray-600 fill-[#5A189A]'
              viewBox='0 0 100 101'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z'
                fill='currentColor'
              />
              <path
                d='M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z'
                fill='currentFill'
              />
            </svg>
            <span className='sr-only'>Loading...</span>
          </div>

          {/* Texto de loading */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className='text-white text-lg mt-4'
          >
            Cargando...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Loading
