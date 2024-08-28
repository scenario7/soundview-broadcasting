import React from 'react';

const RegionCard = ({ props }) => {
  return (
    <div
      className="relative h-80"
      style={{
        backgroundImage: `linear-gradient(to bottom, #101010, transparent), url(${props.imageURL})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute p-4 tracking-tight">
        <h3 className="text-xl font-medium text-white w-3/4">{props.title}</h3>
      </div>
      <a href={`/channels/${props.link}`}>
        <button className="absolute top-0 right-0 bg-white p-3 text-black rounded-bl-lg">
          <svg
            fill="none"
            strokeWidth={2.5}
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            width="20"
            height="20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
            />
          </svg>
        </button>
      </a>
    </div>
  );
};

export default RegionCard;
