import React from 'react'
import { PT_Serif } from 'next/font/google'
import CustomButton from '../components/CustomButton';


const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const CustomCTA = () => {
  return (
    <div className='p-10 h-full w-full bg-[#1b1b1b] rounded-2xl text-center items-center flex justify-between flex-col gap-5 md:gap-10 col-span-3'>
        <h3 className={`${ptSerif.className} text-4xl md:text-6xl text-white`}>Learn More</h3>
        <CustomButton link="/contact" title="Get in Touch" primary={true}/>
    </div>
  )
}

export default CustomCTA