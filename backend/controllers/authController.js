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
  // Get the ID token passed and the CSRF token.
  const idToken = req.body.idToken.toString();
  const csrfToken = req.body.csrfToken.toString();
  // Guard against CSRF attacks.
  if (csrfToken !== req.cookies.csrfToken) {
    res.status(401).send("UNAUTHORIZED REQUEST!");
    return;
  }
  // Set session expiration to 5 days.
  const expiresIn = 60 * 60 * 24 * 5 * 1000;
  // Create the session cookie. This will also verify the ID token in the process.
  // The session cookie will have the same claims as the ID token.
  // To only allow session cookie setting on recent sign-in, auth_time in ID token
  // can be checked to ensure user was recently signed in before creating a session cookie.
  auth.createSessionCookie(idToken, { expiresIn }).then(
    (sessionCookie) => {
      // Set cookie policy for session cookie.
      const options = { maxAge: expiresIn, httpOnly: true, secure: true };
      res.cookie("session", sessionCookie, options);
      res.end(JSON.stringify({ status: "success" }));
    },
    (error) => {
      res.status(401).send("UNAUTHORIZED REQUEST!");
    }
  );
};

// Set session expiration to 30 minutes.

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
