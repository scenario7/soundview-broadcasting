import React from 'react';
import { PT_Serif } from 'next/font/google';
import DaisyNavbar from './DaisyNavbar';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const HeroTemplate = ({ title, image, description }) => {
  return (
    <div
      className=" bg-cover bg-left"
      style={{
        backgroundImage: `linear-gradient(to bottom, rgba(16, 16, 16, 1), rgba(16, 16, 16, 0.8), rgba(16, 16, 16, 1)), url('${image}')`,
      }}
    >
      <DaisyNavbar />
      <div className=" flex flex-col items-start text-[#b4b4b4] gap-7 shadow-lg py-10 lg:px-28 px-10 md:px-28">
        <h1
          className={`${ptSerif.className} lg:text-7xl text-5xl md:text-7xl w-full text-left tracking-tighter`}
        >
          {title}
        </h1>
        <p className="tracking-tight lg:w-3/4 md:w-3/4 text-left">
          {description}
        </p>
      </div>
    </div>
  );
};

export default HeroTemplate;
