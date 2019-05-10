import React, { Component } from "react";
import "./Carousel.css";

class Carousel extends Component {
  state = {};
  render() {
    return (
      <div id="carouselFade" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={require("../../img/hype.jpg")}
              className="d-block w-100"
              alt="image1"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../../img/hype2.jpg")}
              className="d-block w-100"
              alt="image2"
            />
          </div>
          <div className="carousel-item">
            <img
              src={require("../../img/hype.jpg")}
              className="d-block w-100"
              alt="image3"
            />
          </div>
        </div>
        <a
          className="carousel-control-prev"
          href="#carouselExampleFade"
          role="button"
          data-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleFade"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}

export default Carousel;
