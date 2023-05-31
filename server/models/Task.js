import mongoose from "mongoose";

const taskSchema = mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    taskName: {
      type: String,
      required: true,
    },
    description: String,
    duration: Number,
    date: Object,
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

export default Task;
