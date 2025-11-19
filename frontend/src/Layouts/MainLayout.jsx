import React from "react";
import Sidebar from "../components/Sidebar";
import Courses from "../pages/Courses";
import Assignments from "../pages/Assignments";
import Calendar from "../pages/Calendar";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <div
      style={{
        display: "flex",
        maxWidth: "1200px",
        margin: "0 auto",
        marginLeft: "0",
      }}
    >
      <div style={{ marginTop: "1.5rem", marginLeft: "-0.6rem" }}>
        <Sidebar />
      </div>
      <div style={{ flexGrow: "1", padding: "20px" }}>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
