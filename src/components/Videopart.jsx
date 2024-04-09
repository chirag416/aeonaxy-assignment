import React from 'react'
import approvimg from '../assets/Approval-img.jpg'
import { FcApproval } from "react-icons/fc";
import jeans from '../assets/jeans.jpg'

const Videopart = () => {
  return (
    <div className='mt-[40vh]'>
        <div className="textimgdiv p-20 flex gap-20 items-center">
          <div className="home2img w-1/2">
            <img
              className="w-full rounded-xl h-full object-cover"
              src={approvimg}
              alt=""
            />
          </div>
          <div className="approvaldiv w-1/2 justify-center">
            <h1 className="text-2xl font-semibold">Your Partner for Innovation</h1>{" "}
            <br />
            <h2 className="text-sm font-medium">
              See how Pressed partnered with PayPal to help their development team build innovative solutions with limited resources-all powered by Braintree Technology.
            </h2>
            <br />
            <div className='text-blue-500 font-bold'>Play thr video -
             </div>
          </div>
        </div>
        <div className='modulardiv mt-[40vh] text-white'>
<div className="p-20 h-[70vh] flex gap-20 items-center">
          <div className="w-1/2 justify-center">
            <h1 className="text-2xl font-semibold"> The user experience in terms of usability, trust, and flexibility is everything, especially for the digitally native consumer. The experience PayPal hrlps us provide is beating all consumer expecattions.
            </h1>
            <br />
            <h2>David Oksman</h2>
            <h2>Chief Marketing Officer</h2>
            <br />
            <h3 className='text-md font-semibold'>Samsonite</h3>
            
          </div>
          <div className="bg-red-400 w-1/3 h-[60vh] relative -top-20">
            <img className='h-full w-full object-cover' src={jeans} alt="" />
          </div>
        </div>
    </div>
    </div>
  )
}

export default Videopart