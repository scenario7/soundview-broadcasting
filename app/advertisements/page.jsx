import CustomButton from '@/components/CustomButton';
import CustomFooter from '@/components/CustomFooter';
import HeroTemplate from '@/components/HeroTemplate';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';
import Markdown from 'react-markdown';

const getAdvertisementData = async () => {
  try {
    const res = await axios.get(
      `${BASE_API_URL}section?slug=advertisements&per_page=1`
    );

    return {
      banner: res.data[0].acf.banner,
      description: res.data[0].acf.description,
    };
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

const page = async () => {
  const { banner, description } = await getAdvertisementData();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <HeroTemplate title="Advertisements" image={banner} />
      <div className="py-10 px-10 md:px-28 lg:px-28 flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="text-[#d9d9d9] md:w-3/4 lg:w-3/4 text-center md:text-left">
          <Markdown>{description}</Markdown>
        </div>

        <CustomButton
          link="http://www.soundviewbroadcasting.com/Resources/SVBMediaKit2014-Updated-V2-Small.pdf"
          title="Download Media Kit"
          primary={false}
        />
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
