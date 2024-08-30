import React from 'react';
import logo from '@/images/svb-logo.png';
import Image from 'next/image';
import CustomButton from './CustomButton';
import getStudios from '@/reqs/getStudios';
import getChannelCountries from '@/reqs/getChannelCountries';

const DaisyNavbar = async () => {
  const studios = await getStudios();
  const channels = await getChannelCountries();

  return (
    <div className="text-white navbar bg-base-100 md:px-10 md:py-5">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <a href="/channels">Channels</a>
            </li>
            <li>
              <a href="/studios">Studios</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/advertisements">Advertise</a>
            </li>
          </ul>
        </div>
        <a href="/">
          <Image src={logo} className="w-44 object-contain" />
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <details>
              <summary>
                <a href="/channels">Channels</a>
              </summary>
              <ul className="p-2">
                {channels.map((channel) => {
                  return (
                    <li key={channel.link}>
                      <a href={'/channels/' + channel.link}>{channel.title}</a>
                    </li>
                  );
                })}
              </ul>
            </details>
          </li>
          <li>
            <details>
              <summary>
                <a href="/studios">Studios</a>
              </summary>
              <ul className="p-2">
                {studios.map((studio, i) => (
                  <li key={i}>
                    <a href={'/studios/' + studio.link}>{studio.title}</a>
                  </li>
                ))}
              </ul>
            </details>
          </li>
          <li>
            <a href="/careers">Careers</a>
          </li>
          <li>
            <a href="/advertisements">Advertise</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <CustomButton link="/contact" primary={true} title="Contact Us" />
      </div>
    </div>
  );
};

export default DaisyNavbar;
