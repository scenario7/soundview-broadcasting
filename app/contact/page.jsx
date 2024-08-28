import CustomFooter from '@/components/CustomFooter';
import HeroTemplate from '@/components/HeroTemplate';
import React from 'react';

const page = () => {
  return (
    <div className="min-h-screen">
      <HeroTemplate title="Get in Touch" />
      <div className="flex justify-center md:py-10">
        <form className="w-full max-w-4xl p-8 rounded-lg shadow-lg">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-white px-3 mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="appearance-none block w-full text-white border bg-[#393939] border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-600"
                id="name"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block tracking-wide text-white px-3 mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full text-white border bg-[#393939] border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-600"
                id="email"
                type="email"
                placeholder="Your Email"
              />
            </div>
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-white px-3 mb-2"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="appearance-none block w-full text-white border bg-[#393939] border-gray-700 rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:border-gray-600"
                id="phone"
                type="tel"
                placeholder="Your Phone Number"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block tracking-wide text-white px-3 mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="appearance-none block w-full text-white border bg-[#393939] border-gray-700 rounded-xl py-3 px-4 leading-tight focus:outline-none focus:border-gray-600"
                id="message"
                rows="5"
                placeholder="Your Message"
              ></textarea>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="bg-white transition-colors hover:bg-[#e4e4e4] text-black px-5 py-2 rounded-full font-medium flex items-center gap-2">
              Submit
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
          </div>
        </form>
      </div>
      <CustomFooter />
    </div>
  );
};

export default page;
