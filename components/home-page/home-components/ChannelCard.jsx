import React from 'react';

const ChannelCard = ({ props }) => {
  return (
    <div className="flex flex-col items-center text-center tracking-tight gap-3">
      <img src={props?.imageURL} alt="" className="h-16 object-contain" />
      <h3 className="font-semibold text-lg text-[#d9d9d9]">{props?.name}</h3>
      <p className="text-sm md:text-base text-[#808080]">
        {props?.description}
      </p>
    </div>
  );
};

export default ChannelCard;
