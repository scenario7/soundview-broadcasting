import React from 'react';
import NavBar from '../NavBar';
import { PT_Serif } from 'next/font/google';
import CustomButton from '../CustomButton';
import DaisyNavbar from '../DaisyNavbar';
import axios from 'axios';
import { BASE_API_URL } from '@/constants';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const getHero = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}section?slug=hero&per_page=1`);

    return res.data[0].acf;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

const HeroSection = async () => {
  const data = await getHero();

  if (data === 'error') return "Error";

  return (
    <div
      className="relative h-screen bg-contain bg-center"
      style={{
        backgroundImage: `linear-gradient(to bottom, #101010, transparent , transparent, #101010 , #101010), url('${data['hero-banner']}')`,
      }}
    >
      <DaisyNavbar />
      <div className="flex flex-col items-center justify-center h-screen text-[#b4b4b4] mt-28 gap-5 shadow-lg px-5 md:px-28 lg:px-28">
        <h2 className="font-semibold lg:text-base text-sm text-center text-white">
          {data['sub-heading']}
        </h2>
        <h1
          className={`${ptSerif.className} text-5xl md:text-7xl lg:text-7xl tracking-tighter text-center `}
        >
          {data['heading']}
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
