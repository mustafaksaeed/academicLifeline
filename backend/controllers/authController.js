import {
  createUser,
  authenticateToken,
  userExistsCheck,
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
  }
};

export const login = async (req, res) => {
  const { token } = req.body;
  try {
    await authenticateToken(token);
    console.log("token authenticated user can login");
  } catch (error) {
    console.log("error:", error);
  }
};
