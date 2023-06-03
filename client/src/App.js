import "./App.css";
import NewTaskItem from "./components/NewTask/NewTaskItem";
import TaskList from "./components/Tasks/TaskList";
import Timer from "./components/Timer/Timer";
import Logout from "./components/LogOut/Logout";
import { useEffect, useState } from "react";
import HomePage from "./components/LoginPage/HomePage";
import { useCookies } from "react-cookie";


function App() {
  const tasksItemList = [];

  const [tasks, setTasks] = useState(tasksItemList);
  const [isEditing, setIsEditing] = useState(false);
  const [estimatedDuration, setestimatedDuration] = useState(0);
  const [isTimerStarted, setIsTimerStarted] = useState(false);
  const [isLogin, setIsLogin] = useState(false);
  const [cookie, setCookie] = useCookies(["token"]);

  const handleCookie = (token) => {
    setCookie("token", token, { path: "/" });
  };
  const getUsersTasks = async () => {
    await fetch(`https://task-tracker-hiw0.onrender.com:10000/tasks/${cookie.token}/tasks`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${cookie.token}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setTasks([]);
        data.map((response) => {
          const task = {
            taskId: response.id,
            taskName: response.title,
            taskDescription: response.description,
            startDate: response.date,
            EstimatedDuration: response.duration,
          };
          setTasks((prevTasks) => {
            return [...prevTasks, task];
          }
          );
        });
      }).catch((error) => {
        console.log(error);
      });
  };
  
  const deleteTask = async (taskId) => {
    await fetch(`https://task-tracker-hiw0.onrender.com:10000/tasks/${taskId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${cookie.token}`,
      },
    });
  }
 

  const addTaskHandler = (task) => {
    setTasks((prevTasks) => {
      return [...prevTasks, task];
    });
  };

  const onEditing = () => {
    setIsEditing(true);
  };

  const offEditing = () => {
    setIsEditing(false);
  };

  const startTimer = (estimatedDuration) => {
    setestimatedDuration(estimatedDuration);
    setIsTimerStarted(true);
  };

  const stopTimer = () => {
    setIsTimerStarted(false);
  };

  const removeTask = (taskId) => {
    console.log("removeTask: " + taskId);
    setTasks((prevTasks) => {
      return prevTasks.filter((task) => task.taskId != taskId);
    });
    deleteTask(taskId);
    getUsersTasks();
  };

  const onCloseTimer = () => {
    setIsTimerStarted(false);
  };

  const onLoginSuccefull = () => {
    getUsersTasks();
    setIsLogin(true);
  };

  const logoutHandler = () => {
    setCookie("token", "", { path: "/" });
    window.location.reload();
  };

  return (
    <div className="App ">
      {!isLogin && (
        <HomePage
          onloginSuccefull={onLoginSuccefull}
          onHandleCookies={handleCookie}
          cookie={cookie}
        />
      )}
      {isLogin && (
        <>
          <Logout onLogout={logoutHandler} />
          {!isEditing && !isTimerStarted && (
            <button
              className="bg-gray-700 w-1/4 mt-5 h-auto p-3 rounded-lg dark:shadow-gray-800 text-white "
              onClick={onEditing}
            >
              Add New Task
            </button>
          )}
          {isEditing && !isTimerStarted && (
            <NewTaskItem
              onAddTask={addTaskHandler}
              onsubmitclose={offEditing}
              cookie={cookie}
            />
          )}
          {!isTimerStarted && (
            <TaskList
              onStartTime={startTimer}
              onRemoveTask={removeTask}
              tasks={tasks}
              cookie={cookie}
            />
          )}
          {isTimerStarted && (
            <Timer
              onCloseTimer={onCloseTimer}
              duration={estimatedDuration}
              onStopTimer={stopTimer}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
