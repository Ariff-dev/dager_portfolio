import { ArrowRight, ArrowRightTag, MenuScale, Spotify } from 'iconoir-react'
import Logo from './assets/logo.png'
import Perfil from './assets/perfil.png'
import SocialLinks from './components/socialMedia'
import { LanguajesCarrousel } from './components/languajesCarrousel'
import DagerGuitar from './assets/images/dager_guitarra.webp'
import DagerCats from './assets/images/coso.jpg'
import DagerSenior from './assets/images/senior.png'
import { AboutItems } from './components/AboutItems'
import { Portfolio } from './components/Portfolio'
import WorkExperience from './components/WorkExperience'

function App() {
  return (
    <main className=''>
      <section className='bg-custom-radial flex flex-col justify-center gap-4 lg:h-screen'>
        <nav className='flex justify-between  xl:static  p-4 container '>
          <div className='flex flex-col gap-2'>
            <img
              src={Logo}
              alt='logo'
              width={32}
              height={32}
              className='lg:w-10'
            />
          </div>
          <div>
            <MenuScale fontSize={24} className='lg:hidden text-white ' />
          </div>
        </nav>
        <div className='container flex flex-col h-auto pb-4 2xl:justify-center 2xl:h-[1076px] gap-8 '>
          <div className=' px-4 text-white'>
            <div className='flex flex-col lg:flex-row gap-8 items-center '>
              <div className='flex flex-col gap-4 lg:gap-6  lg:w-1/2'>
                <h1 className='text-2xl font-bold lg:text-5xl 2xl:text-6xl'>
                  I am Dager
                </h1>
                <p className='font-bold text-4xl 2xl:text-7xl lg:text-6xl bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
                  Full-stack/lead dev with a passion for SOLID code and amazing
                  products.
                </p>
                <p className='text-base lg:text-2xl'>
                  Hello! I’m Dager, a Full-Stack Developer and technical lead
                  with 8+ years of experience.
                </p>
                <div className='flex items-center gap-2'>
                  <p className='flex items-center gap-2 font-bold text-xl'>
                    Contact <ArrowRight />
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
      </section>
      <section className='bg-dark-neutral text-white lg:py-12 py-4'>
        <div className='container flex flex-col gap-4 lg:gap-8'>
          <div>
            <p className='text-center px-4 font-bold text-4xl lg:text-6xl bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
              About Me
            </p>
            <p className='text-center px-4 text-lg lg:text-2xl'>
              Beyond programming, I am always curious about the world and eager
              to <br />
              learn something new.
            </p>
          </div>
          <div>
            <AboutItems />
          </div>
        </div>
      </section>
      <section className='bg-custom-radial text-white lg:py-12 py-4'>
        <div className='container flex flex-col gap-4 lg:gap-8'>
          <div className='flex flex-col gap-2 '>
            <h3 className='text-4xl lg:text-6xl font-bold text-center bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
              Portfolio
            </h3>
            <p className='text-center px-4 text-lg lg:text-2xl'>
              My goal is always to create products that not only solve problems{' '}
              <br className='hidden lg:block' />
              but also provide a smooth and enjoyable user experience
            </p>
          </div>
          <div className=''>
            {/* <iframe
            title='Lumber Jack Game'
            src='https://tbot.xyz/lumber/'
          ></iframe> */}
            <Portfolio />
          </div>
        </div>
      </section>
      <section className='bg-complementary-radial lg:py-12 py-4'>
        <div className='container flex flex-col gap-4 lg:gap-8'>
          <div className='flex flex-col gap-2 '>
            <h3 className='text-4xl lg:text-6xl font-bold text-center bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
              Work Experience
            </h3>
          </div>
          <div>
            <WorkExperience />
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
