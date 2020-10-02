import React from "react";
import { Link } from "react-router-dom";
import FundIcon from "../assets/icons/funds.svg";
import GroupIcon from "../assets/icons/Group 174.svg";
import HistoryIcon from "../assets/icons/history.svg";
import LockedIcon from "../assets/icons/locked-padlock (1).svg";
import PathIcon from "../assets/icons/Path 188.svg";
import VertIcon from "../assets/icons/verification-window-button.svg";
//note: the link doesn't link to a proper route, its just for demonstration purposes

const SideButtons = () => {
  return (
    <div className="iconspace navbar-brand">
      <div className="icondivider iconselected">
        <Link to="/notfound">
          <GroupIcon />
        </Link>
      </div>
      <div className="icondivider">
        <Link to="/notfound">
          <FundIcon />
        </Link>
      </div>
      <div className="icondivider">
        <Link to="/notfound">
          <PathIcon />
        </Link>
      </div>
      <div className="icondivider">
        <Link to="/notfound">
          <HistoryIcon />
        </Link>
      </div>
      <div className="icondivider">
        <Link to="/notfound">
          <VertIcon />
        </Link>
      </div>

      <div className="icondivider lock">
        <Link className="navbar-brand" to="/notfound">
          <LockedIcon />
        </Link>
      </div>
    </div>
  );
};

export default SideButtons;
