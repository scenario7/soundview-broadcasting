import React from 'react';
import ServiceCard from './home-components/ServiceCard';
import { PT_Serif } from 'next/font/google';
import axios from 'axios';
import { BASE_API_URL } from '@/constants';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const getServices = async () => {
  try {
    const res = await axios.get(`${BASE_API_URL}service?per_page=10`);

    let services = [];
    res.data.forEach((service) => {
      services.push({
        title: service.acf.heading,
        imageURL: service.acf.banner,
        link: service.acf.link,
      });
    });

    return services;
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

const Services = async () => {
  const services = await getServices();
  if (services === 'error') return 'Error';

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
