import React from 'react'
import { PT_Serif } from 'next/font/google'
import Image from 'next/image';
import CustomButton from '../CustomButton';

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
            <CustomButton link="/studios" title="View all Studios" primary={false}/>
        </div>
    </div>
  )
}

export default StudioGlimpse