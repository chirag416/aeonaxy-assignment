import React, { useState } from 'react'
import mouse from '../assets/mouse.jpg'
import { useEffect } from 'react';
const Manage = () => {

  const [message1, setmessage1] = useState("");
  const [message2, setmessage2] = useState("");
  useEffect(() => {
   setmessage1("Manage risk and compliance")
   setmessage2("We can help you identify and manage potential security, fraud, and compliance risk-so you can focus on what matters most: growing your business.")
  }, [])

  return (
    <div>
      <div className="bg-slate-200 ">
        <div className="p-20 flex manageTxtImg gap-20 items-center">
          <div className="w-1/2 rounded-lg">
            <img
              className="w-full h-[30rem] rounded-2xl object-cover"
              src={mouse}
              alt=""
            />
          </div>
          <div className="w-1/2 justify-center">
            <h1 className="text-2xl font-semibold">{message1}</h1>{" "}
            <br />
            <h2 className="text-sm font-medium">
             {message2}
            </h2>
            <br />
            <div className='text-blue-500 font-bold'>Learn more about managing risks -
             </div>
          </div>
        </div>
        <div>
        <div className="flex four-divs gap-20 p-20">
        <div className="">
          <h2 className="text-sm font-bold">Keep data fresh</h2> <br />
          <h2>
            Use account updater to securely makr batch and real-time updates for
            Visa,Mastercard, and Discover.
          </h2>
          <div className='text-blue-500 font-bold'>About Fraud </div>
          <div className='text-blue-500 font-bold'>Protection - </div>
        </div>
        <div>
          <h2 className="text-sm font-bold">Adopt Network Tokenization</h2>{" "}
          <br />
          <h2>
            Boost security and approvals with a partner who has already
            tokenized hundreds of millions of credit cards.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Retry failed transactions</h2>{" "}
          <br />
          <h2>
            We strive to optimize approvals right from the start. But if thry
            fail, we can retry the transaction on alternative acquiring
            networks.
          </h2>
        </div>
        <div>
          <h2 className="text-sm font-bold">Optimize routing</h2> <br />
          <h2>
            Route transactions to global acquireres and networks that will yield
            the fastest, most reliable, and least expensive transaction.
          </h2>
        </div>
      </div>
        </div>
      </div>
    </div>
  )
}

export default Manage