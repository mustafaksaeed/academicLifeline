import express from "express";
// import User from "../models/userModel";
// import Course from "../models/courseModelModel";
import { register, login } from "../controllers/authController.js";

import "dotenv/config";

const router = express.Router();

router.post("/signup", register);

router.post("/login", login);

router.get("/test", (req, res) => {
  res.send("auth route working");
});
export default router;
