import React from 'react'
import logo from '@/images/svb-logo.png'
import Image from 'next/image'

const NavBar = () => {
  return (
    <div className='flex px-10 justify-between items-center py-5'>
        <a href='/'>
            <Image src={logo} className='w-44 object-contain'/>
        </a>
        <div className='flex items-center gap-5 text-sm'>
            <button className='bg-[#d9d9d9] bg-opacity-50 py-1 px-3 text-white rounded-lg font-regular'>
                CHANNELS
            </button>
            <button className='bg-[#d9d9d9] bg-opacity-50 py-1 px-3 text-white rounded-lg font-regular'>
                SERVICES
            </button>
            <button className='bg-white py-1 px-3 text-black rounded-lg font-regular'>
                CONTACT US
            </button>
        </div>
    </div>
  )
}

export default NavBar