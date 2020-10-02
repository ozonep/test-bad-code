import React from "react";
import DropDownMenu from "./dropdown.jsx";
const SortBar = ({ sortnum }) => {
  return (
    <nav className="navbar navbar-expand-lg sortbar dropdown-colors">
      <div className="collapse navbar-collapse" id="navbarNav">
        <div className="green-box"></div>
        <span>By Gender</span>

        <DropDownMenu
          style="dropdown-colors"
          DropdownName="Female"
          Action="Female"
          Action2="Male"
          Action3="Both"
        ></DropDownMenu>

        <DropDownMenu
          style="dropdown-colors"
          DropdownName="Individuals"
          Action="Individuals"
          Action2="Companies"
          Action3="Both"
        ></DropDownMenu>
        <span className="green">{sortnum}</span>
      </div>
    </nav>
  );
};

export default SortBar;
