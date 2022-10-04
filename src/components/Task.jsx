import React from 'react';

const Task = ({ task, deleteTask, editTask, handleTaskNameChange }) => {
  return (
    <li
      id={task.id}
      className='flex items-center justify-between gap-2 p-4 font-medium hover:bg-slate-50'>
      <input
        type='text'
        value={task.name}
        onChange={handleTaskNameChange}
        onBlur={(e) => e.currentTarget.setAttribute('disabled', 'true')}
        onKeyDown={(e) => {
          if (e.key === 'Enter')
            e.currentTarget.setAttribute('disabled', 'true');
        }}
        disabled
        className='flex-grow px-2 py-1 task-name bg-inherit focus:rounded-sm focus:bg-slate-100 focus:text-slate-600 focus:outline-none'></input>
      <div className='flex items-center justify-center gap-1'>
        <div
          onClick={editTask}
          className='cursor-pointer select-none hover:text-sky-400'>
          <svg
            className='w-6 h-6'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'>
            <path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
          </svg>
        </div>
        <div
          onClick={deleteTask}
          className='cursor-pointer select-none hover:text-red-500'>
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
        </div>
      </div>
    </li>
  );
};

export default Task;
