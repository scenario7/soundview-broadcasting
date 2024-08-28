import CustomButton from '@/components/CustomButton';
import CustomFooter from '@/components/CustomFooter';
import HeroTemplate from '@/components/HeroTemplate';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      <HeroTemplate
        title="Advertisements"
        image="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <div className="py-10 px-10 md:px-28 lg:px-28 flex flex-col md:flex-row lg:flex-row justify-between items-center">
        <div className="text-[#d9d9d9] md:w-3/4 lg:w-3/4 text-center md:text-left">
          SoundView Broadcasting offers unparalleled advertising and sponsorship
          opportunities for corporate, small and medium-sized businesses. By
          appealing to some of the most lucrative demographics in the country,
          clients will and their investment rewarded not only with significant
          returns, but a strong connection to a loyal customer base. Reach four
          of the most rapidly growing markets - Indian, Pakistani, Bangladeshi,
          and Sub-Saharan African - on the leading entertainment and news
          channels. <br /> <br /> <br />
          Download the SoundView Broadcasting media kit for detailed advertising
          information or visit Channels.
        </div>
        <CustomButton
          link="http://www.soundviewbroadcasting.com/Resources/SVBMediaKit2014-Updated-V2-Small.pdf"
          title="Download Media Kit"
          primary={false}
        />
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
