import { useContext } from "react";
import UserNavbar from "./components/UserNavbar";
import WelcomeNavbar from "./components/WelcomeNavbar";
import WelcomePage from "./pages/WelcomePage";
import AuthContext from "./contexts/AuthContext";

function App() {
  const { currentUser } = useContext(AuthContext);
  return <>{currentUser ? <UserNavbar /> : <WelcomeNavbar />}</>;
}

export default App;
