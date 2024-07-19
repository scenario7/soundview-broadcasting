import React from 'react'
import NavBar from '@/components/NavBar'
import { channels } from '../ChannelData';

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

const ChannelsPage = () => {
  return (
    <div>
      <HeroTemplate image="https://images.unsplash.com/photo-1573399054516-90665ecc44be?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" title="Channels" description="SoundView Broadcasting offers a viewer something they cannot get from any other media source: a connection home. We foster a sense of unity among immigrant groups - extending a link to their traditions and culture through entertainment, news, and community-oriented programming."/>
      <Marquee className="flex justify-between py-20">
        {channels && channels.map((region) =>
          region.offerings ? (
            region.offerings.map((channel) => (
              <img
                key={channel.imageURL}
                src={channel.imageURL} // Corrected from image.imageURL to channel.imageURL
                className="h-12 px-10 filter brightness-125"
                alt={channel.name} // Added alt attribute for accessibility
              />
            ))
          ) : null
        )}
      </Marquee>
      <div className='grid grid-cols-4 py-10 gap-10 px-20 pt-5 w-full items-center md:items-start lg:items-start justify-center'>
        {channels && channels.map((region, index) => (
            <RegionCard key={index} props={region}/>
        ))
        }
        <div className='text-center items-center flex flex-col gap-10 py-20 col-span-2'>
        <h3 className={`${ptSerif.className} text-6xl text-[#d9d9d9]`}>Learn More</h3>
        <a href="/contact">
        <button className='text-black bg-white px-3 py-2 rounded-full font-medium flex items-center gap-1'>
            Get in Touch
            <svg className='h-4 w-4'  fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
            </svg>
        </button>
        </a>
    </div>
    </div>
    
    <CustomFooter/>
    </div>
  )
}

export default ChannelsPage
