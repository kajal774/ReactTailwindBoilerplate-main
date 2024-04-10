import React from 'react'
import user from "../images/user-account.png"
import handshake from "../images/handshake.png"
import questionmark from "../images/question-mark.png"
const card=[{
    img:user,
    title:"Community Forum",
    para:" Find answers or join the conversation"
},
{
    img:handshake,
    title:"Resolution Center",
    para:"Resolve transaction or account issues"
},
{
    img:questionmark,
    title:"Contact Us",
    para:"Contact Customer Service"
}
]
const MainBottom = () => {
  return (
    <div className='flex flex-col'>
      <h1 className='text-center text-lg'>More ways to get help</h1>
      <div className="flex gap-10  justify-center justify-items-center">
      {
        card.map((i)=>(
        <div className=" flex flex-col gap-1 lg:p-10 w-1/4">
        <img src={i.img} className="w-10 h-10 justify-self-center lg:ml-10" alt="not found" />
        <h3 className='text-blue-900 font-bold'>{i.title}</h3>
        <p>{i.para}</p>
        </div>
        ))
      }
      </div>
      
      <div className='bg-slate-100 rounded-lg mt-4 lg:py-8 sm:py-2 lg:px-10 sm:px-1 flex justify-between'>
        <div >
        <h3>how are we doing?</h3>
        <p>help improve the <span className='font-bold'>PayPal Help Center</span> with some quick feedback.</p>
        </div>
        <button className='bg-blue-900 text-slate-50 py-0 px-2 rounded-3xl'>Take the survey</button>
      </div>
    </div>
  )
}

export default MainBottom
