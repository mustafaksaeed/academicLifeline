import { Navigate, Outlet } from "react-router-dom";
// import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function ProtectedRoute() {
  // const { currentUser } = useContext(AuthContext);

  const a = 1;

  return a === 1 ? <Outlet /> : <Navigate to="/login" />;
}
