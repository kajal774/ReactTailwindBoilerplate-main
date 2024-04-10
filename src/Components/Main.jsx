import React from 'react'
import Warning from './Warning'
import search from "../images/search.png"
import MainHead from './MainHead'
import MainBottom from './MainBottom'
import MainBody from './MainBody'

const Main = () => {
  return (
    <>
    <p className='text-blue-900 text-xs font-medium'>Help Center</p>
    <div className='mx-10 my-3 lg:px-16 flex flex-col lg:items-center gap-4 '>
       <div className='lg:text-3xl sm:text-base  text-center font-bold'>How can we help?</div>
       <div className='border-2 lg:p-4 lg:w-1/2 sm:w-50 rounded-3xl'>
        <img src={search} className='inline sm:size-3 lg:size-5 lg:mr-2' alt="not found" />
       <input type='text' className='inline  ' placeholder='search by keyword'></input>
       </div> 
       <Warning/>
       <MainHead/>
       <MainBody/>
       <MainBottom/>      
    </div>
    </>
  )
}

export default Main
