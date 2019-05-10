import React, { Component } from "react";
import Navbar from "./components/Header/Navbar";
import Carousel from "./components/Carousel/Carousel";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <Navbar />
        <Carousel />
      </React.Fragment>
    );
  }
}

export default HomePage;
