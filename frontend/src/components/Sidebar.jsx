import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function Sidebar() {
  const sidbarItems = ["Assignments", "Courses", "Calendar", "Progress"];

  return (
    <>
      <div
        style={{
          display: "flex",
          height: "100vh",
          float: "left",
          width: "30%",
        }}
      >
        <div style={{ display: "flex", padding: "3vh" }}>
          <h3>DeadLine Tracker</h3>
          <div></div>
        </div>
      </div>
    </>
  );
}

export default Sidebar;
