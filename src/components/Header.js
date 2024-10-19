import React from 'react';
import MenuSharpIcon from '@mui/icons-material/MenuSharp';
import SearchSharpIcon from '@mui/icons-material/SearchSharp';
import VideoCallSharpIcon from '@mui/icons-material/VideoCallSharp';
import NotificationsSharpIcon from '@mui/icons-material/NotificationsSharp';
import MicSharpIcon from '@mui/icons-material/MicSharp';
import { Avatar } from '@mui/material';
import acer from "../assets/acer.jpg";
import "./Header.css";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import DarkModeSharpIcon from '@mui/icons-material/DarkModeSharp';
import LightModeSharpIcon from '@mui/icons-material/LightModeSharp';
 
const Header = ({toggleSidebar, mode, modeChange}) => {
    
    const [inputSearch, setInputSearch] = useState('');
    
  return (
    <div className={`flex items-center justify-between p-2 mx-auto w-full top-0 sticky z-10 ${mode ? 'bg-slate-600' : 'bg-white'}`}>

        <div className='flex space-x-3 sm:space-x-5 ml-2 sm:ml-4'>
            <div onClick={toggleSidebar}>
                <MenuSharpIcon 
                className='cursor-pointer'/>
            </div>
            <Link>
                <img
                className='pb-3 cursor-pointer mt-2 sm:mt-1'
                height={25}
                width={120}
                src='https://upload.wikimedia.org/wikipedia/commons/b/b8/YouTube_Logo_2017.svg' 
                alt='YouTube Logo'
                />
            </Link>
        </div>

        <div className='relative flex items-center justify-center space-x-2 sm:space-x-5 w-full'>
            <div className='relative flex items-center w-[50%]'>
                <input
                onChange={event => setInputSearch(event.target.value)}
                value={inputSearch}
                placeholder='Search'
                className='border border-gray-300 w-full rounded-full h-[40px] pl-3 pr-12 placeholder-shift' 
                type='text'
                />
                <Link to={`/search/${inputSearch}`}>
                    <SearchSharpIcon className='absolute top-1/2 transform -translate-y-1/2 right-3 cursor-pointer'/>
                </Link>
                
            </div>
            <div className='mic flex items-center justify-center rounded-full w-8 h-8 sm:w-10 sm:h-10'>
                <MicSharpIcon className='cursor-pointer'/>
            </div>
        </div>

        <div className='relative flex space-x-2 sm:space-x-5 mr-2 sm:mr-4'>
            {
                mode ? (<LightModeSharpIcon onClick={modeChange} className=' cursor-pointer'/>) : (<DarkModeSharpIcon onClick={modeChange} className=' cursor-pointer'/>)
            }
            <VideoCallSharpIcon className='cursor-pointer'/>
            <NotificationsSharpIcon className='cursor-pointer'/>
            <Avatar
            className='cursor-pointer absolute mt-[-5px]' 
            src={acer}/>
        </div>
        
    </div>
  )
}

export default Header;
