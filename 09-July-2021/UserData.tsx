import React from 'react'
//@ts-ignore
import ReactCountryFlag from 'react-country-flag'

interface Props {
  name: { title: string; first: string; last: string }
  age: number
  email: string
  image: string
  nat: string
}

const UserData: React.FC<Props> = ({ name, age, email, image, nat }) => {
  return (
    <div className='max-w-3xl p-4 mx-auto my-4 bg-white rounded-lg shadow-lg'>
      <div className='flex flex-col md:flex-row md:items-center md:justify-between'>
        <div className=''>
          <img
            className='mx-auto rounded-full object-cover'
            src={image}
            alt=''
          />
        </div>
        <div className='text-center mt-3'>
          <h2 className='text-lg font-medium text-indigo-700'>
            <ReactCountryFlag className='text-xl mr-3' countryCode={nat} svg />
            {name.title + '. ' + name.first + ' ' + name.last}
          </h2>
          <h3 className='text-md font-medium text-gray-700'>{age} years old</h3>
        </div>
        <div className='flex'>
          <a
            className='mx-auto px-4 py-2 bg-indigo-700 inline-block my-3 rounded-md text-white font-medium hover:opacity-90 outline-none'
            href={'mailto:' + email}
          >
            Contact Me!
          </a>
        </div>
      </div>
    </div>
  )
}

UserData.defaultProps = {}

export default React.memo(UserData)
