import React, { useState } from "react";
import "./TaskForm.css";

const TaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskTime, setTaskTime] = useState("");
  const [taskDuration, setTaskDuration] = useState("");

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  }

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  }

  const handleTaskDateChange = (event) => {
    setTaskDate(event.target.value);
  }

  const handleTaskTimeChange = (event) => {
    setTaskTime(event.target.value);
  }

  const handleTaskDurationChange = (event) => {
    setTaskDuration(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskData = {
      taskName: taskName,
      taskDescription: taskDescription,
      taskDate: taskDate,
      taskTime: taskTime,
      taskDuration: taskDuration
    }
    props.onsubmitForm(taskData);
    setTaskDate("");
    setTaskDescription("");
    setTaskDuration("");
    setTaskName("");
    setTaskTime("");

  }



  return (
    <div className="TaskFormContainer">
      <form className="TaskForm" onSubmit={handleSubmit}>
        <label htmlFor="taskName">
          Task Name
          <input type="text" placeholder="Enter Here" onChange={handleTaskNameChange} required />
        </label>
        <label htmlFor="taskDescription">
          Task Description
          <textarea placeholder="Enter Here" onChange={handleTaskDescriptionChange} required />
        </label>
        <label htmlFor="taskDate" onChange={handleTaskDateChange}>
          Task Date
          <input type="date" required />
        </label>
        <label htmlFor="taskTime" onChange={handleTaskTimeChange}>
          Task Start Time
          <input type="time" required />
        </label>
        <label htmlFor="taskDuration" onChange={handleTaskDurationChange}>
          Task Duration(/hr)
          <input type="number" placeholder="Enter here" min="1" required />
        </label>
        <input type="submit" value="Add Task" />
      </form>
    </div>
  );
};

export default TaskForm;
