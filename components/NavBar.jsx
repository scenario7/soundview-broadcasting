'use client';
import React, { useState } from 'react';
import logo from '@/images/svb-logo.png';
import Image from 'next/image';
import { MenuIcon, XIcon } from '@heroicons/react/outline';

const buttons = [
  {
    title: 'Channels',
    link: '/channels',
    primary: true,
  },
  {
    title: 'Studios',
    link: '/studios',
    primary: true,
  },
  {
    title: 'Advertise',
    link: '/advertisements',
    primary: true,
  },
  {
    title: 'Careers',
    link: '/careers',
    primary: true,
  },
  {
    title: 'Contact Us',
    link: '/contact',
    primary: false,
  },
];

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div
        className={`flex flex-col md:flex-row lg:flex-row justify-between items-center py-5 px-3 md:px-6 transition-all ease-in-out duration-500 `}
      >
        <div className="flex justify-between items-center w-full md:w-auto">
          <a href="/">
            <Image src={logo} className="w-44 object-contain" />
          </a>
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-white">
              {isOpen ? (
                <XIcon className="w-6 h-6" />
              ) : (
                <MenuIcon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
        <div className="hidden md:flex flex-col md:flex-row items-center gap-5 text-sm mt-5 md:mt-0 w-full md:w-auto ">
          {buttons.map((button) => {
            if (button.primary) {
              return (
                <a href={button.link} key={button.title}>
                  <button className="bg-[#d9d9d9] uppercase bg-opacity-60 backdrop-blur font-medium w-full h-7 text-xs md:text-md md:w-auto md:bg-opacity-30 hover:bg-opacity-50 m-1 md:m-0 transition-all py-1 md:px-3 text-white rounded-lg font-regular">
                    {button.title}
                  </button>
                </a>
              );
            } else {
              return (
                <a href={button.link} key={button.title}>
                  <button className="bg-white text-xs md:text-md py-1 w-full md:w-auto h-7 px-3 font-medium uppercase m-2 md:m-0 text-black rounded-lg">
                    {button.title}
                  </button>
                </a>
              );
            }
          })}
        </div>
      </div>
      <div
        className={`absolute left-0 right-0 bg-opacity-80 p-5 flex flex-col items-center transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-screen opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        {buttons.map((button) => {
          if (button.primary) {
            return (
              <a href={button.link} key={button.title} className="w-full">
                <button className="bg-[#d9d9d9] uppercase bg-opacity-60 backdrop-blur font-medium w-full h-10 text-xs md:text-md md:w-auto md:bg-opacity-30 hover:bg-opacity-50 my-2 transition-all py-1 md:px-3 text-white rounded-lg font-regular">
                  {button.title}
                </button>
              </a>
            );
          } else {
            return (
              <a href={button.link} key={button.title} className="w-full">
                <button className="bg-white text-xs md:text-md py-1 w-full md:w-auto h-10 px-3 font-medium uppercase my-2 text-black rounded-lg">
                  {button.title}
                </button>
              </a>
            );
          }
        })}
      </div>
    </div>
  );
};
export default NavBar;
