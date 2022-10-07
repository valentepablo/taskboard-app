import React from 'react';

const Sidebar = () => {
  return (
    <div className='flex flex-col items-center border-r w-52 border-r-zinc-600 bg-zinc-900 text-zinc-200'>
      <div className='flex flex-col items-center gap-4 p-4 border-b border-b-zinc-600'>
        <input
          type='text'
          placeholder='Project name...'
          className='px-2 py-2 text-sm font-normal rounded-md outline-none grow bg-inherit text-zinc-400 ring-1 ring-zinc-600 placeholder:text-zinc-500 focus:ring-sky-400'
        />
        <button className='flex w-full items-center justify-center rounded-md border border-zinc-700 bg-zinc-800 px-1.5 py-2 pr-3 text-sm font-semibold shadow hover:text-sky-400'>
          <span>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                clipRule='evenodd'
              />
            </svg>
          </span>
          Create project
        </button>
      </div>
      <div className='flex flex-col items-center w-full gap-2 py-4'>
        <h2 className='px-4 text-sm font-semibold uppercase'>My projects</h2>
        <ul className='flex flex-col items-center w-full font-medium text-center '>
          <li className='w-full px-4 py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 1
          </li>
          <li className='w-full px-4 py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 2
          </li>
          <li className='w-full px-4 py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 3
          </li>
          <li className='w-full px-4 py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 4
          </li>
          <li className='w-full px-4 py-1 cursor-pointer text-zinc-500 hover:bg-zinc-800 hover:text-sky-400'>
            Project 5
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
