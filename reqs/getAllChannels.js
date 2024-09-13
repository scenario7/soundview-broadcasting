import getChannelCountries from './getChannelCountries';
import { getChannelCountry, getChannel } from './singleChannel';

const getAllChannels = async () => {
  try {
    const channelCountries = await getChannelCountries();
    let total_channels = [];
    for (let country of channelCountries) {
      const get_country = await getChannelCountry(country.link);
      const channels = await getChannel(get_country.channels);
      total_channels = total_channels.concat(channels);
    }

    // Remove duplicates and 'error' entries
    const uniqueChannels = total_channels.reduce((acc, channel) => {
      if (typeof channel === 'object' && channel.title) {
        acc.set(channel.title, channel);
      }
      return acc;
    }, new Map());

    return Array.from(uniqueChannels.values());
  } catch (err) {
    return 'error';
  }
};

export default getAllChannels;
