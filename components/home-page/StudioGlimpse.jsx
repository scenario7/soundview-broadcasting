import React from 'react';
import { PT_Serif } from 'next/font/google';
import CustomButton from '../CustomButton';
import getStudio from '@/reqs/getStudio';
import ServiceCard from './home-components/ServiceCard';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const StudioGlimpse = async ({ glimpse, studios }) => {
  return (
    <div className="flex flex-col lg:px-28 px-10 md:px-28 py-10 md:py-20 gap-16">
      <h2
        className={`${ptSerif.className} text-[#d9d9d9] text-3xl md:text-5xl text-center`}
      >
        {glimpse.heading}
      </h2>
      <div className="flex md:flex-row lg:flex-row flex-col gap-10 justify-between items-center">
        {/* {images.map((image) => {
          return <img key={image} src={image} className="h-60 object-cover" />;
        })} */}

        {studios.map((studio) => (
          <ServiceCard key={studio.link} props={studio} />
        ))}
        <CustomButton
          link="/studios"
          title="View all Studios"
          primary={false}
        />
      </div>
    </div>
  );
};

export default StudioGlimpse;
