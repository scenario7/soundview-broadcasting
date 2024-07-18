import CustomFooter from '@/components/CustomFooter'
import HeroTemplate from '@/components/HeroTemplate'
import React from 'react'

const page = () => {
  return (
    <div className='min-h-screen flex flex-col justify-between'>
        <HeroTemplate title="Advertisements" image="https://images.unsplash.com/photo-1541535650810-10d26f5c2ab3?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <div className='py-10 px-28 flex justify-between items-center'>
            <div className='text-[#d9d9d9] w-3/4'>
            SoundView Broadcasting offers unparalleled advertising and sponsorship opportunities for corporate, small and medium-sized businesses. By appealing to some of the most lucrative demographics in the country, clients will and their investment rewarded not only with significant returns, but a strong connection to a loyal customer base. Reach four of the most rapidly growing markets - Indian, Pakistani, Bangladeshi, and Sub-Saharan African - on the leading entertainment and news channels. <br/> <br/> <br/>Download the SoundView Broadcasting media kit for detailed advertising information or visit Channels.
            </div>
            <a href="">
            <button className='bg-[#424242] transition-colors hover:bg-[#646464] text-white px-5 py-2 rounded-full font-medium flex items-center gap-2'>
                      Download Media Kit
                      <svg className='h-4 w-4' dataSlot="icon" fill="none" strokeWidth={2.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                      </svg>
            </button>
            </a>
        </div>
        <CustomFooter/>
    </div>
  )
}

export default page