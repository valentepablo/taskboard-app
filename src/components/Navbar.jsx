import React from 'react';
import { useContext } from 'react';
import { BoardContext } from './Context/BoardContext'

const Navbar = () => {

  const { boardName, handleSetBoardName, handleNewBoard } = useContext(BoardContext)


  return (
    <nav className="flex justify-between px-6 py-4 bg-zinc-900 text-slate-100">
      <h1 className="font-bold">Taskboard App</h1>
      <ul className="flex items-center gap-2">
        <li>
          <input
            value={boardName}
            onChange={handleSetBoardName}
            placeholder="Board name..."
            type="text"
            className="px-2 py-1 text-sm font-normal border outline-none bg-inherit text-slate-400 border-zinc-700 focus:ring-1 focus:ring-sky-400 placeholder:text-zinc-600 grow"
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleNewBoard();
            }}
          />
        </li>
        <li>
          <button
            onClick={handleNewBoard}
            className="cursor-pointer hover:text-sky-400">
            <span className="text-xl font-bold">+</span> New board
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
