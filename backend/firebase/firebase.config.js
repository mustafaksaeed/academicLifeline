import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "dotenv/config";

const app = initializeApp({
  apiKey: process.env.API_KEY,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
});
//process.env.API_KEY
const auth = getAuth(app);

export default auth;

/*
i can also try 

eg. apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,

process.env.REACT_APP_FIREBASE_API_KEY

*/
