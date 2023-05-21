import TaskForm from './TaskForm';

const NewTaskItem = (props) => {
    const onSubmitFormHandler = (enteredData) => {
        const todoData = {
            ...enteredData,
            id: Math.random().toString()
        }
        props.onAddTask(todoData);
    }

    return(
        <div className="TaskItemContainer">
            <TaskForm onsubmitForm = {onSubmitFormHandler}/>
        </div>
    );
}

export default NewTaskItem;