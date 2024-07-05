import React from 'react'
import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

  const images = [
    "http://www.svbllc.com/Resources/Studio%201A.jpg",
    "http://www.svbllc.com/Resources/Studio%201B.jpg",
    "http://www.svbllc.com/Resources/Studio%201AA.jpg"
  ]

const StudioGlimpse = () => {
  return (
    <div className='flex flex-col px-28 py-10 gap-16'>
        <h2 className={`${ptSerif.className} text-[#d9d9d9] text-3xl text-center`}>A Glimpse of our Studios</h2>
        <div className="flex justify-between items-center">
            {images.map((image) => {
                return(
                    <img key={image} src={image} alt="" className='h-60 w-60 object-cover'/>
                )
            })}
            <a href="">
                    <button className='bg-[#424242] text-white px-5 py-2 rounded-full font-medium'>View all Studios &rarr;</button>
                </a>
        </div>
    </div>
  )
}

export default StudioGlimpse