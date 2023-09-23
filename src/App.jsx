import React, { useState } from "react";
import "./App.scss";
import Header from "./components/Header";
import AddUserForm from "./components/addUserForm";
import UserList from "./components/UserList";

function App() {
  const [taskList, setTaskList] = useState([]);

  const addTaskHandler = (tName, tCategory) => {
    setTaskList((prevTaskList) => {
      return [...prevTaskList, { ID: Math.random(), TaskName: tName, Category: tCategory }];
    });
  };

  const deleteTaskHandler = (updatedTaskList) => {
    setTaskList(updatedTaskList);
  };

  return (
    <div className="app-container">
      <Header />
      <AddUserForm onSubmit={addTaskHandler} />
      <UserList tasks={taskList} onDelete={deleteTaskHandler} />
    </div>
  );
}

export default App;
