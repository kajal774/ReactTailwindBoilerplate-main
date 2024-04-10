import React from 'react'

const MainBody = () => {
  return (
    <div className='flex flex-col justify-center items-center text-base'>
        <div className='flex gap-2 p-1 bg-gray-100 rounded-full text-slate-600 text-sm' >
            <span className='rounded-full p-1 bg-white text-blue-900 '>Personal Help</span>
            <span className='p-1'>Business Help</span>
            <span className='p-1'>Technical Help</span>
        </div>
        <div className='flex sm:flex-col lg:flex-row justify-center lg:items-center gap-12 p-10 basis-1/2'>
            <div >
                <ul className='flex flex-col gap-1 px-2'>
                    <li className='bg-blue-200 border-l-4 pl-1 border-indigo-500'>Common Questions</li>
                    <li>PayPal Help Guides</li>
                    <li>Payments & Transfers</li>
                    <li>Disputes & Limitations</li>
                    <li>My Account</li>
                    <li>My Wallet</li>
                    <li>Login & Security</li>
                    <li>Seller Tools</li>
                </ul>
            </div>
            <div className='flex flex-col gap-1 basis-1/2'>
                <h1 className=' text-lg font-semibold'>Common Questions</h1>
                <ul className=' flex flex-col gap-1 text-blue-900'>
                    <li>How do i open a case with a seller</li>
                    <li>i forgot my password. how do i reset it?</li>
                    <li>why is my payment on hold or unavailable?</li>
                    <li>I want my money back. Can I cancel a payment?</li>
                    <li>Why am I receiving emails from PayPal when I don't have an account?</li>
                    <li>How do I report an unauthorized transaction or account activity?</li>
                    <li>Why is the payment I sent pending? Can I cancel it?</li>
                    <li>How do I request a refund?</li>
                    <li>Why was my payment declined?</li>
                    <li>How do I change the name on my PayPal account?</li>
                </ul>

            </div>
            <div className='bg-gray-100 rounded-lg basis-1/6 p-4 h-auto shrink'>
                <p className='bold'>Get customized help with your account and acess your message center</p>
                <button className='text-blue-900  text-center text-sm font-bold rounded-full bg-white border-2 border-blue-900 px-3'>Log In</button>
            </div>
        </div>
      
    </div>
  )
}

export default MainBody
