import React, { Component } from "react";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import * as contentful from "contentful";
import Project from "../../Project";

const SPACE_ID = "vx5n1m0jo3ss";
const ACCESS_TOKEN = "TxWcqi9opPWfEPTanh8AReA9RMDHzjB0TfVbBCaXqgY";

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class ProjectList extends Component {
  state = {
    projects: [],
    searchString: ""
  };

  constructor() {
    super();
    this.getProjects();
  }

  getProjects = () => {
    client
      .getEntries({
        content_type: "project",
        query: this.state.searchString
      })
      .then(response => {
        this.setState({ projects: response.items });
      })
      .catch(error => {
        console.log("Eror occured while fetching data");
        console.log(error);
      });
  };

  onSearchInputChange = event => {
    if (event.target.value) {
      this.setState({ searchString: event.target.value });
    } else {
      this.setState({ searchString: "" });
    }
    this.getProjects();
  };

  render() {
    return (
      <div>
        {this.state.projects ? (
          <div>
            <TextField
              style={{ padding: 24 }}
              id="searchInput"
              placeholder="Search for Projects"
              margin="normal"
              onChange={this.onSearchInputChange}
            />
            <Grid container spacing={24} style={{ padding: 24 }}>
              {this.state.projects.map(currentProject => (
                <Grid item xs={12} sm={6} lg={4} xl={3}>
                  <Project project={currentProject} />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : (
          "No Projects found"
        )}
      </div>
    );
  }
}

export default ProjectList;
