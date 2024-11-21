import { ArrowRight, MenuScale } from 'iconoir-react'
import Logo from './assets/logo.png'
import Perfil from './assets/perfil.png'
import SocialLinks from './components/socialMedia'

function App() {
  return (
    <main className=''>
      <section className='bg-gradient-to-r from-custom-dark-blue  to-custom-dark-purple'>
        <div className='container px-4 text-white'>
          <nav className='flex justify-between items-center py-4'>
            <div className='flex flex-col gap-2'>
              <img
                src={Logo}
                alt='logo'
                width={32}
                height={32}
                className='lg:w-16'
              />
            </div>
            <div>
              <MenuScale fontSize={24} className='lg:hidden' />
            </div>
          </nav>
          <div className='flex flex-col lg:flex-row gap-8  lg:items-center'>
            <div className='flex flex-col gap-4 lg:gap-6 mt-8 lg:w-1/2'>
              <h1 className='text-2xl font-bold lg:text-5xl'>I am Dager</h1>
              <p className='font-bold text-4xl lg:text-6xl bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary bg-clip-text text-transparent'>
                Full-stack/lead dev with a passion for SOLID code and amazing
                products.
              </p>
              <p className='text-xl lg:text-2xl'>
                Hello! I’m Dager, a Full-Stack Developer and technical lead with
                8+ years of experience.
              </p>
              <div className='flex items-center gap-2'>
                <p className='flex items-center gap-2 font-bold text-xl'>
                  Contact <ArrowRight />
                </p>
                <SocialLinks />
              </div>
            </div>
            <div className='flex items-center justify-center lg:w-1/2'>
              <img
                src={Perfil}
                alt='perfil'
                width={350}
                height={350}
                className='border-4 border-custom-purple-text-gradient rounded-lg lg:w-[500px] lg:h-[500px]'
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default App
