import express from "express";
// import User from "../models/userModel";
// import Course from "../models/courseModelModel";
import { register, login } from "../controllers/authController.js";
import "dotenv/config";

const router = express.Router();

// eg. import { registerUser, loginUser } from '../controllers/auth.controller';
//now instead of the async await you import the function into that section for the logic
router.post("/signup", register);

router.post("/login", login);

router.get("/test", (req, res) => {
  res.send("auth route working");
});
export default router;
