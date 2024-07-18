import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'
import { PT_Serif } from 'next/font/google'
import CustomFooter from '@/components/CustomFooter';


const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <HeroTemplate title="Careers" image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className='items-center justify-center h-full col-span-2 flex flex-col gap-10'>
                <h3 className={`${ptSerif.className} text-5xl text-[#d9d9d9]`}>Looking for opportunities?</h3>
                <p className='text-[#d9d9d9] font text-sm'>Sorry we dont have any at the moment please check back later</p>
                <a href="/">
                <button className='bg-white transition-colors hover:bg-[#e4e4e4] text-black px-5 py-2 rounded-full font-medium flex items-center gap-2'>
                Home Page
                <svg className='h-4 w-4' dataSlot="icon" fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </button>
                </a>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page