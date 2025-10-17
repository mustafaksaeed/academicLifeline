// import { useContext } from "react";
import UserNavbar from "./components/UserNavbar";
import WelcomeNavbar from "./components/WelcomeNavbar";
import WelcomePage from "./pages/WelcomePage";
// import AuthContext from "./contexts/AuthContext";

import React from "react";
import ProtectedRoute from "./contexts/ProtectedRoute";

const App = () => {
  return (
    <div>
      <WelcomeNavbar />
      <ProtectedRoute />
    </div>
  );
};

export default App;
