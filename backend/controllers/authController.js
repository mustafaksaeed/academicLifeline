import { Signup } from "../db/functions.js";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
//import Sign in function later
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    await Signup(email, password);
    console.log("email,password", email, password);
  } catch (error) {
    console.log("error:", error);
  }
};

export const login = async (req, res) => {
  const auth = getAuth();
  const { email, password } = req.body;
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log("user", user);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
};
