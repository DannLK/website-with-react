import React, { Component } from "react";
import "../../css/homepage.css";
import { Link } from "react-router-dom";

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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link to="/about" className="nav-link">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Team
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
