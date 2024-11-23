import { motion } from 'framer-motion'
import { useState } from 'react'
import { ArrowRight } from 'iconoir-react'
import Logo from './assets/logo.png'
import Perfil from './assets/perfil.png'
import Loading from './components/Loading'
import Navbar from './components/Navbar'
import SocialLinks from './components/socialMedia'
import { LanguajesCarrousel } from './components/languajesCarrousel'
import { AboutItems } from './components/AboutItems'
import { Portfolio } from './components/Portfolio'
import MyEducation from './components/MyEducation'
import WorkExperience from './components/WorkExperience'
import SpotifyBanner from './components/SpotifyBanner'
import FunSection from './components/Gallery'
import ContactSection from './components/Contact'
import Footer from './components/Footer'

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeInOut' },
  },
}

function App() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  return (
    <>
      {!loadingComplete ? (
        <Loading setLoadingComplete={setLoadingComplete} />
      ) : (
        <main>
          {/* Sección de inicio */}
          <motion.section
            className='bg-custom-radial flex flex-col justify-center gap-4 lg:h-screen'
            initial='hidden'
            animate='visible'
            variants={fadeIn}
          >
            <Navbar />
            <div className='container flex flex-col h-auto pb-4 2xl:justify-center 2xl:h-[1076px] gap-8'>
              <div className='px-4 text-white'>
                <div className='flex flex-col lg:flex-row gap-8 items-center'>
                  <div className='flex flex-col gap-4 lg:gap-6 lg:w-1/2'>
                    <h1 className='text-3xl lg:text-5xl 2xl:text-6xl font-bold'>
                      Dot Dager
                    </h1>
                    <p className='font-bold text-4xl 2xl:text-7xl lg:text-6xl bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
                      Desarrollador Full-stack/lead con una pasión por el código
                      SOLID y productos increíbles.
                    </p>
                    <p className='text-lg lg:text-2xl'>
                      ¡Hola! Soy un Desarrollador Full-Stack y líder técnico con
                      más de 8 años de experiencia.
                    </p>
                    <div className='flex items-center gap-2'>
                      <p className='flex items-center gap-2 font-bold text-xl'>
                        Contáctame <ArrowRight />
                      </p>
                      <SocialLinks />
                    </div>
                    <div>
                      <LanguajesCarrousel />
                    </div>
                  </div>
                  <div className='flex items-center justify-center lg:w-1/2'>
                    <img
                      src={Perfil}
                      alt='perfil'
                      width={350}
                      height={350}
                      className='border-4 border-custom-purple-text-gradient rounded-lg lg:w-[600px] lg:h-[600px] 2xl:w-[800px] 2xl:h-[800px] 2xl:object-cover'
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Sección sobre mí */}
          <section
            id='about'
            className='bg-complementary-radial text-white lg:py-12 py-4'
          >
            <div className='container flex flex-col gap-4 lg:gap-8'>
              <div>
                <p className='text-center px-4 font-bold text-4xl lg:text-6xl bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
                  Sobre mí
                </p>
                <p className='text-center px-4 text-lg lg:text-2xl'>
                  Más allá de la programación, siempre tengo curiosidad por el
                  mundo y estoy ansioso por aprender algo nuevo.
                </p>
              </div>
              <div>
                <AboutItems />
              </div>
            </div>
          </section>

          {/* Sección Portafolio */}
          <section
            id='portfolio'
            className='bg-custom-radial text-white lg:py-12 py-4'
          >
            <div className='container flex flex-col gap-4 lg:gap-8'>
              <div className='flex flex-col gap-2'>
                <h3 className='text-4xl lg:text-6xl font-bold text-center text-white text-transparent'>
                  Portafolio
                </h3>
                <p className='text-center px-4 text-lg lg:text-2xl'>
                  Mi objetivo siempre es crear productos que no solo resuelvan
                  problemas, sino que también ofrezcan una experiencia de
                  usuario fluida y placentera.
                </p>
              </div>
              <div>
                <Portfolio />
              </div>
            </div>
          </section>

          {/* Sección de experiencia y educación */}
          <section
            id='experience'
            className='bg-complementary-radial lg:py-12 py-4'
          >
            <div className='flex flex-col gap-4 lg:gap-8 lg:flex-row container'>
              <WorkExperience />
              <MyEducation />
            </div>
          </section>

          {/* Sección de Spotify */}
          <section id='spotify' className='bg-custom-radial'>
            <SpotifyBanner />
          </section>

          {/* Galería */}
          <section
            id='gallery'
            className='bg-complementary-radial lg:py-12 py-4'
          >
            <FunSection />
          </section>

          {/* Sección de Contacto */}
          <section id='contact' className='bg-custom-radial'>
            <ContactSection />
          </section>

          {/* Footer */}
          <Footer />
        </main>
      )}
    </>
  )
}

export default App
