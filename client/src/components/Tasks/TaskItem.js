const TaskItem = (props) => {

const removeHandler = (event) => {
  props.onRemove(event.target.id);
};

const startTimerHandler = (event) => {
  props.onstartTimer(event.target.id);
}

  return (
    <div className="lg:flex items-center justify-center w-full">
      {props.items.map((task, index) => {
        return (
        <div className="focus:outline-none lg:w-4/12 lg:mr-7 lg:mb-0 mb-7 bg-white dark:bg-white  p-6 shadow rounded">
          <div className="flex items-center border-b border-gray-200 dark:border-gray-700  pb-6">
            <div className="flex items-start justify-between w-full">
              <div className="pl-3 w-full">
                <p className="focus:outline-none text-xl font-medium leading-5 text-gray-800 dark:text-gray-600 ">
                  {task.taskName}
                </p>
              </div>
              <div
                className="flex flex-row space-x-2"
                role="img"
                aria-label="bookmark"
              >
                <button onClick={startTimerHandler} id={task.EstimatedDuration} className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded">
                  Start
                </button>
                <button onClick={removeHandler} id={task.taskId} className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded">
                  Remove
                </button>
              </div>
            </div>
          </div>
          <div className="px-2">
            <p className="focus:outline-none text-sm leading-5 py-4 text-gray-600 dark:text-gray-600 ">
              {task.taskDescription}
            </p>
          </div>
        </div>);
      })}
    </div>
  );
};

export default TaskItem;
