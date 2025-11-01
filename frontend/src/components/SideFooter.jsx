import React from "react";

const SideFooter = () => {
  const sideFooterItems = [
    "Help & Support",
    "Privacy Policy",
    "Terms of Services",
    "Contact Us",
  ];
  return (
    <div
      style={{
        padding: "6px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div>
        {sideFooterItems.map((data) => {
          return <p>{data}</p>;
        })}
      </div>
    </div>
  );
};

export default SideFooter;
