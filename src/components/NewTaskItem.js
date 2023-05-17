import TaskForm from './TaskForm';
import './NewTaskItem.css';

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