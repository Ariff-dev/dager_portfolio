import React from 'react'

import DNS from '../assets/images/dns.gif'
import GIT from '../assets/images/git.gif'
import HTTP from '../assets/images/HTTP.gif'
import { Github } from 'iconoir-react'

const gitWork = [
  {
    id: 1,
    title: 'Git-In-CSharp',
    description:
      'En este repo vas a encontrar todo el código de la implementación de Git que hicimos de cero, usando C#.',
    image: <img src={GIT} alt='git' />,
    url: 'https://github.com/MarianoVilla/Git-In-CSharp',
  },
  {
    id: 2,
    title: 'DNS-Server',
    description:
      'En este repo vas a encontrar todo el código del server DNS que hicimos de cero, usando C#.',
    image: <img src={DNS} alt='git' />,
    url: 'https://github.com/MarianoVilla/DNS-Server',
  },
  {
    id: 2,
    title: 'HTTP-Server ',
    description:
      'En este repo vas a encontrar todo el código del server HTTP que hicimos de cero, usando C#.',
    image: <img src={HTTP} alt='git' />,
    url: 'https://github.com/MarianoVilla/HTTP-Server',
  },
]

export const Portfolio = () => {
  return (
    <div className='px-4 flex flex-col gap-4 items-center'>
      {gitWork.map((work) => (
        <div
          key={work.id}
          className='flex flex-col lg:flex-row justify-center items-center w-full   gap-2'
        >
          <div className='lg:w-1/2  '>
            <div className='flex gap-4'>
              <p className='font-bold text-xl lg:text-3xl'>{work.title}</p>
              <a href={work.url} className=''>
                <div className='border-4 border-custom-purple-text-gradient-secondary  flex justify-center rounded-full text-custom-purple-text-gradient-secondary'>
                  <Github className='text-2xl rounded-full ' />
                </div>
              </a>
            </div>
            <p className='text-base lg:text-2xl'>{work.description}</p>
          </div>
          <div className='lg:w-1/2'>{work.image}</div>
        </div>
      ))}
    </div>
  )
}
