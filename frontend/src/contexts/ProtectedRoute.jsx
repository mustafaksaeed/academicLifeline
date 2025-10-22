import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function ProtectedRoute() {
  const { currentUser } = useContext(AuthContext);

  const authCheck = async () => {
    try {
      const response = await fetch("http://localhost:8000/courses");
      const data = response.json();
      if (data.userSession && currentUser) {
        return true;
      }
    } catch {
      return false;
    }
  };

  return authCheck() ? <Outlet /> : <Navigate to="/login" />;
}
