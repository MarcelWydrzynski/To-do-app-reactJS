import React, { useState } from "react";
import './Task.scss'

export const Task = ({ title, category, onDelete }) => {

  const [taskState, setTaskState] = useState('complete')

  const taskStateHandler = () => {
    setTaskState((prevState) => (prevState === 'complete' ? 'uncomplete' : 'complete'));
  };

  return (
    <>
      <li className={`task ${taskState === 'uncomplete' ? 'task-completed' : ''}`}>
        <p className="task-title">{title}</p>
        <p className="task-category">{category}</p>
        <div className="task-buttons-container">
          <button className="task-complete-btn" onClick={taskStateHandler}>✓</button>
          <button className="task-delete-btn" onClick={onDelete}>X</button>
        </div>
      </li>
    </>
  );
};

export default Task;