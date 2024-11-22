import React from 'react'

const workExperience = [
  {
    id: 1,
    company: 'University of Nebraska-Lincoln',
    role: 'Lead Developer (2020 - Present)',
    responsibilities: [
      'Full-stack development using .NET Core, Java, MySQL, and AWS.',
      'Leading development teams with technical guidance.',
      'System design consulting.',
    ],
    achievements:
      'Successfully developed and led projects in a fully remote, international environment.',
  },
  {
    id: 2,
    company: 'Grupo Alpha 2000',
    role: 'Software Developer (2018 - Present)',
    responsibilities: [
      'Specialized in .NET technologies, including ASP.NET/Core, RESTful APIs, Xamarin, and microservices.',
      'Delivered efficient and robust solutions for diverse applications.',
    ],
  },
  {
    id: 3,
    company: 'Freelance Software Developer',
    role: 'Duration: Since 2016',
    responsibilities: [
      "Full-stack software development tailored to clients' needs.",
      'IT consulting focused on process optimization and automation.',
    ],
  },
  {
    id: 4,
    company: 'Atento',
    role: 'Help Desk Technician (2017 - 2018)',
    responsibilities: [
      'Resolved technical issues (VoIP, networking, router configurations) for one of Argentina’s largest telecom companies.',
    ],
  },
]

const WorkExperience = () => {
  return (
    <div className='space-y-6'>
      {workExperience.map((item) => (
        <div key={item.id} className='p-4 border rounded-md shadow-md'>
          <h2 className='text-xl font-bold'>{item.company}</h2>
          <p className='text-gray-600'>
            <strong>Role:</strong> {item.role}
          </p>
          <div className='mt-2'>
            <p className='font-semibold'>Responsibilities:</p>
            <ul className='list-disc ml-6 text-gray-800'>
              {item.responsibilities.map((responsibility, index) => (
                <li key={index}>{responsibility}</li>
              ))}
            </ul>
          </div>
          {item.achievements && (
            <p className='mt-2 text-gray-800'>
              <strong>Achievements:</strong> {item.achievements}
            </p>
          )}
        </div>
      ))}
    </div>
  )
}

export default WorkExperience
