import React, { useState, useContext } from 'react';
import Task from './Task';
import { BoardContext } from './Context/BoardContext';


const Board = ({ board }) => {

  const { deleteBoard } = useContext(BoardContext)   // FUNCION PARA ELIMINAR TAREA COMPLETA, HEREDADA DE BOARDCONTEXT

  
  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    let lastTaskId = taskList.length > 0 ? taskList[taskList.length - 1].id : 0;
    const newObjTask = {
      id: lastTaskId + 1,
      name: newTask ? newTask : 'Nueva tarea',
      completed: false,
    };

    setTaskList([...taskList, newObjTask]);
    setNewTask('');
  };

  const createNewTask = (e) => {
    setNewTask(e.currentTarget.value);
  };

  const deleteTask = (e) => {
    const filteredList = taskList.filter(
      (task) => task.id !== parseInt(e.currentTarget.closest('li').id)
    );
    setTaskList([...filteredList]);
  };

  const editTask = (e) => {
    let taskText = e.currentTarget.closest('li').querySelector('.task-name');
    taskText.removeAttribute('disabled');
    taskText.focus();
    taskText.select();
  };

  const handleTaskNameChange = (e) => {
    const modifiedTask = taskList.find(
      (task) => task.id === parseInt(e.currentTarget.closest('li').id)
    );
    modifiedTask.name = e.currentTarget.value;
    const modifiedTaskList = taskList.map((task) => {
      return task.id === modifiedTask.id ? modifiedTask : task;
    });
    setTaskList([...modifiedTaskList]);
  };


  return (
    <div
      id={board.id}
      className='grid-rows-min grid min-w-[288px] self-start rounded-md bg-white shadow'>
      <div
        className={`flex flex-col justify-between gap-2 px-4 py-4 text-xl font-semibold text-slate-700 ${taskList.length > 0 ? 'border-b' : ''
          }`}>
        <div className='flex items-center justify-between'>
          <h3 className="cursor-pointer hover:text-sky-400" >{board.name}</h3>
          <button className='cursor-pointer select-none hover:text-red-500'>
            <svg className="w-5 h-5 cursor-pointer" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" onClick={() => deleteBoard(board.id)} /></svg>
          </button>
        </div>
        <div className='relative flex items-center justify-between gap-2'>
          <input
            onKeyDown={(e) => {
              if (e.key === 'Enter') handleAddTask();
            }}
            onChange={createNewTask}
            value={newTask}
            placeholder='Nueva tarea...'
            type='text'
            className='px-2 py-1 text-sm font-normal border outline-none grow bg-slate-50 text-slate-400 hover:bg-slate-100 focus:ring-1 focus:ring-sky-400'
          />
          <button
            onClick={handleAddTask}
            className='absolute inset-y-0 right-0 select-none text-slate-500 hover:text-sky-400'>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z'
                clipRule='evenodd'
              />
            </svg>
          </button>
        </div>
      </div>
      <ul className='divide-y text-slate-500'>
        {taskList.map((task) => {
          return (
            <Task
              key={task.id}
              task={task}
              deleteTask={deleteTask}
              editTask={editTask}
              handleTaskNameChange={handleTaskNameChange}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Board;
