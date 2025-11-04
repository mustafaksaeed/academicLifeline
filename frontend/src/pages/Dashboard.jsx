import React from "react";
import Sidebar from "../components/Sidebar";
import DeadlineSection from "../components/DeadlineSection";
import RecentActivitySection from "../components/RecentActivitySection";
const Dashboard = () => {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "auto auto auto" }}>
      <div style={{ marginTop: "1.5rem" }}>
        <Sidebar />
      </div>
      <div>
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
