import React from 'react';
import ServiceCard from './home-components/ServiceCard';
import { PT_Serif } from 'next/font/google';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const services = [
  {
    title: 'Broadcasting',
    link: '/studios',
    imageURL:
      'https://images.unsplash.com/photo-1590433333434-09df2b2a35a5?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Production & Post',
    link: '/studios',
    imageURL:
      'https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    title: 'Studios',
    link: '/studios',
    imageURL: 'https://i.imgur.com/7pel8b5.jpg',
  },
  {
    title: 'Additional Services',
    link: '/studios',
    imageURL: 'https://i.imgur.com/by02EQ3.jpg',
  },
];

const Services = () => {
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
