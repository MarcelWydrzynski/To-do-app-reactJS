import React, { useState } from "react";
import "./AddUserForm.scss";

const addUserForm = (props) => {
  const [userTaskName, setUserTaskName] = useState("");
  const [userTaskCategory, setUserTaskCategory] = useState("");

  const taskNameHandler = (event) => {
    setUserTaskName(event.target.value);
  };

  const taskCategoryHandler = (event) => {
    setUserTaskCategory(event.target.value);
  };

  const submitForm = (event) => {
    event.preventDefault();
    console.log(userTaskName, userTaskCategory);
    props.onSubmit(userTaskName, userTaskCategory)
    setUserTaskName("");
    setUserTaskCategory("");
  };

  return (
    <>
      <form className="addUserForm-container" onSubmit={submitForm}>
        <label htmlFor="Task Name">Task Name</label>
        <input
          id="Task Name"
          type="text"
          onChange={taskNameHandler}
          value={userTaskName}
        />

        <label htmlFor="category">Choose a Category</label>
        <select
          name="categories"
          id="categories"
          onChange={taskCategoryHandler}
          value={userTaskCategory}
        >
          <option>School</option>
          <option>Home</option>
          <option>Work</option>
        </select>
        <button>Add task</button>
      </form>
    </>
  );
};

export default addUserForm;
