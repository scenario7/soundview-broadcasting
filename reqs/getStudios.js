import { BASE_API_URL } from '@/constants';
import axios from 'axios';
import parse from 'html-react-parser';

const getStudios = async () => {
  try {
    const res = await axios.get(BASE_API_URL + 'studio' + '?per_page=10');
    const studios = res.data.map((studio) => ({
      id: studio.acf.id,
      title: studio.title.rendered,
      imageURL: studio.acf.banner1,
      link: studio.slug,
      description: parse(studio.content.rendered),
    }));

    return studios;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

export default getStudios;
