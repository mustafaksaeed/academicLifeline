import React from "react";
import Sidebar from "../components/Sidebar";
const Dashboard = () => {
  return (
    <div>
      <Sidebar />
      <div
        style={{
          display: "flex",
          height: "100vh",
          float: "left",
          width: "70%",
        }}
      >
        <div style={{ display: "flex", padding: "3vh" }}>
          <h3>Dashboard</h3>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
