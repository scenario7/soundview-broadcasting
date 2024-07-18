"use client"
import React from 'react'
import { PT_Serif } from 'next/font/google';
import HeroTemplate from '@/components/HeroTemplate';
import CustomFooter from '@/components/CustomFooter';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const studios = [
    {
        studioID : "1a",
        image1URL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        image2URL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        services : ["Sound Production", "Video Production", "Live Broadcasting"],
        title : "Studio 1A",

    },
    {
        studioID : "1b",
        image1URL : "http://www.svbllc.com/Resources/Studio%201B.jpg",
        image2URL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        services : ["Sound Production", "Video Production", "Live Broadcasting"],
        title : "Studio 1B",

    },
    {
        studioID : "2a",
        image1URL : "http://www.svbllc.com/Resources/Studio%201AA.jpg",
        image2URL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        services : ["sound"],
        title : "Studio 2A",

    },
    {
        studioID : "2b",
        image1URL : "http://www.svbllc.com/Resources/Studio%202B.jpg",
        image2URL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        services : ["sound"],
        title : "Studio 2B",

    },
    {
        studioID : "3a",
        image1URL : "http://www.svbllc.com/Resources/Studio%203A.jpg",
        image2URL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        services : ["sound"],
        title : "Studio 3A",

    },
    {
        studioID : "3b",
        image1URL : "http://www.svbllc.com/Resources/Studio%203C.jpg",
        image2URL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        services : ["sound"],
        title : "Studio 3B",

    },
]

const Page = ({ params }) => {
    const studio = studios.find(studio => studio.studioID === params.studioID);

    if (!studio) {
        return (
            <p>Studio not found</p>
        )
    } else {
        return (
            <div>
                <HeroTemplate 
                    title={studio.title} 
                    description="Soundview Broadcasting's studios in New York provide state-of-the-art facilities for professional shooting. Equipped with advanced technology and versatile spaces, our studios cater to a wide range of production needs, ensuring high-quality results for all projects."
                />
                <div className="flex flex-col items-center gap-20 py-10 justify-between">
                    <div className="flex items-center px-28 gap-10">
                        <img src={studio.image1URL} alt=""  className='rounded-tl-[100px] rounded-br-[100px] w-3/4'/>
                        <div className='flex flex-col items-center text-center'>
                            <h3>Studio {studio.studioID} is equipped for</h3>
                            {studio.services.map((service) => {
                                
                                switch(service){
                                    case "Sound Production":
                                        return(
                                            <div className='flex flex-col items-center gap-2 py-3 text-[#d9d9d9]'>
                                                <svg dataSlot="icon" fill="none" className='h-16 w-16' strokeWidth={1} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z" />
                                                </svg>
                                                <h3>{service}</h3>
                                            </div>
                                        )
                                    case "Video Production":
                                        return(
                                            <div className='flex flex-col items-center gap-2 py-3 text-[#d9d9d9]'>
                                            <svg dataSlot="icon" fill="none" className='h-16 w-16' strokeWidth={1} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5" />
                                            </svg>
                                            <h3>{service}</h3>
                                            </div>  
                                        )
                                    case "Live Broadcasting":
                                        return(
                                            <div className='flex flex-col items-center gap-2 py-3 text-[#d9d9d9]'>
                                            <svg dataSlot="icon" fill="none" className='h-16 w-16' strokeWidth={1} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z" />
                                            </svg>
                                            <h3>{service}</h3>
                                            </div>  
                                        )
                                }
                            })}
                        </div>
                    </div>
                    <div className="flex items-center px-28 gap-10 justify-between">
                    <div className='text-center items-center flex flex-col gap-10 py-20 col-span-3'>
                        <h3 className={`${ptSerif.className} text-6xl text-[#d9d9d9]`}>Learn More</h3>
                        <button className='text-black bg-white px-3 py-2 rounded-full font-medium flex items-center gap-1'>
                            Get in Touch
                            <svg className='h-4 w-4' dataSlot="icon" fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                            </svg>
                        </button>
                    </div>
                        <img src={studio.image2URL} alt=""  className='rounded-tr-[100px] rounded-bl-[100px] w-3/4'/>
                    </div>
                </div>
                <CustomFooter/>
            </div>
        )
    }
}

export default Page
