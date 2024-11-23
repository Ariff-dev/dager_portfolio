import React from 'react'
import {
  Instagram,
  Tiktok,
  Github,
  Twitter,
  Spotify,
  Youtube,
  Discord,
  Tv,
} from 'iconoir-react'

const socialMedia = [
  {
    id: 1,
    name: 'Instagram',
    url: 'https://instagram.com/dager.32',
    icon: <Instagram />,
  },

  {
    id: 4,
    name: 'Discord',
    url: 'https://discord.gg/4NFk6TamAB',
    icon: <Discord />,
  },
  {
    id: 5,
    name: 'GitHub',
    url: 'https://github.com/MarianoVilla',
    icon: <Github />,
  },
]

const SocialLinks = () => {
  return (
    <div className='flex space-x-4'>
      {socialMedia.map((item) => (
        <a
          key={item.id}
          href={item.url}
          target='_blank'
          rel='noopener noreferrer'
          className='flex p-1 lg:text-custom-purple-text-gradient-secondary lg:hover:text-gray-400 border-4 lg:p-4 rounded-full border-custom-purple-text-gradient'
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
