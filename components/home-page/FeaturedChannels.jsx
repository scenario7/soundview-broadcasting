import React from 'react'
import ChannelCard from './home-components/ChannelCard'
import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

const channels = [
    {
        name : "Sahara One",
        imageURL : "https://d30ny7ijak9wq4.cloudfront.net/s3fs-public/images/channel/2014/04/03/sahar-one-n-1_0_0.jpg",
        description : "dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices"
    },
    {
        name : "Afro TV",
        imageURL : "https://www.ubetoo.com/wp-content/uploads/2020/05/2020-05-14_06-10-40_929614-www.ubetoo.com.PNG",
        description : "dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices"
    },
    {
        name : "RCN",
        imageURL : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/RCN_Corporation_logo.svg/2560px-RCN_Corporation_logo.svg.png",
        description : "dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices"
    },
    {
        name : "PTV Global",
        imageURL : "https://upload.wikimedia.org/wikipedia/en/e/e0/PTV_Global_logo.png",
        description : "dictum non consectetur a erat nam at lectus urna duis convallis convallis tellus id interdum velit laoreet id donec ultrices"
    },
]

const FeaturedChannels = () => {
  return (
    <div className='px-28 py-10 gap-16 flex flex-col'>
        <h2 className={`${ptSerif.className} text-[#d9d9d9] text-3xl text-center`}>Featured Channels</h2>
        <div className='flex justify-between gap-10'>
            {channels.map((channel) => {
                return(
                    <ChannelCard key={channel.imageURL} props={channel}/>
                )
            })}
        </div>
    </div>
  )
}

export default FeaturedChannels