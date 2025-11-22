import React from "react";
import TextField from "@mui/material/TextField";
import AddBoxIcon from "@mui/icons-material/AddBox";

const AddCourseButton = ({ handleClick }) => {
  return (
    <div>
      <h3>Courses</h3>
      <TextField id="filled-search" label="Add Course" type="search" />
      <AddBoxIcon
        sx={{
          color: "success.main",
          fontSize: 48,
          marginLeft: "0.2rem",
        }}
        onClick={handleClick}
      />
    </div>
  );
};

export default AddCourseButton;
