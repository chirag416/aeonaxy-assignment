import React from 'react'
import guide1 from '../assets/guide-1.png'
const Guide = () => {
  return (
    <div>
      <div className='flex flex-col mt-[10vh] items-center'>
        <div className='flex gap-40 justify-center'>
          <div className='border-r-2 p-16 border-slate-300'> <h1 className='font-bold'>Executive Guide: PayPal Guide Integration</h1> <br />
            <h2>Whether you are upgrading your tools, learn how we make integration process as flexible and seamless as possible.</h2>
            <br />
            <div className='text-blue-500 font-bold'>Learn more about managing risks -
            </div>
          </div>
          <div className='p-16'> <h1 className='font-bold'>eBook: Signs you've outgrown your payment processor</h1> <br />
            <h2>Payments processor stunting your growth? It might be time to look for new one.</h2>
            <br />
            <div className='text-blue-500 font-bold'>Learn more about managing risks -
            </div>
          </div>
        </div>
        <div className='border-t-2 my-[10vh] w-[90%] pt-[10vh] gap-20 flex items-center justify-center border-slate-300'>
        <img src={guide1} alt="" />
        <div className=''>
          <h1 className='font-bold'>Report: Forrester economic impact analysis</h1> <br />
          <h2>Forrester concluded that our enterprise solutions deliver credit card and alternative payment processing services fast and scale while enabling high authorization rates</h2>
          <br />
        <div className='text-blue-500 font-bold'>Get the Report -
        </div>
        </div>
        
        </div>
      </div>
    </div>
  )
}

export default Guide