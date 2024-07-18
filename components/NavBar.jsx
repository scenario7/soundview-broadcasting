import React from 'react'
import logo from '@/images/svb-logo.png'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='flex justify-between items-center py-5'>
        <a href='/'>
            <Image src={logo} className='w-44 object-contain'/>
        </a>
        <div className='flex items-center gap-5 text-sm'>
            <a href="/channels">
            <button className='bg-[#d9d9d9] bg-opacity-20 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
                CHANNELS
            </button>
            </a>
            <a href="/studios">
            <button className='bg-[#d9d9d9] bg-opacity-20 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
                STUDIOS
            </button>
            </a>
            <a href="/advertisements">
            <button className='bg-[#d9d9d9] bg-opacity-20 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
                ADVERTISE
            </button>
            </a>
            <a href="/careers">
            <button className='bg-[#d9d9d9] bg-opacity-20 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
                CAREERS
            </button>
            </a>
            <button className='bg-white py-1 px-3 text-black rounded-lg font-regular'>
                CONTACT US
            </button>
        </div>
    </div>
  )
}

export default NavBar