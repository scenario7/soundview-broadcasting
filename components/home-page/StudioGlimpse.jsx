import React from 'react'
import { PT_Serif } from 'next/font/google'
import Image from 'next/image';

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

  const images = [
    "https://i.imgur.com/5JrzfUf.jpg",
    "https://i.imgur.com/7pel8b5.jpg",
    "https://i.imgur.com/3Csxnyk.jpg"
  ]

const StudioGlimpse = () => {
  return (
    <div className='flex flex-col lg:px-28 px-10 md:px-28 py-10 gap-16'>
        <h2 className={`${ptSerif.className} text-[#d9d9d9] text-3xl text-center`}>A Glimpse of our Studios</h2>
        <div className="flex md:flex-row lg:flex-row flex-col gap-10 justify-between items-center">
            {images.map((image) => {
                return(
                    <img key={image} src={image} className='h-60 w-60 object-cover'/>
                )
            })}
            <a href="">
                    <button className='bg-[#424242] transition-colors hover:bg-[#646464] text-white px-5 py-2 rounded-full font-medium flex items-center gap-2'>
                      View all Studios
                      <svg className='h-4 w-4'  fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
                    </button>
                </a>
        </div>
    </div>
  )
}

export default StudioGlimpse