import RegionCard from '@/components/channels/RegionCard';
import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'
import { channels } from '@/app/ChannelData';
import CustomFooter from '@/components/CustomFooter';


const page = ({ params }) => {

    const channel = channels.find(channel => channel.channelID === params.channelID);

  return (
    <div className='flex flex-col min-h-screen justify-between'>
        <HeroTemplate title={channel.title} image={channels[Math.floor(Math.random() * (channels.length))].imageURL} description={channel.description}/>
        <div className='grid grid-cols-1 md:grid-cols-4 py-10 px-10 md:px-28 gap-20'>
            {channel.offerings.map((offering) => {
                return(
                    <div className='flex flex-col items-center gap-3' key={offering.imageURL}>
                        <img src={offering.imageURL} alt="" className='h-24 object-contain'/>
                        <h3 className='text-white text-lg font-semibold'>{offering.name}</h3>
                        <p className='text-[#d9d9d9] text-sm text-center'>{offering.description}</p>
                    </div>
                )
            })}
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page