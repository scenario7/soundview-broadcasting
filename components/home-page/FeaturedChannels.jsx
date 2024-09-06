import React from 'react';
import ChannelCard from './home-components/ChannelCard';
import { PT_Serif } from 'next/font/google';
import axios from 'axios';
import { BASE_API_URL } from '@/constants';
import { getChannel } from '@/reqs/single_channel';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const getFeatured = async () => {
  try {
    const res = await axios.get(
      `${BASE_API_URL}section?slug=featured&per_page=10`
    );

    const channels = await getChannel(res.data[0].acf.channel);
    return channels;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

const FeaturedChannels = async () => {
  const channels = await getFeatured();
  if (channels === 'error') return "Error";

  return (
    <div className="lg:px-28 px-10 md:px-28 py-10 md:py-20 gap-16 flex flex-col">
      <h2
        className={`${ptSerif.className} text-[#d9d9d9] text-3xl md:text-5xl text-center`}
      >
        Featured Channels
      </h2>
      <div className="flex md:flex-row lg:flex-row flex-col justify-between gap-10">
        {channels.map((channel) => (
          <ChannelCard key={channel.link} props={channel} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedChannels;
