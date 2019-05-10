import React, { Component } from "react";
import Home from "./Home";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import About from "./About";

class App extends Component {
  state = {};
  render() {
    return (
      <Router>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
      </Router>
    );
  }
}

export default App;
