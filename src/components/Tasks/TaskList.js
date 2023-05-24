import TaskItem from "./TaskItem";

const TaskList = (props) => {
  let tempArray = [];

  const onTaskRemove = (id) => {
    props.onRemoveTask(id);
  }

  return (
    <div className="focus:outline-none py-8 w-full ">
      {props.tasks.map((task,index) => {
        tempArray.push(task);

        if (tempArray.length % 2 === 0 || props.tasks.length === 1 || index === props.tasks.length - 1) {
          const items = [...tempArray]; // Create a copy of tempArray
          tempArray = []; // Reset tempArray

          return <TaskItem onRemove={onTaskRemove} items={items} />;
        }

        return null;
      })}
    </div>
  );
};

export default TaskList;
