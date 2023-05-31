import express from "express";
import { getUserTasks } from "../controllers/tasks.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/:userId/tasks", verifyToken, getUserTasks);


export default router;
