import React from 'react';

const Navbar = ({ setBoardName, boardName, boards, setBoards }) => {
  const handleSetBoardName = (e) => {
    setBoardName(e.currentTarget.value);
  };

  const handleNewBoard = () => {
    const newBoard = {
      id: Math.floor(Math.random() * 1000),
      name: boardName ? boardName : 'Nueva lista',
      tasks: [],
    };
    setBoards([...boards, newBoard]);
    setBoardName('');
  };
  return (
    <nav className='flex items-center justify-between px-6 py-4 bg-zinc-900 text-slate-100'>
      <h1 className='text-2xl font-bold'>Taskboard App</h1>
      <ul className='flex items-center gap-2'>
        <li>
          <input
            value={boardName}
            onChange={handleSetBoardName}
            placeholder='Board name...'
            type='text'
            className='px-2 py-1 text-sm font-normal border outline-none grow border-zinc-700 bg-inherit text-slate-400 placeholder:text-zinc-600 focus:ring-1 focus:ring-sky-400'
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleNewBoard();
            }}
          />
        </li>
        <li>
          <button
            onClick={handleNewBoard}
            className='cursor-pointer hover:text-sky-400'>
            <span className='text-xl font-bold'>+</span> New board
          </button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
