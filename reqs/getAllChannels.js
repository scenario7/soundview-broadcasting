import getChannelCountries from './getChannelCountries';
import { getChannelCountry, getChannels } from './single_channel';

const getAllChannels = async () => {
  try {
    const channelCountries = await getChannelCountries();
    let total_channels = [];

    for (let country of channelCountries) {
      const get_country = await getChannelCountry(country.link);
      const channels = await getChannels(get_country.channels);

      total_channels = total_channels.concat(channels);
    }

    return total_channels;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

export default getAllChannels;
