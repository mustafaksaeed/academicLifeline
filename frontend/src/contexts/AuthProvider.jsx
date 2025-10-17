import React, { useState, useEffect } from "react";
// import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebaseClient/firebaseClient.config";
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  //change to react from hook maybe?

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        user.getIdToken().then((token) => {
          setCurrentUser({ ...user, token });
        });
      } else {
        setCurrentUser(null);
      }
    });

    return unsubscribe;
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};
