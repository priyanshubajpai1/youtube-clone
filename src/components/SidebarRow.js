import React from 'react'

const SidebarRow = ({ Icon, title }) => {
    return (
      <div className='flex items-center p-2 cursor-pointer hover:bg-gray-200 rounded-lg'>
        <Icon className='mr-4' />
        <h2>{title}</h2>
      </div>
    );
};
 
export default SidebarRow