import React from 'react'
import logo from '../images/logo.png'
const Footer = () => {
  return (
    <div className='text-blue-900 flex flex-col '>
    <div className='flex py-1'>
      <img src={logo} alt="npt found" className='w-12 h-9' />
      <p className='text-3xl font-bold'>Pay<span className='text-blue-500'>Pal</span></p></div>
      <ul className='flex lg:gap-7 sm:gap-2  lg:py-3 sm:py-1 text-sm font-light'>
        <li>Help</li>
        <li>Contact</li>
        <li>Fees</li>
        <li>Security</li>
        <li>Apps</li>
        <li>Shop</li>
        <li>Enterprise</li>
        <li>Partners</li>
      </ul>
      <hr />
      <div className='flex justify-between py-3 shrink text-sm lg:flex-row sm:flex-col font-light'>
        <ul className='flex lg:gap-7 sm:gap-2 shrink'>
            <li>About</li> 
            <li>Newsroom</li>
            <li>Jobs</li>
            <li>Investor Relations</li>
            <li>Values In Action</li>
            <li>Public Policy</li>
            <li>Sitemap</li>
        </ul>
        <ul className='flex gap-7 shrink  md:shrink-0'>
            <li className='text-slate-500'>&copy;1999-2022</li>
            <li>Accessibility</li>
            <li>Privacy</li>
            <li>cookies</li>
            <li>Legal</li>
        </ul>
      </div>
    </div>
  )
}

export default Footer
