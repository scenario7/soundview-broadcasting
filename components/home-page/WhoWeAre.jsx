import React from 'react'
import { PT_Serif } from 'next/font/google';

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

const WhoWeAre = () => {
  return (
    <div className='flex flex-col items-center justify-center tracking-tight lg:px-28 px-10 md:px-28 py-20 gap-20'>
        <div className="flex flex-col md:flex-row lg:flex-row justify-between">
            <div className="flex flex-col lg:items-start items-center text-center md:items-start lg:text-left md:text-left lg:w-1/2 md:w-1/2 gap-7">
                <h2 className={`${ptSerif.className} text-[#d9d9d9] text-3xl`}>Who we are</h2>
                <p className='text-white text-sm'>SoundView Broadcasting is a fully-equipped, independently-owned, 60,000 sq. ft. global media broadcasting, production, post-production and marketing company based in New York City. We provide media services for over 26 international television channels from countries including India, Pakistan, Bangladesh, Egypt, Sub-Saharan Africa, and the U.S. to audiences across North America, Europe, and the UK.</p>
                <a href="/channels">
                    <button className='bg-[#424242] transition-colors hover:bg-[#646464] text-white px-5 py-2 rounded-full font-medium flex items-center gap-2'>
                      Regions we serve
                      <svg className='h-4 w-4'  fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                </a>
            </div>
            <img src="https://www.freeiconspng.com/thumbs/world-map-png/world-map-png-6.png" alt="" className='object-contain py-10'/>
        </div>
    </div>
  )
}

export default WhoWeAre