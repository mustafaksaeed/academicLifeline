// import { useContext } from "react";
import UserNavbar from "./components/UserNavbar";
import WelcomeNavbar from "./components/WelcomeNavbar";
import WelcomePage from "./pages/WelcomePage";
import AuthContext from "./contexts/AuthContext";

import React from "react";
import Dashboard from "./pages/Dashboard";

const App = () => {
  return (
    <div>
      <WelcomeNavbar />
      <Dashboard />
    </div>
  );
};

export default App;
