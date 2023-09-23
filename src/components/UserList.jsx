import React from 'react';
import './Userlist.scss';

const UserList = (props) => {

  const deleteTaskHandler = (taskId) => {
    const updatedTaskList = props.tasks.filter(task => task.ID !== taskId);
    props.onDelete(updatedTaskList);
  }

  return (
    <ul className='user-list'>
      {props.tasks.map((task) => (
        <li key={task.ID}> 
          <p>{task.TaskName}</p> 
          <p>{task.Category}</p> 
          <button onClick={() => deleteTaskHandler(task.ID)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export default UserList;