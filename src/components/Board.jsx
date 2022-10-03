import React, { useState } from 'react';

const Board = ({ board }) => {
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
      (task) => task.id != parseInt(e.currentTarget.closest('li').id)
    );
    setTaskList([...filteredList]);
  };

  return (
    <div id={board.id} className="shadow rounded-md min-w-[288px] bg-white">
      <div
        className={
          taskList.length > 0
            ? 'flex flex-col justify-between gap-2 px-4 py-4 font-semibold text-xl text-slate-700 border-b'
            : 'flex flex-col justify-between gap-2 px-4 py-4 font-semibold text-xl text-slate-700'
        }>
        <h3 className="cursor-pointer hover:text-sky-400">{board.name}</h3>
        <div className="flex items-center justify-between gap-2">
          <input
            onChange={createNewTask}
            value={newTask}
            placeholder="Nueva tarea..."
            type="text"
            className="text-sm font-normal text-slate-400 py-1 px-2 bg-slate-50 border focus:ring-1 focus:ring-sky-400 hover:bg-slate-100 outline-none grow"
          />
          <button
            onClick={handleAddTask}
            className="select-none text-xl hover:text-sky-400">
            +
          </button>
        </div>
      </div>
      <ul className="text-slate-500 divide-y">
        {taskList.map((task) => {
          return (
            <li
              id={task.id}
              key={task.id}
              className="flex justify-between items-center p-4 hover:bg-slate-50">
              <span>{task.name}</span>
              <span
                onClick={deleteTask}
                className="cursor-pointer select-none hover:text-red-500 text-xl ml-2">
                &times;
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Board;
