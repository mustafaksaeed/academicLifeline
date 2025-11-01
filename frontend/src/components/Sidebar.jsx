import React from "react";

import SideFooter from "./SideFooter";
import SideBarItems from "./SideBarItems";

const Sidebar = () => {
  return (
    <div style={{ marginRight: "3vh" }}>
      <h3>DeadLine Tracker</h3>
      <div
        style={{
          height: "90vh",
          float: "left",
          width: "30%",
          clear: "both",
          marginLeft: "2vh",
          flexDirection: "column",
        }}
      >
        <div>
          <SideBarItems />
          <SideFooter />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
