import { Signin, Signup } from "../db/functions.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    await Signin(email, password);
  } catch (error) {
    console.log("error:", error);
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    await Signin(email, password);
  } catch (error) {
    console.log("error:", error);
  }
};
