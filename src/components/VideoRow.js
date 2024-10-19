import React from 'react'

const VideoRow = ({views, subs, description, timestamp, channel, title , image}) => {
  return (
    <div className=' flex max-w-[700px] mt-[70px]'>
        <img 
        className=' rounded-xl w-[446px] h-[300px]'
        src={image} alt=''/>
        <div className=' ml-[14px]'>
            <h3>{title}</h3>
            <p className=' text-[12px] text-[#606060]'>
                {channel} . {" "}
                <span className=' border-gray-500 p-[0.125rem]'>
                    <span className=' font-bold text-blue-700'>{subs}  Subscribers</span>
                </span> {views} views . {timestamp}
            </p>
            <p className=' mt-5 text-[12px] text-[#606060]'>{description}</p>
        </div>
    </div>
  ) 
}

export default VideoRow