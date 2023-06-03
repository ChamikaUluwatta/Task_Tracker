import Task from "../models/Task.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

/* CREATE */
export const createTask = async (req, res) => {
  try {
    const { userId, taskDescription, taskDuration, taskName, taskDate } = req.body;
    const userid = jwt.verify(userId, process.env.JWT_SECRET);
    const newTask = new Task({
      userId:userid.id,
      taskName: taskName,
      description: taskDescription,
      duration: taskDuration,
      date: taskDate,
    });
    await newTask.save();

    const task = await Task.find({ userId: userId.id });
    res.status(201).json(task);
  } catch (err) {
    res.status(409).json({ message: err.message});
  }
};

/* READ */

export const getUserTasks = async (req, res) => {
  try {
    const userId = jwt.verify(req.params.userId, process.env.JWT_SECRET);
    const task = await Task.find({ userId: userId.id });
    const filteredTasks = task.map(task => ({
      id: task._id,
      title: task.taskName,
      description: task.description,
      duration: task.duration,
      date: task.date,
    }));

    res.status(200).json(filteredTasks);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

/* DELETE */

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;
    await Task.findByIdAndRemove(id);
    res.json({ message: "Task deleted successfully." });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
}

