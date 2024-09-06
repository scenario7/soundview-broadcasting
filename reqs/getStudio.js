import { BASE_API_URL } from '@/constants';
import axios from 'axios';
import parse from 'html-react-parser';

const getStudio = async (post_studios) => {
  try {
    let studios = [];

    for (const post_studio of post_studios) {
      const res = await axios.get(
        BASE_API_URL + 'studio' + `?slug=${post_studio.post_name}&per_page=10`
      );

      res.data.forEach((studio) =>
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
    console.log(err);
    return 'error';
  }
};

export default getStudio;
