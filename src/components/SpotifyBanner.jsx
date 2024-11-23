import React from 'react'

const SpotifyBanner = () => {
  return (
    <section className='bg-custom-radial py-8'>
      <div className='container mx-auto flex flex-col lg:flex-row items-center justify-center lg:gap-12 text-white'>
        {/* Texto con botón */}
        <div className='flex flex-col items-center lg:items-start text-center lg:text-left'>
          <h2 className='text-4xl lg:text-5xl font-bold mb-6 leading-tight'>
            Escucha <br />
            La Música de Dager
          </h2>
          <a
            href='https://open.spotify.com/artist/6bkClBMJd4qKxJp0J5vHsz'
            target='_blank'
            rel='noopener noreferrer'
            className='bg-gradient-to-r from-custom-purple-text-gradient-secondary to-custom-purple-text-gradient text-white font-medium py-3 px-6 rounded-md hover:opacity-90 transition'
          >
            Ir a Spotify
          </a>
        </div>

        {/* Spotify iframe */}
        <div className='mt-8 lg:mt-0 lg:w-1/2'>
          <iframe
            style={{ borderRadius: '12px' }}
            src='https://open.spotify.com/embed/artist/6bkClBMJd4qKxJp0J5vHsz?utm_source=generator&theme=0'
            width='100%'
            height='352'
            frameBorder='0'
            allow='autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture'
            loading='lazy'
          ></iframe>
        </div>
      </div>
    </section>
  )
}

export default SpotifyBanner
