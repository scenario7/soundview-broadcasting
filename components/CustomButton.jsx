import React from 'react';

const CustomButton = ({ link, title, primary }) => {
  return (
    <a href={link}>
      <button
        className={` ${primary ? 'bg-white hover:bg-[#e4e4e4] text-black' : 'bg-[#424242] hover:bg-[#646464] text-white'} transition-colors text-sm md:px-5 lg:px-5 px-3 py-2 rounded-full font-medium flex items-center gap-2`}
      >
        {title}
        <svg
          className="h-4 w-4"
          fill="none"
          strokeWidth={2.5}
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
          />
        </svg>
      </button>
    </a>
  );
};

export default CustomButton;
