import React, { useState } from 'react';
import './ToDoList.css';

function ToDoList() {
  const [task, setTask] = useState('');
  const [taskList, setTaskList] = useState([]);

  const handleTaskChange = (event) => {
    setTask(event.target.value);
  };

  const addTask = () => {
    if (task.trim() !== '') {
      setTaskList([...taskList, { description: task, completed: false }]);
      setTask('');
    }
  };

  const removeTask = (index) => {
    const updatedTaskList = [...taskList];
    updatedTaskList.splice(index, 1);
    setTaskList(updatedTaskList);
  };

  return (
    <div>
      <div className="task-input">
        <input
          type="text"
          value={task}
          onChange={handleTaskChange}
          placeholder="Enter a new task"
        />
        <button onClick={addTask}>Add Task</button>
      </div>
      <ul className="task-list">
        {taskList.map((task, index) => (
          <li key={index}>
            <span
              className={task.completed ? 'completed' : ''}
              onClick={() => {
                const updatedTaskList = [...taskList];
                updatedTaskList[index].completed = !task.completed;
                setTaskList(updatedTaskList);
              }}
            >
              {task.description}
            </span>
            <button className="delete-button" onClick={() => removeTask(index)}>
              &#10006;
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
