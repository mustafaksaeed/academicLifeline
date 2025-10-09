import { auth } from "../firebase/firebase.config.js";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
} from "firebase/auth";

export const Signup = async (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const Signin = async (email, password) => {
  return signInWithEmailAndPassword(auth, email, passord);
};
