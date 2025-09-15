import firebase from "firebase/app";
import "firebase/auth"; //auth module

const app = firebase.initializeApp({
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
});

export const auth = app.auth();
export default app;

/*
i can also try 

eg. apiKey: `${process.env.REACT_APP_FIREBASE_API_KEY}`,



*/
