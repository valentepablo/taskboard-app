import React, { useState, useContext, useEffect } from 'react';
import Task from './Task';
import { BoardContext } from '../context/BoardContext';

const Board = ({ board }) => {
  const { deleteBoard, updateBoard } = useContext(BoardContext);

  const [taskList, setTaskList] = useState([]);
  const [newTask, setNewTask] = useState('');

  useEffect(() => {
    updateBoard(board, taskList);
  }, [taskList]);

  const handleAddTask = () => {
    let taskId = taskList.length > 0 ? parseInt(taskList[taskList.length - 1].id.slice(2)) + 1 : 0;
    const newObjTask = {
      id: `t-${taskId}`,
      name: newTask ? newTask : 'New task',
      completed: false,
    };
    setTaskList([...taskList, newObjTask]);
    setNewTask('');
  };

  const createNewTask = (e) => {
    setNewTask(e.currentTarget.value);
  };

  const deleteTask = (id) => {
    const filteredList = taskList.filter((task) => task.id !== id);
    setTaskList([...filteredList]);
  };

  const editTask = (e) => {
    let taskText = e.currentTarget.closest('li').querySelector('.task-name');
    taskText.removeAttribute('disabled');
    taskText.focus();
    taskText.select();
  };

  const handleTaskNameChange = (e) => {
    const modifiedTask = taskList.find((task) => task.id === e.currentTarget.closest('li').id);
    modifiedTask.name = e.currentTarget.value;
    const modifiedTaskList = taskList.map((task) =>
      task.id === modifiedTask.id ? modifiedTask : task
    );
    setTaskList([...modifiedTaskList]);
  };

  return (
    <div
      id={board.id}
      className='grid-rows-min grid min-w-[288px] self-start rounded-md bg-white shadow'>
      <div
        className={`flex flex-col justify-between gap-2 px-4 py-4 text-xl font-semibold text-slate-700 ${
          taskList.length > 0 ? 'border-b' : ''
        }`}>
        <div className='flex items-center justify-between'>
          <h3 className='cursor-pointer hover:text-sky-400'>{board.name}</h3>
          <button
            onClick={() => deleteBoard(board.id)}
            className='cursor-pointer select-none text-slate-500 hover:text-red-500'>
            <svg
              className='w-6 h-6'
              fill='currentColor'
              viewBox='0 0 20 20'
              xmlns='http://www.w3.org/2000/svg'>
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
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
            className='px-2 py-1 pr-6 text-sm font-normal border outline-none grow bg-slate-50 text-slate-400 hover:bg-slate-100 focus:ring-1 focus:ring-sky-400'
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
