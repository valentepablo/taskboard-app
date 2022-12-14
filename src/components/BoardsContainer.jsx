import React, { useContext } from 'react';
import { BoardContext } from '../context/BoardContext';
import Board from './Board';

const BoardsContainer = () => {
  const { boards } = useContext(BoardContext);

  return (
    <div
      className={`scrollbar grid flex-1 gap-10 overflow-y-auto overflow-x-hidden bg-zinc-100 p-12 ${
        boards.length > 0 ? 'grid-cols-4 content-start' : ''
      }`}>
      {boards.length > 0 ? (
        boards.map((board) => {
          return <Board key={board.id} board={board} />;
        })
      ) : (
        <p className='mx-auto text-xl text-slate-600'>
          Create a <strong className='text-sky-500'>new</strong> task board.
        </p>
      )}
    </div>
  );
};

export default BoardsContainer;
