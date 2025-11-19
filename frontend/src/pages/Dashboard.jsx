import React from "react";
import Sidebar from "../components/Sidebar";
import DeadlineSection from "../components/DeadlineSection";
import RecentActivitySection from "../components/RecentActivitySection";

const Dashboard = () => {
  return (
    <div style={{ flexGrow: "1", padding: "20px" }}>
      <h3>DashboardContent</h3>
      <DeadlineSection />
      <div>
        <RecentActivitySection />
      </div>
    </div>
  );
};

export default Dashboard;
