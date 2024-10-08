import CustomFooter from '@/components/CustomFooter';
import HeroTemplate from '@/components/HeroTemplate';
import ServiceCard from '@/components/home-page/home-components/ServiceCard';
import React from 'react';
import { PT_Serif } from 'next/font/google';
import CustomButton from '@/components/CustomButton';
import getStudios from '@/reqs/getStudios';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const page = async () => {
  const studios = await getStudios();

  if (studios === 'error') return 'Error';

  return (
    <div>
      <HeroTemplate
        title="Our Studios"
        description="Soundview Broadcasting's studios in New York provide state-of-the-art facilities for professional shooting. Equipped with advanced technology and versatile spaces, our studios cater to a wide range of production needs, ensuring high-quality results for all projects."
        image="https://images.unsplash.com/photo-1485662765173-b710c399cd34?q=80&w=2988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 px-10 md:px-28 py-10 items-stretch">
        {studios.map((studio) => {
          return <ServiceCard props={studio} key={studio.imageURL} />;
        })}
        <div className="items-center justify-center h-full md:col-span-2 flex flex-col gap-10">
          <h3
            className={`${ptSerif.className} text-4xl text-center md:text-6xl text-[#d9d9d9]`}
          >
            Book yours now
          </h3>
          <CustomButton link="/contact" title="Get in Touch" primary={true} />
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
