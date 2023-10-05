import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import AddTaskForm from "./components/AddTaskForm";
import TaskList from "./components/TaskList";


function App() {
  const [taskList, setTaskList] = useState([]);


  const addTaskHandler = (tName, tCategory) => {
    setTaskList((prevTaskList) => {
      return [
        ...prevTaskList,
        { ID: Math.random(), TaskName: tName, Category: tCategory },
      ];
    });
  };

  const deleteTaskHandler = (updatedTaskList) => {
    setTaskList(updatedTaskList);
  };

  const deleteAllTasksHandler = () => {
    setTaskList([])
  }

  
  

  return (
    <div className="app-container">
      <Header />
      <AddTaskForm onSubmit={addTaskHandler} />
      <TaskList tasks={taskList} onDelete={deleteTaskHandler} clearList={deleteAllTasksHandler}/>
    </div>
  );
}

export default App;
