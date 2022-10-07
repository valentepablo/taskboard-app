import React from 'react';

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center py-8 border-r w-52 border-r-zinc-600 bg-zinc-900 text-zinc-200'>
      <div className='flex flex-col items-center w-full gap-4 projects-container '>
        <h2 className='text-sm font-semibold uppercase'>My projects</h2>
        <ul className='flex flex-col items-center w-full font-medium text-center '>
          <li className='w-full py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 1
          </li>
          <li className='w-full py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 2
          </li>
          <li className='w-full py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 3
          </li>
          <li className='w-full py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 4
          </li>
          <li className='w-full py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 5
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
