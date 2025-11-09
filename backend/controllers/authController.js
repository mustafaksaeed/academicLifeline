import {
  createUser,
  authenticateToken,
  userExistsCheck,
  createSession,
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
  // Get the ID token passed and the CSRF token.
  const idToken = req.body.idToken;
  const csrfToken = req.body.csrfToken;
  // Guard against CSRF attacks.
  // if (csrfToken !== req.cookies.csrfToken) {
  //   res.status(401).send("UNAUTHORIZED REQUEST!");
  //   console.log(
  //     "csrfToken,  req.cookies.csrfToken",
  //     csrfToken,
  //     req.cookies.csrfToken
  //   );
  //   return;
  // }

  const expiresIn = 60 * 60 * 1000;

  await createSession(auth, idToken, expiresIn, res);
};
