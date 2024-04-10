import React from 'react'
import logo from '../images/logo.png'

const Header = () => {
  return (
    <div className='flex justify-between my-4 font-sans lg:text-base sm:text-xs'> 
      <ul className=' flex justify-around lg:basis-2/4   text-blue-900 lg:font-medium'>
      <img src={logo} alt="NA" className='lg:w-10 lg:h-7 sm:h-3 sm:w-5'/>
        <li className='px-1'>Personal</li>
        <li className='px-1'>Business</li>
        <li className='px-1'>Devloper</li>
        <li className='px-1'>Help</li>
      </ul>
      <div className='flex justify-around lg:basis-1/5'>
        <button className='text-blue-900  text-center text-sm lg:font-bold rounded-full bg-white border-2 border-blue-900 lg:px-3 sm:px-1 sm:mx-1'>Log In</button>
        <button className='text-white text-center text-sm lg:font-bold rounded-full bg-blue-900 lg:px-3 sm:px-1'>Sign Up</button>
      </div>
    </div>
  )
}

export default Header
