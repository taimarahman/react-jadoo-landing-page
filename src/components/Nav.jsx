import React from "react";
import logo from "../assets/images/Logo.svg";

const Nav = () => {
  return (
    <header>
      <div className="container">
        <div className="navbar">
          <div className="navbar-brand">
            <a href="#">
              <img src={logo} alt="" />
            </a>
          </div>

          <nav className="nav-wrapper">
            <ul role="list" className="nav">
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Desitnations
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Hotels
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Flights
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link">
                  Bookings
                </a>
              </li>
            </ul>
            <a href="#" className="nav-link">
              Login
            </a>
            <a href="#" role={"button"} className="btn signup-btn">
              Signup
            </a>
            <div className="dropdown">
              <label>EN</label>
              <ul role="list" className="dropdown-content">
                <li>
                  <a>EN</a>
                </li>
                <li>
                  <a>BN</a>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Nav;
