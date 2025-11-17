import React, { useState } from "react";
import AuthContext from "./AuthContext";
export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const value = {
    setIsLoggedIn,
    isLoggedIn,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
