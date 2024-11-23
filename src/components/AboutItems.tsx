import React, { useState } from 'react'

const aboutItems = [
  {
    id: 1,
    title: 'Gatos',
    description:
      'Me gustan los gatos porque, al igual que el software bien diseñado, son elegantes, curiosos y siempre encuentran soluciones creativas para cualquier situación. Su capacidad para adaptarse y explorar me recuerda la importancia de ser flexible y buscar nuevas perspectivas al resolver problemas de programación.',
    icon: 'CAT',
  },
  {
    id: 2,
    title: 'Programación',
    description:
      'La programación es más que solo escribir código; se trata de resolver problemas y dar vida a ideas. Para mí, es como construir algo desde cero, donde cada línea contribuye a crear algo funcional y significativo.',
    icon: 'Guitar',
  },
  {
    id: 3,
    title: 'Guitarra',
    description:
      'La música y el desarrollo de software tienen más en común de lo que parece. Tocar la guitarra me ha enseñado a ser constante, creativo y a prestar atención a los detalles, cualidades que también aplico en la programación.',
    icon: 'Code',
  },
  {
    id: 4,
    title: 'Filosofía',
    description:
      'La reflexión constante sobre ética, lógica y toma de decisiones me ayuda a crear soluciones más equilibradas, eficientes y éticas en mis proyectos.',
    icon: 'Code',
  },
]

export const AboutItems = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

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
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className='text-2xl lg:text-3xl  font-bold lg:w-1/4'>
            {item.title}
          </div>
          <div className='lg:w-3/4 text-xl'>{item.description}</div>
        </div>
      ))}
    </div>
  )
}
