import React, { Component } from "react";
import Projects from "./components/Projects/Projects";
import Navbar from "./components/Header/Navbar";

class About extends Component {
  state = {};
  render() {
    return (
      <div>
        <Navbar />
        <Projects />
      </div>
    );
  }
}

export default About;
