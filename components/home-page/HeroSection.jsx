import React from 'react'
import NavBar from '../NavBar'
import { PT_Serif } from 'next/font/google'


const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const HeroSection = () => {
  return (
    <div className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "linear-gradient(to bottom, transparent, #101010), url('https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
      <NavBar className="absolute top-0 left-0 right-0 z-10"/>
      <div className='flex flex-col items-center justify-center h-screen text-[#b4b4b4] mt-28 gap-7 shadow-lg'>
        <h2 className='font-bold'>WE ARE LEADERS IN</h2>
        <h1 className={`${ptSerif.className} text-7xl tracking-tighter`}>Global Media Broadcasting</h1>
        <button className='bg-white text-black p-2 px-4 rounded-xl font-medium'>Explore our Services &rarr;</button>
      </div>
    </div>
  )
}

export default HeroSection
