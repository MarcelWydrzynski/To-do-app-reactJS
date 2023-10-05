import React, { useState } from "react";
import "./AddTaskForm.scss";

const AddUserForm = (props) => {
  const [userTaskName, setUserTaskName] = useState("");
  const [userTaskCategory, setUserTaskCategory] = useState("School");
  const [error, setError] = useState(false);

  const handleChange = (event) => {
    setUserTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!userTaskName.trim()) {
      setError(true);
      alert("Task Name cannot be empty!");
      return;
    } else if (userTaskName.length > 50) {
      setError(true);
      alert("Task Name cannot be longer then 30 charcters");
      return;
    }

    setError(false);
    props.onSubmit(userTaskName, userTaskCategory);
    setUserTaskName("");
    setUserTaskCategory("School");
  };

  return (
    <form className="addUserForm-container" onSubmit={handleSubmit}>
      <label htmlFor="taskName">Task Name</label>
      <input
        id="taskName"
        type="text"
        value={userTaskName}
        onChange={handleChange}
      />

      <label htmlFor="category">Choose a Category</label>
      <select
        id="category"
        value={userTaskCategory}
        onChange={(e) => setUserTaskCategory(e.target.value)}
      >
        <option>School</option>
        <option>Home</option>
        <option>Work</option>
      </select>

      <button>+</button>
    </form>
  );
};

export default AddUserForm;
