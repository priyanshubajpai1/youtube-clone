import React from 'react'
import { Avatar } from '@mui/material';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';

const ChannelRow = ({image, channel, subs, noOfVideos, description, verified}) => {
  return (
    <div className='flex items-center w-[70%] mx-auto'>
        <Avatar
        className=' channelrowlogo'
        alt={channel}
        src={image}
        />
        <div className='flex flex-col color-[#606060] text-xs'>
            <h4 className=' flex items-center justify-between'>{channel} {verified && <CheckCircleOutlineOutlinedIcon/>}</h4>
            <p>
                {subs} subscribers . {noOfVideos} videos
            </p>
            <p>
                {description}
            </p>
        </div>
    </div>
  )
}

export default ChannelRow