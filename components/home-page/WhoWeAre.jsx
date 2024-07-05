import React from 'react'
import { PT_Serif } from 'next/font/google';

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

const WhoWeAre = () => {
  return (
    <div className='flex flex-col items-center justify-center tracking-tight px-28 py-10 gap-20'>
        <div className="flex flex-col text-center gap-3">
            <h3 className='font-semibold'>featured on</h3>
            <img src='https://www.freepnglogos.com/uploads/forbes-logo-png/b-c-forbes-business-grey-logo-17.png' className='h-7 object-contain'/>
        </div>
        <div className="flex justify-between">
            <div className="flex flex-col items-start text-left w-1/2 gap-7">
                <h2 className={`${ptSerif.className} text-[#d9d9d9] text-3xl`}>Who we are</h2>
                <p className='text-white text-sm'>SoundView Broadcasting is a fully-equipped, independently-owned, 60,000 sq. ft. global media broadcasting, production, post-production and marketing company based in New York City. We provide media services for over 26 international television channels from countries including India, Pakistan, Bangladesh, Egypt, Sub-Saharan Africa, and the U.S. to audiences across North America, Europe, and the UK.</p>
                <a href="">
                    <button className='bg-[#424242] text-white py-1 px-3 rounded-md font-medium'>Regions we serve &rarr;</button>
                </a>
            </div>
            <img src="https://www.freeiconspng.com/thumbs/world-map-png/world-map-png-6.png" alt="" />
        </div>
    </div>
  )
}

export default WhoWeAre