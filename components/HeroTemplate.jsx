import React from 'react'
import { PT_Serif } from 'next/font/google'
import NavBar from './NavBar';


const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const HeroTemplate = ({ title, image, description }) => {
  return (
    <div className='relative bg-cover bg-left px-28' style={{ backgroundImage: `linear-gradient(to bottom, rgba(16, 16, 16, 1), rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 1)), url('${image}')` }}>
      <NavBar className="absolute top-0 left-0 right-0 z-10" />
      <div className='relative flex flex-col items-start text-[#b4b4b4] gap-7 shadow-lg py-10'>
        <h1 className={`${ptSerif.className} text-7xl w-full text-left tracking-tighter`}>{title}</h1>
        <p className='tracking-tight w-3/4 text-left'>
          {description}
        </p>
      </div>
    </div>
  )
}

export default HeroTemplate
