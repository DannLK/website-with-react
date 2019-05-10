import React, { Component } from "react";
import "../../css/homepage.css";

class Navbar extends Component {
  state = {};
  render() {
    return (
      <div>
        <nav className="navbar navbar-light bg-transparent">
          <a className="navbar-left" href="/">
            <img
              className="Logo"
              src={require("../../img/Dlogo.jpg")}
              alt="Logo"
            />
          </a>
          <ul className="nav justify-content-end">
            <li className="nav-item">
              <a className="nav-link" href="/">
                Home
              </a>
            </li>
            <li className="nav-item ">
              <a className="nav-link" href="/about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Team
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
