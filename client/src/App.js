import React from "react";
import CreateEvent from "./components/CreateEvent"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import CardSignup from "./components/CardSignup";
import 'bootstrap/dist/css/bootstrap.min.css';
import Landing from "./pages/landing";

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
          <Route exact path="/landing">
            <Landing />
          </Route>
        </Switch>
      </div>
    </Router>

  );
}

export default App;
