import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const WelcomeNavbar = () => {
  return (
    <div>
      <nav class="navbar bg-body-tertiary">
        <div class="container-fluid">
          <a class="navbar-brand" href="#">
            <img
              src="/docs/5.3/assets/brand/bootstrap-logo.svg"
              alt="Logo"
              width="30"
              height="24"
              class="d-inline-block align-text-top"
            />
          </a>
          <div>
            <Link to="/signup"> Sign up</Link>
          </div>
          <div>
            <Link to="/login"> Login</Link>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default WelcomeNavbar;
