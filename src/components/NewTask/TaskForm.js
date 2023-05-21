import React, { useState } from "react";

const TaskForm = (props) => {
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [taskDate, setTaskDate] = useState("");
  const [taskDuration, setTaskDuration] = useState("1");

  const handleSubmit = (event) => {
    event.preventDefault();
    const taskData = {
      taskName: taskName,
      taskDescription: taskDescription,
      taskDate: new Date(taskDate),
      taskDuration: taskDuration,
    };
    props.onsubmitForm(taskData);
    setTaskDate("");
    setTaskDescription("");
    setTaskDuration("");
    setTaskName("");
  };

  const handleTaskNameChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleTaskDescriptionChange = (event) => {
    setTaskDescription(event.target.value);
  };

  const handleTaskDateChange = (event) => {
    setTaskDate(event.target.value);
  };

  const handleTaskDurationChange = (event) => {
    setTaskDuration(event.target.value);
  };

  return (
    <div className="flex justify-center rounded-lg items-center mt-3">
      <form
        onSubmit={handleSubmit}
        className="bg-gray-700 w-1/2 h-auto  rounded-lg shadow-xl dark:shadow-gray-800"
      >
        <div className="flex justify-center items-center mt-6 flex-col bg-gray-650">
          <div className="z-0 w-1/4 mb-6 flex justify-center items-center bg-gray-700 ">
            <input
              type="text"
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={taskName}
              required
              onChange={handleTaskNameChange}
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-4 scale-75 top-8 -z-10 origin-center peer-focus:origin-center peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-2"
            >
              Task name
            </label>
          </div>
          <div className="z-0 w-1/2 mb-6 mt-6 flex justify-center items-center bg-gray-700">
            <textarea
              className="resize-y block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              value={taskDescription}
              onChange={handleTaskDescriptionChange}
              required
            />
            <label
              className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-7 scale-75 top-55 -z-10 origin-center peer-focus:origin-center peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:translate-y-12  peer-focus:top-11"
            >
              Task description
            </label>
          </div>

          <div className="flex flex-col mt-3 mb-6 bg-gray-700">
            <input
              type="date"
              className=" bg-gray-50 border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={taskDate}
              onChange={handleTaskDateChange}
            ></input>
            <div className="z-0 flex justify-center items-center mt-2 mb-2 ">
              <label className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
                Start Date
              </label>
            </div>
          </div>
          <div className="flex flex-row h-10 rounded-lg relative bg-transparent mt-1 justify-center mb-4 w-1/4 items-center">
            <input
              type="number"
              className=" bg-gray-50 border text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-grey-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
              min="1"
              value={taskDuration}
              onChange={handleTaskDurationChange}
            ></input>
          </div>
          <div className="z-0 flex justify-center items-center  mb-2 ">
            <label className="bg-blue-100 text-blue-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">
              Duration (hours)
            </label>
          </div>
        </div>
        <button
          type="submit"
          className="mb-5 mt-10 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-1/4 px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default TaskForm;
