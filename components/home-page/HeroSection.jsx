import React from 'react'
import NavBar from '../NavBar'
import { PT_Serif } from 'next/font/google'


const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const HeroSection = () => {
  return (
    <div className='relative h-screen bg-cover bg-center px-5 md:px-28 lg:px-28' style={{ backgroundImage: "linear-gradient(to bottom, #101010, transparent , transparent, #101010 , #101010), url('https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <NavBar className="absolute top-0 left-0 right-0 z-10"/>
      <div className='flex flex-col items-center justify-center h-screen text-[#b4b4b4] mt-28 gap-5 shadow-lg'>
        <h2 className='font-semibold lg:text-md text-sm text-center'>WE ARE LEADERS IN</h2>
        <h1 className={`${ptSerif.className} text-5xl md:text-7xl lg:text-7xl tracking-tighter text-center`}>Global Media Broadcasting</h1>
        <a href="/studios">
        <button className='bg-white transition-colors hover:bg-[#e4e4e4] text-xs md:text-md lg:text-md text-black md:px-5 lg:px-5 px-3 py-2 rounded-full font-medium flex items-center gap-2'>
          Explore our Studios
          <svg className='h-4 w-4'  fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
          </svg>
        </button>
        </a>
      </div>
    </div>
  )
}

export default HeroSection
