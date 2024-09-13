import CustomFooter from '@/components/CustomFooter';
import FeaturedChannels from '@/components/home-page/FeaturedChannels';
import HeroSection from '@/components/home-page/HeroSection';
import Services from '@/components/home-page/Services';
import StudioGlimpse from '@/components/home-page/StudioGlimpse';
import WhoWeAre from '@/components/home-page/WhoWeAre';
import { BASE_API_URL } from '@/constants';
import fetchData from '@/reqs/fetchData';
import getStudio from '@/reqs/getStudio';
import { getChannel } from '@/reqs/singleChannel';

const getHero = async () => {
  try {
    const res = await fetchData(`${BASE_API_URL}section?slug=hero&per_page=1`);

    return res[0].acf;
  } catch (err) {
    return 'error';
  }
};

const getRegions = async () => {
  try {
    const res = await fetchData(
      `${BASE_API_URL}section?slug=regions&per_page=1`
    );

    return res[0].acf;
  } catch (err) {
    return 'error';
  }
};

const getServices = async () => {
  try {
    const res = await fetchData(`${BASE_API_URL}service?per_page=10`);

    let services = [];
    res.forEach((service) => {
      services.push({
        title: service.acf.heading,
        imageURL: service.acf.banner,
        link: service.acf.link,
      });
    });

    return services;
  } catch (err) {
    return 'error';
  }
};

const getFeatured = async () => {
  try {
    const res = await fetchData(
      `${BASE_API_URL}section?slug=featured&per_page=10`
    );

    const channels = await getChannel(res[0].acf.channel);
    return channels;
  } catch (err) {
    return 'error';
  }
};

const getGlimpse = async () => {
  try {
    const res = await fetchData(
      `${BASE_API_URL}section?slug=glimpse&per_page=10`
    );

    return res[0].acf;
  } catch (err) {
    return 'error';
  }
};

export default async function Home() {
  const hero = await getHero();
  const regions = await getRegions();
  const featuredChannels = await getFeatured();
  const services = await getServices();
  const glimpse = await getGlimpse();
  const studios = await getStudio(glimpse.studios);

  return (
    <main className="">
      <HeroSection hero={hero} />
      <WhoWeAre regions={regions} />
      <Services services={services} />
      <FeaturedChannels featuredChannels={featuredChannels} />
      <StudioGlimpse glimpse={glimpse} studios={studios} />

      <CustomFooter />
    </main>
  );
}
