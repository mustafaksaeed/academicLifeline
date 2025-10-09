import express from "express";
import User from "../models/userModel";
import Course from "../models/courseModelModel";
import "dotenv/config";

const router = express.Router();

// eg. import { registerUser, loginUser } from '../controllers/auth.controller';
//now instead of the async await you import the function into that section for the logic
router.post("/signup", async (req, res) => {
  //try and wait here controller logic here
});

router.post("/login", async (req, res) => {
  //try and wait here with fire base controller logic here
});

export default router;
