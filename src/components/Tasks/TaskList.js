import TaskItem from "./TaskItem";

const TaskList = (props) => {
  let tempArray = [];

  return (
    <div aria-label="group of cards" className="focus:outline-none py-8 w-full">
      {props.tasks.map((task, index) => {
        tempArray.push(task);

        if (tempArray.length % 2 === 0) {
          const items = [...tempArray]; // Create a copy of tempArray
          tempArray = []; // Reset tempArray

          return <TaskItem key={index} items={items} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
