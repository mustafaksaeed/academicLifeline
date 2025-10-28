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
  }
};

export const login = async (req, res) => {
  const { token, csrftoken } = req.body;

  const idToken = token.toString();
  const clientCsrfToken = csrfToken.toString();
  if (clientCsrfToken !== req.cookies.csrfToken) {
    res.status(401).send("UNAUTHORIZED REQUEST!");
    return;
  }

  // Set session expiration to 30 minutes.
  const expiresIn = 60 * 30 * 1000;

  await createSession(res, idToken, expiresIn);
};

/*

app.use(session({
  store: new FirestoreStore({
    database: admin.firestore(), // Use your Firebase Firestore instance
    // ... other options
  }),
  secret: 'your_secret_key', // Replace with a strong secret
  resave: false,
  saveUninitialized: false,
  cookie: { maxAge: 3600000 } // 1 hour
}));


app.get('/profile', (req, res) => {
  if (req.session.uid) {
    res.send(`Welcome, user ${req.session.uid}!`);
  } else {
    res.redirect('/login');
  }
});


*/
