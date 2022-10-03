import React, { useState } from 'react';
import Navbar from './components/Navbar';
import BoardsContainer from './components/BoardsContainer';

function App() {
  const [boards, setBoards] = useState([]);
  const [boardName, setBoardName] = useState('');

  return (
    <>
      <Navbar
        boards={boards}
        setBoards={setBoards}
        setBoardName={setBoardName}
        boardName={boardName}
      />
      <BoardsContainer boards={boards} />
    </>
  );
}

export default App;
