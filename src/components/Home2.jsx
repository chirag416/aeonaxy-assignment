import React from 'react'
import logos from '../assets/logos.png'

const Home2 = () => {
  return (
    <>
    <div w-screen>
        <div className='home2 flex justify-between gap-40 p-20'>
        <div className='home2div w-1/2 border-r-2 h-full border-slate-300'>
            <div className='text-9xl text-blue-900 pb-16 font-bold'>401%</div>
            <div className='text-3xl font-medium'>ROI for the composite <br /> merchant, estimated by <br /> Forrester with PayPal <br /> enterprise payment <br /> solutions</div>
        </div>
        <div className='home2div p-16'>
            <div className='text-3xl text-blue-900 font-semibold'>86%</div>
            <div className='text-sm font-medium my-6'>of our  enterprise users indicate that we had  a positive  impact on authorization rates since adoption</div>
                <div className='border-b-2 w-full  border-slate-300'></div>
            <div className='text-3xl text-blue-900 font-semibold my-6'>4bps</div>
            <div className='text-sm font-medium'>In the US, Braintree can help reduce chargeback rate by 4 bps</div>
        </div>
        </div>
        <div className='textimgdiv flex p-20 justify-between'> 
        <div className=''>
            <div className='text-3xl'>Offer a range of payment <br /> methods worldwide</div>
            <br />
            <div className='text-sm font-medium'>
                <h1>Reach new customers an dgive them the payment options <br /> they prefer so you dont miss a sale.</h1>
                <br />
                <h1>Accept credit cards and debit cards,digital wallets,PayPal, and 20+ <br /> local payment methods. All in a single integration.</h1>
                <br />
                <div className='text-blue-500 font-bold'>More about payment methods - </div>
            </div>
        </div>
        <div className= 'w-1/2'>
            <div className='home2img'><img className='w-full object-cover h-60' src={logos} alt="" /></div>
        </div>
        </div>
    </div>
    </>
  )
}

export default Home2