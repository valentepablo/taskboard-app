import React from 'react';
import Board from './Board';

const BoardsContainer = ({ boards }) => {
  return (
    <div
      className={
        boards.length > 0
          ? 'grid grid-cols-4 gap-10 p-12 bg-slate-50'
          : 'grid gap-10 p-12 bg-slate-50'
      }>
      {boards.length > 0 ? (
        boards.map((board) => {
          return <Board key={board.id} board={board} />;
        })
      ) : (
        <p className="mx-auto  text-xl text-slate-600">
          Create a <strong>new</strong> task board.
        </p>
      )}
    </div>
  );
};

export default BoardsContainer;
