import CustomFooter from '@/components/CustomFooter';
import FeaturedChannels from '@/components/home-page/FeaturedChannels';
import HeroSection from '@/components/home-page/HeroSection';
import Services from '@/components/home-page/Services';
import StudioGlimpse from '@/components/home-page/StudioGlimpse';
import WhoWeAre from '@/components/home-page/WhoWeAre';


export default function Home() {

  return (
    <main className="">
      <HeroSection />
      <WhoWeAre />
      <Services />
      <FeaturedChannels />
      <StudioGlimpse />
      <CustomFooter />
    </main>
  );
}
