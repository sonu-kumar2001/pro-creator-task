import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Home from "./components/Home";
import LocalStorage from "./components/LocalStorage";
import Notification from "./components/Notification";
import Profile from "./components/Profile";
import StorageManagement from "./components/StorageManagement";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Onboarding} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/localstorage" component={LocalStorage} />
        <Route exact path="/notification" component={Notification} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/management" component={StorageManagement} />
      </Switch>
    </Router>
  );
};

export default App;
