import React from 'react'
import {
  DotnetcoreOriginal,
  JavaOriginal,
  MysqlOriginal,
  SwiftOriginal,
} from 'devicons-react'

const techStack = [
  {
    id: 1,
    name: '.NET',
    icon: <DotnetcoreOriginal size={42} className='text-white ' />, // Usa el ícono correspondiente si tienes uno en tu proyecto
  },
  {
    id: 2,
    name: 'Java',
    icon: <JavaOriginal size={42} className='text-white' />, // Reemplaza con el ícono adecuado
  },
  {
    id: 3,
    name: 'MySQL',
    icon: <MysqlOriginal size={42} className='text-white' />, // Asegúrate de tener un ícono para bases de datos
  },

  {
    id: 5,
    name: 'Swift',
    icon: <SwiftOriginal size={42} className='text-white' />, // Usa el ícono de Swift si lo tienes
  },
]

export const LanguajesCarrousel = () => {
  return (
    <div className='flex  gap-5 mb-5 '>
      {techStack.map((tech) => (
        <div key={tech.id} className='text-white'>
          {tech.icon}
        </div>
      ))}
    </div>
  )
}
