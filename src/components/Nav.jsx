import React from "react";
import logo from "../assets/images/Logo.svg";

const Nav = () => {
  return (
    <header>
      <div className="navbar">
        <a href="#">
          <img src={logo} alt="" />
        </a>
        <div>
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="text-xl">
            Login
          </a>
          <a href="#" role={"button"} className="btn signup-btn">
            Sgnup
          </a>
        </div>
      </div>
    </header>
  );
};

export default Nav;
