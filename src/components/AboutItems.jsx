import React, { useState, useEffect } from 'react'

const aboutItems = [
  {
    id: 1,
    title: 'Gatos',
    description:
      'Los gatos son básicamente desarrolladores junior: curiosos, caóticos y siempre buscando formas creativas de romper cosas (como tus jarrones). Pero, también son elegantes y relajados, recordándome que en la vida, al igual que en el desarrollo, siempre es importante tomarse un break.',
    icon: 'CAT',
  },
  {
    id: 2,
    title: 'Programación',
    description:
      'Programar no es solo teclear. Es una combinación de resolver misterios tipo "¿por qué no compila?", mantenerte zen mientras arreglas bugs y crear cosas increíbles que te hacen sentir como un dios... hasta que ves la documentación.',
    icon: 'Code',
  },
  {
    id: 3,
    title: 'Guitarra',
    description:
      'La guitarra me enseña paciencia: porque, honestamente, hacer un acorde complicado es igual de frustrante que arreglar un bug de CSS que solo aparece en Internet Explorer. Pero al final, todo vale la pena cuando suena bien o cuando tu código por fin corre.',
    icon: 'Guitar',
  },
  {
    id: 4,
    title: 'Filosofía',
    description:
      'Filosofar mientras haces pull requests es esencial. Reflexionar sobre la ética del código o si "console.log" en producción es moralmente aceptable. La filosofía me recuerda que incluso en el caos de los sprints, necesitamos pensar antes de actuar.',
    icon: 'ThoughtBubble',
  },
]
export const AboutItems = () => {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  // Detectar si el dispositivo es táctil
  useEffect(() => {
    const checkTouchDevice = () => {
      setIsTouchDevice(window.matchMedia('(pointer: coarse)').matches)
    }
    checkTouchDevice()
    window.addEventListener('resize', checkTouchDevice)
    return () => {
      window.removeEventListener('resize', checkTouchDevice)
    }
  }, [])

  const handleItemClick = (id) => {
    if (isTouchDevice) {
      // Alternar el estado del item seleccionado en dispositivos táctiles
      setHoveredItem((prev) => (prev === id ? null : id))
    }
  }

  return (
    <div className='flex flex-col gap-4 px-4'>
      {aboutItems.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col lg:flex-row justify-center lg:items-center gap-2 p-4 lg:p-8 rounded-md transition-all duration-300 ease-in-out min-h-[324px] lg:min-h-[176px] ${
            hoveredItem === item.id
              ? 'bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary'
              : 'bg-custom-radial'
          }`}
          onMouseEnter={() => !isTouchDevice && setHoveredItem(item.id)} // Solo en dispositivos no táctiles
          onMouseLeave={() => !isTouchDevice && setHoveredItem(null)} // Solo en dispositivos no táctiles
          onClick={() => handleItemClick(item.id)} // Alternativa para dispositivos táctiles
        >
          <div className='text-2xl lg:text-3xl font-bold lg:w-1/4'>
            {item.title}
          </div>
          <div className='lg:w-3/4 text-xl'>{item.description}</div>
        </div>
      ))}
    </div>
  )
}
