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
    const verifyToken = await authenticateToken(token);
    req.session.userId = verifyToken;
    req.session.isLoggedIn = true;
    console.log("login successful", session);
    res.status(200).json({ message: "Login successful. Session established." });
  } catch (error) {
    console.error("Error verifying ID token:", error);
    res.status(401).send("Unauthorized");
  }
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
