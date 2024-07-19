"use client"
import React, { useState } from 'react'
import logo from '@/images/svb-logo.png'
import Image from 'next/image'
import { MenuIcon, XIcon } from '@heroicons/react/outline'

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className=''>
      <div className={`flex flex-col md:flex-row lg:flex-row justify-between items-center py-5 px-6 transition-all ease-in-out duration-500 ${isOpen && 'justify-between'}`}>
        <div className='flex justify-between items-center w-full md:w-auto'>
          <a href='/'>
            <Image src={logo} className='w-44 object-contain' />
          </a>
          <div className='md:hidden'>
            <button onClick={toggleMenu} className='text-white'>
              {isOpen ? <XIcon className='w-6 h-6' /> : <MenuIcon className='w-6 h-6' />}
            </button>
          </div>
        </div>
        <div className={`${ isOpen ? 'block' : 'hidden' } md:flex flex-col md:flex-row items-center gap-5 text-sm mt-5 md:mt-0 w-full md:w-auto`}>
          <a href="/channels">
            <button className='bg-[#d9d9d9] bg-opacity-30 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
              CHANNELS
            </button>
          </a>
          <a href="/studios">
            <button className='bg-[#d9d9d9] bg-opacity-30 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
              STUDIOS
            </button>
          </a>
          <a href="/advertisements">
            <button className='bg-[#d9d9d9] bg-opacity-30 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
              ADVERTISE
            </button>
          </a>
          <a href="/careers">
            <button className='bg-[#d9d9d9] bg-opacity-30 hover:bg-opacity-50 transition-all py-1 px-3 text-white rounded-lg font-regular'>
              CAREERS
            </button>
          </a>
          <a href="/contact">
            <button className='bg-white py-1 px-3 text-black rounded-lg font-regular'>
              CONTACT US
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default NavBar
