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
    id: 3,
    name: 'YouTube Live Clips',
    url: 'https://youtube.com/@DagerLive',
    icon: <Youtube />,
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
  {
    id: 6,
    name: 'YouTube Music',
    url: 'https://youtube.com/c/DagerMusic',
    icon: <Youtube />,
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
          className='text-custom-purple-text-gradient-secondary hover:text-gray-400 border-4 p-4 rounded-full border-custom-purple-text-gradient'
        >
          {item.icon}
        </a>
      ))}
    </div>
  )
}

export default SocialLinks
