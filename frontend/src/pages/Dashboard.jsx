import React from "react";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div
        style={{
          display: "flex",
          height: "90vh",
          float: "left",
          width: "70%",
          clear: "both",
        }}
      >
        <h3>Dashboard</h3>
      </div>
    </div>
  );
};

export default Dashboard;
