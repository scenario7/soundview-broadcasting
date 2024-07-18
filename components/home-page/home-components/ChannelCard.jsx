import React from 'react'

const ChannelCard = ({props}) => {
  return (
    <div className='flex flex-col items-center text-center tracking-tight gap-3'>
        <img src={props?.imageURL} alt="" className="h-16 object-contain"/>
        <h3 className='font-semibold text-lg'>{props?.name}</h3>
        <p className='text-sm'>{props?.description}</p>
    </div>
  )
}

export default ChannelCard