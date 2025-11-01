import Button from "react-bootstrap/Button";

function SideBarItems() {
  const sidbarItems = ["Assignments", "Courses", "Calendar", "Progress"];

  return (
    <>
      <div style={{ padding: "3vh", display: "flex" }}>
        <div
          style={{
            padding: "6px",
            display: "flex",
            flexDirection: "column",
            gap: "2.5vh",
          }}
        >
          {sidbarItems.map((data) => {
            return <Button>{data}</Button>;
          })}
        </div>
      </div>
    </>
  );
}

export default SideBarItems;
