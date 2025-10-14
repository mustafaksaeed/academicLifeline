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

export const createUser = async (email, password) => {
  try {
    const newUser = await auth.createUser({
      email: email,
      password: password,
    });

    console.log("user successfully created ", newUser.uid);
  } catch (error) {
    console.log(("error", error));
  }
};

export const userExistsCheck = async (email) => {
  try {
    const user = await auth.getUserByEmail(email);
    console.log(`User already exists:`, user);
  } catch (error) {
    console.error("Error fetching user data:", error);
  }
};

export const authenticateToken = async (token) => {
  try {
    await auth.verifyIdToken(token);
    console.log("token authorized");
  } catch (error) {
    console.log("error authentication token", error);
  }
};

//auth().currentUser.getIdToken. user logs in
