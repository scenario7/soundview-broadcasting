import React from 'react';
import { PT_Serif } from 'next/font/google';
import Marquee from 'react-fast-marquee';
import RegionCard from '@/components/channels/RegionCard';
import CustomFooter from '@/components/CustomFooter';
import HeroTemplate from '@/components/HeroTemplate';
import CustomButton from '@/components/CustomButton';
import getChannelCountries from '@/reqs/getChannelCountries';
import getAllChannels from '@/reqs/getAllChannels';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const ChannelsPage = async () => {
  const channelCountries = await getChannelCountries();
  const channels = await getAllChannels();

  return (
    <div>
      <HeroTemplate
        image="https://images.unsplash.com/photo-1573399054516-90665ecc44be?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        title="Channels"
        description="SoundView Broadcasting offers a viewer something they cannot get from any other media source: a connection home. We foster a sense of unity among immigrant groups - extending a link to their traditions and culture through entertainment, news, and community-oriented programming."
      />
      <Marquee className="flex justify-between py-20">
        {channelCountries &&
          channels.map((channel) => (
            <img
              key={channel.imageURL}
              src={channel.imageURL} // Corrected from image.imageURL to channel.imageURL
              className="h-12 px-10 filter brightness-125"
              alt={channel.name} // Added alt attribute for accessibility
            />
          ))}
      </Marquee>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 md:px-28 py-10 items-stretch">
        {channelCountries &&
          channelCountries.map((region, index) => (
            <RegionCard key={index} props={region} />
          ))}

        <div className="text-center items-center flex flex-col gap-10 py-20 md:col-span-2">
          <h3
            className={`${ptSerif.className} text-4xl md:text-6xl text-[#d9d9d9]`}
          >
            Learn More
          </h3>
          <CustomButton link="/contact" title="Get in Touch" primary={true} />
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default ChannelsPage;
