import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import CardSignup from "./components/CardSignup";
import "./App.css";

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
