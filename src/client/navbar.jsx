import React from "react";
import { Link, NavLink } from "react-router-dom";
import Icon from "../assets/images/logo.png";
import Avatar from "../assets/images/avatar.png";

//note that the time and date values be passed as props if desired
const NavBar = ({ profileName, date, time }) => {
  return (
    <nav className="navbar navbar-expand-lg">
      <Link className="navbar-brand" to="/">
        <img className="logo" src={Icon} alt="Logo" />
      </Link>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <NavLink className="nav-link nav-color" to="/home">
              Account
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-color" to="/charts">
              Charts
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link nav-color" to="/help">
              Help
            </NavLink>
          </li>
        </ul>
        <div className="nav-container">
          <img className="nav-icon" src={Avatar} alt="Logo" />
          <div className="nav-greenbar">
            <ul className="navbar-nav">
              <li className="nav-item active">
                <NavLink className="profilename nav-link" to="/profile">
                  {profileName}
                </NavLink>
              </li>
              <li className="nav-item nav-data">
                <div className="date">{date}</div>
                <div className="time">{time}</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
