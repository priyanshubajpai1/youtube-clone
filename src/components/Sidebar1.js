import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import YouTubeIcon from '@mui/icons-material/YouTube';

const Sidebar1 = () => {
  return (
    <div className=' flex flex-col w-[70px] gap-y-8 mt-4 text-center fixed'>
        <div>
            <HomeIcon/>
            <p className=' text-[11px]'>Home</p>
        </div>
        <div>
            <OndemandVideoIcon/>
            <p className=' text-[11px]'>Shorts</p>
        </div>
        <div>
            <SubscriptionsIcon/>
            <p className=' text-[11px]'>Subscriptions</p>
        </div>
        <div>
            <YouTubeIcon/>
            <p className=' text-[11px]'>You</p>
        </div>
    </div>
  )
}

export default Sidebar1;
