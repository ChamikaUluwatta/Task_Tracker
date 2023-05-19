import TaskForm from './TaskForm';

const NewTaskItem = () => {
    const onSubmitFormHandler = (enteredData) => {
        const todoData = {
            ...enteredData
        }
        console.log(todoData);
    }

    return(
        <div className="TaskItemContainer">
            <TaskForm onsubmitForm = {onSubmitFormHandler}/>
        </div>
    );
}

export default NewTaskItem;