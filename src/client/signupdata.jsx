import React from "react";
import Rest from "./common/rest.jsx";
import RepoPie from "./common/repopie.jsx";
import SortBar from "./common/sortbar.jsx";
import Meetings from "./common/meetings.jsx";

class SignupData extends Rest {
  constructor(props) {
    super(props);
    this.state = { totalvalue: 648, sortnum: 102, data: [], error: null };
  }

  componentDidMount() {
    this.fetchPieData();
  }

  render() {
    const { sortnum, data, totalvalue } = this.state;
    return (
      <div>
        <RepoPie pieData={data} totalValue={totalvalue}></RepoPie>
        <SortBar sortnum={sortnum}></SortBar>
        <Meetings></Meetings>
      </div>
    );
  }
}

export default SignupData;
