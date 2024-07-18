import RegionCard from '@/components/channels/RegionCard';
import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'
import { channels } from '@/app/ChannelData';


const page = ({ params }) => {

    const channel = channels.find(channel => channel.channelID === params.channelID);

  return (
    <div className=''>
        <HeroTemplate title={channel.title} image={channels[Math.floor(Math.random() * (channels.length))].imageURL} description={channel.description}/>
        <div className='grid grid-cols-4 py-10 px-28 gap-20'>
            {channel.offerings.map((offering) => {
                return(
                    <div className='flex flex-col items-center gap-3' key={offering.imageURL}>
                        <img src={offering.imageURL} alt="" className='h-24 object-contain'/>
                        <h3 className='text-lg font-semibold'>{offering.name}</h3>
                        <p className='text-[#d9d9d9] text-sm text-center'>{offering.description}</p>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default page