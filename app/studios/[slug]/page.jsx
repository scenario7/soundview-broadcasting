import React from 'react';
import { PT_Serif } from 'next/font/google';
import HeroTemplate from '@/components/HeroTemplate';
import CustomFooter from '@/components/CustomFooter';
import CustomButton from '@/components/CustomButton';
import { BASE_API_URL } from '@/constants';
import axios from 'axios';
import parse from 'html-react-parser';
import Image from 'next/image';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const getStudio = async (slug) => {
  try {
    const res = await axios.get(
      `${BASE_API_URL}studio?slug=${slug}&per_page=1`
    );
    const studio = res.data.map((studio) => ({
      studioID: studio.acf.id,
      title: studio.title.rendered,
      image1URL: studio.acf.banner1,
      image2URL: studio.acf.banner2,
      link: studio.slug,
      services: studio.acf.services,
      description: parse(studio.content.rendered),
    }));

    return studio[0];
  } catch (err) {
    console.log(err);
    return 'error';
  }
};

const page = async ({ params }) => {
  const studio = await getStudio(params.slug);

  if (!studio || studio == undefined) return <p>Studio not found</p>;

  return (
    <div>
      <HeroTemplate title={studio.title} description={studio.description} />
      <div className="flex flex-col items-center gap-20 py-10 justify-between">
        <div className="flex md:flex-row flex-col-reverse items-center px-10 md:px-28 gap-10">
          <img
            src={studio.image1URL}
            alt="img1"
            className="md:rounded-tl-[100px] rounded-tl-xl rounded-br-xl md:rounded-br-[100px] w-[80%]"
          />
          <div className="flex flex-col items-center text-center gap-5">
            <h3 className="text-white">
              Studio <span className="uppercase">{studio.studioID}</span> is
              equipped for
            </h3>
            <div className="flex md:flex-col gap-3">
              {studio &&
                studio.services &&
                studio.services.map((service) => {
                  switch (service) {
                    case 'Sound Production':
                      return (
                        <div
                          className="flex flex-col items-center gap-2 py-3 text-[#d9d9d9]"
                          key={service}
                        >
                          <svg
                            fill="none"
                            className="md:h-16 md:w-16 h-10 w-10"
                            strokeWidth={1}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m9 9 10.5-3m0 6.553v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 1 1-.99-3.467l2.31-.66a2.25 2.25 0 0 0 1.632-2.163Zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 0 1-1.632 2.163l-1.32.377a1.803 1.803 0 0 1-.99-3.467l2.31-.66A2.25 2.25 0 0 0 9 15.553Z"
                            />
                          </svg>
                          <h3 className="text-sm md:text-md">{service}</h3>
                        </div>
                      );
                    case 'Video Production':
                      return (
                        <div
                          className="flex flex-col items-center gap-2 py-3 text-[#d9d9d9]"
                          key={service}
                        >
                          <svg
                            fill="none"
                            className="md:h-16 md:w-16 h-10 w-10"
                            strokeWidth={1}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 0 1-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75 0V5.625m0 12.75v-1.5c0-.621.504-1.125 1.125-1.125m18.375 2.625V5.625m0 12.75c0 .621-.504 1.125-1.125 1.125m1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125m0 3.75h-1.5A1.125 1.125 0 0 1 18 18.375M20.625 4.5H3.375m17.25 0c.621 0 1.125.504 1.125 1.125M20.625 4.5h-1.5C18.504 4.5 18 5.004 18 5.625m3.75 0v1.5c0 .621-.504 1.125-1.125 1.125M3.375 4.5c-.621 0-1.125.504-1.125 1.125M3.375 4.5h1.5C5.496 4.5 6 5.004 6 5.625m-3.75 0v1.5c0 .621.504 1.125 1.125 1.125m0 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125m1.5-3.75C5.496 8.25 6 7.746 6 7.125v-1.5M4.875 8.25C5.496 8.25 6 8.754 6 9.375v1.5m0-5.25v5.25m0-5.25C6 5.004 6.504 4.5 7.125 4.5h9.75c.621 0 1.125.504 1.125 1.125m1.125 2.625h1.5m-1.5 0A1.125 1.125 0 0 1 18 7.125v-1.5m1.125 2.625c-.621 0-1.125.504-1.125 1.125v1.5m2.625-2.625c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125M18 5.625v5.25M7.125 12h9.75m-9.75 0A1.125 1.125 0 0 1 6 10.875M7.125 12C6.504 12 6 12.504 6 13.125m0-2.25C6 11.496 5.496 12 4.875 12M18 10.875c0 .621-.504 1.125-1.125 1.125M18 10.875c0 .621.504 1.125 1.125 1.125m-2.25 0c.621 0 1.125.504 1.125 1.125m-12 5.25v-5.25m0 5.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125m-12 0v-1.5c0-.621-.504-1.125-1.125-1.125M18 18.375v-5.25m0 5.25v-1.5c0-.621.504-1.125 1.125-1.125M18 13.125v1.5c0 .621.504 1.125 1.125 1.125M18 13.125c0-.621.504-1.125 1.125-1.125M6 13.125v1.5c0 .621-.504 1.125-1.125 1.125M6 13.125C6 12.504 5.496 12 4.875 12m-1.5 0h1.5m-1.5 0c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125M19.125 12h1.5m0 0c.621 0 1.125.504 1.125 1.125v1.5c0 .621-.504 1.125-1.125 1.125m-17.25 0h1.5m14.25 0h1.5"
                            />
                          </svg>
                          <h3 className="text-sm md:text-md">{service}</h3>
                        </div>
                      );
                    case 'Live Broadcasting':
                      return (
                        <div
                          className="flex flex-col items-center gap-2 py-3 text-[#d9d9d9]"
                          key={service}
                        >
                          <svg
                            fill="none"
                            className="md:h-16 md:w-16 h-10 w-10"
                            strokeWidth={1}
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                            aria-hidden="true"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="m15.75 10.5 4.72-4.72a.75.75 0 0 1 1.28.53v11.38a.75.75 0 0 1-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25h-9A2.25 2.25 0 0 0 2.25 7.5v9a2.25 2.25 0 0 0 2.25 2.25Z"
                            />
                          </svg>
                          <h3 className="text-sm md:text-md">{service}</h3>
                        </div>
                      );
                  }
                })}
            </div>
          </div>
        </div>
        <div className="flex md:flex-row flex-col-reverse items-center px-5 md:px-28 gap-10 justify-between">
          <div className="p-10 h-full w-[3/12] bg-[#1b1b1b] rounded-2xl text-center items-center flex justify-between flex-col gap-5 md:gap-10 col-span-3">
            <h3
              className={`${ptSerif.className} text-4xl md:text-6xl text-white`}
            >
              Learn More
            </h3>
            <CustomButton link="/contact" title="Get in Touch" primary={true} />
          </div>
          {studio.image2URL && (
            <img
              src={studio.image2URL}
              alt=""
              className="md:rounded-tl-[100px] rounded-tl-xl rounded-br-xl md:rounded-br-[100px] w-9/12"
            />
          )}
        </div>
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
