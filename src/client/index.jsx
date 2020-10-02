import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import NotFound from "./common/notfound.jsx";
import HomePage from "./homepage.jsx";
import Navbar from "./navbar.jsx";

import "bootstrap/dist/css/bootstrap.css";
import "../../public/style.css";

//we could fetch the name from the state here and append it depending on if theyre logged inn!
class App extends Component {
  state = {
    name: "Elsa Andersen",
    date: "17-02-2020",
    time: "2.45 PM",
  };

  render() {
    const { name, date, time } = this.state;
    return (
      <div>
        <div className="container">
          <Navbar profileName={name} date={date} time={time} />
          <div className="nav-greenline"></div>
          <Switch>
            <Route path="/home" component={HomePage} />
            <Route path="/not-found" component={NotFound} />
            <Redirect from="/" exact to="/home" />
            <Redirect to="/not-found" />
          </Switch>
        </div>
      </div>
    );
  }
}

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById("root")
);
