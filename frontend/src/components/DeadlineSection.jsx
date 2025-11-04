import React from "react";
import DeadlineCard from "../components/DeadlineCard";

const DeadlineSection = () => {
  return (
    <div style={{ padding: "2rem", backgroundColor: "red" }}>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <DeadlineCard value={16} title={"Total assignments"} />
        <DeadlineCard value={16} title={"Due this week"} />
      </div>
    </div>
  );
};

export default DeadlineSection;
