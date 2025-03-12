import React from "react";
import "./header.css";
import logo from "../assets/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid inner-div">
        <a className="navbar-brand" href="#"><img className="logo" src={logo} alt="My Image" /></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Apply for Transfer</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Track Application</a>
            </li>
          </ul>
          <div className="d-flex ms-lg-3">
            <a className="btn login me-2" href="#">Login</a>
            <a className="btn signup" href="#">Sign Up</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
