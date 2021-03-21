import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import CardSignup from "./components/CardSignup";
import "./App.css";
import CreateEvent from "./components/CreateEvent";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
            <CardLogin />
          </Route>
          <Route exact path="/signup">
            <CardSignup />
          </Route>
          <Route exact path="/event">
            <CreateEvent />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
