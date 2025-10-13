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
  auth
    .createUser({
      email: email,
      password: password,
    })
    .then((userRecord) => {
      console.log("Successfully created new user:", userRecord.uid);
    })
    .catch((error) => {
      console.log("Error creating new user:", error);
    });
};

export const userExistsCheck = async (email) => {
  auth
    .getUserByEmail(email)
    .then((userRecord) => {
      console.log(`Successfully fetched user data: ${userRecord.toJSON()}`);
    })
    .catch((error) => {
      console.error("Error fetching user data:", error);
    });
};
