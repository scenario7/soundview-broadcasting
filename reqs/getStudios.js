import { BASE_API_URL } from '@/constants';
import parse from 'html-react-parser';
import fetchData from './fetchData';

const getStudios = async () => {
  try {
    const res = await fetchData(BASE_API_URL + 'studio' + '?per_page=10');
    const studios = res.map((studio) => ({
      id: studio.acf.id,
      title: studio.title.rendered,
      imageURL: studio.acf.banner1,
      link: studio.slug,
      description: parse(studio.content.rendered),
    }));

    return studios;
  } catch (err) {
    return 'error';
  }
};

export default getStudios;
