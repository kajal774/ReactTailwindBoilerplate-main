import React, { Fragment } from 'react'
import together from "../images/together.png"
import handmade from "../images/handmade.png"
import comments from "../images/comments.png"

const data=[
    {
        img:together,
        title:"Resolution Center",
        text:"Resolve transation or account issues"
    },{
        img:handmade,
        title:"Ask the Community",
        text:"Find answers or join the conversation"
    },{
        img:comments,
        title:"Message Center",
        text:"send,receive and view your PayPal messages"
    }
]

const MainHead = () => {
  
  return(<Fragment>
    <div className='flex sm:flex-col lg:flex-row gap-4 '>
        {
    data.map((i)=>(
    <div className='flex flex-row border p-2 gap-4 rounded-lg shadow-md'>
        <div className=''><img src={i.img} alt="not found" className='w-10 h-10' /></div>
            
            <div>
                <h4>{i.title}</h4>
                <p>{i.text}</p>
            </div>
        </div>

    )
  )
        }
    
  </div>
    </Fragment>
  )
}

export default MainHead
