import React from 'react';
import NavBar from '../NavBar';
import { PT_Serif } from 'next/font/google';
import CustomButton from '../CustomButton';
import DaisyNavbar from '../DaisyNavbar';

const ptSerif = PT_Serif({
  weight: ['400', '700'],
  subsets: ['latin'],
});

const HeroSection = () => {
  return (
    <div
      className="relative h-screen bg-contain bg-center"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #101010, transparent , transparent, #101010 , #101010), url('https://images.unsplash.com/photo-1612544409025-e1f6a56c1152?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')",
      }}
    >
      <DaisyNavbar />
      <div className="flex flex-col items-center justify-center h-screen text-[#b4b4b4] mt-28 gap-5 shadow-lg px-5 md:px-28 lg:px-28">
        <h2 className="font-semibold lg:text-base text-sm text-center text-white">
          WE ARE LEADERS IN
        </h2>
        <h1
          className={`${ptSerif.className} text-5xl md:text-7xl lg:text-7xl tracking-tighter text-center `}
        >
          Global Media Broadcasting
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
