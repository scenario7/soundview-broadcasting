import React from 'react'
import NavBar from '@/components/NavBar'

import { PT_Serif } from 'next/font/google'
import Marquee from 'react-fast-marquee';
import ServiceCard from '@/components/home-page/home-components/ServiceCard';
import RegionCard from '@/components/channels/RegionCard';
import CustomFooter from '@/components/CustomFooter';
import HeroTemplate from '@/components/HeroTemplate';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const regions = [ 
    {
        title : "Indian",
        link : "/channels/indian",
        imageURL : "http://www.svbllc.com/Resources/Studio%201A.jpg",
        channels : [
            {
                name : "Sahara One",
                description : "Lorem Ipsum",
                imageURL : ""
            }
        ]
    },
    {
        title : "Pakistani",
        link : "/channels/pakistani",
        imageURL : "http://www.svbllc.com/Resources/Studio%201B.jpg",
        channels : [
            {
                name : "Sahara One",
                description : "Lorem Ipsum",
                imageURL : ""
            }
        ]
    },
    {
        title : "Bangladeshi",
        link : "/channels/bangladeshi",
        imageURL : "http://www.svbllc.com/Resources/Studio%202A.jpg",
        channels : [
            {
                name : "Sahara One",
                description : "Lorem Ipsum",
                imageURL : ""
            }
        ]
    },
    {
        title : "African",
        link : "/channels/african",
        imageURL : "http://www.svbllc.com/Resources/Studio%202B.jpg",
        channels : [
            {
                name : "Sahara One",
                description : "Lorem Ipsum",
                imageURL : ""
            }
        ]
    },
    {
        title : "Greek",
        link : "/channels/greek",
        imageURL : "http://www.svbllc.com/Resources/Studio%203A.jpg",
        channels : [
            {
                name : "Sahara One",
                description : "Lorem Ipsum",
                imageURL : ""
            }
        ]
    },
    {
        title : "Russian",
        link : "/channels/russian",
        imageURL : "http://www.svbllc.com/Resources/Studio%202A.jpg",
        channels : [
            {
                name : "Sahara One",
                description : "Lorem Ipsum",
                imageURL : ""
            }
        ]
    },

]

const logos = [
    "https://upload.wikimedia.org/wikipedia/bn/e/e2/%E0%A6%B8%E0%A6%BE%E0%A6%B9%E0%A6%BE%E0%A6%B0%E0%A6%BE_%E0%A6%93%E0%A6%AF%E0%A6%BC%E0%A6%BE%E0%A6%A8%E0%A7%87%E0%A6%B0_%E0%A6%B2%E0%A7%8B%E0%A6%97%E0%A7%8B_%E0%A7%A8%E0%A7%A6%E0%A7%A7%E0%A7%A6.png",
    "https://static.wikia.nocookie.net/logopedia/images/f/f5/Sahara_Samay_National.png/revision/latest?cb=20111007145118",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Sahara-filmi-tv-logo.svg/886px-Sahara-filmi-tv-logo.svg.png?20100807224611",
    "https://upload.wikimedia.org/wikipedia/commons/4/4e/TV_One_Pakistan_logo.png",
    "https://upload.wikimedia.org/wikipedia/en/thumb/e/ef/NTV_%28Bangladesh%29_logo.svg/1200px-NTV_%28Bangladesh%29_logo.svg.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcThFvDYe3XVqLCsdNRaTzvfI8VO6FKxhIQfKw&s",
    "https://upload.wikimedia.org/wikipedia/en/5/53/ATN_News_Logo_3.GIF",
    "https://image.roku.com/developer_channels/prod/c57648aa7d77829169f39a319710d50307a2854c54d81b61a3668e69d7a14361.png",
    "https://www.ubetoo.com/wp-content/uploads/2020/05/2020-05-14_06-10-40_929614-www.ubetoo.com.PNG",
    "https://naijatv.net/wp-content/uploads/2021/06/cropped-cropped-IMG-20201019-WA0014-1.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLlE2aSWD2oZpvFJwRDl6Z0WN6HdKRNtZ-IA&s",
    "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/RTVI_Logo_magenta_fill_2021.png/400px-RTVI_Logo_magenta_fill_2021.png"
];


const ChannelsPage = () => {
  return (
    <div>
      <HeroTemplate image="https://images.unsplash.com/photo-1573399054516-90665ecc44be?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Channels" description="SoundView Broadcasting offers a viewer something they cannot get from any other media source: a connection home. We foster a sense of unity among immigrant groups - extending a link to their traditions and culture through entertainment, news, and community-oriented programming."/>
      <Marquee className='flex justify-between py-20'>
        {logos.map((image) => {
            return(
                <img src={image} className='h-12 px-10 filter brightness-125'></img>
            )
        })}
      </Marquee>
      <div className='grid grid-cols-4 py-10 gap-10 px-20 pt-5 w-full items-center md:items-start lg:items-start justify-center'>
        {regions.map((region, index) => (
            <RegionCard key={index} props={region} />
        ))}
        <div className='text-center items-center flex flex-col gap-10 py-20 col-span-3'>
        <h3 className={`${ptSerif.className} text-6xl text-[#d9d9d9]`}>Learn More</h3>
        <button className='text-black bg-white px-3 py-2 rounded-full font-medium flex items-center gap-1'>
            Get in Touch
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

export default ChannelsPage
