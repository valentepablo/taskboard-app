import React, { useState, createContext } from 'react';
export const BoardContext = createContext();

export const BoardProvider = ({ children }) => {
  const [boards, setBoards] = useState([]);
  const [boardName, setBoardName] = useState('');

  const handleSetBoardName = (e) => {
    setBoardName(e.currentTarget.value);
  };

  const handleNewBoard = () => {
    const newBoard = {
      id: Math.floor(Math.random() * 10000),
      name: boardName ? boardName : 'New list',
      tasks: [],
    };
    setBoards([...boards, newBoard]);
    setBoardName('');
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  const data = {
    boards,
    boardName,
    handleSetBoardName,
    handleNewBoard,
    deleteBoard,
  };

  return <BoardContext.Provider value={data}>{children}</BoardContext.Provider>;
};
