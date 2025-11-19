import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar";
import Dashboard from "../pages/Dashboard";
import Courses from "../pages/Courses";
import Assignments from "../pages/Assignments";
import Calendar from "../pages/Calendar";
import Sidebar from "../components/Sidebar";

const Layouts = () => {
  return (
    <>
      <div
        style={{
          maxWidth: "1200px",
        }}
      >
        <UserNavbar />
        <div
          style={{
            display: "flex",
            maxWidth: "1200px",
            margin: "0 auto",
            marginLeft: "0",
          }}
        >
          <div
            style={{
              marginTop: "1.5rem",
              marginLeft: "-0.6rem",
              height: "100vh",
            }}
          >
            <Sidebar />
          </div>
          <div style={{ flexGrow: "1", padding: "20px" }}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
};

export default Layouts;
