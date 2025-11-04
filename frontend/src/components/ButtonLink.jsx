import React from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const ButtonLink = (page, title) => {
  return (
    <div>
      <Link to={page}>
        <Button color="inherit">{title}</Button>
      </Link>
    </div>
  );
};

export default ButtonLink;
