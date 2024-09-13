import HeroTemplate from '@/components/HeroTemplate';
import React from 'react';
import CustomFooter from '@/components/CustomFooter';
import { getChannelCountry, getChannel } from '@/reqs/singleChannel';

const Country = async ({ params }) => {
  const channelCountry = await getChannelCountry(params.country);
  const channels = await getChannel(channelCountry.channels);

  if (channels === 'error' || channelCountry === 'error') return 'Error';

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <HeroTemplate
        title={channelCountry.title}
        image={channelCountry.imageURL} // Make this random
        description={channelCountry.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 py-10 px-10 md:px-28 gap-20">
        {channelCountry &&
          channels &&
          channels.map((channel) => {
            return (
              <div
                className="flex flex-col items-center gap-3"
                key={channel.imageURL}
              >
                <img
                  src={channel.imageURL}
                  alt=""
                  className="h-24 object-contain"
                />
                <h3 className="text-white text-lg font-semibold">
                  {channel.title}
                </h3>

                <p className="text-[#d9d9d9] text-sm text-center">
                  {channel.content}
                </p>
              </div>
            );
          })}
      </div>
      <CustomFooter />
    </div>
  );
};

export default Country;
