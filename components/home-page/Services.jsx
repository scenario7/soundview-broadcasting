import React from 'react'
import ServiceCard from './home-components/ServiceCard'
import { PT_Serif } from 'next/font/google'

const ptSerif = PT_Serif({
    weight: ['400', '700'],
    subsets: ['latin'],
  });

const services = [ 
    {
        title : "Broadcasting",
        link : "/",
        imageURL : "https://images.unsplash.com/photo-1590433333434-09df2b2a35a5?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title : "Production & Post",
        link : "/",
        imageURL : "https://images.unsplash.com/photo-1590433333434-09df2b2a35a5?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title : "Studios",
        link : "/",
        imageURL : "https://images.unsplash.com/photo-1590433333434-09df2b2a35a5?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
        title : "Additional Services",
        link : "/",
        imageURL : "https://images.unsplash.com/photo-1590433333434-09df2b2a35a5?q=80&w=2133&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    }
]

const Services = () => {
  return (
    <div className='flex flex-col px-28 py-10 gap-16'>
        <h2 className={`${ptSerif.className} text-[#d9d9d9] text-3xl text-center`}>Services</h2>
        <div className="flex justify-between items-center gap-14">
            {services.map((service) => {
                return(
                    <ServiceCard props={service}/>
                )
            })}
        </div>
    </div>
  )
}

export default Services