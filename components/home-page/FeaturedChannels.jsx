import React from 'react'
import ChannelCard from './home-components/ChannelCard'
import { PT_Serif } from 'next/font/google'
import { channels } from '@/app/ChannelData';

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });


const FeaturedChannels = () => {
  return (
    <div className='lg:px-28 px-10 md:px-28 py-10 md:py-20 gap-16 flex flex-col'>
        <h2 className={`${ptSerif.className} text-[#d9d9d9] text-3xl md:text-5xl text-center`}>Featured Channels</h2>
        <div className='flex md:flex-row lg:flex-row flex-col justify-between gap-10'>
            <ChannelCard key={channels[0].link} props={channels[0].offerings[0]}/>
            <ChannelCard key={channels[1].link} props={channels[1].offerings[0]}/>
            <ChannelCard key={channels[2].link} props={channels[2].offerings[0]}/>
            <ChannelCard key={channels[3].link} props={channels[3].offerings[0]}/>
        </div>
    </div>
  )
}

export default FeaturedChannels