import { Outlet } from "react-router-dom";

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
          display: "flex",
          maxWidth: "1200px",
          margin: "0 auto",
          marginLeft: "0",
          height: "100vh",
        }}
      >
        <div
          style={{
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
    </>
  );
};

export default Layouts;
