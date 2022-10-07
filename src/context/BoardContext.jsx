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
      name: boardName ? boardName : 'Nueva lista',
      tasks: [],
    };
    setBoards([...boards, newBoard]);
    setBoardName('');
    console.log(boards);
  };

  const deleteBoard = (id) => {
    setBoards(boards.filter((board) => board.id !== id));
  };

  return (
    <BoardContext.Provider
      value={{
        boards,
        boardName,
        handleSetBoardName,
        handleNewBoard,
        deleteBoard,
      }}>
      {children}
    </BoardContext.Provider>
  );
};
