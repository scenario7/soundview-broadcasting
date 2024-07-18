import CustomFooter from '@/components/CustomFooter'
import HeroTemplate from '@/components/HeroTemplate'
import ServiceCard from '@/components/home-page/home-components/ServiceCard'
import React from 'react'
import { PT_Serif } from 'next/font/google'


const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const studios = [
    {
        studioID : "1a",
        imageURL : "https://firebasestorage.googleapis.com/v0/b/vistara-website.appspot.com/o/svbllc%2FStudio%201A.jpg?alt=media&token=cf6ec8cc-8447-4fcc-bc6f-31624b6fe8af",
        title : "Studio 1A",
        link : "studios/1a"
    },
    {
        studioID : "1b",
        imageURL : "http://www.svbllc.com/Resources/Studio%201B.jpg",
        title : "Studio 1B",
        link : "studios/1b"
    },
    {
        studioID : "2a",
        imageURL : "http://www.svbllc.com/Resources/Studio%201AA.jpg",
        title : "Studio 2A",
        link : "studios/2a"
    },
    {
        studioID : "2b",
        imageURL : "http://www.svbllc.com/Resources/Studio%202B.jpg",
        title : "Studio 2B",
        link : "studios/2b"
    },
    {
        studioID : "3a",
        imageURL : "http://www.svbllc.com/Resources/Studio%203A.jpg",
        title : "Studio 3A",
        link : "studios/3a"
    },
    {
        studioID : "3b",
        imageURL : "http://www.svbllc.com/Resources/Studio%203C.jpg",
        title : "Studio 3B",
        link : "studios/3b"
    },
]

const page = () => {
  return (
    <div>
        <HeroTemplate title="Our Studios" description="Soundview Broadcasting's studios in New York provide state-of-the-art facilities for professional shooting. Equipped with advanced technology and versatile spaces, our studios cater to a wide range of production needs, ensuring high-quality results for all projects." image="https://images.unsplash.com/photo-1485662765173-b710c399cd34?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className='grid grid-cols-4 gap-10 px-28 py-10 items-stretch'>
            {studios.map((studio) => {
                return(
                    <ServiceCard props={studio}/>
                )
            })}
            <div className='items-center justify-center h-full col-span-2 flex flex-col gap-10'>
                <h3 className={`${ptSerif.className} text-6xl text-[#d9d9d9]`}>Book yours now</h3>
                <button className='bg-white transition-colors hover:bg-[#e4e4e4] text-black px-5 py-2 rounded-full font-medium flex items-center gap-2'>
                Get in touch
                <svg className='h-4 w-4' dataSlot="icon" fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
                </button>
            </div>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page