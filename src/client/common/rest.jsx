import { Component } from "react";

class rest extends Component {
  state = {};

  //All rest api codes are located here, techincally back-end related
  //Fetch Graph Data
  async fetchGraphData() {
    const url = "/api/graph/data";
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      console.log("Error fetching data");
      this.setState({ data: null });

      return;
    }
    if (response.status === 200) {
      this.setState({ data: payload });
    } else {
      console.log("Issue with http connection");
    }
  }

  //Fetch Pie Data
  async fetchPieData() {
    const url = "/api/pie/data";
    let response, payload;

    try {
      response = await fetch(url);
      payload = await response.json();
    } catch (err) {
      console.log("Error fetching data");
      this.setState({ data: null });

      return;
    }
    if (response.status === 200) {
      this.setState({ data: payload });
    } else {
      console.log("Issue with http connection");
    }
  }
}

export default rest;
