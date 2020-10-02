import React from "react";
import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div className="notfound">
      <h3>Not Found, this is just to display a different render</h3>
      <Link to="/">Go Back</Link>
    </div>
  );
};

export default NotFound;
