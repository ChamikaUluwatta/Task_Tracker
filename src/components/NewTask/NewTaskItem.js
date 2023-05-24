import TaskForm from './TaskForm';

const NewTaskItem = (props) => {
    const onSubmitFormHandler = (enteredData) => {
        const todoData = {
            ...enteredData,
            taskId: Math.random().toString()
        }
        props.onAddTask(todoData);
        props.onsubmitclose();
    }

    const onFormClose = () => {
        props.onsubmitclose();
    }

    return(
        <div className="TaskItemContainer">
            <TaskForm onclose={onFormClose} onsubmitForm = {onSubmitFormHandler}/>
        </div>
    );
}

export default NewTaskItem;