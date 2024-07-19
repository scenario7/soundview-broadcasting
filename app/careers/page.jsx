import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'
import { PT_Serif } from 'next/font/google'
import CustomFooter from '@/components/CustomFooter';
import CustomButton from '@/components/CustomButton';


const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <HeroTemplate title="Careers" image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2942&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className='items-center justify-center h-full col-span-2 flex flex-col gap-10 px-10 text-center py-10'>
                <h3 className={`${ptSerif.className} text-3xl md:text-5xl text-[#d9d9d9]`}>Looking for opportunities?</h3>
                <p className='text-[#d9d9d9] font text-sm'>Sorry we dont have any at the moment please check back later</p>
                <CustomButton title="Go to Home" link="/" primary={true}/>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page