import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Dashboard from "../pages/Dashboard";

const Layouts = () => {
  return (
    <>
      <UserNavbar />
      <Dashboard />
    </>
  );
};

export default Layouts;
