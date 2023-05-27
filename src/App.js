import './App.css';
import NewTaskItem from './components/NewTask/NewTaskItem';
import TaskList from './components/Tasks/TaskList';
import Timer from './components/Timer/Timer';
import { useState } from 'react';

function App() {
  
  const tasksItemList = [
    {
      taskId : 1,
      taskName: "Website Redesign (Sample)",
      taskDescription: "Revamp the company's website to improve user experience and enhance visual appeal. This involves updating the design, layout, and content of the website, optimizing it for mobile devices, and integrating new features such as a blog and social media integration.",
      startDate: new Date("2023-01-01"),
      EstimatedDuration: 336
    },
    {
      taskId : 2,
      taskName: "Product Development (Sample)",
      taskDescription: "Develop a new product from ideation to launch. This includes conducting market research, creating product specifications, designing prototypes, testing and iterating, and coordinating with manufacturing partners for production.",
      StartDate: new Date("2023-07-01"),
      EstimatedDuration: 960 
    },
    {
      taskId : 3,
      taskName: "Marketing Campaign (Sample)",
      taskDescription: "Plan and execute a comprehensive marketing campaign to promote a new product release. This involves defining target audience, developing marketing materials, running digital and traditional advertising campaigns, and analyzing campaign performance.",
      StartDate: new Date("2023-08-01"),
      EstimatedDuration: 160 
    },
    {
      taskId : 5,
      taskName: "Data Analysis (Sample)",
      taskDescription: "Analyze customer data to gain insights and identify opportunities for business growth. This includes collecting and cleaning data, performing statistical analysis, creating visualizations, and presenting findings to stakeholders.",
      StartDate: new Date("2023-09-01"),
      EstimatedDuration: 240
    }
  ];
  
  const [tasks, setTasks] = useState(tasksItemList);
  const [isEditing, setIsEditing] = useState(false);
  const [estimatedDuration,setestimatedDuration] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [task, ...prevTasks];
    });
  }

  const onEditing = () => {
    setIsEditing(true);
  }
  
  const offEditing = () => {
    setIsEditing(false);
  }

  const startTimer = (estimatedDuration) => {
    setestimatedDuration(estimatedDuration)
    setIsTimerStarted(true);
  }

  const stopTimer = () => {
    setIsTimerStarted(false);
  }

  const removeTask = (taskId) => {
    console.log("removeTask: " + taskId );
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.taskId != taskId);
    });
    
  }

  const onCloseTimer = () => {
    setIsTimerStarted(false);
  }

  return (
    <div className="App ">
      {(!isEditing && !isTimerStarted ) && <button className="bg-gray-700 w-1/4 mt-5 h-auto p-3 rounded-lg shadow-xl dark:shadow-gray-800 text-white " onClick={onEditing}>Add New Task</button>}
      {(isEditing && !isTimerStarted) && <NewTaskItem  onAddTask = {addTaskHandler} onsubmitclose={offEditing}/>}
      {!isTimerStarted && <TaskList onStartTime={startTimer} onRemoveTask={removeTask} tasks = {tasks} />}
      {isTimerStarted && <Timer onCloseTimer={onCloseTimer} duration={estimatedDuration} onStopTimer={stopTimer}/>}
    </div>
  );
}

export default App;
