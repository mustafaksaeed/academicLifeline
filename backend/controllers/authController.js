import { getAuth } from "firebase/auth";
import {
  createUser,
  authenticateToken,
  userExistsCheck,
  createSession,
  verifySession,
} from "../db/functions.js";

import auth from "../firebase/firebase.config.js";

//check is user exists in mongodb and pass the , idk if the user id is the token idk figire that out
// save the uid, and email not password since firebase handles that
export const register = async (req, res) => {
  try {
    const { email, password } = req.body;
    await userExistsCheck(email);
    await createUser(email, password);
  } catch (error) {
    console.log("error:", error);
    res.send(error);
  }
};

export const login = async (req, res) => {
  const { idToken, csrfToken } = req.body;

  if (csrfToken !== req.cookies.csrfToken) {
    res.status(401).send("UNAUTHORIZED REQUEST!");
  }

  try {
    await authenticateToken(auth, idToken);
    await verifySession(auth, csrfToken);
    return await createSession(auth, idToken, res);
  } catch (error) {
    console.log("error", error);
  }
};
