import React from 'react'
import paypal from '../assets/paypal-icon.png'
import usaFlag from '../assets/usa.png'

const Footer = () => {
  return (
    <div>
        <div>
            <div>
                <ol className='text-sm m-[15vh] font-thin list-decimal leading-8'>
                    <li> For the purpose of this study, Forrester aggregated data from four enterprise merchants to create a single composite merchant with $500 Million  in revenue processed yearly. Individual results will vary</li>
                    <li> Forrester, Commisioned by PayPal, December 2021. Forrester constructed a  Total Eonomic Impact framework for those organizations considering an investment in the PayPal's enterprise payment platform, powered by Braintree.</li>
                    <li> B2B International, commisioned by PayPal, Nov-Dec 2021, B2B International surveyed amongst 504 mid-market and large enterprises in US, UK, and DE during November/December 2021. LE defined as merchants with annual revenue &gt;100M Mid-Market defined as merchants with annual revenue between 20M-100M. Base N: Enterprise Braintree Users=51.</li>
                    <li> Major global payments network and PayPal internal data analysis from transactions over a 12-month period from Q4 2020-Q3 2021 in 8 markets(US,U.DE,AU,FR,IT,ES,CA) across 12 verticals. Does not incluse transactions from domestic schemes(e.g. Cartes Bancaires,EFTPOS).</li>
                </ol>
            </div>
            <div> <img src={paypal} alt="" /> </div>
            <div className='flex justify-between items-center p-[5vh] h-[10vh]'>
                <div className='flex text-blue-900 font-bold gap-[2vw]'>
                    <a href="">Home</a><a href="">Contact</a><a href="">Fees</a><a href="">Security</a><a href="">Apps</a><a href="">Shops</a><a href="">Enterprise</a><a href="">Partners</a><a href="">Feedback</a>
                </div>
                <div className='h-[2vh]'><img className='h-full w-full object-cover' src={usaFlag} alt="" /></div>
            </div> <hr />
            <div className='flex justify-between items-center p-[5vh] h-[10vh]'>
                <div className='flex text-blue-900 font-bold gap-[1vw]'>
                    <a href="">About</a><a href=""></a>Newsroom<a href="">Jobs</a><a href="">Invester Relatons</a><a href="">Values in Action</a><a href="">Public Policy</a><a href="">Sitemap</a>
                </div>
                <div className='flex gap-[1vw] text-blue-900 items-center font-bold'>
                    <h2 className='font-medium text-sm'>1999-2022</h2>
                    <a href="">Accessibility</a><a href="">Privacy</a><a href="">Cookies</a><a href="">Legal</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer