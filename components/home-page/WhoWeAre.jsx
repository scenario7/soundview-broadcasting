import React from 'react';
import { PT_Serif } from 'next/font/google';
import CustomButton from '../CustomButton';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const WhoWeAre = async ({ regions }) => {
  return (
    <div className="flex flex-col items-center justify-center tracking-tight lg:px-28 px-10 md:px-28 gap-20">
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="flex flex-col lg:items-start items-center text-center md:items-start lg:text-left md:text-left lg:w-1/2 md:w-1/2 gap-7">
          <h2
            className={`${ptSerif.className} text-[#d9d9d9] text-3xl md:text-5xl`}
          >
            {regions.heading}
          </h2>
          <p className="text-white text-sm">{regions.description}</p>
          <CustomButton
            link="/channels"
            title="Regions we serve"
            primary={false}
          />
        </div>
        <img
          src="https://www.freeiconspng.com/thumbs/world-map-png/world-map-png-6.png"
          alt=""
          className="md:w-1/3 py-10 md:py-0"
        />
      </div>
    </div>
  );
};

export default WhoWeAre;
