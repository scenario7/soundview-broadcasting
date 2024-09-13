import React from 'react';
import { PT_Serif } from 'next/font/google';
import CustomButton from '../CustomButton';
import DaisyNavbar from '../DaisyNavbar';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const HeroSection = async ({ hero }) => {
  return (
    <div
      className="relative h-screen bg-contain bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, #101010, transparent , transparent, #101010 , #101010), url('${hero['hero-banner']}')`,
      }}
    >
      <DaisyNavbar />
      <div className="flex flex-col items-center justify-center h-screen text-[#b4b4b4] mt-28 gap-5 shadow-lg px-5 md:px-28 lg:px-28">
        <h2 className="font-semibold lg:text-base text-sm text-center text-white">
          {hero['sub-heading']}
        </h2>
        <h1
          className={`${ptSerif.className} text-5xl md:text-7xl lg:text-7xl tracking-tighter text-center `}
        >
          {hero['heading']}
        </h1>
        <CustomButton
          link="/studios"
          title="Explore our Studios"
          primary={true}
        />
      </div>
    </div>
  );
};

export default HeroSection;
