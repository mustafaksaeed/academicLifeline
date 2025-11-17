import React from "react";
import Sidebar from "../components/Sidebar";
import DeadlineSection from "../components/DeadlineSection";
import RecentActivitySection from "../components/RecentActivitySection";
const Dashboard = () => {
  return (
    <div style={{ display: "flex", maxWidth: "1200px", margin: "0 auto" }}>
      <div style={{ marginTop: "1.5rem" }}>
        <Sidebar />
      </div>
      <div style={{ flexGrow: "1", padding: "20px" }}>
        <h3>DashboardContent</h3>
        <DeadlineSection />
        <div>
          <RecentActivitySection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
