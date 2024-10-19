import React from 'react'
import { Avatar } from '@mui/material';

const VideoCard = ({image, title, channel, views, timestamp, channelImage, isSidebarVisible}) => {
  return isSidebarVisible ? (
    <div className=' w-[395px] mb-[40px] cursor-pointer'>
        <img src={image} alt=''
        className=' h-[220px] rounded-xl'
        />
        <div className=' flex mt-[10px] pr-[30px]'>
            <Avatar 
            alt={channel}
            src={channelImage}
            />
            <div className=' ml-[15px]'>
                <h4 className=' text-sm mb-[5px]'>{title}</h4>
                <p className=' text-sm text-gray-500'>{channel}</p>
                <p className='text-sm text-gray-500'>{views} . {timestamp}</p>
            </div>
        </div>
    </div>
  ) : (
    <div className=' w-[345px] mb-[40px]'>
        <img src={image} alt=''
        className=' h-[190px] rounded-xl'
        />
        <div className=' flex mt-[10px] pr-[30px]'>
            <Avatar 
            alt={channel}
            src={channelImage}
            />
            <div className=' ml-[15px]'>
                <h4 className=' text-sm mb-[5px]'>{title}</h4>
                <p className=' text-sm text-gray-500'>{channel}</p>
                <p className='text-sm text-gray-500'>{views} . {timestamp}</p>
            </div>
        </div>
    </div>
  )
}

export default VideoCard