import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Dashboard from "../pages/Dashboard";
import MainLayout from "./MainLayout";

const Layouts = () => {
  return (
    <>
      <UserNavbar />
      <Outlet />
    </>
  );
};

export default Layouts;
