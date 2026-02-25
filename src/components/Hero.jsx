import React from 'react'

const Hero = () => {
  return (
      <div className='flex justify-between pt-10 px-10'>
          <div className='font-bold text-2xl '>
              <h1>Shameer Ali</h1>
          </div>
          <ul className='flex gap-8 text-lg font-medium'>
              <li>Home</li>
              <li>About</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
      </ul>
    </div>
  )
}

export default Hero
