import { BASE_API_URL } from '@/constants';
import parse from 'html-react-parser';
import fetchData from './fetchData';

const getStudio = async (post_studios) => {
  try {
    let studios = [];

    for (const post_studio of post_studios) {
      const res = await fetchData(
        BASE_API_URL + 'studio' + `?slug=${post_studio.post_name}&per_page=10`
      );

      res.forEach((studio) =>
        studios.push({
          id: studio.acf.id,
          title: studio.title.rendered,
          imageURL: studio.acf.banner1,
          link: studio.slug,
          description: parse(studio.content.rendered),
        })
      );
    }

    return studios;
  } catch (err) {
    return 'error';
  }
};

export default getStudio;
