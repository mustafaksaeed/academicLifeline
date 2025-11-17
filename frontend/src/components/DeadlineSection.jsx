import React from "react";
import DeadlineCard from "../components/DeadlineCard";

const DeadlineSection = () => {
  return (
    <div
      style={{
        padding: "2rem",
        borderRadius: "10px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <DeadlineCard value={16} title={"Total assignments"} />
        <DeadlineCard value={16} title={"Due this week"} />
      </div>
    </div>
  );
};

export default DeadlineSection;
