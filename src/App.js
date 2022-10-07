import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import BoardsContainer from './components/BoardsContainer';
import { BoardProvider } from './context/BoardContext';
import ProjectPanelContainer from './components/ProjectPanelContainer';

function App() {
  return (
    <>
      <div className='flex h-screen flex-col'>
        <BoardProvider>
          <Navbar />
          <div className='flex h-full grow overflow-y-hidden'>
            <Sidebar />
            <main className='flex w-full flex-col'>
              <ProjectPanelContainer />
              <BoardsContainer />
            </main>
          </div>
        </BoardProvider>
      </div>
    </>
  );
}

export default App;
