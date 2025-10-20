import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function ProtectedRoute() {
  const { currentUser } = useContext(AuthContext);

  //check if user exists and check if session exists

  const authCheck = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/check-auth");
      const data = response.json();
      if (data.userId && currentUser) {
        return true;
      }
    } catch {
      return false;
    }
  };
  return authCheck() ? <Outlet /> : <Navigate to="/login" />;
}
