import React from 'react'
import { FcApproval } from "react-icons/fc";

const Modular = () => {
  return (
    <div className='modulardiv text-white'>
<div className="p-20 h-[50vh] flex gap-20 items-center">
          <div className="w-1/2 justify-center">
            <h1 className="text-2xl font-semibold">Our modular solution can <br /> grow with you</h1>{" "}
            <br />
            <h2 className="text-sm font-medium">
             Turn on the featured that used to connect with the <br /> partners in your payments ecosystem, and keep <br /> the rest in your back pocket for whatever comes <br /> next.
            </h2>
            <br />
            <div className='text-blue-500 font-bold'>About Fraud </div>
          </div>
          <div className="w-1/3 relative top-40 bg-white text-black p-8">
            <div className='py-1 flex justify-between items-center'>Accept payments in 200 markets and 130 <br /> currencies <FcApproval /> </div> <hr />
            <div className='py-1 flex justify-between items-center'>Make payouts in 200 markets <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Acquiring in 47 markets <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Wide range of payment methods <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Recurring billing capabilities <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Network tolenization <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Batch and real-time account updater <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Advance predictive risk solutions <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>PCI complaint vault <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Chargeback protection <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Dispute Automation <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>IC++ pricing available <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>White glove onboarding and support <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Flexible,scalable integration <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>24/7 monitoring and optimization <FcApproval /></div> <hr />
            <div className='py-1 flex justify-between items-center'>Global support center <FcApproval /></div> <hr />
          </div>
        </div>
    </div>
  )
}

export default Modular