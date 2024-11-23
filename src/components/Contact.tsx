import React, { useState } from 'react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado', formData)
  }

  return (
    <section className='bg-custom-radial py-12 px-4'>
      <div className='container mx-auto text-center'>
        {/* Título de la sección */}
        <h2 className='text-4xl lg:text-5xl font-bold text-white mb-8 bg-clip-text text-transparent bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary'>
          Ponte en Contacto con Dot Dager
        </h2>

        {/* Formulario de contacto */}
        <form
          onSubmit={handleSubmit}
          className='max-w-4xl mx-auto bg-complementary-radial  p-8 rounded-lg shadow-lg'
        >
          <div className='grid grid-cols-1 gap-6'>
            {/* Nombre */}
            <div>
              <label
                htmlFor='name'
                className='block text-xl font-semibold text-white'
              >
                Tu Nombre
              </label>
              <input
                type='text'
                id='name'
                name='name'
                value={formData.name}
                onChange={handleChange}
                required
                className='w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple-text-gradient'
              />
            </div>

            {/* Correo Electrónico */}
            <div>
              <label
                htmlFor='email'
                className='block text-xl font-semibold text-white'
              >
                Tu Correo Electrónico
              </label>
              <input
                type='email'
                id='email'
                name='email'
                value={formData.email}
                onChange={handleChange}
                required
                className='w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple-text-gradient'
              />
            </div>

            {/* Mensaje */}
            <div>
              <label
                htmlFor='message'
                className='block text-xl font-semibold text-white'
              >
                Tu Mensaje
              </label>
              <textarea
                id='message'
                name='message'
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className='w-full p-4 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-custom-purple-text-gradient'
              ></textarea>
            </div>

            {/* Botón de envío */}
            <div>
              <button
                type='submit'
                className='w-full py-3 mt-4 bg-custom-radial text-white text-xl font-semibold rounded-lg hover:opacity-90 transition'
              >
                Enviar Mensaje
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default ContactSection
