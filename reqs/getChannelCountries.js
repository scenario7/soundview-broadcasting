import { BASE_API_URL } from '@/constants';
import parse from 'html-react-parser';
import fetchData from './fetchData';

const getChannelCountries = async () => {
  try {
    const res = await fetchData(
      BASE_API_URL + 'channel-country' + '?per_page=10'
    );
    const channelCountries = res.map((channelCountry) => ({
      title: channelCountry.title.rendered,
      imageURL: channelCountry.acf.banner,
      link: channelCountry.slug,
      channels: channelCountry.acf.channels,
      description: parse(channelCountry.content.rendered),
    }));

    return channelCountries;
  } catch (err) {
    return 'error';
  }
};

export default getChannelCountries;
