import React from 'react'
import { FaPaypal } from "react-icons/fa";

const Navbar = () => {

  return (
    <>
    <div className='navbar w-screen flex p-6 pb-1 overflow-hidden items-center justify-between'>
        <div className='flex text-blue-800 items-center font-semibold gap-10'>

            <div className='logo'> <FaPaypal className='h-[50px]' /> </div>
            <div className='sidebar'>Personal</div>
            <div className='sidebar'>Business</div>
            <div className='sidebar'>Developer</div>
            <div className='sidebar'>Help</div>

        </div>
        <div className='flex justify-center items-center gap-5'>
            <button className='border-2 border-blue-800 rounded-full pb-1 text-blue-800 px-5'>Login</button>
            <button className='border-2 border-blue-800 bg-blue-800 text-white px-5 rounded-full pb-1'>Signup</button>
        </div>
    </div>
    <div className='bg-gray-400 h-[1.1px]'></div>
    </>
  )
}

export default Navbar