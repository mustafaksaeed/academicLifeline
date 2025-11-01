import React, { useState, useEffect } from "react";
// import { auth } from "../firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import AuthContext from "./AuthContext";
import auth from "../firebaseClient/firebaseClient.config";
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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

  const value = {
    isLoggedIn,
    currentUser,
    setCurrentUser,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

//let firebase do session management
