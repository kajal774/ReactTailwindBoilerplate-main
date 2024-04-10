import React from 'react'
import exclamation from "../images/exclamation.png"
import close from "../images/close.png"
const Warning = () => {
  return (
    <div className='bg-yellow-100 p-3 rounded-lg'>
        <div className='relative'>
       <img src={exclamation} alt="notfound" className='inline w-3 h-3' />
        <p className='text-xs inline'>Received a suspicious email, fake invoice, or message? 
        Don't reply, open links, download attachments, or call any listed phone numbers. 
        We'll never ask for your PayPal password or financial details by email or message, or over the phone. Forward suspicious messages to <a href='/' className='text-blue-900'>phishing@paypal.com</a> and then delete them.</p>
        <img src={close} className='absolute top-0 right-0 w-3 h-3' alt="not found" /></div>
       
    </div>
  )
}

export default Warning
