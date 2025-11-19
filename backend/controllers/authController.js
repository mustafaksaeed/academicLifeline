import database from "../db/database.js";
import User from "../models/userModel.js";
import bcrypt from "bcrypt";

export const register = async (req, res) => {
  const { email, password } = req.body;
  try {
    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      return res.status(409).send("User with that email already exists.");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      email: email,
      password: hashedPassword,
    });
    await newUser.save();

    res.status(201).send({
      message: "User created successfully!",
      userId: newUser._id,
    });
  } catch (err) {
    console.error("Sign-up error:", err);
    res.status(500).send("Server error during sign-up.");
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  

  const user = await User.findOne({ email: email });
  if (!user) {
    return res.status(409).send("invalid credentials");
  }

  const passwordMatch = bcrypt.compare(password, user.password);

  if (password) {
    //create sessiom
    res.send("user logged in");
  } else {
    return res.status(409).send("invalid password");
  }
};
