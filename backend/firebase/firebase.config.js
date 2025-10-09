import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import "dotenv/config";

const app = initializeApp({
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
});

export const auth = getAuth(app);
export default app;

/*
i can also try 

eg. apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,



*/
