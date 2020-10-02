import React from "react";
import DropDownMenu from "./common/dropdown.jsx";

const OverView = ({ Signups, Week, Investment, AvgInvestment, Exits }) => {
  return (
    <nav className="navbar navbar-expand-lg overview">
      <ul className="navbar-nav">
        <li className="nav-item active">
          <DropDownMenu
            style="overview-button"
            DropdownName="Overview"
            Action="Sort by date"
            Action2="Sort by newest"
            Action3="Sort by oldest"
          ></DropDownMenu>
        </li>
        <li className="overview-align">
          <div className="overview-toptext">Total signups</div>
          <div className="green overview-data">{Signups}</div>
        </li>

        <li className="overview-align">
          <div className="overview-toptext">Last week</div>
          <div className="pink overview-data">{Week}</div>
        </li>

        <li className="overview-align">
          <div className="overview-toptext">Total investments</div>
          <div className="cyan overview-data">{Investment}</div>
        </li>

        <li className="overview-align">
          <div className="overview-toptext">Average investment</div>
          <div className="green overview-data">
            <span className="green unbold">NOK</span> {AvgInvestment}
          </div>
        </li>

        <li className="overview-align">
          <div className="overview-toptext">Total exits</div>
          <div className="pink overview-data">{Exits}</div>
        </li>
      </ul>
    </nav>
  );
};

export default OverView;
