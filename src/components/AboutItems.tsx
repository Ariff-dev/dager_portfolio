import React, { useState } from 'react'

const aboutItems = [
  {
    id: 1,
    title: 'Cats',
    description:
      'I like cats because, much like well-designed software, they are elegant, curious, and always find creative solutions to any situation. Their ability to adapt and explore reminds me of the importance of being flexible and seeking new perspectives when solving programming problems.',
    icon: 'CAT',
  },
  {
    id: 2,
    title: 'Programming',
    description:
      'Programming is more than just writing code; it’s about solving problems and bringing ideas to life. For me, it’s like building something from scratch, where every line contributes to creating something functional and meaningful.',
    icon: 'Guitar',
  },
  {
    id: 3,
    title: 'Guitar',
    description:
      'Music and software development have more in common than they seem. Playing the guitar has taught me to be consistent, creative, and attentive to detail—qualities I also apply to programming.',
    icon: 'Code',
  },
  {
    id: 4,
    title: 'Philosophy',
    description:
      ' Constant reflection on ethics, logic, and decision-making helps me create more balanced, efficient, and ethical solutions in my projects.',
    icon: 'Code',
  },
]

export const AboutItems = () => {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <div className='flex flex-col gap-4 px-4'>
      {aboutItems.map((item) => (
        <div
          key={item.id}
          className={`flex flex-col lg:flex-row lg:items-center gap-2 p-4 lg:p-8 rounded-md transition-all duration-300 ease-in-out ${
            hoveredItem === item.id
              ? 'bg-gradient-to-r from-custom-purple-text-gradient to-custom-purple-text-gradient-secondary'
              : 'bg-custom-radial'
          }`}
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          <div className='text-2xl lg:text-3xl  font-bold lg:w-1/4'>
            {item.title}
          </div>
          <div className='lg:w-3/4 text-xl'>{item.description}</div>
        </div>
      ))}
    </div>
  )
}
