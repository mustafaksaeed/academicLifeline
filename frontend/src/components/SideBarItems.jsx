import React from "react";
import Button from "@mui/material/Button";

const SideBarItems = () => {
  const sidebarItems = ["Dashboard", "Assignments", "Courses", "Calendar"];
  return (
    <div>
      <h3>Deadline Tracker</h3>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "11vh",
          gap: "0.5rem",
          marginTop: "2rem",
        }}
      >
        {sidebarItems.map((info) => {
          return <Button variant="contained">{info}</Button>;
        })}
      </div>
    </div>
  );
};

export default SideBarItems;
