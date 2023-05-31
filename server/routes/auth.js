import express from "express";
import { login,register,test } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login);
router.post("/register", register);
router.get("/test", test);

export default router;
