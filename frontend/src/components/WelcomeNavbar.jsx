import React from "react";
import { Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../img/AcademicLifelinelogo.png";

const WelcomeNavbar = () => {
  return (
    <>
      <Navbar>
        <Container className="d-flex align-items-center me-4">
          <Navbar.Brand className="d-flex gap-2 ">
            <img
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
              alt="Academic Lifeline logo"
            />
          </Navbar.Brand>
        </Container>
        <div className="d-flex justify-content-between gap-3 me-4">
          <Link to="/signup" className="nav-link">
            Sign up
          </Link>
          <Link to="/login" className="nav-link">
            Login
          </Link>
        </div>
      </Navbar>
    </>
  );
};

export default WelcomeNavbar;
