import React from 'react';
import { useContext } from 'react';
import { BoardContext } from './Context/BoardContext'

const Navbar = () => {

  const { boardName, handleSetBoardName, handleNewBoard } = useContext(BoardContext)


  return (

    <nav className='flex items-center justify-between px-6 py-4 bg-zinc-900 text-slate-100'>
      <h1 className='text-2xl font-bold'>Taskboard App</h1>
      <ul className='flex items-center gap-3'>

        <li>
          <input
            value={boardName}
            onChange={handleSetBoardName}

            placeholder='Board name...'
            type='text'
            className='px-2 py-2 text-sm font-normal rounded-md outline-none grow bg-inherit text-slate-400 ring-1 ring-zinc-700 placeholder:text-zinc-600 focus:ring-sky-400'

            onKeyDown={(e) => {
              if (e.key === 'Enter') handleNewBoard();
            }}
          />
        </li>
        <li>
          <button
            onClick={handleNewBoard}

            className='flex cursor-pointer items-center rounded-md bg-zinc-200 px-2 py-1.5 pr-4 text-sm font-semibold text-slate-600 hover:text-sky-500'>
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
            New board

          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
