import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import SettingsIcon from '@mui/icons-material/Settings';
import FlagIcon from '@mui/icons-material/Flag';
import HelpIcon from '@mui/icons-material/Help';
import FeedbackIcon from '@mui/icons-material/Feedback';
import PlaylistPlaySharpIcon from '@mui/icons-material/PlaylistPlaySharp';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import PodcastsIcon from '@mui/icons-material/Podcasts';
import { PiFilmSlateBold } from "react-icons/pi";
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import YouTubeIcon from '@mui/icons-material/YouTube'; 
import StudioIcon from '@mui/icons-material/Videocam'; 
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic'; 
import ChildFriendlyIcon from '@mui/icons-material/ChildFriendly'; 
import WhatshotIcon from '@mui/icons-material/Whatshot'; 
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'; 
import LiveTvIcon from '@mui/icons-material/LiveTv'; 
import SportsEsportsIcon from '@mui/icons-material/SportsEsports'; 
import NewspaperIcon from '@mui/icons-material/Newspaper'; 
import SportsIcon from '@mui/icons-material/Sports'; 
import SchoolIcon from '@mui/icons-material/School'; 
import FaceIcon from '@mui/icons-material/Face';
import SidebarRow from './SidebarRow';
import Sidebar1 from './Sidebar1';

const Sidebar = ({ isSidebarVisible }) => {
  return isSidebarVisible ? (
    <div className="sidebar h-full p-2 flex flex-col space-y-2 w-[200px] ml-2 fixed hover:overflow-y-auto">
      <SidebarRow Icon={HomeIcon} title="Home" />
      <SidebarRow Icon={OndemandVideoIcon} title="Shorts" />
      <SidebarRow Icon={SubscriptionsIcon} title="Subscriptions" />
      
      <hr className='border-t border-gray-200 my-2' />
      <div className='flex items-center p-2'>
        <h1 className='mr-2'>You</h1>
        <ArrowForwardIosIcon />
      </div>
      <SidebarRow Icon={AccountCircleIcon} title="Your Channel" />
      <SidebarRow Icon={HistoryIcon} title="History" />
      <SidebarRow Icon={PlaylistPlaySharpIcon} title="Playlists" />
      <SidebarRow Icon={OndemandVideoIcon} title="Your Videos" />
      <SidebarRow Icon={WatchLaterIcon} title="Watch Later" />
      <SidebarRow Icon={ThumbUpAltIcon} title="Liked Videos" />
      <SidebarRow Icon={ContentCutIcon} title="Your Clips" />
      <h1>Subscriptions</h1>
      <hr className='border-t border-gray-200 my-2' />
      <h1>Explore</h1>
      <SidebarRow Icon={WhatshotIcon} title="Trending" />
      <SidebarRow Icon={ShoppingBagIcon} title="Shopping" />
      <SidebarRow Icon={LibraryMusicIcon} title="Music" />
      <SidebarRow Icon={PiFilmSlateBold} title="Films" />
      <SidebarRow Icon={LiveTvIcon} title="Live" />
      <SidebarRow Icon={SportsEsportsIcon} title="Gaming" />
      <SidebarRow Icon={NewspaperIcon} title="News" />
      <SidebarRow Icon={SportsIcon} title="Sport" />
      <SidebarRow Icon={SchoolIcon} title="Courses" />
      <SidebarRow Icon={FaceIcon} title="Fashion & Beauty" />
      <SidebarRow Icon={PodcastsIcon} title="Podcasts" />
      <hr className='border-t border-gray-200 my-2' />
      <h2 className='font-medium ml-4'>More from YouTube</h2>
      <SidebarRow Icon={YouTubeIcon} title="YouTube Premium" />
      <SidebarRow Icon={StudioIcon} title="YouTube Studio" />
      <SidebarRow Icon={LibraryMusicIcon} title="YouTube Music" />
      <SidebarRow Icon={ChildFriendlyIcon} title="YouTube Kids" />
      <hr className='border-t border-gray-200 my-2' />
      <SidebarRow Icon={SettingsIcon} title="Settings" />
      <SidebarRow Icon={FlagIcon} title="Report History" />
      <SidebarRow Icon={HelpIcon} title="Help" />
      <SidebarRow Icon={FeedbackIcon} title="Send Feedback" />
    </div>
  ) : (
    <Sidebar1 />
  );
};

export default Sidebar;
