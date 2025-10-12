import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import auth from "../firebase/firebase.config.js";

export const Signup = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const Signin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

//create user here

//verify token here
