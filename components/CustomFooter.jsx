import React from 'react'
import logo from '@/images/svb-logo.png'
import Image from 'next/image'
import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

const CustomFooter = () => {
  return (
    <div className='bg-black flex justify-between px-20 py-10 tracking-tight items-center'>
        <a href='/'>
            <Image src={logo} className='w-44 object-contain'/>
        </a>
        <div className='flex gap-8'>
            <div className="flex flex-col">
                <h3 className={`${ptSerif.className} text-white text-lg`}>Contact</h3>
                <div className='text-sm text-[#BBBBBB] flex flex-col justify-between h-full py-2'>
                <p>36-01 37th Ave,<br/>
                Long Island City,<br/>
                NY 11101</p>
                <a href="">info@svbllc.com</a>
                <a href="">(718) 937-8400</a>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className={`${ptSerif.className} text-white text-lg`}>Links</h3>
                <div className='text-sm text-[#BBBBBB] flex flex-col py-2'>
                <a href="">Home</a>
                <a href="">Channels</a>
                <a href="">Services</a>
                <a href="">Advertise</a>
                <a href="">Careers</a>
                <a href="">Contact</a>
                </div>
            </div>
            <div className="flex flex-col">
                <h3 className={`${ptSerif.className} text-white text-lg`}>Socials</h3>
                <div className='text-sm text-[#BBBBBB] flex flex-col py-2'>
                <a href="">Instagram</a>
                <a href="">YouTube</a>
                <a href="">Facebook</a>
                <a href="">LinkedIn</a>

                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomFooter