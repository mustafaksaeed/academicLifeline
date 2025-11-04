import React from "react";

import { Link } from "react-router-dom";
// import logo from "../img/AcademicLifelinelogo.png";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
// import ButtonLink from "./ButtonLink";

const WelcomeNavbar = () => {
  return (
    <div>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          AcademicLifeline
        </Typography>

        <Link to="/signup">
          <Button color="inherit">SignUp</Button>
        </Link>
        <Link to="/login">
          <Button color="inherit">Login</Button>
        </Link>
      </Toolbar>
    </div>
  );
};

export default WelcomeNavbar;
