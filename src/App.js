import React, { useEffect, useState } from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Onboarding from "./components/Onboarding";

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Onboarding} />
      </Switch>
    </Router>
  );
};

export default App;
