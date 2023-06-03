import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { createTask,deleteTask,getUserTasks } from "../controllers/tasks.js";

const router = express.Router();

/* READ */
router.get("/:userId/tasks", verifyToken, getUserTasks);

/* CREATE */
router.post("/create", verifyToken, createTask);

/* DELETE */
router.delete("/:id", verifyToken, deleteTask);


export default router;
