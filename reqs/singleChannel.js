import { BASE_API_URL } from '@/constants';
import parse from 'html-react-parser';
import fetchData from './fetchData';

const getChannelCountry = async (slug) => {
  try {
    const res = await fetchData(
      BASE_API_URL + `channel-country?slug=${slug}&per_page=1`
    );
    const data = res[0];

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
    return 'error';
  }
};

const getChannel = async (post_channels) => {
  const channels = [];

  try {
    for (const post_channel of post_channels) {
      const res = await fetchData(
        BASE_API_URL + `channel?slug=${post_channel.post_name}&per_page=1`
      );

      const data = res[0];

      channels.push({
        title: data.title.rendered,
        link: data.slug,
        content: parse(data.content.rendered),
        imageURL: data.acf.banner,
      });
    }

    return channels;
  } catch (err) {
    return 'error';
  }
};

export { getChannelCountry, getChannel };
