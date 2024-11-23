import React from 'react'

const myEducation = [
  {
    id: 1,
    institution: 'University of Nebraska-Lincoln',
    program: 'Ingeniería de Sistemas',
    status: 'Actualmente Inscrito',
  },
  {
    id: 2,
    institution: 'Instituto Raúl Scalabrini Ortiz',
    program: 'Analista de Sistemas de Información',
    period: '2018 - 2022',
  },
  {
    id: 3,
    institution: 'Universidad de Buenos Aires',
    program: 'Licenciatura en Filosofía',
    period: '2016 - 2024',
  },
]

const MyEducation = () => {
  return (
    <div className='container flex flex-col gap-4 lg:gap-8 lg:w-1/2'>
      <div className='flex flex-col gap-2 '>
        <h3 className='text-4xl lg:text-6xl font-bold text-center bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
          Mi Educación
        </h3>
      </div>
      <div>
        <div className='flex flex-col gap-4 lg:gap-8 text-white px-4 lg:px-0'>
          {myEducation.map((edu) => (
            <div
              key={edu.id}
              className='bg-custom-radial p-2 lg:p-8 rounded-md  h-[140px] lg:h-[212px] flex flex-col justify-center items-center lg:items-start'
            >
              <p className='font-bold text-xl lg:text-3xl'>{edu.institution}</p>
              <p className='font-bold bg-gradient-to-r lg:text-xl from-custom-purple-text-gradient-secondary to-white bg-clip-text text-transparent'>
                {edu.program}
              </p>
              {edu.period && (
                <p className='text-white lg:text-lg'>Periodo: {edu.period}</p>
              )}
              {edu.status && (
                <p className='text-green-400 lg:text-lg'>
                  Estado: {edu.status}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyEducation
