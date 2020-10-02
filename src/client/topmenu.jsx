import React from "react";
import { Link } from "react-router-dom";
const TopMenu = () => {
  return (
    <div className="topmenu">
      <Link className="topmenu-selected " to="/">
        Signups
      </Link>
      <Link className="topmenu-divider" to="/">
        Investments
      </Link>
      <Link className="topmenu-divider" to="/">
        Revenue
      </Link>
      <Link className="topmenu-divider" to="/">
        Exits
      </Link>
      <Link className="topmenu-divider" to="/">
        Trades
      </Link>
      <div className="grey-line"></div>
    </div>
  );
};

export default TopMenu;
