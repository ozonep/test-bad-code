import React from "react";
import Rest from "./common/rest.jsx";
import RepoLine from "./common/repoline.jsx";

class LineGraph extends Rest {
  constructor(props) {
    super(props);
    this.state = { data: [], error: null };
  }

  componentDidMount() {
    this.fetchGraphData();
  }

  selectData = (id) => {
    return this.state.data.filter((graph) => graph.id === id);
  };

  render() {
    const IndividualData = this.selectData(0);
    const CompanyData = this.selectData(1);
    return (
      <div>
        <RepoLine
          graphData={IndividualData}
          baseColor="#1bfbe4"
          gradient="#3e57c2"
          title="Individuals"
          graphKey="gradientA"
        ></RepoLine>
        <RepoLine
          graphData={CompanyData}
          baseColor="#ff56ee"
          gradient="#3e57c2"
          title="Companies"
          graphKey="gradientB"
        ></RepoLine>
      </div>
    );
  }
}

export default LineGraph;
