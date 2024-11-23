import React from 'react'

const workExperience = [
  {
    id: 1,
    company: 'University of Nebraska-Lincoln',
    role: 'Desarrollador Principal (2020 - Actualidad)',
    responsibilities: [
      'Desarrollo Full-stack utilizando .NET Core, Java, MySQL y AWS.',
      'Liderar equipos de desarrollo con orientación técnica.',
      'Consultoría en diseño de sistemas.',
    ],
    achievements:
      'Desarrollé y lideré proyectos con éxito en un entorno completamente remoto e internacional.',
  },
  {
    id: 2,
    company: 'Grupo Alpha 2000',
    role: 'Desarrollador de Software (2018 - Actualidad)',
    responsibilities: [
      'Especializado en tecnologías .NET, incluyendo ASP.NET/Core, APIs RESTful, Xamarin y microservicios.',
      'Entregué soluciones eficientes y robustas para diversas aplicaciones.',
    ],
  },
  {
    id: 4,
    company: 'Atento',
    role: 'Técnico de Soporte (2017 - 2018)',
    responsibilities: [
      'Resolución de problemas técnicos (VoIP, redes, configuraciones de routers) para una de las empresas de telecomunicaciones más grandes de Argentina.',
    ],
  },
  {
    id: 3,
    company: 'Desarrollador de Software Freelance',
    role: 'Duración: Desde 2016',
    responsibilities: [
      'Desarrollo de software Full-stack adaptado a las necesidades de los clientes.',
      'Consultoría en IT enfocada en la optimización de procesos y automatización.',
    ],
  },
]

const WorkExperience = () => {
  return (
    <div className='container flex flex-col gap-4 lg:gap-8 lg:w-1/2'>
      <div className='flex flex-col gap-2 '>
        <h3 className='text-4xl lg:text-6xl font-bold text-center bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
          Experiencia Laboral
        </h3>
      </div>
      <div>
        <div className='flex flex-col gap-4 lg:gap-8 text-white px-4 lg:px-0'>
          {workExperience.map((item) => (
            <div className=' bg-custom-radial flex flex-col justify-center p-2 lg:p-8 rounded-md lg:min-h-[212px]'>
              <p className='lg:text-xl font-bold bg-gradient-to-r from-custom-purple-text-gradient-secondary to-white bg-clip-text text-transparent'>
                {item.role}
              </p>
              <p className='font-bold text-xl lg:text-3xl'>{item.company}</p>
              <p className='lg:text-lg'>{item.responsibilities}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WorkExperience
