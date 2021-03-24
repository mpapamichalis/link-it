import React from "react";
import CreateEvent from "./components/CreateEvent"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CardLogin from "./components/CardLogin";
import CardSignup from "./components/CardSignup";
import Landing from "./pages/landing";
import EventList from "./pages/eventList";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'semantic-ui-css/semantic.min.css'
import { StoreProvider } from "./utils/GlobalState";

function App() {

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path="/login">
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
            <Route exact path="/eventList">
             <StoreProvider>
             <EventList /> 
            </StoreProvider>
            </Route>
        </Switch>
      </div>
    </Router >
  );
}

export default App;
