import { initializeApp } from "firebase/app";
import "dotenv/config";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_Apikey,
  authDomain: import.meta.env.VITE_authDomain.projectId,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

const auth = getAuth(firebaseConfig);

export default auth;
