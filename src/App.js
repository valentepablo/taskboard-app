import React from 'react';
import Navbar from './components/Navbar';
import BoardsContainer from './components/BoardsContainer';
import { BoardProvider } from './components/Context/BoardContext';

function App() {

  return (
    <>
      <BoardProvider>
          <Navbar />
          <BoardsContainer />
      </BoardProvider>
    </>
  );
}

export default App;