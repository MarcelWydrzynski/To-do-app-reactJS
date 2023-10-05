import React from "react";
import "./TaskList.scss";
import Task from "./Task";

const TaskList = (props) => {
  const deleteTaskHandler = (taskId) => {
    const updatedTaskList = props.tasks.filter((task) => task.ID !== taskId);
    props.onDelete(updatedTaskList);
    console.log(taskId);
  };

  return (
    <>
    <ul className="task-list" id="style-2">
      <h3 className="task-list-title">Uncompleted Tasks</h3>
      {props.tasks.length === 0 ? (
        <p>No tasks have been added :(</p>
      ) : (
        props.tasks.map((task) => (
          <Task
            key={task.ID}
            title={task.TaskName}
            category={task.Category}
            onDelete={() => deleteTaskHandler(task.ID)}
            props={task.ID}
          />
        ))
      )}
    </ul>
    <button className="task-list-btn" onClick={props.clearList}>Delete all tasks</button>
    </>
  );
};

export default TaskList;
