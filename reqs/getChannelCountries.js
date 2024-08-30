import { BASE_API_URL } from '@/constants';
import axios from 'axios';
import parse from 'html-react-parser';

const getChannelCountries = async () => {
  try {
    const res = await axios.get(
      BASE_API_URL + 'channel-country' + '?per_page=10'
    );
    const channelCountries = res.data.map((channelCountry) => ({
      id: channelCountry.id,
      title: channelCountry.title.rendered,
      imageURL: channelCountry.acf.banner,
      link: channelCountry.slug,
      channels: channelCountry.acf.channels,
      description: parse(channelCountry.content.rendered),
    }));

    return channelCountries;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

export default getChannelCountries;
