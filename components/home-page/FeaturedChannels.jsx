import ChannelCard from './home-components/ChannelCard';
import { PT_Serif } from 'next/font/google';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const FeaturedChannels = async ({ featuredChannels }) => {
  return (
    <div className="lg:px-28 px-10 md:px-28 py-10 md:py-20 gap-16 flex flex-col">
      <h2
        className={`${ptSerif.className} text-[#d9d9d9] text-3xl md:text-5xl text-center`}
      >
        Featured Channels
      </h2>
      <div className="flex md:flex-row lg:flex-row flex-col justify-between gap-10">
        {featuredChannels.map((channel) => (
          <ChannelCard key={channel.link} props={channel} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedChannels;
