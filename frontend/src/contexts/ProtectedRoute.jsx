import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "./AuthContext";

export default function ProtectedRoute() {
  const { currentUser, loading } = useContext(AuthContext);

  if (loading) return <p>Loading...</p>;
  return currentUser ? <Outlet /> : <Navigate to="/login" />;
}
