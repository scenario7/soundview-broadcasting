import HeroTemplate from '@/components/HeroTemplate';
import React from 'react';
import CustomFooter from '@/components/CustomFooter';
import axios from 'axios';
import { BASE_API_URL } from '@/constants';
import parse from 'html-react-parser';

const getChannelCountry = async (slug) => {
  try {
    const res = await axios.get(
      BASE_API_URL + `channel-country?slug=${slug}&per_page=1`
    );
    const data = res.data[0];

    const channelCountry = {
      id: data.id,
      title: data.title.rendered,
      imageURL: data.acf.banner,
      link: data.slug,
      channels: data.acf.channels,
      description: parse(data.content.rendered),
    };

    return channelCountry;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

const getChannels = async (post_channels) => {
  const channels = [];

  try {
    for (const post_channel of post_channels) {
      const res = await axios.get(
        BASE_API_URL + `channel?slug=${post_channel.post_name}&per_page=1`
      );
      const data = res.data[0];

      channels.push({
        title: data.title.rendered,
        link: data.slug,
        content: parse(data.content.rendered),
        imageURL: data.acf.banner,
      });
    }

    return channels;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

const Country = async ({ params }) => {
  const channelCountry = await getChannelCountry(params.country);
  const channels = await getChannels(channelCountry.channels);

  return (
    <div className="flex flex-col min-h-screen justify-between">
      <HeroTemplate
        title={channelCountry.title}
        image={channelCountry.imageURL} // Make this random
        description={channelCountry.description}
      />
      <div className="grid grid-cols-1 md:grid-cols-4 py-10 px-10 md:px-28 gap-20">
        {channels.map((channel) => {
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
