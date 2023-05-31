import Task from "../models/Task.js";
import User from "../models/User.js";

/* CREATE */
export const createTask = async (req, res) => {
  try {
    const { userId, description, duration, taskName, date } = req.body;
    const user = await User.findById(userId);
    const newTask = new Task({
      userId,
      firstName: user.firstName,
      taskName: taskName,
      description: description,
      duration: duration,
      date: date,
    });
    await newTask.save();

    const task = await Task.find({userId});
    res.status(201).json(task);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

/* READ */

export const getUserTasks = async (req, res) => {
  try {
    const { userId } = req.params;
    const task = await Task.find({ userId });
    res.status(200).json(task);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};


