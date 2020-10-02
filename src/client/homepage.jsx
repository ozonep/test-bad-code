import React, { Component } from "react";
import OverView from "./overview.jsx";
import SideButtons from "./sidebuttons.jsx";
import TopMenu from "./topmenu.jsx";
import LineGraphs from "./linegraph.jsx";
import SignupData from "./signupdata.jsx";

class HomePage extends Component {
  state = {
    Signups: 648,
    Week: 12,
    Investment: 102,
    AvgInvestment: "345,565",
    Exits: 23,
  };

  render() {
    const { Signups, Week, Investment, AvgInvestment, Exits } = this.state;
    return (
      <div>
        <OverView
          Signups={Signups}
          Week={Week}
          Investment={Investment}
          AvgInvestment={AvgInvestment}
          Exits={Exits}
        ></OverView>
        <TopMenu></TopMenu>
        <div className="row">
          <SideButtons></SideButtons>
          <LineGraphs></LineGraphs>
          <SignupData></SignupData>
        </div>
      </div>
    );
  }
}

export default HomePage;
