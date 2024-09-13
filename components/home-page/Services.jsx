import React from 'react';
import ServiceCard from './home-components/ServiceCard';
import { PT_Serif } from 'next/font/google';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const Services = async ({ services }) => {
  return (
    <div className="flex flex-col lg:px-28 px-10 md:px-28 py-10 md:py-20 gap-16">
      <h2
        className={`${ptSerif.className} text-[#d9d9d9] text-3xl md:text-5xl text-center`}
      >
        Services
      </h2>
      <div className="flex flex-col md:flex-row lg:flex-row justify-between items-center gap-14">
        {services.map((service) => {
          return <ServiceCard key={service.imageURL} props={service} />;
        })}
      </div>
    </div>
  );
};

export default Services;
