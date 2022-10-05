import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'

export const BoardContext = createContext()

export const BoardProvider = (props) => {
    
    const [boards, setBoards] = useState([]);
    const [boardName, setBoardName] = useState('');
    
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

    const deleteBoard = (id) => {
        setBoards(boards.filter(board => board.id !== id ))
    }
    
    return (
        <BoardContext.Provider value={{ boards, boardName, handleSetBoardName, handleNewBoard, deleteBoard }}>
            {props.children}
        </BoardContext.Provider>
    )
}
