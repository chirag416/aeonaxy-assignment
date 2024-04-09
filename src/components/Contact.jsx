import React from 'react'
import contact1 from '../assets/contact1.png'
import contact2 from '../assets/contact2.png'
const Contact = () => {
  return (
    <div>
        <div className='flex bg-slate-200 justify-center gap-30'>
            <div className='flex w-[40vw] bg-white p-[3vw] m-[5vh] flex-col'>
                <img src={contact1} alt="" /> <br />
                <h1>Contact our sales team</h1>
                <h2>Learn how payments can be leveraged as a catalyst for growth</h2> <br /> <br /> <br />
                <button className=' w-fit text-left border-2 border-blue-800 bg-blue-800 text-white px-5 rounded-full py-1'>Contact Sales</button>
            </div>
            <div className='flex w-[40vw] bg-white p-[3vw] m-[5vh] flex-col'>
            <img src={contact2} alt="" /> <br />
                <h1>Explore developer documentation</h1> 
                <h2>See how our flexible and interoperable technology helps to simplify integration</h2> <br /> <br /> 
                <button className='w-fit text-left justify-center items-center  bg-blue-800 text-white px-5 rounded-full py-1'>Visit Developer Docs</button>
            </div>
        </div>
    </div>
  )
}

export default Contact