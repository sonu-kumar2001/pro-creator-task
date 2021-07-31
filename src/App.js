import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Onboarding from "./components/Onboarding";
import Home from "./components/Home";
const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Onboarding} />
        <Route exact path="/home" component={Home} />
      </Switch>
    </Router>
  );
};

export default App;
